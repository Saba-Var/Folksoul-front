import { avatar1, avatar2, avatar3 } from 'assets/images'
import { CardData } from './types'
import { Pagination, MemberCard } from 'pages/Members/components'

const Card: React.FC<CardData> = (props) => {
  const { data } = props

  return (
    <div>
      <div
        className={`flex justify-between px-[7%] gap-4 mb-28 ${
          data.members.length < 3 && '!justify-center'
        }`}
      >
        {data.members &&
          data.members.map((member) => {
            const iconNum = Math.floor(Math.random() * 3) + 1
            const avatar =
              iconNum === 1 ? avatar1 : iconNum === 2 ? avatar2 : avatar3
            return (
              <MemberCard
                avatar={avatar}
                id={member._id}
                name={member.name}
                key={member._id}
              />
            )
          })}
      </div>
      {props.data.paginationInfo.totalMembers > 3 && (
        <Pagination
          data={props.data}
          setIsLoading={props.setIsLoading}
          setMembersData={props.setMembersData}
        />
      )}
    </div>
  )
}

export default Card
