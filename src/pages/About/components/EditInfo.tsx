import { DirectBtn, AddNotification, ErrorAlert } from 'components'
import { EditInfoProps } from 'pages/About/components/types'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { fetchBandAbout } from 'helper'
import axios from 'axios'

const EditInfo: React.FC<EditInfoProps> = (props) => {
  const [errorAlert, setErrorAlert] = useState(false)
  const [addModal, setAddModal] = useState(false)
  const { register, setValue, watch } = useForm({
    mode: 'all',
  })

  useEffect(() => {
    setValue('about', props.about)
  }, [props.about, setValue])

  const submitHandler = () => {
    const data = {
      about: watch().about,
      id: props.id,
    }

    axios
      .put(
        'https://folksoul-api.sabavar.redberryinternship.ge/change-band-about',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setAddModal(true)
          fetchBandAbout(setErrorAlert, props.setBandAbout)
        }
      })
      .catch((error) => setErrorAlert(true))
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

      {addModal && (
        <AddNotification
          title='ბენდის შესახებ - დაარედაქტირე'
          modalText='ინფორმაცია შეიცვალა'
          setShowModal={setAddModal}
        />
      )}

      <form className='w-full h-[80%] outline-none resize-none bg-lightYellow shadow-5xl py-4 pl-6 pr-9 rounded-lg'>
        <textarea
          data-cy='TextareaInput'
          {...register('about')}
          className='w-full h-[51.5vh] !break-words outline-none resize-none pr-14 bg-lightYellow'
        />
      </form>

      <div className='flex flex-col gap-4 mt-8'>
        <button
          data-cy='GreenBtn'
          className='greenBtn shadow-3xl animate-tracking-in-expand w-40 mx-auto'
          onClick={submitHandler}
          type='submit'
        >
          შეინახე
        </button>

        <DirectBtn direction={props.setSection} goTo='' title='გადი უკან' />
      </div>
    </div>
  )
}

export default EditInfo
