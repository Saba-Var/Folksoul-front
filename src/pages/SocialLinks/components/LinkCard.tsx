import { LinksData } from 'pages/SocialLinks/components/types'
import { YellowBtn, RedBtn, CameraBtn } from 'components/svgs'

const LinkCard: React.FC<LinksData> = (props) => {
  return (
    <>
      {props.links.map((link) => (
        <div
          key={link._id}
          className='border border-black shadow-4.5xl rounded-md bg-charcoal w-[820px] h-16 flex justify-between px-7 items-center'
        >
          <div className='w-11 relative h-9'>
            {link.image && (
              <img
                className='w-11 h-9'
                src={`http://localhost:5000/${link.image}`}
                alt='social link icon'
              />
            )}
            <CameraBtn
              styles={`top-[7px] left-[25%] w-6 h-6 ${
                link.image && '!top-[23px] !left-[30px]'
              }`}
            />
          </div>
          <p className='font-BPG-Nino-Mtavruli text-contentWhite tracking-widest text-lg'>
            {link.linkName}
          </p>
          <a
            className='text-mediumBlue text-sm underline'
            target='_blank'
            href={link.url}
            rel='noreferrer'
          >
            {link.url}
          </a>
          <div className='flex justify-between w-24'>
            <YellowBtn />
            <RedBtn />
          </div>
        </div>
      ))}
    </>
  )
}

export default LinkCard
