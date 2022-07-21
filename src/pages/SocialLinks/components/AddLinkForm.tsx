import { DirectBtn, ErrorAlert } from 'components'
import { fetchSocialLinks } from 'helpers'
import { useForm } from 'react-hook-form'
import { addSocialLink } from 'services'
import { useState } from 'react'
import {
  AddLinkFormProps,
  DetailsProps,
  LinkInput,
} from 'pages/SocialLinks/components'

const AddLinkForm: React.FC<AddLinkFormProps> = (props) => {
  const { setLinks, setSection } = props

  const [errorAlert, setErrorAlert] = useState(false)
  const [fetchError, setFetchError] = useState(false)

  const {
    handleSubmit,
    register,
    setValue,
    watch,
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

      const { status } = await addSocialLink(
        linkDetails,
        localStorage.getItem('token')!
      )

      if (status === 201) {
        setValue('linkName', '')
        setValue('url', '')

        fetchSocialLinks(setFetchError, setLinks)

        setSection('')
      }
    } catch (error: any) {
      if (error.response.status === 409) {
        setErrorAlert(true)
      }
      setFetchError(true)
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

      {errorAlert && (
        <ErrorAlert
          styles='left-[50.5%] top-[5%] 4xl:left-[51.5%] 6xl:left-[52.5%]'
          title={`ბმული '${watch().linkName}' უკვე დამატებულია`}
          setShowAlert={setErrorAlert}
        />
      )}

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
