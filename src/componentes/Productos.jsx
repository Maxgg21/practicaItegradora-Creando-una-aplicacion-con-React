import React from 'react';
import reloj10 from '../assets/img/reloj10.jpg'
import reloj12 from '../assets/img/reloj12.jpg'
import reloj5 from '../assets/img/reloj5.jpg'
import reloj1 from '../assets/img/reloj1.jpg'




function Productos(params) {
    return (
        <main class="productos">
                  <h2 id="productos">Nuestros productos</h2>
                  <article>
                        <img src={reloj10} alt="Reloj" />
                        <h2>Lorem, ipsum.</h2>
                        <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia blanditiis natus dicta error, cum alias ipsam libero odio impedit, fuga at dolore voluptatem illum
                              pariatur cupiditate fugit, ullam amet?
                        </p>
                        <h2>Precio: $450</h2>
                        <button>Ver más</button>
                  </article>
                  <article>
                        <img src={reloj12} alt="Reloj" />
                        <h2>Lorem, ipsum.</h2>
                        <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia blanditiis natus dicta error, cum alias ipsam libero odio impedit, fuga at dolore voluptatem illum
                              pariatur cupiditate fugit, ullam amet?
                        </p>
                        <h2>Precio: $650</h2>
                        <button>Ver más</button>
                  </article>
                  <article>
                        <img src={reloj1} alt="Reloj" />
                        <h2>Lorem, ipsum.</h2>
                        <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia blanditiis natus dicta error, cum alias ipsam libero odio impedit, fuga at dolore voluptatem illum
                              pariatur cupiditate fugit, ullam amet?
                        </p>
                        <h2>Precio: $945</h2>
                        <button>Ver más</button>
                  </article>
                  <article>
                        <img src={reloj5} alt="Reloj" />
                        <h2>Lorem, ipsum.</h2>
                        <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia blanditiis natus dicta error, cum alias ipsam libero odio impedit, fuga at dolore voluptatem illum
                              pariatur cupiditate fugit, ullam amet?
                        </p>
                        <h2>Precio: $999</h2>
                        <button>Ver más</button>
                  </article>
            </main>
    );
};

export default Productos