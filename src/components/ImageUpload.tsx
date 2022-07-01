import fetchSocialLinks from 'helper/fetchSocialLinks'
import { ImageUploadProps } from 'components/types'
import { Modal, ErrorAlert } from 'components'
import { useState } from 'react'
import axios from 'axios'

const ImageUpload: React.FC<ImageUploadProps> = (props) => {
  const [file, setFile] = useState('')
  const [errorAlert, setErrorAlert] = useState(false)

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
        fetchSocialLinks(props.setLinks)
        props.setImageModal(false)
      }
    } catch (error: any) {
      alert(error)
    }
  }

  return (
    <Modal title={`${props.title}`} setShowModal={props.setImageModal}>
      <div className={`h-[500px] py-10`}>
        {errorAlert && (
          <ErrorAlert
            styles='!top-[-12%] !left-[28%]'
            title='ატვირთეთ მხოლოდ სურათი'
            setShowAlert={setErrorAlert}
          />
        )}

        <div className='flex flex-col h-full justify-between'>
          {props.children}

          {!file && (
            <label>
              <span className='blueBtn animate-fade-in flex justify-center items-center w-40 mx-auto'>
                ატვირთე
              </span>
              <input type='file' onChange={fileChangeHandler} />
            </label>
          )}

          {file && (
            <button
              className='greenBtn animate-fade-in w-32 mx-auto'
              onClick={imageUploadHandler}
            >
              შეინახე
            </button>
          )}
        </div>
      </div>
    </Modal>
  )
}

export default ImageUpload