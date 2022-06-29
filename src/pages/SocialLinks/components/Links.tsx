import { LinksData } from 'pages/SocialLinks/components/types'
import { LinkCard } from 'pages/SocialLinks/components'

const Links: React.FC<LinksData> = (props) => {
  return (
    <div className='flex flex-col items-center gap-14 pt-[3%]'>
      <LinkCard links={props.links} setLinks={props.setLinks} />
    </div>
  )
}

export default Links
