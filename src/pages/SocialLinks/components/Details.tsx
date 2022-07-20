import { DetailsProps } from 'pages/SocialLinks/components'
import { formatLongText } from 'helpers'

const Details: React.FC<DetailsProps> = (props) => {
  const { linkName, url } = props

  let socialLinkName = formatLongText(linkName, 15)

  let socialLinkUrl = formatLongText(url, 34)

  return (
    <div className='flex gap-20 w-2/3'>
      <div className='w-32 text-center'>
        <p
          data-cy={socialLinkName}
          className='font-BPG-Nino-Mtavruli text-contentWhite tracking-widest text-lg'
        >
          {socialLinkName}
        </p>
      </div>

      <div>
        <a
          data-cy={url}
          className='text-mediumBlue text-sm underline'
          href={`http://${url}`}
          rel='noreferrer'
          target='_blank'
        >
          {socialLinkUrl}
        </a>
      </div>
    </div>
  )
}

export default Details
