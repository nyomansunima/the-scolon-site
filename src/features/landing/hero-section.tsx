import { Link } from "react-router"
import logo from "./logo.png"

interface ItemData {
  label: string
  url: string
}

const items: ItemData[] = [
  {
    label: "Substack",
    url: "https://thescolon.substack.com",
  },
  {
    label: "Hashnode",
    url: "https://thescolon.hashnode.dev",
  },
  {
    label: "Dev.to",
    url: "https://dev.to/thescolon",
  },
]

export function HeroSection() {
  return (
    <section className="flex flex-col py-28 items-center">
      <img src={logo} width={75} height={75} />

      <h2 className="text-4xl font-medium leading-tight text-center mt-10">
        Level up your
        <br />
        devs skills
      </h2>

      <p className="leading-7 text-foreground/60 text-center mt-6 laptop:w-10/12">
        A space for developer to learn more about development, design
        applications, growing dev skills and sharing tips and tricks to become
        better developer.
      </p>

      <div className="flex flex-col mt-14 gap-1">
        {items.map((item, i) => (
          <Link to={item.url} key={i} className="flex items-center gap-2 py-2">
            <i className="fi fi-sc-bullet text-sm text-foreground/40" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
