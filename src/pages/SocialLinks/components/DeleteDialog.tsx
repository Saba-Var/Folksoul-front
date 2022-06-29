import { DeleteDialogProps } from 'pages/SocialLinks/components/types'
import { fetchSocialLinks } from 'helper/index'
import axios from 'axios'

const DeleteDialog: React.FC<DeleteDialogProps> = (props) => {
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
    <div className='h-[480px] flex flex-col justify-between'>
      <p className='text-3xl text-center pt-[20%]'>წავშალოთ ბმული?</p>
      <div className='flex justify-center'>
        <div className='flex gap-7 w-fit'>
          <button
            onClick={() => props.setShowModal(false)}
            className='text-lg hover:transition-transform hover:scale-105 w-20 px-5 pb-3 pt-4  bg-slate-200 font-bold text-gray-600 border border-slate-700 rounded-md font-BPG-Nino-Mtavruli'
          >
            არა
          </button>
          <button className='text-lg text-center w-20 px-5 pb-3 pt-4 hover:transition-transform   hover:scale-105 rounded-md   font-BPG-Nino-Mtavruli font-bold text-white bg-rose-700 border border-gray-900'>
            <p className='h-fit' onClick={deleteLink}>
              კი
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteDialog
