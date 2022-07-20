import { MemberImage, Sunote, SolarSystemProps } from 'pages/Home/components'
import React, { useEffect, useState } from 'react'
import { fetchMembersData } from 'helpers'

const SolarSystem: React.FC<SolarSystemProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [pause, setPause] = useState(false)

  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  const [selectedId, setSelectedId] = useState('')

  const { setColor, setInfoImage, setInfoText, imageArray, bandInfo, image } =
    props

  const [membersData, setMembersData] = useState({
    members: [
      {
        orbitLength: 1,
        instrument: '',
        biography: '',
        color: '',
        name: '',
        _id: '',
      },
    ],
  })

  useEffect(() => {
    fetchMembersData(() => {}, setMembersData, setIsLoading)

    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='w-[50vw] animate-rotate-scale-up h-[84vh] flex justify-center items-center relative'>
      <Sunote
        setSelectedId={setSelectedId}
        setInfoImage={setInfoImage}
        setInfoText={setInfoText}
        bandInfo={bandInfo}
        setPause={setPause}
        image={image}
        pause={pause}
      />

      {!isLoading && (
        <>
          {membersData.members
            .sort((a, b) => a.orbitLength - b.orbitLength)
            .map((member, i) => {
              const selectUtils = { selectedId, setSelectedId, id: member._id }

              const animationDuration = 8 * (i + 1)

              const dimension = `${
                member.orbitLength < 270
                  ? 250 + (i + 1) * 10
                  : member.orbitLength > 750
                  ? (windowHeight / 100) * 80
                  : member.orbitLength
              }px`

              return (
                <div
                  style={{
                    width: dimension,
                    height: dimension,
                  }}
                  className='absolute left-0 right-0 ml-auto mr-auto border-dashed border-[2px] border-yellow rounded-full'
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
                      animationDuration={animationDuration}
                      setInfoImage={setInfoImage}
                      selectUtils={selectUtils}
                      setInfoText={setInfoText}
                      imageArray={imageArray}
                      memberDetails={member}
                      setColor={setColor}
                      setPause={setPause}
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
