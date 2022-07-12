import { ModalProps } from 'components/types'
import { CloseIcon } from 'components/svgs'

const Modal: React.FC<ModalProps> = (props) => {
  const { title, setShowModal, children } = props

  const closeModal = () => setShowModal(false)

  return (
    <>
      <div
        onClick={closeModal}
        className='bg-glassBlue fixed h-screen animate-fade-in2  w-screen top-0 left-0 opacity-90 z-50'
      ></div>

      <div className='w-[640px] h-[639px] z-[999] bg-contentWhite rounded-xl pt-4 px-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='flex justify-end mb-3 '>
          <div onClick={closeModal}>
            <CloseIcon />
          </div>
        </div>

        <div className='px-12'>
          <p
            data-cy={title}
            className='text-center animate-tracking-in-expand text-lg font-BPG-Nino-Mtavruli tracking-wide pb-3 border-b border-black'
          >
            {title}
          </p>
          {children}
        </div>
      </div>
    </>
  )
}

export default Modal
