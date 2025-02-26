"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock, Home, Dog} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const services = [
    {
      title: "Banho & Tosa",
      description: "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
      duration: "1h",
      price: "$50",
      icon: <Scissors />,
      linkText: 'Olá, vi no site sobre Banho e tosa e gostaria de mais informações.'
    },
    {
      title: "Consulta Veterinária",
      description: "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
      duration: "1h",
      price: "$45",
      icon: <Syringe />,
      linkText: 'Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.'
    },
    {
      title: "Táxi Pet",
      description: "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para locomover os animais.",
      duration: "2h",
      price: "$80",
      icon: <CarTaxiFront />,
      linkText: 'Olá, vi no site sobre Táxi Pet e gostaria de mais informações.'
    },
    {
      title: "Hotel para pets",
      description: "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
      duration: "1h",
      price: "$60",
      icon: <Hotel />,
      linkText: 'Olá, vi no site sobre Hotel para pets e gostaria de mais informações.'
    },

    {
      title: "Adestramento",
      description: "Treinamento personalizado para corrigir comportamentos indesejados e ensinar comandos básicos e avançados. Ideal para cães de todas as idades e raças.",
      duration: "1h",
      price: "$70",
      icon: <Dog />,
      linkText: 'Olá, vi no site sobre Adestramento e gostaria de mais informações.'
    },
    {
      title: "Creche para pets",
      description: "Espaço interativo para socialização e cuidados diários dos pets enquanto os tutores estão ocupados. Com atividades recreativas e supervisão profissional.",
      duration: "8h",
      price: "$90",
      icon: <Home />,
      linkText: 'Olá, vi no site sobre Creche para pets e gostaria de mais informações.'
    }
  ]

export default function Services() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        slidesToScroll: 1,
      })

      function scrolPrev(){
        emblaApi?.scrollPrev()
      }

      function scrolNext(){
        emblaApi?.scrollNext()
      }

  return (
    <section className='bg-white py-16'>
       <div className='container mx-auto px-4'>
            <div data-aos="fade-up">
                <h2 className='text-4xl font-bold mb-12 text-center '>Serviços</h2>
            </div>

              <div className="relative" data-aos="fade-up">
                <div className='overflow-hidden' ref={emblaRef}>
                    <div className="flex">

                        {services.map((item, index) => (
                            <div key={index} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-4'>
                                <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                    <div className='flex-1 items-start justify-between'>

                                        <div className='flex gap-3'>
                                            <span className='text-3xl'>{item.icon}</span>

                                            <div>
                                                <h3 className='text-xl font-bold my-1 flex items-center justify-between'>
                                                  <span>{item.title}</span> 
                                                  <span>{item.price}</span>
                                                </h3>
                                                <p className='text-gray-400 text-sm select-none'>{item.description}</p>
                                            </div>
                                        </div>
                                                                          
                                    </div>

                                    <div className='border-t border-gray-700 pt-4 flex items-center justify-between'>
                                        <div className='flex items-center gap-2 text-sm'>
                                            <Clock className='w-5 h-5'/>
                                            <span>{item.duration}</span>
                                        </div>

                                        <a 
                                        href={`https://wa.me/556799998800?text=${item.linkText}`}
                                        target="_blank"
                                        className='flex items-center gap-2 text-sm hover:bg-green-800 px-4 py-1 rounded-md duration-300'
                                        >
                                            <FaWhatsapp className='text-xl'/>
                                            Entrar em contato
                                        </a>

                                    </div>

                                    

                                </article>
                            </div>
                        ))}

                    </div>
                </div>

                <svg
                 onClick={scrolPrev}
                 className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'  
                >
                    <ChevronLeft className='w-6 h-6 text-gray-600'
                    />
                </svg>

                <svg
                 onClick={scrolNext}
                 className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'  
                >
                    <ChevronRight className='w-6 h-6 text-gray-600'
                    />
                </svg>

            </div>
       </div>
    </section>
  )
}
