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

  let emptyBand = false
  if (membersData.members)
    emptyBand = membersData.paginationInfo.totalMembers === 0

  useEffect(() => {
    fetchMembersData(setMembersData, setIsLoading, 1)
  }, [])

  const fetchUtilities = { setMembersData, setIsLoading }
  const notFound = !isLoading && emptyBand

  return (
    <SectionWrapper title='ჯგუფის წევრები'>
      <>
        {isLoading && <LoadingIcon />}
        {notFound && <NoMembers />}
        {!notFound && (
          <Cards fetchUtilities={fetchUtilities} data={membersData!} />
        )}
      </>
    </SectionWrapper>
  )
}

export default Members
