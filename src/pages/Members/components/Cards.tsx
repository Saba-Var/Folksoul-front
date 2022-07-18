import { Pagination, MemberCard, CardData } from 'pages/Members/components'
import { Avatar1, Avatar2, Avatar3 } from 'assets'

const Card: React.FC<CardData> = (props) => {
  const { data, setSection, setMemberId, isLoading } = props
  const { setMembersData, setIsLoading } = props.fetchUtilities

  const fetchUtilities = { setMembersData, setIsLoading }

  const membersOnPage = data.members.length

  return (
    <div>
      <div
        className={`flex justify-between px-[7%] gap-4 mb-28 ${
          membersOnPage === 2 && '!justify-between px-[23%]'
        } ${membersOnPage === 1 && '!justify-center'}`}
      >
        {data.members &&
          data.members.length > 0 &&
          !isLoading &&
          data.members.map((member) => {
            const iconNum = Math.floor(Math.random() * 3) + 1

            const avatar =
              iconNum === 1 ? Avatar1 : iconNum === 2 ? Avatar2 : Avatar3

            return (
              <MemberCard
                fetchUtilities={fetchUtilities}
                setIsLoading={setIsLoading!}
                membersData={data.members}
                setMemberId={setMemberId!}
                setSection={setSection!}
                name={member.name}
                key={member._id}
                id={member._id}
                avatar={avatar}
              />
            )
          })}
      </div>

      {data.paginationInfo?.totalMembers > 3 && (
        <Pagination data={data} fetchUtilities={fetchUtilities} />
      )}
    </div>
  )
}

export default Card
