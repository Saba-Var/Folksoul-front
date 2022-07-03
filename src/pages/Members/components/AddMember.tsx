import { AddMemberProps } from 'pages/Members/components/types'
import { MemberForm } from 'pages/Members/components'

const AddMember: React.FC<AddMemberProps> = (props) => {
  const { membersData, setMembersData, setIsLoading, setAddMember } = props

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
        url='http://localhost:5000/add-member'
        setMembersData={setMembersData}
        setSection={props.setSection}
        setIsLoading={setIsLoading}
        setAddMember={setAddMember}
        membersData={membersData}
        details={details}
        action='ADD'
      />
    </>
  )
}

export default AddMember
