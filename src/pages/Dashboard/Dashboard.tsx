import { Navigation } from 'pages/Dashboard/components'
import { PurpleBackground } from 'components'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

const Dashboard = () => {
  const [section, setSection] = useState('Main')

  return (
    <>
      <PurpleBackground styles='fixed -z-50 w-screen h-screen' />
      <Navigation setSection={setSection} section={section} />
      <Outlet />
    </>
  )
}

export default Dashboard
