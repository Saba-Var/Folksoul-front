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
            userId={props.userId}
            setShowModal={setShowModal}
            fetchUtilities={fetchUtilities}
          />
        </Modal>
      )}

      <div onClick={clickHandler}>
        <RedBtn />
      </div>
    </div>
  )
}

export default DeleteMember
