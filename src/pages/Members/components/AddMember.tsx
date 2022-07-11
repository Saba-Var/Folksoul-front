import { AddMemberProps } from 'pages/Members/components/types'
import { MemberForm } from 'pages/Members/components'

const AddMember: React.FC<AddMemberProps> = (props) => {
  const {
    setMembersData,
    setIsLoading,
    setAddMember,
    membersData,
    setSection,
  } = props

  const details = {
    orbitLength: '',
    instrument: '',
    biography: '',
    color: '',
    name: '',
  }

  return (
    <>
      <MemberForm
        url='https://folksoul-api.sabavar.redberryinternship.ge/add-member'
        setMembersData={setMembersData}
        setIsLoading={setIsLoading}
        setAddMember={setAddMember}
        membersData={membersData}
        setSection={setSection}
        details={details}
        action='ADD'
      />
    </>
  )
}

export default AddMember
