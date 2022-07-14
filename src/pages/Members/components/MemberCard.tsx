import { GreenBtn, AvatarModal, YellowBtn, CameraBtn } from 'components'
import { useState } from 'react'
import {
  DeleteMember,
  DetailsModal,
  MemberCardProps,
} from 'pages/Members/components'

const MemberCard: React.FC<MemberCardProps> = (props) => {
  const { membersData, id, avatar, name, setSection, setMemberId } = props
  const { setMembersData, setIsLoading } = props.fetchUtilities

  const [memberModal, setMemberModal] = useState(false)
  const [avatarModal, setAvatarModal] = useState(false)

  const fetchUtilities = { setMembersData, setIsLoading }

  const currentMember = membersData.find((member) => member._id === id)

  const changeButtonHandler = (id: string) => {
    setSection('MemberInputs')
    setMemberId(id)
  }

  const imageUrl = currentMember?.image
    ? `${process.env.REACT_APP_API_BASE_URL}/${currentMember.image}`
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
            } animate-fade-in transition-transform hover:scale-110`}
          />
        </div>

        <div
          onClick={() => setAvatarModal(true)}
          className='animate-fade-in'
          data-cy='CameraBtn'
        >
          <CameraBtn />
        </div>

        {avatarModal && (
          <AvatarModal
            url={process.env.REACT_APP_API_BASE_URL! + '/upload-member-image'}
            setMembersData={setMembersData}
            setAvatarModal={setAvatarModal}
            currentMember={currentMember}
            setIsLoading={setIsLoading}
            avatar={imageUrl}
            id={id}
          />
        )}
      </div>
      <p
        data-cy={name}
        className='text-white text-lg animate-text-focus-in font-BPG-Nino-Mtavruli text-center tracking-widest'
      >
        {name}
      </p>

      <div className='flex justify-between shadow-5xl items-center px-[10%] h-10 border-t-[1px] border-black'>
        <div
          onClick={() => setMemberModal(true)}
          className='animate-fade-in'
          data-cy='GreenBtn'
        >
          <GreenBtn />
        </div>

        {memberModal && (
          <DetailsModal
            setMemberModal={setMemberModal}
            currentMember={currentMember!}
            avatar={imageUrl}
          />
        )}

        <div
          onClick={() => changeButtonHandler(id)}
          className='animate-fade-in'
          data-cy={'ChangeInfo'}
        >
          <YellowBtn />
        </div>

        <DeleteMember
          fetchUtilities={fetchUtilities}
          membersData={membersData}
          userId={id}
        />
      </div>
    </div>
  )
}

export default MemberCard
