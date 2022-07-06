import { SolarSystemProps } from 'pages/Home/components/types'
import { MemberImage } from 'pages/Home/components'
import React, { useEffect, useState } from 'react'
import { fetchMembersData } from 'helper'
import { Sun } from 'components/svgs'

const SolarSystem: React.FC<SolarSystemProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [pause, setPause] = useState(false)
  const [selectedId, setSelectedId] = useState('')

  const [membersData, setMembersData] = useState({
    members: [
      {
        biography: '',
        color: '',
        image: '',
        instrument: '',
        name: '',
        orbitLength: 0,
        _id: '',
      },
    ],
  })

  useEffect(() => {
    fetchMembersData(setMembersData, setIsLoading)
  }, [])

  return (
    <div className='w-[50vw] animate-rotate-scale-up h-[84vh] flex justify-center items-center relative'>
      <div
        className='z-[9999] relative'
        onClick={() => {
          setPause(false)
          setSelectedId('')
          props.setInfoText(props.bandInfo)
          props.setInfoImage(props.image)
        }}
      >
        <div
          className={`${
            !pause &&
            'bg-amber-500 animate-rays absolute top-0 left-0 w-full h-full rounded-full'
          }`}
        ></div>
        <Sun pause={pause} />
      </div>

      {!isLoading && (
        <>
          {membersData.members
            .sort((a, b) => a.orbitLength - b.orbitLength)
            .map((member, i) => {
              const selectUtils = { selectedId, setSelectedId, id: member._id }

              const animationDuration =
                member.orbitLength > 700 ? 3 * (i + 1) : 5 * (i + 1)

              const dimension = `${
                member.orbitLength < 270
                  ? 250 + (i + 1) * 10
                  : member.orbitLength > 750
                  ? 750
                  : member.orbitLength
              }px`

              return (
                <div
                  style={{
                    width: dimension,
                    height: dimension,
                  }}
                  className='absolute left-0 right-0 ml-auto mr-auto border-dashed border-[1px] border-yellow rounded-full'
                  key={member._id}
                >
                  <div
                    className={`w-full h-full animate-spinRight rounded-full relative`}
                    style={{
                      animation: `spinRight ${animationDuration}s linear infinite`,
                      zIndex: `${Math.floor(99 / (i + 1))}`,
                      animationPlayState: pause ? 'paused' : 'running',
                    }}
                  >
                    <MemberImage
                      selectUtils={selectUtils}
                      setColor={props.setColor}
                      setInfoImage={props.setInfoImage}
                      animationDuration={animationDuration}
                      setInfoText={props.setInfoText}
                      imageArray={props.imageArray}
                      biography={member.biography}
                      image={member.image}
                      setPause={setPause}
                      color={member.color}
                      name={member.name}
                      pause={pause}
                      index={i}
                    />
                  </div>
                </div>
              )
            })}
        </>
      )}
    </div>
  )
}

export default SolarSystem
