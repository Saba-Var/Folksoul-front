import { SectionWrapper, GoBackBtn } from 'components'
import { fetchMembersData } from 'helper/index'
import { useEffect, useState } from 'react'
import { NoMembers, Cards, AddMember } from 'pages/Members/components'

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
  let emptyBand = membersData.paginationInfo.totalMembers === 0

  useEffect(() => {
    fetchMembersData(setMembersData, setIsLoading, 1)
  }, [])

  const fetchUtilities = { setMembersData, setIsLoading }
  const notFound = !isLoading && emptyBand

  return (
    <SectionWrapper
      title={`${addMember ? 'დაამატე ჯგუფის ახალი წევრი' : 'ჯგუფის წევრები'}`}
    >
      <>
        {notFound && !addMember && <NoMembers />}
        {!notFound && !addMember && (
          <Cards fetchUtilities={fetchUtilities} data={membersData!} />
        )}
        {!addMember && (
          <GoBackBtn
            title='ახალი წევრი გვყავს?'
            direction={setAddMember}
            goTo={true}
          />
        )}
        {addMember && <AddMember setAddMember={setAddMember} />}
      </>
    </SectionWrapper>
  )
}

export default Members
