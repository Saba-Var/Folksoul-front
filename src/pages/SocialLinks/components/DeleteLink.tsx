import { DeleteLinkProps } from 'pages/SocialLinks/components/types'
import { DeleteDialog } from 'pages/SocialLinks/components'
import { RedBtn } from 'components/svgs'
import { Modal } from 'components'
import { useState } from 'react'

const DeleteLink: React.FC<DeleteLinkProps> = (props) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {showModal && (
        <Modal title='სოციალური ბმულის წაშლა' setShowModal={setShowModal}>
          <DeleteDialog
            setLinks={props.setLinks}
            id={props.id}
            setShowModal={setShowModal}
          />
        </Modal>
      )}

      <div data-TestId='RedBtn' onClick={() => setShowModal(true)}>
        <RedBtn />
      </div>
    </>
  )
}

export default DeleteLink
