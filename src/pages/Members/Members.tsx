import { SectionWrapper } from 'components'
import { fetchMembersData } from 'helper/index'
import { useEffect, useState } from 'react'
import { Cards, NoMembers } from 'pages/Members/components'
import { LoadingIcon } from 'components/svgs'
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
  let noMember = false
  if (membersData.members)
    noMember = membersData.paginationInfo.totalMembers === 0

  useEffect(() => {
    fetchMembersData(setMembersData, setIsLoading, 1)
  }, [])

  return (
    <SectionWrapper title='ჯგუფის წევრები'>
      <>
        {isLoading && <LoadingIcon />}
        {!isLoading && noMember ? (
          <NoMembers />
        ) : (
          <Cards
            setMembersData={setMembersData}
            setIsLoading={setIsLoading}
            data={membersData!}
          />
        )}
      </>
    </SectionWrapper>
  )
}

export default Members
