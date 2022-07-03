import { ChangeLinkProps, FormData } from 'pages/SocialLinks/components/types'
import { LinkInput, FormNotifications } from 'pages/SocialLinks/components'
import { fetchSocialLinks } from 'helper/index'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { DirectBtn } from 'components'
import axios from 'axios'

const ChangeLinkForm: React.FC<ChangeLinkProps> = (props) => {
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

  const submitHandler = (formData: FormData) => {
    const { linkName, url } = formData

    const data = {
      id: props.id,
      linkName,
      url,
    }

    axios
      .put('http://localhost:5000/change-link', data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setShowModal(true)
          fetchSocialLinks(props.setLinks)
        }
      })
      .catch((error) => {
        if (error.response.status === 409) setErrorAlert(true)
      })
  }

  return (
    <div className='h-full py-40'>
      <FormNotifications
        successText='ბმულის დეტალები შეიცვალა'
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
          type='submit'
          className='blueBtn animate-tracking-in-expand transition-transform hover:scale-105 w-[298px] block mx-auto mt-[10%] 3xl:mt-[4%] 4xl:mt-[9%] 5xl:mt-[13%] mb-10'
        >
          შეცვალე სოციალური ბმული
        </button>
      </form>

      <DirectBtn title='გადი უკან' direction={props.setSection} goTo='' />
    </div>
  )
}

export default ChangeLinkForm
