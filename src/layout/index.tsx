import { ReactNode, useEffect } from "react"
import Header from "../components/header"
import { APP_TITLE } from "../consts"

type Props = {
  children: ReactNode | ReactNode[]
  title?: string
}

const Layout = ({ children, title = '' }: Props) => {

  useEffect(() => {
    document.title = title ? `${APP_TITLE} | ${title}` : APP_TITLE
  })

  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout