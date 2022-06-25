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
        action='ADD'
        membersData={membersData}
        setMembersData={setMembersData}
        setIsLoading={setIsLoading}
        details={details}
        setAddMember={setAddMember}
        url='http://localhost:5000/add-member'
      />
    </>
  )
}

export default AddMember
