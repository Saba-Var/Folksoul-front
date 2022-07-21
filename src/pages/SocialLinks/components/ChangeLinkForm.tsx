import { DirectBtn, ErrorAlert } from 'components'
import { useEffect, useState } from 'react'
import { changeSocialLink } from 'services'
import { fetchSocialLinks } from 'helpers'
import { useForm } from 'react-hook-form'
import {
  ChangeLinkProps,
  LinkInput,
  FormData,
} from 'pages/SocialLinks/components'

const ChangeLinkForm: React.FC<ChangeLinkProps> = (props) => {
  const { links, id, setLinks, setSection } = props

  const [linkFetchError, setLinkFetchError] = useState(false)
  const [errorAlert, setErrorAlert] = useState(false)

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

  const currentLink = links.find((link) => link._id === id)

  useEffect(() => {
    if (currentLink) {
      setValue('linkName', currentLink.linkName)
      setValue('url', currentLink.url)
    }
  }, [currentLink, setValue])

  const submitHandler = async (formData: FormData) => {
    try {
      const { linkName, url } = formData

      const data = {
        linkName,
        url,
        id,
      }

      const { status } = await changeSocialLink(
        data,
        localStorage.getItem('token')!
      )

      if (status === 200) {
        fetchSocialLinks(setLinkFetchError, setLinks)
        setSection('')
      }
    } catch (error: any) {
      setErrorAlert(true)
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

      {errorAlert && (
        <ErrorAlert
          styles='left-[50.5%] top-[5%] 4xl:left-[51.5%] 6xl:left-[52.5%]'
          title={`ბმული '${watch().linkName}' უკვე დამატებულია`}
          setShowAlert={setErrorAlert}
        />
      )}

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
          className='blueBtn animate-tracking-in-expand transition-transform hover:scale-105 w-[298px] block text-sm mx-auto mt-[10%] 3xl:mt-[4%] 4xl:mt-[9%] 5xl:mt-[13%] mb-10'
          data-cy='ChangeLink'
          type='submit'
        >
          შეცვალე სოციალური ბმული
        </button>
      </form>

      <DirectBtn title='გადი უკან' direction={setSection} goTo='' />
    </div>
  )
}

export default ChangeLinkForm
