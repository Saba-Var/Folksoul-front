import { PaginationLinkProps } from 'pages/Members/components/types'
import fetchMembersData from 'helper/fetchMembersData'
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const PaginationLink: React.FC<PaginationLinkProps> = (props) => {
  const [pageParam] = useSearchParams()

  const { setMembersData, setIsLoading } = props.fetchUtilities

  const clickHandler = () => {
    fetchMembersData(setMembersData, setIsLoading, props.page)
  }

  return (
    <Link
      className={`h-5 w-5 bg-lightBrown rounded-full transition-transform hover:scale-125 ${
        pageParam.get('page') === props.page + '' && 'bg-goodGray'
      }`}
      to={`/Dashboard/Members?page=${props.page}`}
      onClick={clickHandler}
    />
  )
}

export default PaginationLink
