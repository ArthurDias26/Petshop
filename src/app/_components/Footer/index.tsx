import golden from '../../../../public/imagens/golden.png'
import royal from '../../../../public/imagens/royal.png'
import primier from '../../../../public/imagens/primier.png'
import whiskas from '../../../../public/imagens/whiskas.png'
import natural from '../../../../public/imagens/natural.png'
import catFooter from '../../../../public/imagens/cat-footer.png'
import Image from 'next/image'

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {

    const brands = [
        { name: "Royal Canin", logo: royal },
        { name: "Golden", logo: golden },
        { name: "Primier", logo: primier },
        { name: "Formula Natural", logo: natural },
        { name: "Whiskas", logo: whiskas },
        { name: "Golden", logo: golden },
      ]

  return (
    <footer className='bg-primary py-16 text-white relative overflow-hidden'>
        <div className="container mx-auto px-4">
            <div className="border-b border-white/20 pb-8">
                <h2 className='text-3xl  font-semibold mb-8 text-center' data-aos="fade-up">
                    Nossos Parceiros
                </h2>

                <div className='grid grid-cols-2 md:grid-cols-6 gap-8'>
                    {brands.map((item, index) => (
                        <div 
                        key={index} 
                        className='bg-white p-4 rounded-lg flex items-center justify-center' 
                        data-aos="fade-left" 
                        data-aos-delay={index * 100}
                        >
                            <Image
                             src={item.logo}
                             alt={item.name}
                             width={100}
                             height={50}
                             style={{
                                width: "auto", 
                                height: "auto"
                             }}
                             className='object-contain'
                            />
                        </div>
                    ))}
                </div>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5 mx-auto' data-aos="fade-up">
                    <div className='mx-auto'>
                        <h3 className='text-2xl font-semibold text-center mb-2'>Pet Shop</h3>
                        <p className='mb-4 text-center max-w-[60%] mx-auto'>Cuidando do seu melhor amigo com amor e dedicação.</p>

                        <a 
                        href=""
                        className='bg-green-500 px-4 py-2 rounded-md block w-fit mx-auto'
                        >
                            Contato via Whatsapp
                        </a>
                    </div>

                    <div className='mx-auto'>
                        <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
                        <p>Email: petshop@gmail.com</p>
                        <p>Telefone: (11) 99745-6789</p>
                        <p>Rua X, centro, São Paulo | SP</p>
                    </div>

                    <div className='mx-auto'>
                        <h3 className='text-2xl font-semibold mb-2'>Redes Sociais</h3>
                        <div className='flex gap-4'>
                            <a 
                             href="https://pt-br.facebook.com/"
                             target='_blank'
                             aria-label="Facebook"
                             >
                                <FaFacebook className='text-[36px]'/>
                             </a>

                             <a 
                             href="https://www.instagram.com/"
                             target='_blank'
                             aria-label="Instagram"
                             >
                                <FaInstagram className='text-[40px]'/>
                             </a>

                             <a 
                             href="https://www.youtube.com/"
                             target='_blank'
                             aria-label="Youtube"
                             >
                                <FaYoutube className='text-[40px]'/>
                             </a>
                        </div>
                    </div>

            </div>

        </div>
        
        <p className='text-center text-lg  my-4'>
            Projeto Desenvolvido por Arthur Dias&copy;
        </p>

        <div className='mb-16 md:mb-0'>
            <div className='absolute bottom-0 right-5'>
                <Image
                    src={catFooter}
                    alt={"Imagem gato"}
                    width={180}
                    style={{
                    width: "auto", 
                    height: "auto"
                    }}
                    className='object-contain'
                />
            </div>
        </div>
        
    </footer>
  )
}
