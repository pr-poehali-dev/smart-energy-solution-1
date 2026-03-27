import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Что входит в строительство «под ключ»?",
    answer:
      "Полный цикл: проектирование, получение разрешений, фундамент, коробка, кровля, фасад, все инженерные сети (электрика, водоснабжение, отопление), черновая и чистовая отделка. Вы въезжаете в готовый дом — нам не нужно ничего доделывать.",
  },
  {
    question: "Сколько стоит построить дом?",
    answer:
      "Стоимость зависит от материала, площади и уровня отделки. Примерный ориентир — от 35 000 ₽/м² за дом из газобетона с чистовой отделкой. Точную цену рассчитаем бесплатно после консультации и осмотра участка.",
  },
  {
    question: "Сколько времени занимает строительство?",
    answer:
      "Типовой дом 150–200 м² строится 6–10 месяцев. Сроки прописываем в договоре и несём ответственность за их соблюдение. Применяем поэтапный контроль, чтобы исключить простои.",
  },
  {
    question: "Нужен ли мне свой участок?",
    answer:
      "Да, строим на вашем участке. Если участка ещё нет — поможем с рекомендациями по выбору и проверим его перед покупкой на предмет пригодности для строительства.",
  },
  {
    question: "Даёте ли вы гарантию на работы?",
    answer:
      "Да, предоставляем гарантию 5 лет на все конструктивные элементы и 2 года на отделочные работы. Гарантийные обязательства прописаны в договоре.",
  },
  {
    question: "Как начать сотрудничество?",
    answer:
      "Оставьте заявку или позвоните нам. Мы проведём бесплатную консультацию, выедем на участок, рассчитаем смету и подготовим договор. Строительство начинается только после вашего согласия со всеми условиями.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}