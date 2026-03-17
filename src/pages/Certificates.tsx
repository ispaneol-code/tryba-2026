import { useState } from 'react'
import { Link } from 'react-router-dom'
import FadeIn from '../components/animations/FadeIn'

// Импорт изображения сертификата
import certificateImg from '../assets/images/sertificate.png'

export default function Certificates() {
  const [isTextExpanded, setIsTextExpanded] = useState(false)

  return (
    <div className="pt-20">
      {/* Hero секция */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-black mb-6">
              <span className="text-gray-600">Сертификаты</span> и лицензии
            </h1>
            <p className="text-xl text-brand-black/70 max-w-3xl">
              Вся продукция УралМет сертифицирована и соответствует требованиям 
              российских и международных стандартов качества
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Сертификаты соответствия */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-black mb-12 text-center">
              Сертификаты соответствия
            </h2>
          </FadeIn>
          
          <div className="max-w-3xl mx-auto">
            <FadeIn delay={100}>
              <div className="card group hover:scale-105 transition-transform duration-300 bg-white border border-gray-100">
                <div className="rounded-lg overflow-hidden border border-gray-300 bg-gray-50 mb-4 p-4">
                  <img 
                    src={certificateImg} 
                    alt="Сертификат соответствия ГОСТ на трубный металлопрокат УралМет Екатеринбург — трубы стальные, трубы электросварные, трубы бесшовные с документами качества, разрешения Ростехнадзора" 
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-brand-black mb-2 text-center">
                  Сертификат соответствия
                </h3>
                <p className="text-brand-black/60 text-sm text-center">
                  Система менеджмента качества
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Список сертификатов */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-black mb-12">
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
                <div className="flex items-start gap-4 p-4 border-l-2 border-gray-600 bg-white">
                  <div className="text-gray-600 text-2xl">✓</div>
                  <div className="text-brand-black/80">{item}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-black mb-6">
              Нужны копии сертификатов?
            </h2>
            <p className="text-xl text-brand-black/70 mb-8">
              Запросите полный пакет документов у наших специалистов
            </p>
            <Link to="/contacts" className="btn-primary text-lg px-10 py-4 bg-gray-600 text-white hover:bg-gray-700">
              Запросить документы
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ========== SEO-ТЕКСТ ДЛЯ ЯНДЕКС ========== */}
      <section className="section bg-gray-50 border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <FadeIn>
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-brand-black mb-6">
                Сертификаты на трубный металлопрокат в Екатеринбурге — УралМет
              </h2>
              
              {/* Контейнер с текстом и затенением */}
              <div className="relative">
                <div 
                  className={`text-brand-black/70 text-sm leading-relaxed space-y-4 transition-all duration-500 ${
                    isTextExpanded ? 'max-h-none' : 'max-h-40 overflow-hidden'
                  }`}
                >
                  <p>
                    Компания УралМет поставляет трубный металлопрокат в Екатеринбурге с полным пакетом сертификатов. Все трубы стальные купить которые можно у нас, имеют сертификаты соответствия ГОСТ, паспорта качества, разрешения Ростехнадзора. Трубы электросварные, трубы бесшовные, трубы профильные — вся продукция сертифицирована.
                  </p>
                  
                  <p>
                    Металлопрокат купить в Екатеринбурге с документами: трубы электросварные прямошовные ГОСТ 10704-91, трубы электросварные спиральношовные ГОСТ 20295-85, трубы бесшовные горячедеформированные ГОСТ 8732-78, трубы бесшовные холоднодеформированные ГОСТ 8734-75. Трубы с сертификатом качества — гарантия надёжности для ваших объектов.
                  </p>
                  
                  <p>
                    Специальные трубы с документами: трубы хладостойкие для газопроводов по ТУ 14-3р-1128-2007, трубы котельные купить по ТУ 14-3р-55-2001, трубы нержавеющие ГОСТ 9940-81, трубы коррозионно стойкие, трубы в ППУ изоляции. Трубы из реестра Газпром с полным пакетом разрешительных документов.
                  </p>
                  
                  <p>
                    Соединительные детали с сертификатами: отводы крутоизогнутые ГОСТ 17375-2001, тройники стальные купить, переходы концентрические, фланцы стальные ГОСТ, заглушки эллиптические по ТУ 1469-017-38948552-2015. Металлопрокат Екатеринбург прайс лист с указанием сертификатов на каждую позицию.
                  </p>
                  
                  <p>
                    Другой сертифицированный металлопрокат: лист стальной горячекатаный, уголок стальной равнополочный, швеллер горячекатаный, балка двутавровая цена, арматура строительная купить. Трубы ГОСТ, трубы ВГП купить, трубы водогазопроводные оцинкованные — всё с документами.
                  </p>
                  
                  <p>
                    Трубы стальные цена за тонну Екатеринбург включает стоимость сертификатов. Металлопрокат купить оптом Урал с полным пакетом документов: сертификаты качества, паспорта продукции, разрешения Ростехнадзора, свидетельства морского регистра. Трубы от производителя цена + документы = надёжность.
                  </p>
                  
                  <p>
                    Трубы для нефтегазопроводов купить с сертификатами, трубы для котельных цена + документы, трубы для свай и опор, металлопрокат для металлоконструкций, трубы для газопроводов высокого давления — всё сертифицировано. Металлопрокат с доставкой по России, Казахстану, Узбекистану с полным пакетом документов.
                  </p>
                  
                  <p>
                    Трубы оптом от производителя с сертификатами, трубы в наличии на складе с документами, трубы с доставкой Екатеринбург и Свердловская область. Трубы с сертификатом качества ГОСТ, металлопрокат отсрочка платежа, трубы ГОСТ Р 53383-2009, ТУ 24.20-001-44146124-2023 для свай — всё с разрешительной документацией.
                  </p>
                  
                  <p className="text-gray-600/80 font-medium">
                    📞 Запросите сертификаты: трубный металлопрокат Екатеринбург, трубы стальные купить с документами, металлопрокат Екатеринбург, купить трубы Свердловская область, металлопрокат Урал доставка с сертификатами — звоните +7 (343) 123-45-67.
                  </p>
                </div>
                
                {/* Градиентное затенение снизу */}
                {!isTextExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
                )}
              </div>
              
              {/* Отдельный блок с кнопкой "Читать далее" */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => setIsTextExpanded(!isTextExpanded)}
                  className="inline-flex items-center gap-2 text-brand-black font-bold"
                >
                  {isTextExpanded ? (
                    <>
                      <span>Свернуть</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      <span>Читать далее</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}