import { SectionWrapper, DirectBtn, ErrorAlert } from 'components'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { fetchMembersData } from 'helper/index'
import { useEffect, useState } from 'react'
import { MemberData } from 'types'
import {
  NoMembers,
  Cards,
  AddMember,
  ChangeMember,
} from 'pages/Members/components'

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

const Members = () => {
  const [membersData, setMembersData] = useState<MemberData>(memberModel)

  const [errorAlert, setErrorAlert] = useState(false)
  const [addMember, setAddMember] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [memberId, setMemberId] = useState('')
  const [section, setSection] = useState('')

  const [pageParam] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (!pageParam.get('page')) navigate('/Dashboard/Members?page=1')
  }, [navigate, pageParam])

  let emptyBand = membersData.paginationInfo.totalMembers === 0

  useEffect(() => {
    fetchMembersData(setErrorAlert, setMembersData, setIsLoading, 1)
  }, [])

  const fetchUtilities = { setMembersData, setIsLoading }
  const notFound = !isLoading && emptyBand

  let title = ''

  if (section === '') title = 'ბენდის წევრები'
  else if (section === 'addMember') title = 'დაამატე ჯგუფის ახალი წევრი'
  else title = 'შეცვალე წევრის ინფორმაცია'

  return (
    <SectionWrapper title={title}>
      <>
        {errorAlert && (
          <ErrorAlert
            title='ინფორმაცია ვერ მოიძებნა'
            styles='top-[5%] left-[53%]'
            setShowAlert={setErrorAlert}
          />
        )}

        {notFound && section === '' && <NoMembers />}

        {!notFound && !addMember && section === '' && membersData && (
          <Cards
            fetchUtilities={fetchUtilities}
            setIsLoading={setIsLoading}
            setMemberId={setMemberId}
            setSection={setSection}
            data={membersData!}
          />
        )}

        {section === '' && (
          <DirectBtn
            title='ახალი წევრი გვყავს?'
            direction={setSection}
            goTo='addMember'
          />
        )}

        {section === 'addMember' && (
          <AddMember
            memberCount={membersData.paginationInfo.totalMembers}
            membersData={membersData.members}
            setMembersData={setMembersData}
            setAddMember={setAddMember}
            setIsLoading={setIsLoading}
            setSection={setSection}
          />
        )}

        {section === 'MemberInputs' && (
          <ChangeMember
            setMembersData={setMembersData}
            setIsLoading={setIsLoading}
            setSection={setSection}
            id={memberId}
          />
        )}
      </>
    </SectionWrapper>
  )
}

export default Members
