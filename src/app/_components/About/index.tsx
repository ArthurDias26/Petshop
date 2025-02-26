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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci beatae, animi dolores, nostrum numquam ad odio quo blanditiis nisi maxime tempora quibusdam quis perferendis. Non, dolorem ipsam. Iste eum assumenda amet quibusdam vitae, cum aliquid temporibus ad suscipit quaerat, obcaecati iure, repellendus voluptatem. Consectetur quibusdam minus ut, necessitatibus voluptas aut?
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
                        className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                        >
                            <FaWhatsapp className="text-xl text-white"/>
                            Contato via WhatsApp
                        </a>

                        <a 
                        href="#"
                        className=" flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
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
