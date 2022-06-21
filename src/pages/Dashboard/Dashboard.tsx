import { PurpleBackground } from 'components'
import { Navigation } from 'pages/Dashboard/components/index'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

function Dashboard() {
  const [section, setSection] = useState<string>('Main')

  return (
    <>
      <PurpleBackground styles='fixed -z-50 w-screen h-screen' />
      <Navigation setSection={setSection} section={section} />
      <Outlet />
    </>
  )
}

export default Dashboard
