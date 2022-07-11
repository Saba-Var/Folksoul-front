import { LinksData } from 'pages/SocialLinks/components/types'
import { LinkCard } from 'pages/SocialLinks/components'

const Links: React.FC<LinksData> = (props) => {
  const { setSection, setLinkId, setLinks, links } = props

  return (
    <div className='flex flex-col items-center gap-14 pt-[3%] animate-fade-in'>
      <LinkCard
        setSection={setSection}
        setLinkId={setLinkId}
        setLinks={setLinks}
        links={links}
      />
    </div>
  )
}

export default Links
