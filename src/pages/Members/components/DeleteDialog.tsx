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
      const res = await axios.delete('http://localhost:5000/delete-member', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        data: {
          id: props.userId,
        },
      })

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
          setShowAlert={setError}
          title='წევრი ვერ წაიშალა'
          styles='top-[-15%] left-[33%]'
        />
      )}
      <DeleteContent
        text='წავშალოთ ბენდის წევრი?'
        closeModal={closeModal}
        deleteMember={deleteMember}
      />
    </>
  )
}

export default DeleteDialog
