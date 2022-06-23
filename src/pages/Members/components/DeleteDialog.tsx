import { DeleteDialogProps } from 'pages/Members/components/types'
import axios from 'axios'
import fetchMembersData from 'helper/fetchMembersData'

const DeleteDialog: React.FC<DeleteDialogProps> = (props) => {
  const { setMembersData, setIsLoading } = props.fetchUtilities
  const closeModal = () => props.setShowModal(false)
  const deleteMember = () => {
    try {
      const fetch = async () => {
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
          fetchMembersData(setMembersData, setIsLoading, 1)
        }
      }
      fetch()
    } catch (error: any) {
      alert(error.message)
    }
  }

  return (
    <div className='h-[480px] flex flex-col justify-between'>
      <p className='text-3xl text-center pt-[20%]'>წავშალოთ ბენდის წევრი?</p>
      <div className='flex justify-center'>
        <div className='flex gap-7 w-fit'>
          <button
            onClick={closeModal}
            className='text-lg hover:transition-transform hover:scale-105 w-20 px-5 pb-3 pt-4  shadow-2xl bg-slate-200 font-bold text-gray-600 border border-slate-700 rounded-md font-BPG-Nino-Mtavruli'
          >
            არა
          </button>
          <button className='text-lg text-center w-20 px-5 pb-3 pt-4 hover:transition-transform   hover:scale-105 shadow-2xl rounded-md   font-BPG-Nino-Mtavruli font-bold text-white bg-rose-700 border border-gray-900'>
            <p className='h-fit' onClick={deleteMember}>
              კი
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteDialog
