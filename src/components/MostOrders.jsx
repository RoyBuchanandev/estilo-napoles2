import React from "react";
import Layout from "./Layout";
import Cuatroque from "../assets/imgs/cuatroque.png";
import Barrilete from "../assets/imgs/barrilete_cosmico.png";
import Mortadela from "../assets/imgs/mortadela.png";
import Margherita from "../assets/imgs/margherita.png";
import Napo from "../assets/imgs/napo.png";
import Pepperoni from "../assets/imgs/peperoni.png";
import Especial from "../assets/imgs/especial.png";
import Fuga from "../assets/imgs/fugazzeta.png";
import Anchoa from "../assets/imgs/anchoa.png";
import Faina from "../assets/imgs/faina.png";
import Flancito from "../assets/imgs/flancito.png";
import Funghi from "../assets/imgs/funghi.png";
import Panchito from "../assets/imgs/panchito.png";
import Tiramisu from "../assets/imgs/tiramisu.png";
import Marinara from "../assets/imgs/marinara.png";
import Fresco from "../assets/imgs/fresco.png";
import Muzza from "../assets/imgs/muzza.png";
import Dip from "../assets/imgs/dip.png";
import Papa from "../assets/imgs/papa.png";
import Rucola from "../assets/imgs/rucola.png";
import Vegetarian from "../assets/imgs/vegetarian.png";
import QuesoDulce from "../assets/imgs/queso-dulce.png";

