import { AddNotificationProps } from 'components/types'
import { Modal } from 'components'

const AddNotification: React.FC<AddNotificationProps> = (props) => {
  return (
    <Modal setShowModal={props.setShowModal} title={props.title}>
      <div className='h-[400px] flex items-center justify-center'>
        <p className='text-center tracking-wider font-medium text-3xl'>{`${props.modalText} 🥳`}</p>
      </div>
    </Modal>
  )
}

export default AddNotification
