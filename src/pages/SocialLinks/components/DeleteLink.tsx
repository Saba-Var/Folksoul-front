import { DeleteLinkProps, DeleteDialog } from 'pages/SocialLinks/components'
import { Modal, RedBtn } from 'components'
import { useState } from 'react'

const DeleteLink: React.FC<DeleteLinkProps> = (props) => {
  const { setLinks, id } = props

  const [showModal, setShowModal] = useState(false)

  const modalHandler = () => setShowModal(true)

  return (
    <>
      {showModal && (
        <Modal title='სოციალური ბმულის წაშლა' setShowModal={setShowModal}>
          <DeleteDialog
            setShowModal={setShowModal}
            setLinks={setLinks}
            id={id}
          />
        </Modal>
      )}

      <div data-cy='RedBtn' onClick={modalHandler}>
        <RedBtn />
      </div>
    </>
  )
}

export default DeleteLink
