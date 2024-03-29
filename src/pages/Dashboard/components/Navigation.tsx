import { NavigationProps, Section } from 'pages/Dashboard/components'
import React from 'react'
import {
  YoutubeIcon,
  LogOutIcon,
  MemberIcon,
  HomeIcon,
  NoteIcon,
} from 'components'

const Navigation: React.FC<NavigationProps> = (props) => {
  const { section, setSection } = props

  const sectionUtils = {
    setSection,
    section,
  }

  return (
    <div className='py-18.25 fixed top-2/4 -translate-y-1/2 border-l-0 rounded-r-3xl rounded-br-3xl h-[502px] w-[311px] bg-darkGray border-[1px] border-gray-500'>
      <div className='flex flex-col gap-7  '>
        <Section
          sectionUtils={sectionUtils}
          icon={<HomeIcon />}
          title='მთავარი'
          link='Main'
        />

        <Section
          sectionUtils={sectionUtils}
          title='ბენდის წევრები'
          icon={<MemberIcon />}
          link='Members'
        />

        <Section
          sectionUtils={sectionUtils}
          title='სოციალური ბმულები'
          icon={<YoutubeIcon />}
          link='Social-Links'
        />

        <Section
          sectionUtils={sectionUtils}
          title='ბენდის შესახებ'
          icon={<NoteIcon />}
          link='About'
        />

        <Section
          sectionUtils={sectionUtils}
          icon={<LogOutIcon />}
          title='გადი გარეთ'
          link='Logout'
        />
      </div>
    </div>
  )
}

export default Navigation
