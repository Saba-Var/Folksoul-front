import { LinkInput, FormNotifications } from 'pages/SocialLinks/components'
import { DirectBtn, ErrorAlert } from 'components'
import { fetchSocialLinks } from 'helper/index'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios from 'axios'
import {
  AddLinkFormProps,
  DetailsProps,
} from 'pages/SocialLinks/components/types'

const AddLinkForm: React.FC<AddLinkFormProps> = (props) => {
  const [errorAlert, setErrorAlert] = useState(false)
  const [fetchError, setFetchError] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const {
    watch,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      linkName: '',
      url: '',
    },
  })

  const submitHandler = (data: DetailsProps) => {
    const linkDetails = data

    const fetch = async () => {
      try {
        const response = await axios({
          method: 'post',
          url: 'http://localhost:5000/add-social-link',
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
          data: linkDetails,
        })

        if (response.status === 201) {
          setShowModal(true)

          setValue('linkName', '')
          setValue('url', '')

          fetchSocialLinks(setFetchError, props.setLinks)
        }
      } catch (error: any) {
        if (error.response.status === 409) setErrorAlert(true)
      }
    }
    fetch()
  }

  return (
    <div className='h-full py-40'>
      {fetchError && (
        <ErrorAlert
          styles='top-[5%] left-[53%]'
          setShowAlert={setErrorAlert}
          title='ინფორმაცია ვერ მოიძებნა'
        />
      )}

      <FormNotifications
        successText='ბმული წარმატებით დაემატა'
        errorAlert={errorAlert}
        setErrorAlert={setErrorAlert}
        setShowModal={setShowModal}
        showModal={showModal}
        title={`ბმული '${watch().linkName} უკვე დამატებულია`}
      />

      <form
        onSubmit={handleSubmit(submitHandler)}
        className=' flex flex-col justify-between items-center'
      >
        <LinkInput
          errors={errors.linkName}
          inputName='linkName'
          placeholder='დასახელება'
          register={register}
        />

        <LinkInput
          errors={errors.url}
          inputName='url'
          placeholder='ბმული'
          register={register}
        />

        <button
          data-TestId='AddLink'
          type='submit'
          className='blueBtn animate-tracking-in-expand transition-transform hover:scale-105 w-[298px] block mx-auto mt-[10%] 3xl:mt-[4%] 4xl:mt-[9%] 5xl:mt-[13%] mb-10'
        >
          დაამატე სოციალური ბმული
        </button>
      </form>

      <DirectBtn title='გადი უკან' direction={props.setSection} goTo='' />
    </div>
  )
}

export default AddLinkForm
