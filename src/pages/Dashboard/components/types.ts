import { ReactElement } from 'react'

type SelectedRoute = {
  setSection: (section: string) => void
  section: string
}

export type SectionProps = {
  title: string
  icon: ReactElement
  link: string
  sectionUtils: SelectedRoute
}

export type NavigationProps = SelectedRoute
