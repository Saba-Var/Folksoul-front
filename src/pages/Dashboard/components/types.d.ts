import { Dispatch, SetStateAction, ReactElement } from 'react'

export type NavigationProps = SelectedRoute

type SelectedRoute = {
  setSection: Dispatch<SetStateAction<string>>
  section: string
}

export type SectionProps = {
  sectionUtils: SelectedRoute
  icon: ReactElement
  title: string
  link: string
}
