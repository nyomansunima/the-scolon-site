import { HeroSection } from "@features/landing"
import { generatedMetadata } from "@shared/libs"

export function meta() {
  return generatedMetadata({
    title: "Level Up Your Devs Skills | The Scolon",
    description:
      "Top place to learn and growing development skills, career, business and learn to become better developers.",
  })
}

export default function HomePage() {
  return (
    <main className="flex flex-col gap-20">
      <HeroSection />
    </main>
  )
}
