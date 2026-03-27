import { useEffect, useRef, useState } from "react"
import { Home, FileText, Hammer, ShieldCheck } from "lucide-react"
import { HighlightedText } from "./HighlightedText"

const expertiseAreas = [
  {
    title: "Проектирование",
    description: "Разрабатываем архитектурный проект с учётом ваших пожеланий, участка и бюджета. Все согласования берём на себя.",
    icon: FileText,
  },
  {
    title: "Строительство",
    description:
      "Возводим дома из газобетона и кирпича. Прочные, тёплые, долговечные — работаем строго по технологии.",
    icon: Hammer,
  },
  {
    title: "Отделка и инженерия",
    description:
      "Выполняем черновую и чистовую отделку, монтаж инженерных систем — водоснабжение, отопление, электрика.",
    icon: Home,
  },
  {
    title: "Сдача под ключ",
    description:
      "Передаём готовый дом с комплектом документов, гарантией и технической поддержкой после заселения.",
    icon: ShieldCheck,
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Наши услуги</HighlightedText>
          </h2>
          <ol className="text-muted-foreground text-lg leading-relaxed space-y-2 list-decimal list-inside">
            <li>Разработка индивидуальных проектов домов</li>
            <li>Строительство домов под ключ</li>
            <li>Строительство гражданских и промышленных объектов</li>
            <li>Ремонт домов</li>
            <li>Ремонт квартир под ключ</li>
            <li>Ремонт санузла под ключ</li>
            <li>Электромонтажные работы</li>
            <li>Сантехнические работы</li>
          </ol>
        </div>


      </div>
    </section>
  )
}