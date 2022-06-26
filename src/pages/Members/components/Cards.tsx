import { avatar1, avatar2, avatar3 } from 'assets/images'
import { CardData } from './types'
import { Pagination, MemberCard } from 'pages/Members/components'

const Card: React.FC<CardData> = (props) => {
  const { data } = props
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
          data.paginationInfo.totalMembers > 0 &&
          data.members.map((member) => {
            const iconNum = Math.floor(Math.random() * 3) + 1
            const avatar =
              iconNum === 1 ? avatar1 : iconNum === 2 ? avatar2 : avatar3
            return (
              <MemberCard
                setSection={props.setSection!}
                setMemberId={props.setMemberId!}
                membersData={data.members}
                fetchUtilities={fetchUtilities}
                avatar={avatar}
                id={member._id}
                name={member.name}
                key={member._id}
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
