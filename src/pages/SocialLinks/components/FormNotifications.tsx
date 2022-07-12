import { FormNotificationsProps } from 'pages/SocialLinks/components/types'
import { AddNotification, ErrorAlert } from 'components'

const FormNotifications: React.FC<FormNotificationsProps> = (props) => {
  const {
    setErrorAlert,
    setShowModal,
    successText,
    errorAlert,
    showModal,
    title,
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
          styles='left-[50.5%] top-[5%] 4xl:left-[51.5%] 6xl:left-[52.5%]'
          setShowAlert={setErrorAlert}
          title={title}
        />
      )}
    </>
  )
}

export default FormNotifications
