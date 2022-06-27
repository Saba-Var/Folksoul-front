import {
  NoMembers,
  Cards,
  AddMember,
  ChangeMember,
} from 'pages/Members/components'
import { SectionWrapper, GoBackBtn } from 'components'
import { fetchMembersData } from 'helper/index'
import { useEffect, useState } from 'react'
import { MemberData } from '../../types'

const memberModel = {
  members: [
    {
      biography: '',
      color: '',
      instrument: '',
      name: '',
      orbitLength: 0,
      _id: '',
    },
  ],
  paginationInfo: {
    totalMembers: 0,
  },
}

function Members() {
  const [membersData, setMembersData] = useState<MemberData>(memberModel)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [addMember, setAddMember] = useState<boolean>(false)
  const [memberId, setMemberId] = useState<string>('')
  const [section, setSection] = useState('')

  let emptyBand = membersData.paginationInfo.totalMembers === 0

  useEffect(() => {
    fetchMembersData(setMembersData, setIsLoading, 1)
  }, [])

  const fetchUtilities = { setMembersData, setIsLoading }
  const notFound = !isLoading && emptyBand

  let title = ''

  if (section === '') title = 'ჯგუფის წევრები'
  else if (section === 'addMember') title = 'დაამატე ჯგუფის ახალი წევრი'
  else title = 'შეცვალე წევრის ინფორმაცია'

  return (
    <SectionWrapper title={title}>
      <>
        {notFound && section === '' && <NoMembers />}
        {!notFound && !addMember && section === '' && (
          <Cards
            setIsLoading={setIsLoading}
            setSection={setSection}
            fetchUtilities={fetchUtilities}
            data={membersData!}
            setMemberId={setMemberId}
          />
        )}
        {section === '' && (
          <GoBackBtn
            title='ახალი წევრი გვყავს?'
            direction={setSection}
            goTo={'addMember'}
          />
        )}
        {section === 'addMember' && (
          <AddMember
            setSection={setSection}
            memberCount={membersData.paginationInfo.totalMembers}
            setAddMember={setAddMember}
            setMembersData={setMembersData}
            membersData={membersData.members}
            setIsLoading={setIsLoading}
          />
        )}
        {section === 'MemberInputs' && (
          <ChangeMember
            id={memberId}
            setSection={setSection}
            setMembersData={setMembersData}
            setIsLoading={setIsLoading}
          />
        )}
      </>
    </SectionWrapper>
  )
}

export default Members
