import Image from "next/image";
import aboutImg1 from "../../../public/about-1.png";
import aboutImg2 from "../../../public/about-2.png";
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';
import { Check, MapPin } from "lucide-react";


export function About() {
    return (
        <section className="bg-[#FDF6ec] py-16">
            <div className="container px-4 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12
            items-center">
                    <div className="relative ">
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                                src={aboutImg1}
                                alt="Foto do Cachorro"
                                fill
                                quality={100}
                                priority
                                className="object-cover hover:scale-110 duration-300"
                            />
                        </div>

                        <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 
                    overflow-hidden rounded-lg border-white">
                            <Image
                                src={aboutImg2}
                                alt="Foto do Cachorro"
                                fill
                                quality={100}
                                priority
                                className="object-cover hover:scale-110 duration-300"
                            />
                        </div>
                    </div>
                    <div className="space-y-6 mt-10 px-4">
                        <h2 className="text-4xl font-bold">Sobre</h2>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eveniet dolorum,
                            alias reiciendis ipsam, dolores iste assumenda quos voluptatem itaque doloremque mollitia debitis nam praesentium atque perferendis architecto? Iste, voluptatum?
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Aberto desde de 2006.
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Equipe com mais de 10 veterinários.
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Qualidade é nossa prioridade.
                            </li>
                        </ul>

                        <div className="flex gap-2 mt-5">
                            <a href="#"
                                className="bg-[#E84C3D] text-white flex items-center gap-2
                justify-center w-fit px-4 py-2 rounded-md">
                                <WhatsappLogo className="w-5 h-5" />
                                Contato via WhatsApp
                            </a>

                            <a href="#"
                                className="bg-white text-black flex items-center gap-2
                justify-center w-fit px-4 py-2 rounded-md">
                                <MapPin className="w-5 h-5" />
                                Endereço da Loja
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}