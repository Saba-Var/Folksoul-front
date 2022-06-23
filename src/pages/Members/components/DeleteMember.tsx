import { RedBtn } from 'components/svgs'
import { useState } from 'react'
import { Modal } from 'components'
import { DeleteDialog } from 'pages/Members/components'

const DeleteMember: React.FC<any> = (props) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      {showModal && (
        <Modal setShowModal={setShowModal} title='ბენდის წევრის წაშლა'>
          <DeleteDialog setShowModal={setShowModal} />
        </Modal>
      )}
      <div onClick={() => setShowModal(true)}>
        <RedBtn />
      </div>
    </div>
  )
}

export default DeleteMember
