import { DeleteMemberProps } from 'pages/Members/components/types'
import { DeleteDialog } from 'pages/Members/components'
import { RedBtn } from 'components/svgs'
import { Modal } from 'components'
import { useState } from 'react'

const DeleteMember: React.FC<DeleteMemberProps> = (props) => {
  const { membersData, userId } = props

  const [showModal, setShowModal] = useState(false)

  const { setMembersData, setIsLoading } = props.fetchUtilities
  const fetchUtilities = { setMembersData, setIsLoading }

  const clickHandler = () => setShowModal(true)

  return (
    <div>
      {showModal && (
        <Modal setShowModal={setShowModal} title='ბენდის წევრის წაშლა'>
          <DeleteDialog
            fetchUtilities={fetchUtilities}
            setShowModal={setShowModal}
            membersData={membersData}
            userId={userId}
          />
        </Modal>
      )}

      <div data-cy='RedBtn' onClick={clickHandler} className='animate-fade-in'>
        <RedBtn />
      </div>
    </div>
  )
}

export default DeleteMember
