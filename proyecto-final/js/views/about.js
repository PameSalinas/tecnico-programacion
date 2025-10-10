import Layout from "./layout.js";

function aboutPage() {
  const aboutContent = `
    <section class="about-section">
      <div class="wrapper">
        <div class="about-section-left">
          <h1>Conócenos</h1>
          <p>
            Este sitio web tiene el objetivo de mostrar, de manera sencilla y clara, algunos de los lugares turísticos más bellos de El Salvador. Aquí vas a encontrar una selección de destinos que destacan por su belleza natural, historia o popularidad entre los visitantes.
          </p>

          <p>
             Aquí podrás conocer lo más importante de cada lugar antes de visitarlo: su nombre, una breve descripción, su precio, su ubicación, su clima, qué tipo de actividades ofrece y fotos del lugar.
          </p>

          <p>
            Nos encanta El Salvador y creemos que tiene muchísimos lugares increíbles que vale la pena visitar. A veces, solo falta tener la información organizada y accesible en un solo lugar, sin complicaciones. Este proyecto nació con esa intención: ayudarte a descubrir o redescubrir rincones turísticos del país sin tener que buscar en muchos lados.
          </p>

          <h2>¿Qué vas a encontrar aquí?</h2>
          <ul>
            <li>Destinos turísticos</li>
            <li>Información útil y directa de cada lugar</li>
            <li>Mapas de ubicación interactivos</li>
            <li>Galerías de imágenes reales</li>
            <li>Clima, afluencia y precio de entrada</li>
            <li>Experiencias y actividades para hacer en el lugar</li>
          </ul>

          <p>
            Esperamos que este sitio web sirva como una guía práctica para planear tus próximas salidas, o simplemente para conocer más sobre la riqueza turística que tiene El Salvador.
          </p>
        </div>

        <div class="about-section-right">
          <img 
            src="https://enlamira.com.sv/wp-content/uploads/2020/10/turismo.jpg" 
            alt="Collage de lugares turísticos de El Salvador" 
          />
        </div>
      </div>
    </section>
  `;
  Layout(aboutContent);
}

export default aboutPage;
