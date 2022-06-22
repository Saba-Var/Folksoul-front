import { SectionWrapper } from 'components'
import { fetchMembersData } from 'helper/index'
import { useEffect, useState } from 'react'
import { Card } from 'pages/Members/components'
import { LoadingIcon } from 'components/svgs'
import { MemberData } from '../../types'

function Members() {
  const [membersData, setMembersData] = useState<MemberData>({
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
      currentPage: 1,
      hasNextPage: true,
      hasPreviousPage: false,
      lastPage: 1,
      nextPage: 2,
      previousPage: 1,
    },
  })

  let noMember
  if (membersData.members) noMember = membersData.members.length === 0
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    fetchMembersData(setMembersData, setIsLoading, 1)
  }, [])

  return (
    <SectionWrapper title='ჯგუფის წევრები'>
      <>
        {isLoading && <LoadingIcon />}
        {!isLoading && noMember && (
          <h2 className='text-center pt-[20%] text-black tracking-widest text-4xl'>
            ჯგუფს ჯერჯერობით არ ჰყავს წევრები!
          </h2>
        )}
        {!isLoading && !noMember && (
          <Card
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
