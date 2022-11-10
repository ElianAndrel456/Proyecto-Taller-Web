<script setup lang="ts"></script>

<template>
  <section class="container">
    <img
      class="image"
      src="https://images.pexels.com/photos/11443453/pexels-photo-11443453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt=""
    />
    <div class="description">
      <h3 class="subtitle">Vive la experiencia</h3>
      <h4 class="title_logo">Mokita</h4>
      <span>¿Quienes somos?</span>
      <p class="paragraph">
        Mokita una empresa comercializadora de postres y bebidas , que busca
        consolidarse en el mercado y con sus clientes ofreciendo un servicio de
        excelencia y brindando los mejores precios hacia el publico.
      </p>
      <h3 class="subtitle">Nuestra Carta</h3>
      <a
        href="https://firebasestorage.googleapis.com/v0/b/webproject-73f1c.appspot.com/o/Menú%20de%20Cafetería%20Premium%20Ilustrado%20Pastel%20Marrón.pdf?alt=media&token=83903508-6fe4-4bc0-b05d-115e19a8d0f1"
        target="_blank"
        rel="noopener noreferrer"
        class="reference"
      >
        Ver carta
      </a>
    </div>
  </section>
</template>

<style scoped>
.container {
  padding: 4rem 0;
  margin: 0 auto;
  width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.image {
  height: 500px;
  width: 100%;
  filter: saturate(1.5);
  object-fit: cover;
  object-position: bottom;
}
.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
}
.subtitle {
  font-size: var(--subtitle);
}

.title_logo {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 4rem;
  color: brown;
}
.paragraph {
  font-size: var(--size-normal);
  margin-bottom: 2.5rem;
  color: grey;
}
.reference {
  display: block;
  width: 100px;
  text-align: center;
  border-radius: 2px;
  padding: 2px 4px;
  background: red;
  color: var(--color-text);
  text-decoration: none;
}
</style>
