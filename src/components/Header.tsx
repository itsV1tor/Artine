import icon from "/icon.svg";
export function Header() {
  return (
    <header className="flex justify-between px-5 py-6 mb-10 max-custom:mb-24 max-w-screen-maxXl m-auto">
      <img src={icon} alt="Artine icon" className="w-8" />
      <nav>
        <ul className="flex gap-10">
          <li>
            <a
              href="/"
              className="font-medium text-purple hover:text-aquaBlue transition"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="/servicos"
              className="font-medium text-purple hover:text-aquaBlue transition"
            >
              Serviços
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
