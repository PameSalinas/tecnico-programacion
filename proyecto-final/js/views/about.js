import Layout from "./layout.js";

function aboutPage() {
  Layout(`
    <section class="about-section">
    <h1>Acerca de<h1/>
    <p>Este sitio web está dedicado a explorar los luagres turisticos más facinantes de El Salvador. Aquí encontrarás una colección visual y descriptiva de destinos únicos, desde playas escondidas hasta pueblos con historia. </p>

    <p>¿Qué hay para descubrir aquí?</p>
    <ul>
    <li>Playas secretas</li>
    <li>Pueblos coloniales</li>
    <li>Montañas y volcanes</li>
    <li>Parques Acuáticos</li>
    </ul>
    </section>   
  `);
}

export default aboutPage;
