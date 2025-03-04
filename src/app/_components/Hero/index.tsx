import { FaWhatsapp } from "react-icons/fa";
import dogImage from '../../../../public/imagens/hero-dog.png'
import bgDogImage from '../../../../public/imagens/bg-hero.png'
import catImage from '../../../../public/imagens/cat-hero.png'
import Image from "next/image";

export default function Hero() {
  return (
    <section className='bg-primary text-white overflow-hidden relative '>

        <div className="">
            <Image
            src={bgDogImage}
            alt="Foto de Cachorro"
            className="object-cover opacity-60 md:hidden"
            fill
            sizes="100vw"
            />

            <div className="absolute inset-0 bg-black/50 md:hidden"></div>
        </div>


        <div className="container mx-auto pt-16 pb-8 md:pb-0 px-8 relative">
            <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <h1
                     className='text-3xl md:text-4xl lg:text-5xl leading-10 font-bold'
                     data-aos="fade-down"
                     >
                        Seu pet merece cuidado, carinho e atenção especial.
                    </h1>

                    <p className='lg:text-lg' data-aos="fade-rigth">
                        Oferecemos os melhores serviços para garantir o bem-estar e a felicidade do seu amigo de quatro patas.
                    </p>

                    <div>
                        <a 
                        href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações`}
                        target="_blank"
                        className='bg-[#0F843B] px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 text-white
                        hover:bg-green-900 hover:text-white !transition !duration-300'
                        data-aos="fade-up"
                        >
                            <FaWhatsapp className="text-xl "/>
                            Contato via Watsapp
                        </a>
                    </div>

                    <div className='mt-8 ' data-aos-delay="300" data-aos="fade-left">
                        <p className='text-sm mb-3'>
                            <b className='bg-black text-white px-2 py-1 rounded-md'>10%</b> de desconto na primeira compra.
                        </p>
                    </div>

                    <div className="flex mt-4">
                        <div className="w-16 mb-2 hidden md:block">
                        <Image
                         src={catImage}
                         alt="Foto de Gato"
                         className="object-fill"
                         quality={100}
                        />
                        </div>
                    </div>

                </div>

                <div className="hidden md:block h-full relative z-10">
                    <Image
                     src={dogImage}
                     alt="Foto de Cachorro"
                     className="object-contain md:translate-y-[48px] lg:translate-y-0"
                     fill
                     sizes="{max-width: 768px} 0vw, 50vw"
                     priority
                     quality={100}
                    />
                </div>
            </article>
        </div>

    </section>
  )
}
