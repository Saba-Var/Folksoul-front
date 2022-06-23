import { Link } from 'react-router-dom'
import fetchMembersData from 'helper/fetchMembersData'
import { PaginationLinkProps } from 'pages/Members/components/types'
import { useSearchParams } from 'react-router-dom'

const PaginationLink: React.FC<PaginationLinkProps> = (props) => {
  const [pageParam] = useSearchParams()

  return (
    <Link
      className={`h-5 w-5 bg-lightBrown rounded-full transition-transform hover:scale-125 ${
        pageParam.get('page') === props.page + '' && 'bg-goodGray'
      }`}
      to={`/Dashboard/Members?page=${props.page}`}
      onClick={() =>
        fetchMembersData(
          props.fetchUtilities.setMembersData,
          props.fetchUtilities.setIsLoading,
          props.page
        )
      }
    />
  )
}

export default PaginationLink
