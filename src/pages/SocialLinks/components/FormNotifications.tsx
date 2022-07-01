import { FormNotificationsProps } from 'pages/SocialLinks/components/types'
import { AddNotification, ErrorAlert } from 'components'

const FormNotifications: React.FC<FormNotificationsProps> = (props) => {
  return (
    <>
      {props.showModal && (
        <AddNotification
          title='სოციალური ბმულები'
          modalText={props.successText}
          setShowModal={props.setShowModal}
        />
      )}

      {props.errorAlert && (
        <ErrorAlert
          styles='top-[40px] left-[50%]'
          setShowAlert={props.setErrorAlert}
          title={props.title}
        />
      )}
    </>
  )
}

export default FormNotifications
