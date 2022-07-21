import { EditInfoProps } from 'pages/About/components'
import { DirectBtn, ErrorAlert } from 'components'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { fetchBandAbout } from 'helpers'
import { editBandInfo } from 'services'

const EditInfo: React.FC<EditInfoProps> = (props) => {
  const { about, id, setBandAbout, setSection } = props

  const [errorAlert, setErrorAlert] = useState(false)

  const { register, setValue, watch } = useForm({
    mode: 'all',
    defaultValues: {
      about: '',
    },
  })

  useEffect(() => {
    setValue('about', about)
  }, [about, setValue])

  const submitHandler = async () => {
    try {
      const data = {
        about: watch().about,
        id,
      }

      const { status } = await editBandInfo(
        data,
        localStorage.getItem('token')!
      )

      if (status === 200) {
        fetchBandAbout(setErrorAlert, setBandAbout)
        setSection('')
      }
    } catch (error) {
      setErrorAlert(true)
    }
  }

  return (
    <div className='h-full flex justify-between flex-col'>
      {errorAlert && (
        <ErrorAlert
          styles='left-[52.5%] top-[5%] 4xl:left-[53.5%] 6xl:left-[54%]'
          setShowAlert={setErrorAlert}
          title='შეიყვანეთ ინფორმაცია'
        />
      )}

      <form className='w-full h-[80%] outline-none resize-none bg-lightYellow shadow-5xl py-4 pl-6 pr-9 rounded-lg'>
        <textarea
          className='w-full h-[51.5vh] animate-focus-in-expand !break-words outline-none resize-none pr-14 bg-lightYellow'
          data-cy='TextareaInput'
          {...register('about')}
        />
      </form>

      <div className='flex flex-col gap-4 mt-8'>
        <button
          className='greenBtn shadow-3xl animate-tracking-in-expand w-40 mx-auto'
          onClick={submitHandler}
          data-cy='GreenBtn'
          type='submit'
        >
          შეინახე
        </button>

        <DirectBtn direction={setSection} goTo='' title='გადი უკან' />
      </div>
    </div>
  )
}

export default EditInfo
