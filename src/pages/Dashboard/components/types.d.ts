import { ReactElement } from 'react'

export type NavigationProps = SelectedRoute

type SelectedRoute = {
  setSection: (section: string) => void
  section: string
}

export type SectionProps = {
  sectionUtils: SelectedRoute
  icon: ReactElement
  title: string
  link: string
}
