import { LinksData } from 'pages/SocialLinks/components/types'
import { LinkCard } from 'pages/SocialLinks/components'

const Links: React.FC<LinksData> = (props) => {
  return (
    <div className='flex flex-col items-center gap-14 pt-[3%] animate-fade-in'>
      <LinkCard
        setSection={props.setSection}
        setLinkId={props.setLinkId}
        setLinks={props.setLinks}
        links={props.links}
      />
    </div>
  )
}

export default Links
