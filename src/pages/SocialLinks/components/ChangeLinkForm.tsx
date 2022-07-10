import { ChangeLinkProps, FormData } from 'pages/SocialLinks/components/types'
import { LinkInput, FormNotifications } from 'pages/SocialLinks/components'
import { DirectBtn, ErrorAlert } from 'components'
import { fetchSocialLinks } from 'helper/index'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const ChangeLinkForm: React.FC<ChangeLinkProps> = (props) => {
  const [linkFetchError, setLinkFetchError] = useState(false)
  const [errorAlert, setErrorAlert] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const {
    watch,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'all',
  })

  const currentLink = props.links.find((link) => link._id === props.id)

  useEffect(() => {
    setValue('linkName', currentLink?.linkName)
    setValue('url', currentLink?.url)
  }, [currentLink, setValue])

  const submitHandler = async (formData: FormData) => {
    try {
      const { linkName, url } = formData

      const data = {
        id: props.id,
        linkName,
        url,
      }

      const response = await axios.put(
        'https://folksoul-api.sabavar.redberryinternship.ge/change-link',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      )

      if (response.status === 200) {
        setShowModal(true)
        fetchSocialLinks(setLinkFetchError, props.setLinks)
      }
    } catch (error: any) {
      error.response.status === 409 && setErrorAlert(true)
    }
  }

  return (
    <div className='h-full py-40'>
      {linkFetchError && (
        <ErrorAlert
          title='ინფორმაცია ვერ მოიძებნა'
          styles='top-[5%] left-[53%]'
          setShowAlert={setErrorAlert}
        />
      )}

      <FormNotifications
        title={`ბმული '${watch().linkName}' უკვე დამატებულია`}
        successText='ბმულის დეტალები შეიცვალა'
        setErrorAlert={setErrorAlert}
        setShowModal={setShowModal}
        errorAlert={errorAlert}
        showModal={showModal}
      />

      <form
        className='flex flex-col justify-between items-center'
        onSubmit={handleSubmit(submitHandler)}
      >
        <LinkInput
          errors={errors.linkName}
          placeholder='დასახელება'
          inputName='linkName'
          register={register}
        />

        <LinkInput
          errors={errors.url}
          placeholder='ბმული'
          register={register}
          inputName='url'
        />

        <button
          className='blueBtn animate-tracking-in-expand transition-transform hover:scale-105 w-[298px] block mx-auto mt-[10%] 3xl:mt-[4%] 4xl:mt-[9%] 5xl:mt-[13%] mb-10'
          data-cy='ChangeLink'
          type='submit'
        >
          შეცვალე სოციალური ბმული
        </button>
      </form>

      <DirectBtn title='გადი უკან' direction={props.setSection} goTo='' />
    </div>
  )
}

export default ChangeLinkForm
