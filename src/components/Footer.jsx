import React from "react";
import { Link } from "react-scroll";
import LogoFooter from "../assets/logoFooter.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-black">
      <section className="mx-auto px-4 md:px-8 lg:px-0 py-14 lg:max-w-[1120px] font-poppins flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-0">
        <div>
          <figure>
            <Link to="home" smooth={true} title="Estilo Nápoles">
              <img className="w-52 lg:w-64 cursor-pointer" src={LogoFooter} alt="" />
            </Link>
          </figure>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 text-white text-center lg:text-start">
          <div className="border-b-[1px] border-t-[1px] border-white/15 lg:p-0 pt-6 pb-4 lg:border-0">
            <h3 className="bavi mb-3 text-xl">Navegacion</h3>
            <ul className="text-sm">
              <li className="mb-4 hover:text-blue duration-200 ease-in-out cursor-pointer text-white/90">
                <Link to="home" smooth={true} title="Home">
                  Home
                </Link>
              </li>
              <li className="mb-4 hover:text-blue duration-200 ease-in-out cursor-pointer text-white/90">
                <Link to="about" smooth={true} title="Nosotros" offset={-50}>
                  Nosotrxs
                </Link>
              </li>
              <li className="mb-4 hover:text-blue duration-200 ease-in-out cursor-pointer text-white/90">
                <Link to="events" smooth={true} title="Nosotros" offset={-60}>
                  Eventxs
                </Link>
              </li>
              <li className="mb-4 hover:text-blue duration-200 ease-in-out cursor-pointer text-white/90">
                <Link to="menu" smooth={true} title="Menú" offset={-60}>
                  Menú
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="bavi mb-4 text-xl">Visítanos</h3>
            <p className="text-sm mb-6 text-white/90">
              Av. Ameghino 598, Campana, Bs As. <br /> (Está el Diego pintado en
              la esquina)
            </p>
            <p className="text-blue mb-6">
              Teléfono:{" "}
              <a
                title="Ir al chat"
                target="_blank"
                rel="noopener noreferer"
                className="hover:text-white duration-200 ease-in-out"
                href="https://wa.me/+541123930489"
              >
                +54 11 2393-0489
              </a>
            </p>
            <div className="flex flex-row justify-center lg:justify-start gap-5 lg:gap-3">
              <a
                href="https://x.com/EstiloNapoles"
                target="_blank"
                rel="noopener noreferer"
                className="mb-2 lg:mb-0 lg:mr-4"
                title="X"
              >
                <FontAwesomeIcon
                  className="hover:text-blue duration-200 ease-in-out"
                  icon={faXTwitter}
                  size="2x"
                />
              </a>
              <a
                title="Instagram"
                href="https://www.instagram.com/estilonapoles.campana/?hl=en"
                target="_blank"
                rel="noopener noreferer"
              >
                <FontAwesomeIcon
                  className="hover:text-blue duration-200 ease-in-out"
                  icon={faInstagram}
                  size="2x"
                />
              </a>
            </div>
            <a
              title="Ir al chat"
              target="_blank"
              rel="noopener noreferer"
              href="https://wa.me/+541123930489"
            >
              <button className="animate-bounce bg-white text-blue text-sm px-4 py-2 rounded-lg font-medium hover:bg-blue hover:text-white duration-200 ease-in-out mt-6">
                Reservas
              </button>
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
