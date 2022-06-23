import { MemberCardProps } from 'pages/Members/components/types'
import { GreenBtn, YellowBtn, CameraBtn } from 'components/svgs'
import { DeleteMember } from 'pages/Members/components'

const MemberCard: React.FC<MemberCardProps> = (props) => {
  return (
    <div
      key={props.id}
      className={`duration-700 hover:shadow-5.5xl  bg-darkGray  w-[216px] pt-[3%] border-[1px] border-black h-[278px] overflow-hidden shadow-5xl rounded-[3px] flex flex-col justify-between`}
    >
      <div className='w-36 h-36 mx-auto relative'>
        <img src={props.avatar} alt='avatar icon' className='top-[131px]' />
        <CameraBtn />
      </div>
      <p className='text-white text-lg font-BPG-Nino-Mtavruli text-center tracking-widest'>
        {props.name}
      </p>
      <div className='flex justify-between shadow-5xl items-center px-[10%] h-10 border-t-[1px] border-black'>
        <GreenBtn />
        <YellowBtn />
        <DeleteMember
          userId={props.id}
          setMembersData={props.setMembersData}
          setIsLoading={props.setIsLoading}
        />
      </div>
    </div>
  )
}

export default MemberCard
