import { NotificationsProps } from 'pages/Members/components'
import { ErrorAlert, AddNotification } from 'components'

const Notifications: React.FC<NotificationsProps> = (props) => {
  const {
    setShowErrorAlert,
    showErrorAlert,
    setShowModal,
    statusCode,
    showModal,
  } = props

  const modalText = 'წევრის იფორმაცია შეიცვალა'

  return (
    <>
      {showModal && (
        <AddNotification
          setShowModal={setShowModal}
          modalText={modalText}
          title='ბენდის წევრები'
        />
      )}

      {showErrorAlert && (
        <ErrorAlert
          setShowAlert={setShowErrorAlert}
          title={`${
            statusCode === 409 ? 'წევრი უკვე ბენდშია' : 'წევრი ვერ მოიძებნა'
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
