import { FormNotificationsProps } from 'pages/SocialLinks/components/types'
import { AddNotification, ErrorAlert } from 'components'

const FormNotifications: React.FC<FormNotificationsProps> = (props) => {
  const { setErrorAlert, setShowModal, errorAlert, showModal, name } = props

  return (
    <>
      {showModal && (
        <AddNotification
          modalText={'ბმულის დეტალები შეიცვალა'}
          setShowModal={setShowModal}
          title='სოციალური ბმულები'
        />
      )}

      {errorAlert && (
        <ErrorAlert
          styles='left-[50.5%] top-[5%] 4xl:left-[51.5%] 6xl:left-[52.5%]'
          title={`ბმული '${name}' უკვე დამატებულია`}
          setShowAlert={setErrorAlert}
        />
      )}
    </>
  )
}

export default FormNotifications
