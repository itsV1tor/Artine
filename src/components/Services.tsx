import { Shield } from "lucide-react";
import broom from "../assets/Broom.svg";
import whatsapp from "../assets/whatsappLogo.svg";

export function Services() {
  return (
    <div className="max-w-screen-maxXl m-auto px-5">
      <div>
        <h1 className="text-6xl font-bold text-purple mb-4 max-custom:mb-8 max-custom:text-center">
          Nossos Serviços
        </h1>
        <p className="mb-10 text-purple max-custom:mb-16 max-custom:max-w-96 max-custom:text-center max-custom:m-auto">
          Soluções Profissionais para Atender suas Necessidades
        </p>
      </div>

      <div className="flex gap-16 justify-center max-custoMin:flex-col items-center">
        <div className="w-96 border border-purple p-4 rounded-md grid gap-4 place-items-center text-center">
          <div className="border border-purple rounded-full w-fit p-4">
            <Shield className="text-purple" />
          </div>
          <h2 className="font-medium text-purple uppercase">portaria</h2>
          <p className="text-purple">
            Nossa portaria é comprometida em oferecer serviços de excelência,
            garantindo segurança, organização e tranquilidade para o seu
            ambiente.
          </p>
        </div>
        <div className="w-96 border border-purple p-4 rounded-md grid gap-4 place-items-center text-center">
          <div className="border border-purple rounded-full w-fit p-4">
            <img src={broom} alt="broom icon" className="fill-purple" />
          </div>
          <h2 className="font-medium text-purple uppercase">limpeza</h2>
          <p className="text-purple">
            Nossos serviços de limpeza são pensados para manter o ambiente
            impecável e saudável, garantindo conforto e bem-estar para todos.
          </p>
        </div>
      </div>

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

      <footer className="text-center absolute bottom-5 left-0 right-0 max-custoMin:static mt-14 mb-5">
        <p className="text-center text-gray-600 text-sm text-purple">
          © 2024, Artine Serviços, Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}
