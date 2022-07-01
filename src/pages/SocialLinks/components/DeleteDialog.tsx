import { DeleteDialogProps } from 'pages/SocialLinks/components/types'
import { fetchSocialLinks } from 'helper/index'
import { DeleteContent } from 'components'
import axios from 'axios'

const DeleteDialog: React.FC<DeleteDialogProps> = (props) => {
  const closeModal = () => props.setShowModal(false)

  const deleteLink = () => {
    try {
      const fetch = async () => {
        const res = await axios.delete('http://localhost:5000/delete-link', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
          data: {
            id: props.id,
          },
        })

        if (res.status === 200) {
          fetchSocialLinks(props.setLinks)
          props.setShowModal(false)
        }
      }
      fetch()
    } catch (error: any) {
      alert(error.message)
    }
  }

  return (
    <DeleteContent
      text='წავშალოთ ბმული?'
      closeModal={closeModal}
      deleteMember={deleteLink}
    />
  )
}

export default DeleteDialog
