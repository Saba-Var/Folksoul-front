import { useEffect, useState } from 'react'
import { fetchMembersData } from 'helper'

const SolarSystem = () => {
  const [membersData, setMembersData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchMembersData(setMembersData, setIsLoading)
  }, [])

  console.log(isLoading)
  console.log(membersData)

  return <div className='w-[886px] h-[857px]'></div>
}

export default SolarSystem
