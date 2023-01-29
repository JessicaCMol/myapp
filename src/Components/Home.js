import React, { Component } from 'react';


class Home extends Component {

    state = {  } 
    render() { 
        return (
          
          
          
          <div className='container'>
          
          <div className='first'>
              
              <div className='introduccion'>
                <h1>TU CAMINO HACIA EL EXITO</h1>
                <p>Las empresas buscan personas con habilidades informáticas, <br/>
                gerenciales, de idiomas y mercadeo digital. Aprende con <br/> 
                las clases 100% en vivo por Internet de VLA. Tu rumbo a un <br/>
                  mejor empleo empieza aquí.</p>
              </div>
              <div className='buttons'>
              <button type="button" class="btn btn-outline-dark mt-2">Ver Cursos</button>
              <button type="button" class="btn btn-outline-dark mt-2" >Ver clases gratuitas</button>
              </div>
          </div>

          <div class="second">
            <p>Compañías que confian en VLA</p>
            <div class="row">
              <div class="col-6 col-sm-2">
               <img className='companias-img' src='https://logodownload.org/wp-content/uploads/2020/03/copa-airlines-logo.png'></img>
              </div>
              <div class="col-6 col-sm-2">
                <img className='companias-img' src='https://static.wikia.nocookie.net/logopedia/images/7/79/Cable_Onda_%282013%29.png/revision/latest?cb=20171029085821&path-prefix=es'></img>
              </div>
              <div class="col-6 col-sm-2">
                <img className='companias-img' src='https://lealto.com/wp-content/uploads/2021/02/Rocca_logo.png'></img>
              </div>
              <div class="col-6 col-sm-2">
               <img className='companias-img' src='https://www.trintech.com/wp-content/uploads/2020/04/Auxis-Logo.png'></img>
              </div>
              <div class="col-6 col-sm-2">
                <img className='companias-img' src='https://companieslogo.com/img/orig/CNXC_BIG-3709417e.png?t=1632605259'></img>
              </div>
              <div class="col-6 col-sm-2">
                <img className='companias-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Fujitsu-Logo.svg/1280px-Fujitsu-Logo.svg.png'></img>
              </div>
            </div> 
          </div>

          <div class="third">
            <h1>¿Por qué elegir a VLA?</h1>
              <p>Aquí vamos un paso más allá y te damos asistencia para conseguir un nuevo empleo, preparándote para <br/>
                  trabajar directamente con algunas de las empresas más importantes del mundo. </p>
               <p>Con VLA adquieres habilidades profesionales, certificados y títulos en línea. </p>
            <div class="row row-first">
              <div class="col-6 col-md-4">
                <p>Todos los cursos de VLA son enseñados totalmente <br/> 
                en vivo, con un método de enseñanza único. Las <br/>
                clases de VLA permiten a todos nuestros <br/>
                estudiantes interactuar con sus profesores y <br/>
                 responder todas sus dudas en tiempo real.</p>
              </div>
              <div class="col-6 col-md-4">
                <p>Te preparamos para ganar las certificaciones más <br/>
                   importantes de la industria como Cisco, PMP, <br/>
                   Microsoft Azure, Scrum y muchas más. Con <br/>
                   profesores expertos y certificados 100% en <br/>
                    vivo por Internet.</p>
              </div>
              <div class="col-6 col-md-4">
                <p>Uno de los más grandes beneficios de VLA <br/>
                  es que  aquí tienes un programa de asistencia <br/>
                  completamente gratis que te prepara y ayuda <br/>
                   a conseguir tu próxima entrevista de trabajo <br/>
                   para asegurar tu éxito.</p>
              </div>
            </div>
          </div>

          </div>
        
          

          

        );
    }
}
 
export default Home;