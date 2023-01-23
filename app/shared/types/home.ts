import { ImageProps } from 'next/image'

export interface Image {
  src: string
  alt: string
  size?: 'xl' | 'lg' | 'md' | 'xs'
}

export interface ImageHelpUkraineProps {
  id: number
  src: string
  alt: string
}

export interface HomeSwiperItem {
  id: number
  image: Image
}

export type LanguageProps = 'en' | 'es' | 'uk' | 'ru'

export type MenuItemProps = {
  id: number
  link: string
  title: string
}

export type ButtonProps = {
  name: string
  link: string
}

export type HomePageData = {
  sub_title: string
  text: string
  btn: ButtonProps
}

export type ContactsItemProps = {
  id: number
  name: string
  href: string
}

export type SocialItemProps = {
  id: number
  icon: ImageProps
  href: string
}

export type AboutPageData = {
  section: string
  text: string
  btn: ButtonProps
}

export type StackPageData = {
  section: string
  tech_stack: string
}

export type ProjectItemProps = {
  id: number
  title: string
  text: string
  stack: string[]
  slider: string[]
  btn: ButtonProps
}
export type ProjectsPageData = {
  section: string
  projects: ProjectItemProps[]
  btn: ButtonProps
}
export type WorkHistoryItemProps = {
  id: number
  title: string
  started: Date | number
  ended: Date | number
}

export type WorkHistoryProps = {
  section: string
  text: string
  history: WorkHistoryItemProps[]
}

export type PersonalInfoProps = {
  id: number
  title: string
  text: string
}

export type UkraineAidCardProps = {
  id: number
  title: string
  text: string
  image: string
  link: MenuItemProps
}

export type UkraineProps = {
  section: string
  images: ImageHelpUkraineProps[]
  text: {
    id: number
    text: string
  }[]
  financially: {
    section: string
    text: string
    aids: UkraineAidCardProps[]
  }
}

export type ContactsProps = {
  fio: string
  section: string
  text: string
  contacts_links: ContactsItemProps[]
  info: PersonalInfoProps[]
  tech_stack: string
  btn: ButtonProps
}
export type AboutProps = {
  fio: string
  about: AboutPageData
  work_history: WorkHistoryProps
  personal_info: {
    section: string
    text: string
    fio: string
    info: {
      id: number
      title: string
      text: string
    }[]
    tech_stack: StackPageData['tech_stack']
    btn: ButtonProps
  }
}

export type DataProps = {
  menu: MenuItemProps[]
  fio: string
  header_fio: string
  home: HomePageData
  about: AboutProps
  stack: StackPageData
}

export type ImagePositionProps = 'default' | 'unStyled' | 'block' | 'background'

export type ImageSizeProps = {
  xs?: number[]
  sm?: number[]
  md?: number[]
  lg?: number[]
  xl?: number[]
}

export type ImageShiftProps = {
  xs?: number[]
  sm?: number[]
  md?: number[]
  lg?: number[]
  xl?: number[]
}

export type PhotoContainerProps = {
  mainPhoto?: ImageProps
  photoBG?: ImageProps
  position?: 'default' | 'unStyled' | 'block' | 'background'
  size?: ImageSizeProps
  shift?: ImageShiftProps
  className?: string
}

export type HomeProps = {
  languages: LanguageProps[] | string[]
  contacts: ContactsItemProps[]
  socials: SocialItemProps[]
  mail: string
  cv_link: string
}
