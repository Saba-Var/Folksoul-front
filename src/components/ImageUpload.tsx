import { Modal, ErrorAlert, ImageUploadProps } from 'components'
import { fetchSocialLinks, fetchBandAbout } from 'helpers'
import { imageUpload } from 'services'
import { useState } from 'react'

const ImageUpload: React.FC<ImageUploadProps> = (props) => {
  const { setImageModal, children, setLinks, setFile, title, file, url, id } =
    props

  const [errorAlert, setErrorAlert] = useState(false)
  const [fetchError, setFetchError] = useState(false)

  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0].type.includes('image/')) {
      setFile(e.target.files[0])
    } else {
      setErrorAlert(true)
    }
  }

  const imageUploadHandler = async () => {
    try {
      const formData = new FormData()
      formData.append('id', id)
      formData.append('image', file)

      const { status } = await imageUpload(
        url,
        formData,
        localStorage.getItem('token')!
      )

      if (status === 201) {
        if (title === 'შეცვალე ბენდის პორტრეტი') {
          fetchBandAbout(setFetchError, setLinks)
        } else {
          fetchSocialLinks(setFetchError, setLinks)
        }

        setImageModal(false)
        setFile('')
      }
    } catch (error: unknown) {
      setFetchError(true)
    }
  }

  return (
    <Modal title={title} setShowModal={setImageModal} setFile={setFile}>
      <div className={`h-[500px] py-10`}>
        {errorAlert && (
          <ErrorAlert
            styles='!top-[-12%] !left-[28%]'
            title='ატვირთეთ მხოლოდ სურათი'
            setShowAlert={setErrorAlert}
          />
        )}

        {fetchError && (
          <ErrorAlert
            styles='!top-[-12%] !left-[28%]'
            setShowAlert={setFetchError}
            title='სურათი ვერ აიტვირთა'
          />
        )}

        <div className='flex flex-col h-full justify-between'>
          {children}

          {!file && (
            <label>
              <span
                data-cy='ატვირთე'
                className='blueBtn animate-fade-in flex justify-center items-center w-40 mx-auto'
              >
                ატვირთე
              </span>
              <input type='file' onChange={fileChangeHandler} />
            </label>
          )}

          {file && (
            <button
              data-cy='SaveBtn'
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
