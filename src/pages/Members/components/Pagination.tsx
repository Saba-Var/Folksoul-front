import { PaginationLink } from 'pages/Members/components'
import { CardData } from './types'

const Pagination: React.FC<CardData> = (props) => {
  const { setMembersData, setIsLoading } = props.fetchUtilities
  const fetchUtilities = { setMembersData, setIsLoading }

  const totalPages = Math.ceil(props.data.paginationInfo.totalMembers / 3)
  const paginationLinks = []

  for (let i = 1; i <= totalPages; i++) {
    paginationLinks.push(
      <PaginationLink fetchUtilities={fetchUtilities} page={i} key={i} />
    )
  }

  return <div className='flex gap-6 justify-center'>{paginationLinks}</div>
}

export default Pagination
