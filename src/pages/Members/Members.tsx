import { SectionWrapper } from 'components'
import { fetchMembersData } from 'helper/index'
import { useEffect, useState } from 'react'
import { MemberData } from 'types'
import { Card } from 'pages/Members/components'
import { LoadingIcon } from 'components/svgs'

function Members() {
  const [membersData, setMembersData] = useState<MemberData>([])
  const noMember = membersData.length === 0
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    fetchMembersData(setMembersData, setIsLoading)
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
        {!isLoading && !noMember && <Card data={membersData!} />}
      </>
    </SectionWrapper>
  )
}

export default Members
