import { DeleteDialogProps } from 'pages/SocialLinks/components/types'
import { DeleteContent, ErrorAlert } from 'components'
import { fetchSocialLinks } from 'helper/index'
import { useState } from 'react'
import axios from 'axios'

const DeleteDialog: React.FC<DeleteDialogProps> = (props) => {
  const [error, setError] = useState(false)

  const closeModal = () => props.setShowModal(false)

  const deleteLink = async () => {
    try {
      const res = await axios.delete('http://localhost:5000/delete-link', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        data: {
          id: props.id,
        },
      })

      if (res.status === 200) {
        fetchSocialLinks(setError, props.setLinks)
        props.setShowModal(false)
      }
    } catch (error: any) {
      setError(true)
    }
  }

  return (
    <>
      {error && (
        <ErrorAlert
          setShowAlert={setError}
          title='ბმული ვერ წაიშალა'
          styles='top-[-10%] left-[32%]'
        />
      )}
      <DeleteContent
        text='წავშალოთ ბმული?'
        closeModal={closeModal}
        deleteMember={deleteLink}
      />
    </>
  )
}

export default DeleteDialog
