import FadeIn from '../components/animations/FadeIn'

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black">
      
      {/* Пример 1: Простое использование */}
      <FadeIn>
        <h2 className="text-3xl text-brand-orange mb-4">
          Наша продукция
        </h2>
      </FadeIn>

      {/* Пример 2: С задержкой 200мс */}
      <FadeIn delay={200}>
        <p className="text-brand-white/70">
          Описание продукции...
        </p>
      </FadeIn>

      {/* Пример 3: С дополнительными классами */}
      <FadeIn delay={400} className="mt-8">
        <button className="btn-primary">
          Узнать больше
        </button>
      </FadeIn>

    </main>
  )
}