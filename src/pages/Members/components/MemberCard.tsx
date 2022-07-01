import { DeleteMember, DetailsModal } from 'pages/Members/components'
import { MemberCardProps } from 'pages/Members/components/types'
import { GreenBtn, YellowBtn, CameraBtn } from 'components/svgs'
import { AvatarModal } from 'components'
import { useState } from 'react'

const MemberCard: React.FC<MemberCardProps> = (props) => {
  const { setMembersData, setIsLoading } = props.fetchUtilities
  const { membersData, id, avatar, name } = props

  const [memberModal, setMemberModal] = useState(false)
  const [avatarModal, setAvatarModal] = useState(false)

  const fetchUtilities = { setMembersData, setIsLoading }
  const currentMember = membersData.find((member) => member._id === id)

  const imageUrl = currentMember?.image
    ? `http://localhost:5000/${currentMember.image}`
    : avatar

  return (
    <div
      key={id}
      className={`duration-700 hover:shadow-5.5xl bg-darkGray w-[216px] pt-[3%] border-[1px] border-black h-[278px] overflow-hidden shadow-5xl rounded-[3px] flex flex-col justify-between`}
    >
      <div className='w-36 h-36 mx-auto relative'>
        <div
          className={`border border-white w-36 h-36 rounded-full flex justify-center items-center overflow-hidden`}
          style={{
            backgroundColor: `${!currentMember?.image && currentMember?.color}`,
          }}
        >
          <img
            src={imageUrl}
            alt='avatar icon'
            className={`top-[131px] ${
              currentMember?.image && 'w-full h-full rounded-full'
            } animate-fade-in transition-transform  hover:scale-110`}
          />
        </div>

        <div onClick={() => setAvatarModal(true)} className='animate-fade-in'>
          <CameraBtn />
        </div>

        {avatarModal && (
          <AvatarModal
            setIsLoading={props.setIsLoading}
            setMembersData={setMembersData}
            id={id}
            url='http://localhost:5000/upload-member-image'
            avatar={imageUrl}
            currentMember={currentMember}
            setAvatarModal={setAvatarModal}
          />
        )}
      </div>
      <p className='text-white text-lg animate-text-focus-in font-BPG-Nino-Mtavruli text-center tracking-widest'>
        {name}
      </p>

      <div className='flex justify-between shadow-5xl items-center px-[10%] h-10 border-t-[1px] border-black'>
        <div onClick={() => setMemberModal(true)} className='animate-fade-in'>
          <GreenBtn />
        </div>

        {memberModal && (
          <DetailsModal
            avatar={imageUrl}
            currentMember={currentMember!}
            setMemberModal={setMemberModal}
          />
        )}

        <div
          onClick={() => {
            props.setSection('MemberInputs')
            props.setMemberId(id)
          }}
          className='animate-fade-in'
        >
          <YellowBtn />
        </div>

        <DeleteMember
          userId={id}
          fetchUtilities={fetchUtilities}
          membersData={membersData}
        />
      </div>
    </div>
  )
}

export default MemberCard
