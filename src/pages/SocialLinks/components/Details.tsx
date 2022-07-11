import { DetailsProps } from 'pages/SocialLinks/components/types'

const Details: React.FC<DetailsProps> = (props) => {
  const { linkName, url } = props

  return (
    <div className='flex gap-20 w-2/3'>
      <div className='w-32 text-center'>
        <p
          data-cy={linkName}
          className='font-BPG-Nino-Mtavruli text-contentWhite tracking-widest text-lg'
        >
          {linkName}
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
          {url}
        </a>
      </div>
    </div>
  )
}

export default Details
