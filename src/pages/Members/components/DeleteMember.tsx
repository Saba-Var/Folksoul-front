import { RedBtn } from 'components/svgs'
import { useState } from 'react'
import { Modal } from 'components'
import { DeleteDialog } from 'pages/Members/components'

const DeleteMember: React.FC<{
  userId: string
  setMembersData: any
  setIsLoading: any
}> = (props) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      {showModal && (
        <Modal setShowModal={setShowModal} title='ბენდის წევრის წაშლა'>
          <DeleteDialog
            userId={props.userId}
            setShowModal={setShowModal}
            setMembersData={props.setMembersData}
            setIsLoading={props.setIsLoading}
          />
        </Modal>
      )}
      <div onClick={() => setShowModal(true)}>
        <RedBtn />
      </div>
    </div>
  )
}

export default DeleteMember
