import { DetailsProps } from 'pages/SocialLinks/components/types'

const Details: React.FC<DetailsProps> = (props) => {
  return (
    <div className='flex gap-20 w-2/3'>
      <div className='w-32 text-center'>
        <p className='font-BPG-Nino-Mtavruli text-contentWhite tracking-widest text-lg'>
          {props.linkName}
        </p>
      </div>

      <div className=''>
        <a
          className='text-mediumBlue text-sm underline'
          target='_blank'
          href={props.url}
          rel='noreferrer'
        >
          {props.url}
        </a>
      </div>
    </div>
  )
}

export default Details
