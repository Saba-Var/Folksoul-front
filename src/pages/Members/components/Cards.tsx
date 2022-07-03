import { Pagination, MemberCard } from 'pages/Members/components'
import { avatar1, avatar2, avatar3 } from 'assets/images'
import { CardData } from 'pages/Members/components/types'

const Card: React.FC<CardData> = (props) => {
  const { setMembersData, setIsLoading } = props.fetchUtilities
  const fetchUtilities = { setMembersData, setIsLoading }

  const { data, setSection, setMemberId } = props
  const membersOnPage = data.members.length

  return (
    <div>
      <div
        className={`flex justify-between px-[7%] gap-4 mb-28 ${
          membersOnPage === 2 && '!justify-between px-[23%]'
        } ${membersOnPage === 1 && '!justify-center'}`}
      >
        {data.members &&
          data.paginationInfo.totalMembers > 0 &&
          data.members.map((member) => {
            const iconNum = Math.floor(Math.random() * 3) + 1
            const avatar =
              iconNum === 1 ? avatar1 : iconNum === 2 ? avatar2 : avatar3
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

      {props.data.paginationInfo.totalMembers > 3 && (
        <Pagination data={props.data} fetchUtilities={fetchUtilities} />
      )}
    </div>
  )
}

export default Card
