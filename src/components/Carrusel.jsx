import { Carousel, Typography } from "@material-tailwind/react";
import CumbiaMomma from '../assets/imgs/cumbiamomma.jpeg';
import Costanera from '../assets/imgs/Costanera.jpeg';
import Diegol from '../assets/imgs/diego1.jpeg';
import DiaDelAmor from '../assets/imgs/diadelamor.jpeg';
import PrimerCumpleEstilo from '../assets/imgs/primercumpleestilo.jpeg';
import FlashDay from '../assets/imgs/flashday.jpeg';
import NoquisPizza from '../assets/imgs/noquisenmasadepizza.jpeg';
import Primavera from '../assets/imgs/primavera.jpeg';
import PizzaLibreApac from '../assets/imgs/pizzalibreporapac.jpeg';
import SegundoCumpleEstilo from '../assets/imgs/segundocumpleestilo.jpeg';
import FiestaPatria from '../assets/imgs/fiestapatria.jpeg';
import Layout from "./Layout";

const Carrusel = () => {
    return (
        <>
            <Layout id="events" className={"mx-auto px-4 md:px-8 lg:px-0 lg:max-w-[1120px] font-poppins pb-10 pt-8 h-fit"}>
                <div className="flex flex-col items-center mb-8">
                    <h2 className="text-5xl lg:text-7xl text-blue bavi mb-4 text-center drop-shadow-blue">
                        Eventos
                    </h2>
                    <h3 className="flex items-center text-base text-gray font-poppins mb-2 text-center w-[90%] md:w-[60%]">
                        <i className="fas fa-flag icon-mr"></i> Como nuestro espacio es para todxs, buscamos que aquellos que nos eligen puedan crear momentos que quedan en nuestra historia. 
                    </h3>
                </div>
                <Carousel loop={true} autoplay={true} className="rounded-lg shadow-md h-[70vh] overflow-hidden mb-10">
                    {/* 1 */}
                    <div className="relative h-full w-full">
                        <img src={Diegol} alt="Cumpleaños de nuestro D10S" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 grid h-full w-full items-center bg-black/40">
                            <div className="w-3/4 mx-auto md:w-2/4 text-center">
                                <Typography color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl bavi">
                                    Cumpleaños de nuestro D10S
                                </Typography>
                                <Typography variant="lead" color="white" className="opacity-80">
                                    Festejamos el cumpleaños del más grande
                                </Typography>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="relative h-full w-full">
                        <img src={Costanera} alt="Evento gastronómico en la costanera" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 grid h-full w-full items-center bg-black/40">
                            <div className="w-3/4 mx-auto md:w-2/4 text-center">
                                <Typography color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl bavi">
                                    Vivamos sabores
                                </Typography>
                                <Typography variant="lead" color="white" className="opacity-80">
                                    Fuimos parte de la experiencia en la Costanera de Campana junto a muchísimos emprendedores
                                </Typography>
                            </div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="relative h-full w-full">
                        <img src={CumbiaMomma} alt="Artistas en vivo" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 grid h-full w-full items-center bg-black/40">
                            <div className="w-3/4 mx-auto md:w-2/4 text-center">
                                <Typography color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl bavi">
                                    Artistas en vivo
                                </Typography>
                                <Typography variant="lead" color="white" className="opacity-80">
                                    Disfrutamos de artistas en vivo que le ponen toda la onda a cada evento
                                </Typography>
                            </div>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className="relative h-full w-full">
                        <img src={DiaDelAmor} alt="Día del Amor" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 grid h-full w-full items-center bg-black/40">
                            <div className="w-3/4 mx-auto md:w-2/4 text-center">
                                <Typography color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl bavi">
                                    Día del Amor
                                </Typography>
                                <Typography variant="lead" color="white" className="opacity-80">
                                    Celebramos el amor en todas sus formas, un día lleno de emociones y recuerdos inolvidables
                                </Typography>
                            </div>
                        </div>
                    </div>
                    {/* 5 */}
                    <div className="relative h-full w-full">
                        <img src={PrimerCumpleEstilo} alt="Primer cumpleaños de Estilo" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 grid h-full w-full items-center bg-black/40">
                            <div className="w-3/4 mx-auto md:w-2/4 text-center">
                                <Typography color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl bavi">
                                    Primer cumpleaños de Estilo
                                </Typography>
                                <Typography variant="lead" color="white" className="opacity-80">
                                    Festejamos nuestro primer año con música, comida y muchas sorpresas
                                </Typography>
                            </div>
                        </div>
                    </div>
                    {/* 6 */}
                    <div className="relative h-full w-full">
                        <img src={FlashDay} alt="Flash Day" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 grid h-full w-full items-center bg-black/40">
                            <div className="w-3/4 mx-auto md:w-2/4 text-center">
                                <Typography color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl bavi">
                                    Flash Day
                                </Typography>
                                <Typography variant="lead" color="white" className="opacity-80">
                                    Un día lleno de arte y creatividad con tatuajes disponibles todo el día
                                </Typography>
                            </div>
                        </div>
                    </div>
                    {/* 8 */}
                    <div className="relative h-full w-full">
                        <img src={NoquisPizza} alt="Ñoquis en masa de pizza" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 grid h-full w-full items-center bg-black/40">
                            <div className="w-3/4 mx-auto md:w-2/4 text-center">
                                <Typography color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl bavi">
                                    Los 29 hacemos ñoquis con masa de pizza
                                </Typography>
                                <Typography variant="lead" color="white" className="opacity-80">
                                    Ñoquis en masa de pizza, todo casero y del día
                                </Typography>
                            </div>
                        </div>
                    </div>
                    {/* 9 */}
                    <div className="relative h-full w-full">
                        <img src={Primavera} alt="Primaveras" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 grid h-full w-full items-center bg-black/40">
                            <div className="w-3/4 mx-auto md:w-2/4 text-center">
                                <Typography color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl bavi">
                                    Primaveras
                                </Typography>
                                <Typography variant="lead" color="white" className="opacity-80">
                                    Celebraciones llenas de color y vida, dando la bienvenida a la estación más alegre del año
                                </Typography>
                            </div>
                        </div>
                    </div>
                    {/* 10 */}
                    <div className="relative h-full w-full">
                        <img src={PizzaLibreApac} alt="Pizza libre por Apac" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 grid h-full w-full items-center bg-black/40">
                            <div className="w-3/4 mx-auto md:w-2/4 text-center">
                                <Typography color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl bavi">
                                    Pizza libre por Apac
                                </Typography>
                                <Typography variant="lead" color="white" className="opacity-80">
                                    Una noche dedicada a disfrutar de la mejor pizza libre en apoyo a la sociedad protectora de animales APAC
                                </Typography>
                            </div>
                        </div>
                    </div>
                    {/* 11 */}
                    <div className="relative h-full w-full">
                        <img src={SegundoCumpleEstilo} alt="Segundo cumpleaños de Estilo" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 grid h-full w-full items-center bg-black/40">
                            <div className="w-3/4 mx-auto md:w-2/4 text-center">
                                <Typography color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl bavi">
                                    Segundo cumpleaños de Estilo
                                </Typography>
                                <Typography variant="lead" color="white" className="opacity-80">
                                    Celebramos dos años de momentos inolvidables
                                </Typography>
                            </div>
                        </div>
                    </div>
                    {/* 12 */}
                    <div className="relative h-full w-full">
                        <img src={FiestaPatria} alt="Fiesta patria" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 grid h-full w-full items-center bg-black/40">
                            <div className="w-3/4 mx-auto md:w-2/4 text-center">
                                <Typography color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl bavi">
                                    Fiesta patria
                                </Typography>
                                <Typography variant="lead" color="white" className="opacity-80">
                                    Un día para celebrar nuestra patria con orgullo y alegría
                                </Typography>
                            </div>
                        </div>
                    </div>
                </Carousel>

                <div className="flex flex-col items-center">
                    <h2 className="w-full lg:w-[60%] text-5xl lg:text-7xl text-blue bavi mb-4 text-center drop-shadow-blue">
                        Todo lo que vivimos en un video
                    </h2>
                    <p className="text-gray font-poppins mb-8 text-center w-[90%] md:w-[50%]">Trabajamos y nos divertimos, porque el buen sabor también lo arman los buenos recuerdos.</p>
                    <div className="w-full rounded-lg shadow-md h-[70vh] overflow-hidden">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/Dn4fBsg3Um8?si=ZDfxeMZRbPe6Z9CY"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </Layout>
            <div className="z-50 bg-[url('./assets/blackNavBorder.svg')] w-full h-6 bg-no-repeat rotate-180 -mt-1"></div>
        </>
    );
}

export default Carrusel;
