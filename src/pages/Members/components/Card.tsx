import { CameraBtn, GreenBtn, RedBtn, YellowBtn } from 'components/svgs'
import { avatar1, avatar2, avatar3 } from 'assets/images'
import { Link } from 'react-router-dom'
import { fetchMembersData } from 'helper/index'

const Card: React.FC<any> = (props) => {
  const { data } = props
  const paginationInfo = data.paginationInfo

  return (
    <div className='flex justify-between px-[7%] gap-4'>
      {data.members &&
        data.members.map((member: any) => {
          const iconNum = Math.floor(Math.random() * 3) + 1
          const avatar =
            iconNum === 1 ? avatar1 : iconNum === 2 ? avatar2 : avatar3

          return (
            <div
              key={member._id}
              className='bg-darkGray w-[216px] pt-[3%] border-[1px] border-black h-[278px] overflow-hidden shadow-5xl rounded-[3px] flex flex-col justify-between'
            >
              <div className='w-36 h-36 mx-auto relative'>
                <img src={avatar} alt='avatar icon' className='top-[131px]' />
                <CameraBtn />
              </div>
              <p className='text-white text-lg font-BPG-Nino-Mtavruli text-center tracking-widest'>
                {member.name}
              </p>
              <div className='flex justify-between shadow-5xl items-center px-[10%] h-10 border-t-[1px] border-black'>
                <GreenBtn />
                <YellowBtn />
                <RedBtn />
              </div>
            </div>
          )
        })}
      {paginationInfo?.currentPage !== 1 && paginationInfo?.previousPage !== 1 && (
        <Link
          className='bg-red'
          to={`/Dashboard/Members?page=1`}
          onClick={() =>
            fetchMembersData(props.setMembersData, props.setIsLoading, 1)
          }
        >
          1
        </Link>
      )}

      {paginationInfo?.hasPreviousPage && (
        <Link
          className='bg-red'
          to={`/Dashboard/Members?page=${paginationInfo?.previousPage}`}
          onClick={() =>
            fetchMembersData(
              props.setMembersData,
              props.setIsLoading,
              paginationInfo?.previousPage
            )
          }
        >
          {paginationInfo?.previousPage}
        </Link>
      )}

      <Link
        className='bg-red'
        to={`/Dashboard/Members?page=${paginationInfo?.currentPage}`}
        onClick={() =>
          fetchMembersData(
            props.setMembersData,
            props.setIsLoading,
            paginationInfo?.currentPage
          )
        }
      >
        {paginationInfo?.currentPage}
      </Link>

      {paginationInfo?.hasNextPage && (
        <Link
          className='bg-red'
          to={`/Dashboard/Members?page=${paginationInfo?.nextPage}`}
          onClick={() =>
            fetchMembersData(
              props.setMembersData,
              props.setIsLoading,
              paginationInfo?.nextPage
            )
          }
        >
          {paginationInfo?.nextPage}
        </Link>
      )}

      {paginationInfo?.lastPage !== paginationInfo?.currentPage &&
        paginationInfo?.lastPage !== paginationInfo?.nextPage && (
          <Link
            className='bg-red'
            to={`/Dashboard/Members?page=${paginationInfo?.lastPage}`}
            onClick={() =>
              fetchMembersData(
                props.setMembersData,
                props.setIsLoading,
                paginationInfo?.lastPage
              )
            }
          >
            {paginationInfo?.lastPage}
          </Link>
        )}
    </div>
  )
}

export default Card
