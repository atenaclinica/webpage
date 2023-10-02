import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScheduleAppointment from './ScheduleAppointment';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <div className="App font-playfair bg-pink-50 min-h-screen text-gray-800 ">

    {/* Header */}
    <header className="font-playfair bg-pink-200 text-white text-center h-screen flex flex-col justify-center">
        <h1 className="text-7xl font-bold text-shadow-outline">Atena Clínica de Saúde Feminina</h1>
        <p className="mt-2 text-4xl text-shadow">Cuidado especializado em saúde feminina</p>
    </header>



{/* About the Clinic */}
<section className="py-32 px-6 min-h-screen flex items-stretch bg-pink-50">
    <div className="container mx-auto flex flex-wrap">

        {/* Brief Text and Image on the Left */}
        <div className="w-1/2 px-12 space-y-8">
            <h2 className="text-7xl font-extrabold leading-tight tracking-tighter mb-8" data-aos="fade-up">Sobre a Clínica</h2>
            
            <p className="text-2xl leading-relaxed mb-12" data-aos="fade-up" data-aos-delay="100">
            Especializada no cuidado integral da mulher, a Clínica Atena adota uma abordagem multidisciplinar da saúde feminina. Em um ambiente seguro e respeitoso, priorizamos o bem-estar e o acolhimento em todas as fases da vida feminina. Aqui, sua saúde é nossa principal missão. Seja bem-vinda!
            </p>

            <div className="relative rounded-lg overflow-hidden shadow-xl" data-aos="fade-up" data-aos-delay="150">
                <img src={process.env.PUBLIC_URL + '/facade.jpg'}alt="Atena Clínica" className="w-full h-auto transition-transform duration-300 hover:scale-105" />
           
            </div>
        </div>

        {/* Especialidades on the Right */}
        <div className="w-1/2 px-12 flex flex-col justify-center" data-aos="fade-left" data-aos-delay="200">
            <h3 className="text-5xl font-bold leading-snug tracking-tight mb-4 border-b-2 border-pink-400 pb-4">Especialidades Médicas</h3>
            <div className="grid grid-cols-1 gap-6 mb-8">
                <span className="text-4xl leading-snug">Ginecologia</span>
                <span className="text-4xl leading-snug">Obstetrícia</span>
                <span className="text-4xl leading-snug">Endocrinologia</span>
                <span className="text-4xl leading-snug">Dermatologia</span>
                <span className="text-4xl leading-snug">Nutrologia</span>
            </div>
            
            <h3 className="text-5xl font-bold leading-snug tracking-tight mb-4 border-b-2 border-pink-400 pb-4">Outras Especialidades</h3>
            <div className="grid grid-cols-1 gap-6">
                <span className="text-4xl leading-snug">Nutrição</span>
                <span className="text-4xl leading-snug">Fisioterapia Pélvica</span>
                <span className="text-4xl leading-snug">Fisioterapia Obstétrica</span>
            </div>
        </div>

        </div>
