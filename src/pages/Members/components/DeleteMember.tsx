import { RedBtn } from 'components/svgs'
import { useState } from 'react'
import { Modal } from 'components'
import { DeleteDialog } from 'pages/Members/components'
import { MembersInfo } from 'pages/Members/components/types'

const DeleteMember: React.FC<{
  userId: string
  fetchUtilities: {
    setMembersData: any
    setIsLoading: any
  }
  membersData: MembersInfo
}> = (props) => {
  const [showModal, setShowModal] = useState(false)

  const { setMembersData, setIsLoading } = props.fetchUtilities
  const fetchUtilities = { setMembersData, setIsLoading }

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
      <div onClick={() => setShowModal(true)}>
        <RedBtn />
      </div>
    </div>
  )
}

export default DeleteMember
