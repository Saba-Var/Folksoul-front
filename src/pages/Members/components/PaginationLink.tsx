import { PaginationLinkProps } from 'pages/Members/components/types'
import fetchMembersData from 'helper/fetchMembersData'
import { useSearchParams } from 'react-router-dom'
import { ErrorAlert } from 'components'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const PaginationLink: React.FC<PaginationLinkProps> = (props) => {
  const [pageParam] = useSearchParams()

  const { setMembersData, setIsLoading } = props.fetchUtilities
  const [errorAlert, setErrorAlert] = useState(false)

  const clickHandler = () => {
    fetchMembersData(setErrorAlert, setMembersData, setIsLoading, props.page)
  }

  return (
    <>
      {errorAlert && (
        <ErrorAlert
          styles='top-[5%] left-[53%]'
          setShowAlert={setErrorAlert}
          title='ინფორმაცია ვერ მოიძებნა'
        />
      )}

      <Link
        data-cy={props.page}
        className={`h-5 w-5 bg-lightBrown rounded-full transition-transform hover:scale-125 ${
          pageParam.get('page') === props.page + '' && 'bg-goodGray'
        }`}
        to={`/Dashboard/Members?page=${props.page}`}
        onClick={clickHandler}
      />
    </>
  )
}

export default PaginationLink
