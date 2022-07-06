import { SolarSystemProps } from 'pages/Home/components/types'
import { MemberImage, Sunote } from 'pages/Home/components'
import React, { useEffect, useState } from 'react'
import { fetchMembersData } from 'helper'

const SolarSystem: React.FC<SolarSystemProps> = (props) => {
  const { setColor, setInfoImage, setInfoText, imageArray, bandInfo, image } =
    props

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
      <Sunote
        setInfoImage={setInfoImage}
        setInfoText={setInfoText}
        setSelectedId={setSelectedId}
        bandInfo={bandInfo}
        image={image}
        setPause={setPause}
        pause={pause}
      />

      {!isLoading && (
        <>
          {membersData.members
            .sort((a, b) => a.orbitLength - b.orbitLength)
            .map((member, i) => {
              const selectUtils = { selectedId, setSelectedId, id: member._id }

              const animationDuration = 5 * (i + 1)

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
                      setColor={setColor}
                      setInfoImage={setInfoImage}
                      animationDuration={animationDuration}
                      setInfoText={setInfoText}
                      imageArray={imageArray}
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
