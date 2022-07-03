import { DetailsProps } from 'pages/SocialLinks/components/types'

const Details: React.FC<DetailsProps> = (props) => {
  return (
    <>
      <p className='font-BPG-Nino-Mtavruli text-contentWhite tracking-widest text-lg'>
        {props.linkName}
      </p>

      <a
        className='text-mediumBlue text-sm underline'
        target='_blank'
        href={props.url}
        rel='noreferrer'
      >
        {props.url}
      </a>
    </>
  )
}

export default Details
