import { CardData } from './types'
import { PaginationLink } from 'pages/Members/components'

const Pagination: React.FC<CardData> = (props) => {
  const {
    currentPage,
    previousPage,
    hasPreviousPage,
    hasNextPage,
    nextPage,
    lastPage,
  } = props.data.paginationInfo
  const { setMembersData, setIsLoading } = props
  return (
    <div className='flex gap-6 justify-center'>
      {currentPage !== 1 && previousPage !== 1 && (
        <PaginationLink
          setMembersData={setMembersData}
          setIsLoading={setIsLoading}
          page={1}
        />
      )}

      {hasPreviousPage && (
        <PaginationLink
          setMembersData={setMembersData}
          setIsLoading={setIsLoading}
          page={previousPage}
        />
      )}

      <PaginationLink
        setMembersData={setMembersData}
        setIsLoading={setIsLoading}
        page={currentPage}
      />

      {hasNextPage && (
        <PaginationLink
          setMembersData={setMembersData}
          setIsLoading={setIsLoading}
          page={nextPage}
        />
      )}

      {lastPage !== currentPage && lastPage !== nextPage && (
        <PaginationLink
          setMembersData={setMembersData}
          setIsLoading={setIsLoading}
          page={lastPage}
        />
      )}
    </div>
  )
}

export default Pagination
