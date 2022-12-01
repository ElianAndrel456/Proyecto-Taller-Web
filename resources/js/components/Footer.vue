<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <span><RouterLink to="/mision">Mision</RouterLink></span>
      <span><RouterLink to="/vision">Vision</RouterLink></span>
      <span
        ><a href="https://wa.me/51935364598?text=Hola%20buen%20día"
          >Contacto</a
        ></span
      >

      <span><RouterLink to="/mision">Horarios de Atencion</RouterLink></span>

      <span>
        <RouterLink to="/book">Libro de reclamaciones</RouterLink>
      </span>
      <span>
        <RouterLink to="/group">Desarrollado por grupo 2</RouterLink>
      </span>
    </div>
    <div class="social">
      <a
        href="https://www.instagram.com/mokita_08/?igshid=YmMyMTA2M2Y%3D"
        target="_blank"
      >
        <font-awesome-icon icon="fa-brands fa-instagram" />
      </a>
      <a
        href="https://www.facebook.com/people/Mokita/100085343790899/"
        target="_blank"
      >
        <font-awesome-icon icon="fa-brands fa-facebook" />
      </a>
      <a href="">
        <font-awesome-icon icon="fa-solid fa-heart" class="heart"/>
      </a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  border-top: 1px solid var(--color-text);
}
.footer__container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
}
.footer__container span {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-text);
}
.footer__container span a {
  color: var(--color-text);
  text-decoration: none;
  transition: all 0.5s ease;
}
.footer .social {
  display: flex;
  font-size: 1.3rem;
}
.social a {
  margin: 0 1rem;
  text-decoration: none;
  color: var(--color-text);
}
.heart {
  color: red;
  animation: heartBeat 2.1s infinite;
}
@keyframes heartBeat {
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1.3);
  }
  40% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.3);
  }
  80% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
