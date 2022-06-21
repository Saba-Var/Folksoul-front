import { PurpleBackground } from 'components'
import { Navigation } from 'pages/Dashboard/components/index'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <>
      <PurpleBackground styles='fixed -z-50 w-screen h-screen' />
      <Navigation />
      <Outlet />
    </>
  )
}

export default Dashboard
