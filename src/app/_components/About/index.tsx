import Image from "next/image"
import aboutImage1 from '../../../../public/imagens/about-1.png'
import aboutImage2 from '../../../../public/imagens/about-2.png'
import { FaCheck } from "react-icons/fa6";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  return (
    <section className='bg-[#FDF6ec] py-16'>
        <div className='container px-4 mx-auto'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                <div className="relative" data-aos="fade-up-rigth" data-aos-delay="300">
                    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                        <Image
                        src={aboutImage1}
                        alt="Foto de cachorro"
                        fill
                        className="object-cover hover:scale-110 duration-300"
                        quality={100}
                        priority
                        />
                    </div>

                    <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 border-white overflow-hidden">
                        <Image
                        src={aboutImage2}
                        alt="Foto de cachorro"
                        fill
                        className="object-cover hover:scale-110 duration-300"
                        quality={100}
                        priority
                        />
                    </div>


                </div>

                <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
                    <h2 className="text-4xl font-bold">Sobre</h2>

                    <p>
                        Desde 2006, nosso PetShop cuida do seu pet com amor e dedicação. Contamos com uma equipe experiente de mais de 10 veterinários, garantindo atendimento especializado. Aqui, a qualidade é prioridade, oferecendo produtos e serviços de excelência para o bem-estar e felicidade do seu melhor amigo.
                    </p>

                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <FaCheck className="text-red-500"/>
                            Aberto desde 2006.
                        </li>

                        <li className="flex items-center gap-2">
                            <FaCheck className="text-red-500"/>
                            Equipe com mais de 10 veterinários.
                        </li>

                        <li className="flex items-center gap-2">
                            <FaCheck className="text-red-500"/>
                            Qualidade é nossa prioridade.
                        </li>
                    </ul>

                    <div className="flex gap-2">
                        <a 
                        href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações`}
                        target="_blank"
                        className="bg-primary text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md
                                    hover:bg-primary-dark transition duration-300"
                        >
                            <FaWhatsapp className="text-xl text-white"/>
                            Contato via WhatsApp
                        </a>

                        <a 
                        href="https://www.google.com/maps/place/s%C3%A3o+paulo+capital/data=!4m2!3m1!1s0x94ce448183a461d1:0x9ba94b08ff335bae?sa=X&ved=1t:155783&ictx=111"
                        target="_blank"
                        className=" flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md border-2 border-black
                                    hover:bg-black/10 transition duration-300"
                        >
                            <FaMapMarkerAlt className="text-xl text-black"/>
                            Endereço da Loja
                        </a>
                    </div>

                </div>

            </div>
        </div>
    </section>
  )
}
