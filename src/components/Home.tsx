import image from "/icon.svg";
import whatsapp from "../assets/WhatsappLogo.svg";
import { Rabbit, Combine, Handshake } from "lucide-react";

export function Home() {
  return (
    <div className="max-w-screen-maxXl m-auto px-5">
      <div className="flex items-center gap-4 mb-20">
        <div className="flex-col max-custom:text-center">
          <h2 className="text-6xl font-bold text-purple mb-6 max-custom:mb-12">
            Soluções Gerais <br />
            para Seu Espaço
          </h2>
          <p className="mb-10 text-purple max-custom:mb-16">
            A <span className="font-medium">Artine Serviços</span>, oferece
            serviços profissionais garantindo ambientes seguros, organizados e
            impecáveis.
          </p>
          <div className="flex gap-5 items-center max-custom:justify-center">
            <a href="https://wa.me/+5511965397463">
              <button className="bg-purple text-white px-5 py-3 hover:scale-105 transition">
                Contato
              </button>
            </a>
            <p className="text-sm text-purple max-custom:hidden">
              Esclareça suas dúvidas rapidamente!
            </p>
          </div>
        </div>
        <img
          src={image}
          alt=""
          className="min-w-72 max-w-96 max-custom:hidden"
        />
      </div>

      <section className="flex gap-10 justify-center max-custom:flex-col max-custom:items-center">
        <div className="w-80 border p-6 rounded-md border-purple max-custom:w-96">
          <div className="flex items-center gap-4 mb-4">
            <Rabbit size={48} className="text-purple" />
            <h3 className="text-purple font-medium">
              Serviço Rápido e Eficiente
            </h3>
          </div>
          <p className="text-purple">
            Na Artine, priorizamos a eficiência. Nossa equipe está sempre pronta
            para atender suas necessidades com rapidez
          </p>
        </div>
        <div className="w-80 border p-6 rounded-md border-purple max-custom:w-96">
          <div className="flex items-center gap-4 mb-4">
            <Handshake size={48} className="text-purple" />
            <h3 className="text-purple font-medium">
              Equipe Altamente Qualificada
            </h3>
          </div>
          <p className="text-purple">
            Contamos com profissionais treinados e experientes, comprometidos em
            oferecer a melhor qualidade. Sua confiança é nossa prioridade.
          </p>
        </div>
        <div className="w-80 border p-6 rounded-md border-purple max-custom:w-96">
          <div className="flex items-center gap-4 mb-4">
            <Combine size={48} className="text-purple" />
            <h3 className="text-purple font-medium">Soluções Personalizadas</h3>
          </div>
          <p className="text-purple">
            Oferecemos soluções personalizadas para garantir que nossos serviços
            atendam exatamente às suas expectativas e exigências.
          </p>
        </div>
      </section>

      <a
        href="https://wa.me/+5511965397463"
        target="_blank"
        className="absolute bottom-10 right-10"
      >
        <img
          src={whatsapp}
          alt="whatsapp icon"
          className="hover:scale-105 transition"
        />
      </a>

      <footer className="text-center mt-14 mb-5">
        <p className="text-center text-gray-600 text-sm text-purple">
          © 2024, Artine Serviços, Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}
