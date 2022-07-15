import { DeleteDialogProps } from 'pages/Members/components'
import fetchMembersData from 'helpers/fetchMembersData'
import { DeleteContent, ErrorAlert } from 'components'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { deleteMemberFromBand } from 'services'
import { useState } from 'react'

const DeleteDialog: React.FC<DeleteDialogProps> = (props) => {
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
      const { status } = await deleteMemberFromBand(userId)

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

export default DeleteDialog
