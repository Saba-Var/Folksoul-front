import { DeleteDialogProps } from 'pages/Members/components/types'
import fetchMembersData from 'helper/fetchMembersData'
import { DeleteContent, ErrorAlert } from 'components'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const DeleteDialog: React.FC<DeleteDialogProps> = (props) => {
  const [error, setError] = useState(false)

  const { setMembersData, setIsLoading } = props.fetchUtilities
  const navigate = useNavigate()

  const [pageParam] = useSearchParams()

  const currentPage = +pageParam.get('page')!
  let fetchPage = currentPage

  if (props.membersData.length === 1 && currentPage > 1)
    fetchPage = currentPage - 1

  const closeModal = () => props.setShowModal(false)

  const deleteMember = async () => {
    try {
      const res = await axios.delete(
        'https://folksoul-api.sabavar.redberryinternship.ge/delete-member',
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
          data: {
            id: props.userId,
          },
        }
      )

      if (res.status === 200) {
        closeModal()
        fetchMembersData(setError, setMembersData, setIsLoading, fetchPage)
        navigate(`/Dashboard/Members?page=${fetchPage}`)
      }
    } catch (error: any) {
      setError(true)
    }
  }

  return (
    <>
      {error && (
        <ErrorAlert
          styles='top-[-15%] left-[33%]'
          title='წევრი ვერ წაიშალა'
          setShowAlert={setError}
        />
      )}

      <DeleteContent
        text='წავშალოთ ბენდის წევრი?'
        deleteMember={deleteMember}
        closeModal={closeModal}
      />
    </>
  )
}

export default DeleteDialog
