import { DeleteMemberProps } from 'pages/Members/components/types'
import { DeleteDialog } from 'pages/Members/components'
import { RedBtn } from 'components/svgs'
import { Modal } from 'components'
import { useState } from 'react'

const DeleteMember: React.FC<DeleteMemberProps> = (props) => {
  const [showModal, setShowModal] = useState(false)

  const { setMembersData, setIsLoading } = props.fetchUtilities
  const fetchUtilities = { setMembersData, setIsLoading }

  const clickHandler = () => setShowModal(true)

  return (
    <div>
      {showModal && (
        <Modal setShowModal={setShowModal} title='ბენდის წევრის წაშლა'>
          <DeleteDialog
            membersData={props.membersData}
            fetchUtilities={fetchUtilities}
            setShowModal={setShowModal}
            userId={props.userId}
          />
        </Modal>
      )}

      <div
        data-TestId='RedBtn'
        onClick={clickHandler}
        className='animate-fade-in'
      >
        <RedBtn />
      </div>
    </div>
  )
}

export default DeleteMember
