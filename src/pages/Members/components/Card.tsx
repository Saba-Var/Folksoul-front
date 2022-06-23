import { CameraBtn, GreenBtn, RedBtn, YellowBtn } from 'components/svgs'
import { avatar1, avatar2, avatar3 } from 'assets/images'
import { CardData } from './types'
import { Pagination } from 'pages/Members/components'

const Card: React.FC<CardData> = (props) => {
  const { data } = props
  console.log(data)
  return (
    <div>
      <div
        className={`flex justify-between px-[7%] gap-4 mb-28 ${
          data.members.length === 1 && '!justify-center'
        }`}
      >
        {data.members &&
          data.members.map((member: any) => {
            const iconNum = Math.floor(Math.random() * 3) + 1
            const avatar =
              iconNum === 1 ? avatar1 : iconNum === 2 ? avatar2 : avatar3

            return (
              <div
                key={member._id}
                className={`duration-700 hover:shadow-5.5xl hover:scale-105 bg-darkGray  w-[216px] pt-[3%] border-[1px] border-black h-[278px] overflow-hidden shadow-5xl rounded-[3px] flex flex-col justify-between`}
              >
                <div className='w-36 h-36 mx-auto relative'>
                  <img src={avatar} alt='avatar icon' className='top-[131px]' />
                  <CameraBtn />
                </div>
                <p className='text-white text-lg font-BPG-Nino-Mtavruli text-center tracking-widest'>
                  {member.name}
                </p>
                <div className='flex justify-between shadow-5xl items-center px-[10%] h-10 border-t-[1px] border-black'>
                  <GreenBtn />
                  <YellowBtn />
                  <RedBtn />
                </div>
              </div>
            )
          })}
      </div>
      {(data.paginationInfo.hasNextPage ||
        data.paginationInfo.hasPreviousPage) && (
        <Pagination
          data={props.data}
          setIsLoading={props.setIsLoading}
          setMembersData={props.setMembersData}
        />
      )}
    </div>
  )
}

export default Card
