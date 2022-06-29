import { DetailModal } from 'pages/Members/components/types'
import { Modal } from 'components'

const DetailsModal: React.FC<DetailModal> = (props) => {
  const { name, instrument, orbitLength, biography, image } =
    props.currentMember

  return (
    <Modal title={`${name}~${instrument}`} setShowModal={props.setMemberModal}>
      <div
        className={`h-[500px] ${biography.length > 630 && 'overflow-y-scroll'}`}
      >
        <div className='flex justify-center mb-4 mt-4 animate-slit-in-vertical'>
          <div
            className={`border bg-darkGray shadow-5xl overflow-hidden border-white w-36 h-36 rounded-full flex justify-center items-center overflow-hidden`}
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
        <p className='text-justify'>{biography}</p>
      </div>
    </Modal>
  )
}

export default DetailsModal
