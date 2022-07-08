import { DeleteContentProps } from 'components/types'

const DeleteContent: React.FC<DeleteContentProps> = (props) => {
  return (
    <div className='h-[480px] flex flex-col justify-between'>
      <p className='text-3xl text-center pt-[20%] animate-tracking-in-expand'>
        {props.text}
      </p>
      <div className='flex justify-center'>
        <div className='flex gap-7 w-fit'>
          <button
            data-cy='DeleteNo'
            onClick={props.closeModal}
            className='text-lg animate-fade-in hover:transition-transform hover:scale-105 w-20 px-5 pb-3 pt-4  bg-slate-200 font-bold text-gray-600 border border-slate-700 rounded-md font-BPG-Nino-Mtavruli'
          >
            არა
          </button>
          <button className='text-lg text-center w-20 px-5 pb-3 pt-4 hover:transition-transform   hover:scale-105 rounded-md   font-BPG-Nino-Mtavruli font-bold text-white bg-rose-700 border border-gray-900'>
            <p
              className='h-fit animate-fade-in'
              data-cy='DeleteYes'
              onClick={props.deleteMember}
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
