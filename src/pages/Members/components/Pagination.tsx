import { CardData } from './types'
import { PaginationLink } from 'pages/Members/components'

const Pagination: React.FC<CardData> = (props) => {
  const { setMembersData, setIsLoading } = props
  const indents = []
  const totalPages = Math.ceil(props.data.paginationInfo.totalMembers / 3)

  for (let i = 1; i <= totalPages; i++) {
    indents.push(
      <PaginationLink
        setMembersData={setMembersData}
        setIsLoading={setIsLoading}
        page={i}
      />
    )
  }
  return <div className='flex gap-6 justify-center'>{indents}</div>
}

export default Pagination
