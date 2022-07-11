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
  const { setLinks, setSection } = props

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

  const submitHandler = async (data: DetailsProps) => {
    try {
      const linkDetails = data

      const response = await axios({
        method: 'post',
        url: process.env.REACT_APP_ADD_LINK!,
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        data: linkDetails,
      })

      if (response.status === 201) {
        setShowModal(true)

        setValue('linkName', '')
        setValue('url', '')

        fetchSocialLinks(setFetchError, setLinks)
      }
    } catch (error: any) {
      if (error.response.status === 409) setErrorAlert(true)
    }
  }

  return (
    <div className='h-full py-40'>
      {fetchError && (
        <ErrorAlert
          title='ინფორმაცია ვერ მოიძებნა'
          styles='top-[5%] left-[53%]'
          setShowAlert={setErrorAlert}
        />
      )}

      <FormNotifications
        title={`ბმული '${watch().linkName}' უკვე დამატებულია`}
        successText='ბმული წარმატებით დაემატა'
        setErrorAlert={setErrorAlert}
        setShowModal={setShowModal}
        errorAlert={errorAlert}
        showModal={showModal}
      />

      <form
        onSubmit={handleSubmit(submitHandler)}
        className=' flex flex-col justify-between items-center'
      >
        <LinkInput
          errors={errors.linkName}
          placeholder='დასახელება'
          inputName='linkName'
          register={register}
        />

        <LinkInput
          errors={errors.url}
          register={register}
          placeholder='ბმული'
          inputName='url'
        />

        <button
          className='blueBtn animate-tracking-in-expand transition-transform hover:scale-105 w-[298px] text-sm block mx-auto mt-[10%] 3xl:mt-[4%] 4xl:mt-[9%] 5xl:mt-[13%] mb-10'
          data-cy='AddLink'
          type='submit'
        >
          დაამატე სოციალური ბმული
        </button>
      </form>

      <DirectBtn title='გადი უკან' direction={setSection} goTo='' />
    </div>
  )
}

export default AddLinkForm
