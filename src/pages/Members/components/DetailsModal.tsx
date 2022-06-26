import { Modal } from 'components'
import { DetailModal } from 'pages/Members/components/types'

const DetailsModal: React.FC<DetailModal> = (props) => {
  const { name, instrument, orbitLength, biography } = props.currentMember
  return (
    <Modal title={`${name}~${instrument}`} setShowModal={props.setMemberModal}>
      <div
        className={`h-[500px] ${biography.length > 630 && 'overflow-y-scroll'}`}
      >
        <img
          src={props.avatar}
          alt='avatar icon'
          className='mt-4 block mx-auto mb-4'
        />
        <p className='text-sm tracking-wide text-center mb-3'>
          ორბიტალური დაშორება:
          <span className='font-bold'>{orbitLength}</span>
        </p>
        <p>{biography}</p>
      </div>
    </Modal>
  )
}

export default DetailsModal
