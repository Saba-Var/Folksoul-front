import { useSearchParams, useNavigate } from 'react-router-dom'
import { DeleteProps } from 'pages/Members/components'
import { DeleteContent, ErrorAlert } from 'components'
import axios, { deleteMemberFromBand } from 'services'
import { fetchMembersData } from 'helpers'
import { useState } from 'react'

const DeleteMemberDialog: React.FC<DeleteProps> = (props) => {
  const { fetchUtilities, membersData, setShowModal, userId } = props

  const [error, setError] = useState(false)

  const { setMembersData, setIsLoading } = fetchUtilities
  const navigate = useNavigate()

  const [pageParam] = useSearchParams()

  const currentPage = +pageParam.get('page')!
  let fetchPage = currentPage

  if (membersData.length === 1 && currentPage > 1) {
    fetchPage = currentPage - 1
  }

  const closeModal = () => setShowModal(false)

  const deleteMember = async () => {
    try {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${localStorage.getItem('token')}`

      const { status } = await deleteMemberFromBand(
        userId,
        localStorage.getItem('token')!
      )

      if (status === 200) {
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

export default DeleteMemberDialog
