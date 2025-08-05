import { Link } from "react-router"
import { Menu } from "./menu"

export function Brand() {
  return (
    <Link
      to={"/"}
      className="flex items-center text-sm font-medium transition-all duration-300 text-link"
    >
      your_brand.domain
    </Link>
  )
}

export function Header() {
  return (
    <header className="flex items-center justify-between h-24 tablet:h-28">
      <Brand />
      <Menu />
    </header>
  )
}
