import { AddMemberProps } from 'pages/Members/components/types'
import { MemberForm } from 'pages/Members/components'

const AddMember: React.FC<AddMemberProps> = (props) => {
  const details = {
    name: '',
    instrument: '',
    orbitLength: '',
    color: '',
    biography: '',
  }

  return (
    <>
      <MemberForm details={details} setAddMember={props.setAddMember} />
    </>
  )
}

export default AddMember
