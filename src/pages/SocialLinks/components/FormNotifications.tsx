import { FormNotificationsProps } from 'pages/SocialLinks/components/types'
import { AddNotification, ErrorAlert } from 'components'

const FormNotifications: React.FC<FormNotificationsProps> = (props) => {
  const {
    setShowModal,
    successText,
    setErrorAlert,
    errorAlert,
    title,
    showModal,
  } = props

  return (
    <>
      {showModal && (
        <AddNotification
          setShowModal={setShowModal}
          title='სოციალური ბმულები'
          modalText={successText}
        />
      )}

      {errorAlert && (
        <ErrorAlert
          styles='top-[40px] left-[50%]'
          setShowAlert={setErrorAlert}
          title={title}
        />
      )}
    </>
  )
}

export default FormNotifications
