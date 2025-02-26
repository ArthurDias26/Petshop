import golden from '../../../../public/imagens/golden.png'
import royal from '../../../../public/imagens/royal.png'
import primier from '../../../../public/imagens/primier.png'
import whiskas from '../../../../public/imagens/whiskas.png'
import natural from '../../../../public/imagens/natural.png'
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
    <footer className='bg-[#E84c3d] py-16 text-white'>
        <div className="container mx-auto px-4">
            <div className="border-b border-white/20 pb-8">
                <h4 className='text-3xl  font-semibold mb-8 text-center'>
                    Nossos Parceiros
                </h4>

                <div className='grid grid-cols-2 md:grid-cols-6 gap-8'>
                    {brands.map((item, index) => (
                        <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center'>
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

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Pet Shop</h3>
                        <p className='mb-4'>Cuidando do seu melhor amigo com amor e dedicação.</p>

                        <a 
                        href=""
                        className='bg-green-500 px-4 py-2 rounded-md'
                        >
                            Contato via Whatsapp
                        </a>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
                        <p>Email: petshop@gmail.com</p>
                        <p>Telefone: (11) 99745-6789</p>
                        <p>Rua X, centro, São Paulo | SP</p>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Redes Sociais</h3>
                        <div className='flex gap-4'>
                            <a 
                             href="https://pt-br.facebook.com/"
                             target='_blank'
                             >
                                <FaFacebook className='text-[36px]'/>
                             </a>

                             <a 
                             href="https://pt-br.facebook.com/"
                             target='_blank'
                             >
                                <FaInstagram className='text-[40px]'/>
                             </a>

                             <a 
                             href="https://pt-br.facebook.com/"
                             target='_blank'
                             >
                                <FaYoutube className='text-[40px]'/>
                             </a>
                        </div>
                    </div>

            </div>

        </div>
        
        <p className='text-center text-lg  mt-4'>
            Projeto Desenvolvido por Arthur Dias&copy;
        </p>
    </footer>
  )
}
