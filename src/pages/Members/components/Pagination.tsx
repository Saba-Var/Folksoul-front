import { PaginationLink, CardData } from 'pages/Members/components'

const Pagination: React.FC<CardData> = (props) => {
  const { data } = props
  const { setMembersData, setIsLoading } = props.fetchUtilities

  const fetchUtilities = { setMembersData, setIsLoading }

  const totalPages = Math.ceil(data.paginationInfo.totalMembers / 3)

  const paginationLinks = []

  for (let i = 1; i <= totalPages; i++) {
    paginationLinks.push(
      <PaginationLink fetchUtilities={fetchUtilities} page={i} key={i} />
    )
  }

  return <div className='flex gap-6 justify-center'>{paginationLinks}</div>
}

export default Pagination
