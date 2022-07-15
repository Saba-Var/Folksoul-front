import { AvatarModalProps } from 'pages/Members/components'
import fetchMembersData from 'helpers/fetchMembersData'
import { Modal, ErrorAlert } from 'components'
import { imageUpload } from 'services'
import { useState } from 'react'

const AvatarModal: React.FC<AvatarModalProps> = (props) => {
  const {
    setAvatarModal,
    setMembersData,
    currentMember,
    setIsLoading,
    avatar,
    url,
    id,
  } = props

  const [file, setFile] = useState<any>('')

  const [errorAlert, setErrorAlert] = useState(false)
  const [fetchError, setFetchError] = useState(false)

  const fileChangeHandler = (e: any) => {
    if (e.target.files[0]?.type.startsWith('image')) {
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

      const response = await imageUpload(url, formData)

      if (response.status === 201) {
        fetchMembersData(setFetchError, setMembersData, setIsLoading, 1)
        setAvatarModal(false)
      }
    } catch (error: any) {
      setFetchError(true)
    }
  }

  let imageSrc = avatar

  if (file) {
    imageSrc = URL.createObjectURL(file)
  }

  return (
    <Modal
      title={`${'შეცვალე ჯგუფის წევრის ავატარი'}`}
      setShowModal={setAvatarModal}
    >
      <div className={`h-[500px]`}>
        {fetchError && (
          <ErrorAlert
            styles='!top-[-12%] !left-[28%]'
            setShowAlert={setFetchError}
            title='სურათი ვერ აიტვირთა'
          />
        )}

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
              className={`border animate-slit-in-vertical  bg-darkGray shadow-5xl border-white w-56 h-56 rounded-full flex justify-center items-center  overflow-hidden`}
              style={{
                backgroundColor: `${
                  !currentMember?.image && currentMember?.color
                }`,
              }}
            >
              <img
                className={`w-20 h-28 ${
                  currentMember?.image && '!w-full !h-full'
                } transition-transform hover:scale-110 ${
                  file && 'w-full !h-56'
                }`}
                alt='avatar icon'
                src={imageSrc}
              />
            </div>

            {!file && (
              <label>
                <span
                  className='blueBtn animate-fade-in flex justify-center items-center w-40 mx-auto'
                  data-cy='UploadMemberImage'
                >
                  ატვირთე
                </span>

                <input
                  onChange={fileChangeHandler}
                  data-cy='MemberAvatarInput'
                  type='file'
                />
              </label>
            )}

            {file && (
              <button
                className='greenBtn animate-fade-in'
                onClick={imageUploadHandler}
                data-cy='SaveBtn'
              >
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
