import { AddMemberProps } from 'pages/Members/components/types'
import { GoBackBtn } from 'components'

const AddMember: React.FC<AddMemberProps> = (props) => {
  return (
    <>
      <GoBackBtn
        title='გადი უკან'
        direction={props.setAddMember}
        goTo={false}
      />
    </>
  )
}

export default AddMember
