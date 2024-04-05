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

const MostOrders = () => {
  return (
    <Layout className={"h-fit"}>
      <h2 id="menu" className="text-5xl lg:text-7xl text-blue bavi mb-8 lg:mb-16 text-center">
        Las que más salen
      </h2>
      <h3 className="text-xl lg:text-2xl text-gray mb-4 lg:mb-8 text-center">100% artesanal - 100% a la leña</h3>
      <section className="flex flex-wrap justify-between flex-col md:flex-row gap-8">
        
        <article className="card group shadow-xl overflow-hidden">
          <div className="image">
            <img className="drop-shadow-lg" src={Cuatroque} alt="" />
          </div>
          <div className="card-info text-center flex justify-center">
            <span className="bavi text-4xl text-blue group-hover:text-white duration-300 ease-in-out">
              Cuatroque
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              Salsa pomodoro, muzzarella, provolone, parmesano, queso azul,
              nueces, orégano y aceite de oliva extra virgen de pepperoncino.
            </p>
          </div>
        </article>

        <article className="card group shadow-xl">
          <div className="image">
            <img className="drop-shadow-lg" src={Barrilete} alt="" />
          </div>
          <div className="card-info">
            <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
              Barrilete Cosmico
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
              Salsa pomodoro, bocconcino, albahaca, crema de pesto, aceite de
              oliva extra vírgen de ajo y rayadura de limón
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
              vinagre, albahaca y aceite de oliva extra vírgen de ajo.
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
          <div className="card-info">
            <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
              Fugazzeta
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
            <span className="bavi text-4xl text-blue group-hover:text-white duration-300 ease-in-out">
            Margherita
            </span>
            <p className="text-gray group-hover:text-white duration-500 ease-in-out px-6">
            Salsa pomodoro, bocconcino, albahaca, oliva extra virgen al ajo.
            </p>
          </div>
        </article>

        <article className="card group shadow-xl">
          <div className="image">
            <img className="drop-shadow-lg" src={Napo} alt="" />
          </div>
          <div className="card-info">
            <span className="bavi text-3xl text-blue group-hover:text-white duration-300 ease-in-out">
            Napo
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
        
      </section>
         {/* Aquí agregamos el botón "Ver Precios" al final de la sección */}
         <div className="text-center mt-8">
         <button className="bg-blue text-white hover:bg-blue-700 font-bold py-2 px-4 rounded" onClick={() => window.open('https://drive.google.com/file/d/1CfYsYqfpN6PsaYqkjAIMhpjwHQ0TWhLp/view?usp=sharing')}>
  Ver Precios
</button>

      </div>
    </Layout>
  );
};

export default MostOrders;
