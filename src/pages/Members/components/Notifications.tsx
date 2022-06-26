import { NotificationsProps } from 'pages/Members/components/types'
import { Modal, ErrorAlert } from 'components'

const Notifications: React.FC<NotificationsProps> = (props) => {
  const modalText =
    props.action === 'ADD'
      ? 'ბენდს ახალი წევრი შეემატა'
      : 'წევრის იფორმაცია შეიცვალა'

  return (
    <>
      {props.showModal && (
        <Modal setShowModal={props.setShowModal} title='ჯგუფის წევრები'>
          <div className='h-[400px] flex items-center justify-center'>
            <p className='text-center tracking-wider font-medium text-3xl'>{`${modalText} 🥳`}</p>
          </div>
        </Modal>
      )}
      {props.showErrorAlert && (
        <ErrorAlert
          setShowAlert={props.setShowErrorAlert}
          title={`${
            props.statusCode === 409
              ? 'წევრი უკვე ბენდშია'
              : 'წევრი ვერ მოიძებნა'
          }`}
          styles={
            'top-[6%] left-[55%] 3xl:left-[53%] 3xl:top-[5.5%] 4xl:left-[54%] 5xl:left-[54.5%] 5xl:top-[6%]'
          }
        />
      )}
    </>
  )
}

export default Notifications
