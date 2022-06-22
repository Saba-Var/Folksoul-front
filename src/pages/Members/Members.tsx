import { SectionWrapper } from 'components'
import { fetchMembersData } from 'helper/index'
import { useEffect, useState } from 'react'
import { MemberData } from 'types'

function Members() {
  const [membersData, setMembersData] = useState<MemberData>()

  useEffect(() => {
    fetchMembersData(setMembersData)
  }, [])
  console.log(membersData)

  return (
    <SectionWrapper title='ჯგუფის წევრები'>
      <div>
        <h1>hello</h1>
      </div>
    </SectionWrapper>
  )
}

export default Members
