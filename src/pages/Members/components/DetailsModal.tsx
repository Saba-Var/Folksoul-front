import { DetailModal } from 'pages/Members/components/types'
import { Modal } from 'components'

const DetailsModal: React.FC<DetailModal> = (props) => {
  const { name, instrument, orbitLength, biography, image } =
    props.currentMember

  return (
    <Modal title={`${name}~${instrument}`} setShowModal={props.setMemberModal}>
      <div className={`h-[500px] overflow-y-auto w-[105%] pr-[5%]`}>
        <div className='flex justify-center mb-4 mt-4 animate-slit-in-vertical'>
          <div
            className={`border bg-darkGray shadow-5xl border-white w-36 h-36 rounded-full flex justify-center items-center overflow-hidden`}
            style={{
              backgroundColor: `${!image && props.currentMember?.color}`,
            }}
          >
            <img
              src={props.avatar}
              alt='avatar icon'
              className={`${
                image && 'w-full h-full'
              } hover:scale-105 transition-transform`}
            />
          </div>
        </div>

        <p className='text-sm tracking-wide text-center mb-3'>
          ორბიტალური დაშორება: <span className='font-bold'>{orbitLength}</span>
        </p>
        <div
          className='overflow-hidden animate-focus-in-expand whitespace-pre-line break-words pt-8 bg-transparent resize-none outline-none w-full h-max'
          defaultValue={biography}
        >
          {biography}
        </div>
      </div>
    </Modal>
  )
}

export default DetailsModal