const MostOrders = () => {
  return (
    <Layout id="menu" className={"h-fit py-10 lg:py-14"}>
      <div className="flex flex-col items-center ">
        <h2 className="text-5xl lg:text-7xl text-blue bavi mb-2 text-center drop-shadow-blue">
          Nuestro Menu
        </h2>
        <h3 className="flex items-center text-2xl lg:text-4xl text-red/80 bavi mb-4 text-center drop-shadow-red">
          <i className="fas fa-flag icon-mr"></i> Pizzeria Italoargenta
        </h3>
        <p className="font-poppins text-base text-gray w-full md:w-[80%] lg:w-[80%] text-center mb-8 lg:mb-12">
          Cocción a la leña en horno de barro, masa de 70% de hidratación y
          fermentación en frío por 24 hs. <br /> Algunas pizzas y el pancho
          tienen opción{" "}
          <span className="text-blue">
            vegana
            <img src={Vegetarian} alt="Vegano" className="inline-block w-12" />
          </span>
          <div className="text-center mt-10">
 <button
   className="drop-shadow-blue animate-bounce bg-blue text-white hover:bg-blue-700 font-semibold py-3 px-7 rounded-lg mr-4"
   onClick={() => {
     const modal = document.createElement('div');
     modal.innerHTML = `
       <div style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:999; display:flex; justify-content:center; align-items:center;">
         <iframe src="/cartaen.pdf" style="width:90%; height:90%; border:none;"></iframe>
         <button onclick="this.parentElement.remove()" style="position:absolute; top:20px; right:20px; color:white; padding:8px 16px;">✕</button>
       </div>
     `;
     document.body.appendChild(modal);
   }}
 >
   Ver Precios
            </button>
            <button
              className="drop-shadow-red animate-bounce bg-red text-white hover:bg-red-700 font-semibold py-3 px-7 rounded-lg"
              onClick={() => window.open(" https://wa.me/+541123930489")}
            >
              Reservar
            </button>
          </div>
        </p>
      </div>

      <section className="flex flex-wrap justify-between flex-col md:flex-row gap-8">
        <article className="card group shadow-md overflow-hidden">
          <div className="image">
            <img className="drop-shadow-lg" src={Cuatroque} alt="" />
          </div>
          <div className="card-info text-center flex justify-center">
            <span className="flex items-center gap-2">
              <span className="bavi text-4xl text-blue group-hover:text-white duration-300 ease-in-out">
                Cuatroque
              </span>
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              Salsa pomodoro, muzzarella, provolone, parmesano, queso azul,
              nueces, orégano y aceite de oliva extra virgen de peperoncino.
            </p>
          </div>
        </article>

        <article className="card group shadow-md">
          <div className="image">
            <img className="drop-shadow-lg" src={Barrilete} alt="" />
          </div>
          <div className="card-info text-center flex justify-center">
            <span className="flex items-center gap-2">
              <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
                Barrilete Cósmico
              </span>
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              Salsa pomodoro, bocconcino, albahaca, crema de pesto, aceite de
              oliva extra vírgen de ajo y ralladura de limón.
            </p>
          </div>
        </article>

        <article className="card group shadow-md">
          <div className="image">
            <img className="drop-shadow-lg" src={Mortadela} alt="" />
          </div>
          <div className="card-info">
            <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
              Mortadela
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              Salsa pomodoro, muzzarella, mortadela de pistachos, ajíes en
              vinagre, albahaca y aceite de oliva extra vírgen de ajo
            </p>
          </div>
        </article>

        {/* Aquí empiezan las nuevas tarjetas */}

        <article className="card group shadow-md overflow-hidden">
          <div className="image">
            <img className="drop-shadow-lg" src={Especial} alt="" />
          </div>
          <div className="card-info text-center flex justify-center">
            <span className="bavi text-4xl text-blue group-hover:text-white duration-300 ease-in-out">
              Especial
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              Salsa pomodoro, muzzarella, jamón natural, morrones asados,
              aceitunas negras, orégano, oliva extra virgen de ajo
            </p>
          </div>
        </article>

        <article className="card group shadow-md">
          <div className="image">
            <img className="drop-shadow-lg" src={Fuga} alt="" />
          </div>
          <div className="card-info text-center flex justify-center">
            <span className="flex items-center gap-2">
              <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
                Fugazzeta
              </span>
              <img src={Vegetarian} alt="Vegetariano" className="w-12" />
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              Muzzarella, variedad de cebollas, orégano, mix de aceitunas, oliva
              extra virgen al ajo
            </p>
          </div>
        </article>

        <article className="card group shadow-md">
          <div className="image">
            <img className="drop-shadow-lg" src={Anchoa} alt="" />
          </div>
          <div className="card-info">
            <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
              Anchoa
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              Salsa pomodoro, muzzarella, anchoas, salsa picante
            </p>
          </div>
        </article>

        {/* Aquí empiezan las nuevas tarjetas */}

        <article className="card group shadow-md overflow-hidden">
          <div className="image">
            <img className="drop-shadow-lg" src={Margherita} alt="" />
          </div>
          <div className="card-info text-center flex justify-center">
            <span className="flex items-center gap-2">
              <span className="bavi text-4xl text-blue group-hover:text-white duration-300 ease-in-out">
                Margherita
              </span>
              <img src={Vegetarian} alt="Vegetariano" className="w-12" />
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              Salsa pomodoro, bocconcino, albahaca, oliva extra virgen al ajo
            </p>
          </div>
        </article>

        <article className="card group shadow-md">
          <div className="image">
            <img className="drop-shadow-lg" src={Napo} alt="" />
          </div>
          <div className="card-info text-center flex justify-center">
            <span className="flex items-center gap-2">
              <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
                Napo
              </span>
              <img src={Vegetarian} alt="Vegetariano" className="w-12" />
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              Salsa pomodoro, muzzarella, cherry, provenzal, aceitunas
            </p>
          </div>
        </article>

        <article className="card group shadow-md">
          <div className="image">
            <img className="drop-shadow-lg" src={Pepperoni} alt="" />
          </div>
          <div className="card-info">
            <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
              Pepperoni
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              Salsa pomodoro, muzzarella, pepperoni, verdeo
            </p>
          </div>
        </article>

        <article className="card group shadow-md overflow-hidden">
          <div className="image">
            <img className="drop-shadow-lg" src={Marinara} alt="" />
          </div>
          <div className="card-info text-center flex justify-center">
            <span className="flex items-center gap-2">
              <span className="bavi text-4xl text-blue group-hover:text-white duration-300 ease-in-out">
                Marinara
              </span>
              <img src={Vegetarian} alt="Vegetariano" className="w-12" />
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              Salsa pomodoro, láminas de ajo, albahaca, oliva extra virgen
            </p>
          </div>
        </article>

        <article className="card group shadow-md">
          <div className="image">
            <img className="drop-shadow-lg" src={Funghi} alt="" />
          </div>
          <div className="card-info text-center flex justify-center">
            <span className="flex items-center gap-2">
              <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
                Funghi
              </span>
              <img src={Vegetarian} alt="Vegetariano" className="w-12" />
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              Salsa pomodoro, muzzarella, provolone, portobellos a la manteca y
              aceite de perejil
            </p>
          </div>
        </article>

        <article className="card group shadow-md">
          <div className="image">
            <img className="drop-shadow-lg" src={Muzza} alt="" />
          </div>
          <div className="card-info text-center flex justify-center">
            <span className="flex items-center gap-2">
              <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
                Muzza
              </span>
              <img src={Vegetarian} alt="Vegetariano" className="w-12" />
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              Salsa pomodoro, muzzarella, orégano, aceitunas
            </p>
          </div>
        </article>

        {/* Aquí empiezan las nuevas tarjetas */}

        <article className="card group shadow-md overflow-hidden">
          <div className="image">
            <img className="drop-shadow-lg" src={Rucola} alt="" />
          </div>
          <div className="card-info text-center flex justify-center">
            <span className="bavi text-4xl text-blue group-hover:text-white duration-300 ease-in-out">
              Rucola
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              Salsa pomodoro, muzzarela, jamón crudo, rúcula, pesto de rúcula,
              parmesano fresco y oliva extra virgen
            </p>
          </div>
        </article>

        <article className="card group shadow-md">
          <div className="image">
            <img className="drop-shadow-lg" src={Papa} alt="" />
          </div>
          <div className="card-info text-center flex justify-center">
            <span className="flex items-center gap-2">
              <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
                Papa & Pesto
              </span>
              <img src={Vegetarian} alt="Vegetariano" className="w-12" />
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              Muzzarella, papa en rodajas, romero, oliva extra virgen, pesto
            </p>
          </div>
        </article>

        {/* Aquí empiezan las nuevas tarjetas */}

        <article className="card group shadow-md">
          <div className="image">
            <img className="drop-shadow-lg" src={Faina} alt="" />
          </div>
          <div className="card-info text-center flex justify-center">
            <span className="flex items-center gap-2">
              <span className="bavi text-4xl text-blue group-hover:text-white duration-300 ease-in-out">
                Faina
              </span>
              <img src={Vegetarian} alt="Vegetariano" className="w-12 ml-2" />{" "}
              {/* Aquí se agrega el logo */}
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              Disfruta de este acompañamiento tradicional con nuestras pizzas
            </p>
          </div>
        </article>

        <article className="card group shadow-md">
          <div className="image">
            <img className="drop-shadow-lg" src={Panchito} alt="" />
          </div>
          <div className="card-info">
            <span className="flex items-center gap-2">
              <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
                Pancho ItaloArgento
              </span>
              <img src={Vegetarian} alt="Vegetariano" className="w-12" />
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              Masa de pizza, salchicha alemana, mayonesa de ajo, provenzal,
              salsa picante, ajíes en vinagre
            </p>
          </div>
        </article>

        <article className="card group shadow-md">
          <div className="image">
            <img className="drop-shadow-lg" src={Fresco} alt="" />
          </div>
          <div className="card-info">
            <span className="flex items-center gap-2">
              <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
                Fresco y burrata
              </span>
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              Colchón de rúcula, cherrys, pasas, aceitunas negras, burrata y pan
              del día
            </p>
          </div>
        </article>

        {/* Aquí empiezan las nuevas tarjetas */}

        <article className="card group shadow-md overflow-hidden">
          <div className="special-image">
            <img className="drop-shadow-lg" src={Dip} alt="" />
          </div>
          <div className="card-info text-center flex justify-center">
            <span className="flex items-center gap-2">
              <span className="bavi text-4xl text-blue group-hover:text-white duration-300 ease-in-out">
                Dip para borde
              </span>
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              Pasta de berenjena ahumada al horno de barro
            </p>
          </div>
        </article>

        <article className="card group shadow-md">
          <div className="special-image">
            <img className="drop-shadow-lg" src={Flancito} alt="" />
          </div>
          <div className="card-info">
            <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
              Flan
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              nuestro exquisito flan casero, se caracteriza por su textura suave
              y cremosa
            </p>
          </div>
        </article>

        <article className="card group shadow-md">
          <div className="special-image">
            <img className="drop-shadow-lg" src={QuesoDulce} alt="" />
          </div>
          <div className="card-info text-center flex justify-center">
            <span className="flex items-center gap-5">
              <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
                Queso y dulce
              </span>
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              Dulce de batata con queso cremón, salsa de chocolate y nueces
            </p>
          </div>
        </article>

        <article className="card group shadow-md">
          <div className="special-image">
            <img className="drop-shadow-lg" src={Tiramisu} alt="" />
          </div>
          <div className="card-info">
            <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
              Tiramisu
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              Disfruta de nuestro delicioso Tiramisú, un postre italiano clásico
            </p>
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default MostOrders;
