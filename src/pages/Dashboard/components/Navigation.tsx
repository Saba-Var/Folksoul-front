import {
  HomeIcon,
  LogOutIcon,
  MemberIcon,
  NoteIcon,
  YoutubeIcon,
} from 'components/svgs'
import { Section } from 'pages/Dashboard/components/index'

function Navigation() {
  return (
    <div className='py-18.25 fixed top-2/4 -translate-y-1/2 border-l-0 rounded-r-3xl rounded-br-3xl h-[502px] w-[311px] bg-darkGray border-[1px] border-gray-500'>
      <div className='flex flex-col gap-7  '>
        <Section title='მთავარი' icon={<HomeIcon />} link='/' />
        <Section title='ჯგუფის წევრები' icon={<MemberIcon />} link='Members' />
        <Section
          title='სოციალური ბმულები'
          icon={<YoutubeIcon />}
          link='Social-Links'
        />
        <Section title='ბენდის შესახებ' icon={<NoteIcon />} link='About' />
        <Section title='გადი გარეთ' icon={<LogOutIcon />} link='Logout' />
      </div>
    </div>
  )
}

export default Navigation
