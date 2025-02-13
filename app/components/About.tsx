import Image from "next/image";
import React from "react";
import about1Img from "../../public/about-1.png";
import about2Img from "../../public/about-2.png";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

const About = () => {
  return (
    <section className="bg-[#fdf6ec] py-16">
      <div className="container px-4 mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="Foto do Cahcorro"
                fill
                quality={100}
                priority
                className="object-cover hover:scale-110 duration-300"
              />
            </div>

            <div className="absolute w-40 h-40 rounded-lg border-4  overflow-hidden border-white  right-4 -bottom-8">
              <Image
                src={about2Img}
                alt="Foto do Cahcorro 2"
                fill
                quality={100}
                priority
              />
            </div>
          </div>
          <div className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold">Sobre</h2>

            <p>
              Until one has loved an animal, a part of one's soul remains
              unawakened. We believe in it and we believe in easy access to
              things that are good for our mind, body and spirit. With a clever
              offering, superb support and a secure checkout you're in good
              hands.{" "}
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 2005
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com Mais de 10 profissionais.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é a nossa prioridade.
              </li>
            </ul>
            <div className="flex -gap-2">
              <a
                href="#"
                className="bg-[#e84c3d] text-white flex items-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogo className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>
              <a
                href="#"
                className="flex items-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapPin className="w-5 h-5 text-black" />
                Endereço da Loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
