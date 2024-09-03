import { ReactNode } from "react"
import Header from "../components/header"

type Props = {
  children: ReactNode | ReactNode[]
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout