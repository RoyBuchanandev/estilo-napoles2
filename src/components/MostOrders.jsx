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
import Vegana from "../assets/imgs/vegana.png";
import Vegetarian from "../assets/imgs/vegetarian.png";
import Vegan from "../assets/imgs/vegan.png";

const MostOrders = () => {
  return (
    <Layout className={"h-fit"}>
      
      <h2 id="menu" className="text-5xl lg:text-7xl text-blue bavi mb-8 lg:mb-16 text-center">
        Nuestro Menú
      </h2>
      <section className="flex flex-wrap justify-between flex-col md:flex-row gap-8">
        
      <article className="card group shadow-xl overflow-hidden">
  <div className="image">
    <img className="drop-shadow-lg" src={Cuatroque} alt="" />
  </div>
  <div className="card-info text-center flex justify-center">
    <span className="flex items-center">
      <span className="bavi text-4xl text-blue group-hover:text-white duration-300 ease-in-out">
        Cuatroque
      </span>
      <img src={Vegetarian} alt="Vegetariano" className="w-6 h-6 ml-2 mt-1" />
    </span>
    <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
      Salsa pomodoro, muzzarella, provolone, parmesano, queso azul, nueces, orégano y aceite de oliva extra virgen de pepperoncino.
    </p>
  </div>
</article>




<article className="card group shadow-xl">
  <div className="image">
    <img className="drop-shadow-lg" src={Barrilete} alt="" />
  </div>
  <div className="card-info text-center flex justify-center">
    <span className="flex items-center">
      <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
        Barrilete Cósmico
      </span>
      <img src={Vegetarian} alt="Vegetariano" className="w-6 h-6 ml-2 mt-1" />
    </span>
    <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
      Salsa pomodoro, bocconcino, albahaca, crema de pesto, aceite de oliva extra vírgen de ajo y rayadura de limón
    </p>
  </div>
</article>


        <article className="card group shadow-xl">
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
        
        <article className="card group shadow-xl overflow-hidden">
          <div className="image">
            <img className="drop-shadow-lg" src={Especial} alt="" />
          </div>
          <div className="card-info text-center flex justify-center">
            <span className="bavi text-4xl text-blue group-hover:text-white duration-300 ease-in-out">
              Especial
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              Salsa pomodoro, muzzarella, jamón natural, morrones asados, aceitunas negras, orégano, oliva extra virgen de ajo
            </p>
          </div>
        </article>

        <article className="card group shadow-xl">
  <div className="image">
    <img className="drop-shadow-lg" src={Fuga} alt="" />
  </div>
  <div className="card-info text-center flex justify-center">
    <span className="flex items-center">
      <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
        Fugazzeta
      </span>
      <img src={Vegetarian} alt="Vegetariano" className="w-6 h-6 ml-2 mt-1" />
    </span>
    <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
      Muzzarella, variedad de cebollas, orégano, mix de aceitunas, oliva extra virgen al ajo
    </p>
  </div>
</article>


        <article className="card group shadow-xl">
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
        
          <article className="card group shadow-xl overflow-hidden">
  <div className="image">
    <img className="drop-shadow-lg" src={Margherita} alt="" />
  </div>
  <div className="card-info text-center flex justify-center">
    <span className="flex items-center">
      <span className="bavi text-4xl text-blue group-hover:text-white duration-300 ease-in-out">
        Margherita
      </span>
      <img src={Vegetarian} alt="Vegetariano" className="w-6 h-6 ml-2 mt-1" />
    </span>
    <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
      Salsa pomodoro, bocconcino, albahaca, oliva extra virgen al ajo
    </p>
  </div>
</article>


<article className="card group shadow-xl">
  <div className="image">
    <img className="drop-shadow-lg" src={Napo} alt="" />
  </div>
  <div className="card-info text-center flex justify-center">
    <span className="flex items-center">
      <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
        Napo
      </span>
      <img src={Vegetarian} alt="Vegetariano" className="w-6 h-6 ml-2 mt-1" />
    </span>
    <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
      Salsa pomodoro, muzzarella, cherry, provenzal, aceitunas
    </p>
  </div>
</article>


        <article className="card group shadow-xl">
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

        <article className="card group shadow-xl overflow-hidden">
  <div className="image">
    <img className="drop-shadow-lg" src={Marinara} alt="" />
  </div>
  <div className="card-info text-center flex justify-center">
    <span className="flex items-center">
      <span className="bavi text-4xl text-blue group-hover:text-white duration-300 ease-in-out">
        Marinara
      </span>
      <img src={Vegetarian} alt="Vegetariano" className="w-6 h-6 ml-2 mt-1" />
    </span>
    <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
      Salsa pomodoro, láminas de ajo, albahaca, oliva extra virgen
    </p>
  </div>
</article>

<article className="card group shadow-xl">
  <div className="image">
    <img className="drop-shadow-lg" src={Funghi} alt="" />
  </div>
  <div className="card-info text-center flex justify-center">
    <span className="flex items-center">
      <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
        Funghi
      </span>
      <img src={Vegetarian} alt="Vegetariano" className="w-6 h-6 ml-2 mt-1" />
    </span>
    <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
      Salsa pomodoro, muzzarella, provolone, portobellos a la manteca y aceite de perejil
    </p>
  </div>
</article>

<article className="card group shadow-xl">
  <div className="image">
    <img className="drop-shadow-lg" src={Muzza} alt="" />
  </div>
  <div className="card-info text-center flex justify-center">
    <span className="flex items-center">
      <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
        Muzza
      </span>
      <img src={Vegetarian} alt="Vegetariano" className="w-6 h-6 ml-2 mt-1" />
    </span>
    <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
      Salsa pomodoro, muzzarella, orégano, aceitunas
    </p>
  </div>
</article>


                                            {/* Aquí empiezan las nuevas tarjetas */}
        
                                            <article className="card group shadow-xl overflow-hidden">
          <div className="image">
            <img className="drop-shadow-lg" src={Rucola} alt="" />
          </div>
          <div className="card-info text-center flex justify-center">
            <span className="bavi text-4xl text-blue group-hover:text-white duration-300 ease-in-out">
            Rucola
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
            Salsa pomodoro, muzzarela, jamón crudo, rúcula, pesto de rúcula, parmesano fresco y oliva extra virgen
            </p>
          </div>
        </article>

        <article className="card group shadow-xl">
  <div className="image">
    <img className="drop-shadow-lg" src={Margherita} alt="" />
  </div>
  <div className="card-info text-center flex justify-center">
    <span className="flex items-center">
      <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
        Vegana
      </span>
      <img src={Vegan} alt="Vegetariano" className="w-6 h-6 ml-2 mt-1" />
    </span>
    <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
    Salsa pomodoro, queso vegano, albahaca, oliva extra virgen al ajo
    </p>
  </div>
</article>

<article className="card group shadow-xl">
  <div className="image">
    <img className="drop-shadow-lg" src={Papa} alt="" />
  </div>
  <div className="card-info text-center flex justify-center">
    <span className="flex items-center">
      <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
        Papa & Pesto
      </span>
      <img src={Vegetarian} alt="Vegetariano" className="w-6 h-6 ml-2 mt-1" />
    </span>
    <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
    Muzzarella, papa en rodajas, romero, oliva extra virgen, pesto
    </p>
  </div>
</article>



                    {/* Aquí empiezan las nuevas tarjetas */}
        
                    <article className="card group shadow-xl overflow-hidden">
  <div className="image">
    <img className="drop-shadow-lg" src={Faina} alt="" />
  </div>
  <div className="card-info text-center flex justify-center">
    <span className="flex items-center">
      <span className="bavi text-4xl text-blue group-hover:text-white duration-300 ease-in-out">
        Faina
      </span>
      <img src={Vegetarian} alt="Vegetariano" className="w-6 h-6 ml-2 mt-1" />
    </span>
    <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
    Disfruta de este acompañamiento tradicional con nuestras pizzas 
    </p>
  </div>
</article>


        <article className="card group shadow-xl">
          <div className="image">
            <img className="drop-shadow-lg" src={Panchito} alt="" />
          </div>
          <div className="card-info">
            <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
            Pancho ItaloArgentino
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
            Masa de pizza, salchicha alemana, mayonesa de ajo, provenzal, salsa picante, ajíes en vinagre
            </p>
          </div>
        </article>

        <article className="card group shadow-xl">
  <div className="image">
    <img className="drop-shadow-lg" src={Fresco} alt="" />
  </div>
  <div className="card-info">
    <span className="flex items-center">
      <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
        Fresco y burrata
      </span>
      <img src={Vegetarian} alt="Vegetariano" className="w-6 h-6 ml-2 mt-1" />
    </span>
    <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
      Colchón de rúcula, cherrys, pasas, aceitunas negras, burrata y pan del día
    </p>
  </div>
</article>

{/* Aquí empiezan las nuevas tarjetas */}

<article className="card group shadow-xl overflow-hidden">
  <div className="image">
    <img className="drop-shadow-lg" src={Dip} alt="" />
  </div>
  <div className="card-info text-center flex justify-center">
    <span className="flex items-center">
      <span className="bavi text-4xl text-blue group-hover:text-white duration-300 ease-in-out">
        Dip para borde
      </span>
      <img src={Vegetarian} alt="Vegetariano" className="w-6 h-6 ml-2 mt-1" />
    </span>
    <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
      Pasta de berenjena ahumada al horno de barro
    </p>
  </div>
</article>

        <article className="card group shadow-xl">
          <div className="image">
            <img className="drop-shadow-lg" src={Flancito} alt="" />
          </div>
          <div className="card-info">
            <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
            Flan
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
            nuestro exquisito flan casero, se caracteriza por su textura suave y cremosa
            </p>
          </div>
        </article>

        <article className="card group shadow-xl">
          <div className="image">
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
         {/* Aquí agregamos el botón "Ver Precios" al final de la sección */}
         <div className="text-center mt-8">
         <button className="bg-blue text-white hover:bg-blue-700 font-bold py-2 px-4 rounded" onClick={() => window.open('https://drive.google.com/file/d/1Rxgtw-inmKYIKIfUgWw-d-Sjq40d8Zpd/view?usp=sharing')}>
  Ver Precios
</button>

      </div>
    </Layout>
  );
};

export default MostOrders;
