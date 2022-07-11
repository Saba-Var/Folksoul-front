import { AddNotificationProps } from 'components/types'
import { Modal } from 'components'

const AddNotification: React.FC<AddNotificationProps> = (props) => {
  const { setShowModal, title, modalText } = props

  return (
    <Modal setShowModal={setShowModal} title={title}>
      <div className='h-[400px] flex items-center justify-center'>
        <p
          data-cy={modalText}
          className='text-center tracking-wider font-medium text-3xl'
        >{`${modalText} 🥳`}</p>
      </div>
    </Modal>
  )
}

export default AddNotification
