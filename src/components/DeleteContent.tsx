import { DeleteContentProps } from 'components'

const DeleteContent: React.FC<DeleteContentProps> = (props) => {
  const { text, closeModal, deleteMember } = props

  return (
    <div className='h-[480px] flex flex-col justify-between'>
      <p
        data-cy={text}
        className='text-3xl text-center pt-[20%] animate-tracking-in-expand'
      >
        {text}
      </p>

      <div className='flex justify-center'>
        <div className='flex gap-7 w-fit'>
          <button
            className='text-lg animate-fade-in hover:transition-transform hover:scale-105 w-20 px-5 pb-3 pt-4  bg-slate-200 font-bold text-gray-600 border border-slate-700 rounded-md font-BPG-Nino-Mtavruli'
            onClick={closeModal}
            data-cy='DeleteNo'
          >
            არა
          </button>

          <button className='text-lg text-center w-20 px-5 pb-3 pt-4 hover:transition-transform   hover:scale-105 rounded-md   font-BPG-Nino-Mtavruli font-bold text-white bg-rose-700 border border-gray-900'>
            <p
              className='h-fit animate-fade-in z-[9999999]'
              onClick={deleteMember}
              data-cy='DeleteYes'
            >
              კი
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteContent
