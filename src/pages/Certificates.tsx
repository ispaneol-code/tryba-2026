import { Link } from 'react-router-dom'
import FadeIn from '../components/animations/FadeIn'

// Импорт изображения сертификата
import certificateImg from '../assets/images/sertificate.png'

export default function Certificates() {
  return (
    <div className="pt-20">
      {/* Hero секция */}
      <section className="bg-brand-dark py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-white mb-6">
              <span className="text-brand-orange">Сертификаты</span> и лицензии
            </h1>
            <p className="text-xl text-brand-white/70 max-w-3xl">
              Вся продукция УралМет сертифицирована и соответствует требованиям 
              российских и международных стандартов качества
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Сертификаты соответствия */}
      <section className="section bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-white mb-12 text-center">
              Сертификаты соответствия
            </h2>
          </FadeIn>
          
          <div className="max-w-3xl mx-auto">
            <FadeIn delay={100}>
              <div className="card group hover:scale-105 transition-transform duration-300">
                <div className="rounded-lg overflow-hidden border border-brand-orange/20 bg-brand-dark mb-4 p-4">
                  <img 
                    src={certificateImg} 
                    alt="Сертификат соответствия" 
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-brand-white mb-2 text-center">
                  Сертификат соответствия
                </h3>
                <p className="text-brand-white/60 text-sm text-center">
                  Система менеджмента качества
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Список сертификатов */}
      <section className="section bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-white mb-12">
              Наши сертификаты и лицензии
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Система менеджмента качества ISO 9001-2015',
              'Разрешение Федеральной службы по экологическому, технологическому и атомному надзору',
              'Разрешение Проматомнадзора Республики Беларусь',
              'Лицензия на право изготовления оборудования для атомных станций',
              'Свидетельство типового одобрения Российского морского регистра судоходства',
              'Внесение в реестр поставщиков ПАО "Газпром"',
              'Аккредитация как поставщик ПАО "НК "Роснефть"',
              'Сертификат соответствия ГОСТ Р',
              'Декларация о соответствии ТР ТС',
              'Заключение по результатам экспертизы промышленной безопасности'
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 50}>
                <div className="flex items-start gap-4 p-4 border-l-2 border-brand-orange bg-brand-black/50">
                  <div className="text-brand-orange text-2xl">✓</div>
                  <div className="text-brand-white/80">{item}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-white mb-6">
              Нужны копии сертификатов?
            </h2>
            <p className="text-xl text-brand-white/70 mb-8">
              Запросите полный пакет документов у наших специалистов
            </p>
            <Link to="/contacts" className="btn-primary text-lg px-10 py-4">
              Запросить документы
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}