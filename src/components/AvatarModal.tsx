import { AvatarModalProps } from 'pages/Members/components/types'
import fetchMembersData from 'helper/fetchMembersData'
import { Modal, ErrorAlert } from 'components'
import { useState } from 'react'
import axios from 'axios'

const AvatarModal: React.FC<AvatarModalProps> = (props) => {
  const [errorAlert, setErrorAlert] = useState(false)
  const { currentMember, avatar } = props
  const [file, setFile] = useState('')

  const fileChangeHandler = (e: any) => {
    if (e.target.files[0]?.type.startsWith('image')) setFile(e.target.files[0])
    else setErrorAlert(true)
  }

  const imageUploadHandler = async () => {
    try {
      const formData = new FormData()
      formData.append('id', props.id)
      formData.append('image', file)

      const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }

      const response = await axios.patch(props.url, formData, {
        headers: headers,
      })

      if (response.status === 201) {
        fetchMembersData(props.setMembersData, props.setIsLoading, 1)
        props.setAvatarModal(false)
      }
    } catch (error: any) {
      alert(error)
    }
  }

  return (
    <Modal
      title={`${
        props.url.includes('member')
          ? 'შეცვალე ჯგუფის წევრის ავატარი'
          : 'შეცვალე სოციალური ბმულის ხატულა'
      }`}
      setShowModal={props.setAvatarModal}
    >
      <div className={`h-[500px]`}>
        {errorAlert && (
          <ErrorAlert
            styles='!top-[-12%] !left-[28%]'
            title='ატვირთეთ მხოლოდ სურათი'
            setShowAlert={setErrorAlert}
          />
        )}

        <div className='flex justify-center mb-4 mt-4 h-full py-[10%]'>
          <div className='flex flex-col justify-between '>
            <div
              className={`border animate-slit-in-vertical bg-darkGray shadow-5xl border-white w-56 h-56 rounded-full flex justify-center items-center  overflow-hidden`}
              style={{
                backgroundColor: `${
                  !currentMember?.image && currentMember?.color
                }`,
              }}
            >
              <img
                src={avatar}
                alt='avatar icon'
                className={`w-20 h-28 ${
                  currentMember?.image && '!w-full !h-full'
                }`}
              />
            </div>

            {!file && (
              <label>
                <span className='blueBtn flex justify-center items-center w-40 mx-auto'>
                  ატვირთე
                </span>
                <input type='file' onChange={fileChangeHandler} />
              </label>
            )}

            {file && (
              <button className='greenBtn' onClick={imageUploadHandler}>
                შეინახე
              </button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default AvatarModal
