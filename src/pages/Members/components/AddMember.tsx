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
      <MemberForm
        membersData={props.membersData}
        setMembersData={props.setMembersData}
        setIsLoading={props.setIsLoading}
        details={details}
        setAddMember={props.setAddMember}
        url='http://localhost:5000/add-member'
      />
    </>
  )
}

export default AddMember
