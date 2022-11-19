<script setup lang="ts">
import Banner from '@/components/Banner.vue'
import Presentation from '@/components/Presentation.vue'
import router from '@/router'
const redirectSweet = () => {
  router.push('/sweet')
}
const redirectDrinks = () => {
  router.push('/drinks')
}
const redirectFastFood = () => {
  router.push('/fastfood')
}
</script>

<template>
  <main
    class=""
    id="main"
  >
    <section class="banner">
      <Banner />
    </section>
    <Presentation />
    <section class="container_section">
      <h3>Bebidas</h3>
      <div class="container_img">
        <div
          class="card"
          @click="redirectDrinks"
        >
          <img
            src="../assets/main/frappes.jpg"
            alt=""
          />
          <span>Frappes</span>
          <div class="card_description">
            El café frappé o café frapé es un café con hielo cubierto de espuma
            elaborado a partir de café instantáneo. Es muy popular en Grecia y
            Chipre.
          </div>
        </div>
        <div
          class="card"
          @click="redirectDrinks"
        >
          <img
            src="../assets/main/coffes.jpg"
            alt=""
          />
          <span>Café</span>
          <div class="card_description">
            El café es la bebida que se obtiene a partir de los granos tostados
            y molidos de los frutos de la planta del café.
          </div>
        </div>
        <div
          class="card"
          @click="redirectDrinks"
        >
          <img
            src="../assets/main/frozen.jpg"
            alt=""
          />
          <span>Frozen</span>
          <div class="card_description">
            Las bebidas heladas son la compañía ideal del verano. Aquí
            encontrarás opciones refrescantes para iniciar el día o finalizar
            una jornada
          </div>
        </div>
        <div
          class="card"
          @click="redirectDrinks"
        >
          <img
            src="../assets/main/milshakes.jpg"
            alt=""
          />
          <span>Milkshakes</span>
          <div class="card_description">
            Es una bebida elaborada principalmente con leche y/o helado al que
            se le agrega frutas y otros ingredientes. Lo que hace especial a las
            milkshakes es la textura dulce y espesa que le aporta el helado...
          </div>
        </div>
        <div
          class="card"
          @click="redirectDrinks"
        >
          <img
            src="../assets/main/jugos.jpg"
            alt=""
          />
          <span>Jugos</span>
          <div
            class="card_description"
            @click="redirectDrinks"
          >
            Elaborados con frutas naturales son un importante complemento
            nutricional, un importante contribuyente a la salud, debido a las
            propiedades de las frutas y/o verduras.
          </div>
        </div>
      </div>
    </section>
    <section class="container_section">
      <h3>Dulces y Salados</h3>
      <div class="container_img">
        <div
          class="card"
          @click="redirectSweet"
        >
          <img
            src="../assets/main/waffles.jpg"
            alt=""
          />
          <span>Waffles</span>
          <div class="card_description">
            Los waffles tienen características inconfundibles, primero por su
            estilo en forma de rejillas o cuadrícula y segundo por su
            combinación crujiente en el exterior y ligeramente suave en el
            interior, un punto intermedio entre los pasteles y las galletas que
            a todos encanta.
          </div>
        </div>
        <div
          class="card"
          @click="redirectSweet"
        >
          <img
            src="../assets/main/crepes.jpg"
            alt=""
          />
          <span>Crepes</span>
          <div class="card_description">
            Receta europea de origen francés hecha fundamentalmente de harina de
            trigo, con la que se elabora una masa en forma de disco ...
          </div>
        </div>
        <div
          class="card"
          @click="redirectSweet"
        >
          <img
            src="../assets/main/yoguis.jpg"
            alt=""
          />
          <span>Yoguis</span>
          <div class="card_description">
            Los Yoguis son una comida fusionara de la comida asiática en esos
            paises se le conoce como wafles de hot dog, y como todos sabemos
            muchos orientales viven en nuestro territorio ...
          </div>
        </div>
      </div>
    </section>
    <section class="container_section">
      <h3>Fast Food</h3>
      <div class="container_img">
        <div
          class="card"
          @click="redirectFastFood"
        >
          <img
            src="../assets/main/sandwiches.jpg"
            alt=""
          />
          <span>Sandwiches</span>
          <div class="card_description">
            El sándwich, sánduche, sánguche, sangüich o emparedado es un tipo de
            hamburguesa, a modo de tentempié, aperitivo o la comida que se suele
            hacer a diario típica de la gastronomía inglesa
          </div>
        </div>
        <div
          class="card"
          @click="redirectFastFood"
        >
          <img
            src="../assets/main/hamburguesas.jpg"
            alt=""
          />
          <span>Hamburguesas</span>
          <div class="card_description">
            Una hamburguesa es un sándwich hecho a base de carne molida o de
            origen vegetal,​ aglutinada en forma de filete cocinado a la
            parrilla o a la plancha, aunque ...
          </div>
        </div>
        <div
          class="card"
          @click="redirectFastFood"
        >
          <img
            src="../assets/main/salchipapa.jpg"
            alt=""
          />
          <span>Salchipapas</span>
          <div class="card_description">
            La salchipapa o salchipapas es una comida rápida consumida como
            comida callejera en distintos países de Hispanoamérica.
          </div>
        </div>
        <div
          class="card"
          @click="redirectFastFood"
        >
          <img
            src="../assets/main/alitas.jpg"
            alt=""
          />
          <span>Alitas</span>
          <div class="card_description">
            El origen de las alitas es un tanto discutido, pero la versión más
            aceptada es que viene desde Búfalo, Nueva York, donde un restaurante
            al ordenar sus insumos diarios solamente le llegaron ...
          </div>
        </div>
        <div
          class="card"
          @click="redirectFastFood"
        >
          <img
            src="../assets/main/fritos.jpg"
            alt=""
          />
          <span>Fritos</span>
          <div class="card_description">
            Los fritos, al igual que toda la comida típica colombiana, son una
            representación de la cultura del país, y al mismo tiempo, un
            homenaje a las tradiciones de las diferentes regiones de Colombia.
          </div>
        </div>
        <div
          class="card"
          @click="redirectFastFood"
        >
          <img
            src="../assets/main/platos_carta.jpg"
            alt=""
          />
          <span>Platos a la carta</span>
          <div class="card_description">
            Por lo general, el sabor de la comida es lo que más recuerdan las
            personas. Ya sea dulce, agrío, salado, picante o amargo, permanecerá
            en la memoria del cliente. Si un filete tiene el sabor perfecto, un
            cliente lo recordará.
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.banner {
  background-image: url(https://images.pexels.com/photos/4098900/pexels-photo-4098900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
  background-size: cover;
  background-attachment: fixed;
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.container_section {
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: 3rem auto;
  border: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}
.container_section h3 {
  font-size: 2.3rem;
  font-weight: 700;
  margin: 1rem 0;
  transition: all 0.5s ease;
}
.container_section:hover {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
}

.container_section:hover h3 {
  color: #f2a365;
  text-shadow: 0 0 10px #f2a365;
}

.container_img {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  justify-content: space-around;

  margin: 0 auto;
  max-width: 1200px;
}

.container_img img {
  width: 400px;
  height: 300px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
}
.card {
  position: relative;
  cursor: pointer;
}
.card img {
  transition: all 0.5s ease;
}
.card:hover img {
  filter: blur(2px) brightness(0.5) saturate(2);
}

.card_description {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: all 0.5s ease;
}
.card:hover .card_description {
  height: 100%;
}
.card span {
  font-size: 1.4rem;
}
</style>