</section>



      {/* Doctors' Information */}
      <section className="mt-12 py-20 px-6 bg-pink-50 h-screen flex flex-col justify-center items-center">
          <h2 className="text-4xl mb-8 font-semibold w-full text-center">Nossas Médicas</h2>
          
          <div className="flex flex-wrap justify-center space-x-16" data-aos="fade-up">

              {/* Example Doctor 1 */}
              <div className="flex flex-col items-center mb-12">
                  <img src={process.env.PUBLIC_URL + '/joana.jpeg'} alt="Dra. Joana Simioni" className="w-48 h-48 rounded-full mb-6" />
                  <h3 className="text-2xl font-medium">Dra. Joana Simioni</h3>
                  <p className="text-blue-500 text-xl mt-2">Ginecologista</p>
              </div>

              {/* Example Doctor 2 */}
              <div className="flex flex-col items-center mb-12">
                  <img src={process.env.PUBLIC_URL + '/camilla.jpeg'} alt="Dra. Camilla Scott" className="w-48 h-48 rounded-full mb-6" />
                  <h3 className="text-2xl font-medium">Dra. Camilla Scott</h3>
                  <p className="text-blue-500 text-xl mt-2">Obstetra</p>
              </div>

              {/* Example Doctor 3 */}
              <div className="flex flex-col items-center mb-12">
                  <img src={process.env.PUBLIC_URL + '/adrielly.jpeg'} alt="Dra. Adrielly Correia" className="w-48 h-48 rounded-full mb-6" />
                  <h3 className="text-2xl font-medium">Dra. Adrielly Correia</h3>
                  <p className="text-blue-500 text-xl mt-2">Endocrinologista</p>
              </div>

              {/* Example Doctor 4 */}
              <div className="flex flex-col items-center mb-12">
                  <img src={process.env.PUBLIC_URL + '/louise.jpeg'} alt="Dra. Louise Caillot" className="w-48 h-48 rounded-full mb-6" />
                  <h3 className="text-2xl font-medium">Dra. Louise Caillot</h3>
                  <p className="text-blue-500 text-xl mt-2">Dermatologista</p>
              </div>

              {/* Example Doctor 5 */}
              <div className="flex flex-col items-center mb-12">
                  <img src={process.env.PUBLIC_URL + '/katrine.jpeg'} alt="Dra. Katrine Souza" className="w-48 h-48 rounded-full mb-6" />
                  <h3 className="text-2xl font-medium">Dra. Katrine Souza</h3>
                  <p className="text-blue-500 text-xl mt-2">Nutróloga</p>
              </div>

              {/* Add more doctors as needed */}
          </div>
      </section>

      <div className="flex space-x-12">
{/* Sobre Nós Section */}
<section className="w-1/2">
    <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h2 className="text-6xl font-extrabold leading-tight tracking-tighter mb-8" data-aos="fade-up">Sobre Nós</h2>
        
        {/* Content */}
        <p className="text-2xl leading-relaxed text-justify" data-aos="fade-up" data-aos-delay="100">
            A clínica Atena foi inicialmente projetada e posteriormente fundada pelas médicas que compõem o corpo profissional desta. O planejamento iniciou em janeiro de 2022, concretizando-se em outubro de 2023 com a realização de um local especializado, que valoriza a saúde, cuidado e, principalmente, respeito com as pacientes.
        </p>
    </div>
</section>



          {/* Schedule Appointment Section */}
          <section className="w-1/3">
            <ScheduleAppointment />
          </section>
        </div>
        <div className="h-64"></div>  {/* This creates a space of 16rem (256px) */}


      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-6 md:px-12 flex flex-wrap justify-between items-center">

                {/* Contact Information */}
                <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0 space-y-4">
                    <h3 className="text-xl font-bold mb-2">Contate-nos</h3>
                    <ul className="space-y-2">
                        <li>
                            <i className="fas fa-whatsapp mr-2"></i>
                            <a href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer">WhatsApp: +55 (45) 99999-8888</a>
                        </li>
                        <li>
                            <i className="fas fa-phone-alt mr-2"></i>
                            Fone: +55 (45) 99999-8888
                        </li>
                        <li>
                            <i className="fas fa-envelope mr-2"></i>
                            Email: example@email.com
                        </li>
                        <li>
                            <i className="fas fa-map-marker-alt mr-2"></i>
                            Address: 123 Street, City, Country
                        </li>
                    </ul>
                </div>

                {/* Other Links or Standard Footer Parameters */}
                <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0 space-y-4">
                    <h3 className="text-xl font-bold mb-2">Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/about">Sobre Nós</a></li>
                        <li><a href="/services">Serviços</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/terms">Termos & Condições</a></li>
                        <li><a href="/privacy">Política de Privacidade</a></li>
                    </ul>
                </div>

                {/* Copyright */}
                <div className="w-full text-center md:text-left mt-6 md:mt-0">
                    <p>&copy; {new Date().getFullYear()} Atena Clínica Médica. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>


    </div>
  );
}

export default App;
