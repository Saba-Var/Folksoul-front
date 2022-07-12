import { PaginationLinkProps } from 'pages/Members/components/types'
import { useSearchParams, Link } from 'react-router-dom'
import fetchMembersData from 'helpers/fetchMembersData'
import { ErrorAlert } from 'components'
import { useState } from 'react'

const PaginationLink: React.FC<PaginationLinkProps> = (props) => {
  const { page } = props

  const [pageParam] = useSearchParams()

  const { setMembersData, setIsLoading } = props.fetchUtilities
  const [errorAlert, setErrorAlert] = useState(false)

  const clickHandler = () => {
    fetchMembersData(setErrorAlert, setMembersData, setIsLoading, page)
  }

  return (
    <>
      {errorAlert && (
        <ErrorAlert
          title='ინფორმაცია ვერ მოიძებნა'
          styles='top-[5%] left-[53%]'
          setShowAlert={setErrorAlert}
        />
      )}

      <Link
        data-cy={page}
        className={`h-5 w-5 bg-lightBrown rounded-full transition-transform hover:scale-125 ${
          pageParam.get('page') === page + '' && 'bg-goodGray'
        }`}
        to={`/Dashboard/Members?page=${page}`}
        onClick={clickHandler}
      />
    </>
  )
}

export default PaginationLink
