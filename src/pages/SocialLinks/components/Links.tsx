import { LinksData } from 'pages/SocialLinks/components/types'
import { LinkCard } from 'pages/SocialLinks/components'

const Links: React.FC<LinksData> = (props) => {
  const { setSection, setLinkId, setLinks, links } = props

  return (
    <LinkCard
      setSection={setSection}
      setLinkId={setLinkId}
      setLinks={setLinks}
      links={links}
    />
  )
}

export default Links
