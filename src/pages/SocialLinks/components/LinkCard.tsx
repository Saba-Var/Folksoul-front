import { LinksData } from 'pages/SocialLinks/components/types'
import { DeleteLink, Details, ChangeIcon } from 'pages/SocialLinks/components'
import { YellowBtn } from 'components/svgs'

const LinkCard: React.FC<LinksData> = (props) => {
  return (
    <>
      {props.links.map((link) => (
        <div
          key={link._id}
          className='border border-black transition-transform shadow-4.5xl rounded-md bg-charcoal w-[820px] h-16 flex justify-between px-7 items-center'
        >
          <ChangeIcon
            image={link.image}
            id={link._id}
            linkName={link.linkName}
          />
          <Details linkName={link.linkName} url={link.url} />
          <div className='flex justify-between w-24'>
            <YellowBtn />
            <DeleteLink
              id={link._id}
              links={props.links}
              setLinks={props.setLinks}
            />
          </div>
        </div>
      ))}
    </>
  )
}

export default LinkCard
