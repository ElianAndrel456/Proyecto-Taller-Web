<script setup lang="ts"></script>
<template>
    <div class="container_group">
        <h1 class="title">Integrantes</h1>
        <div class="grid_group">
            <div class="integrant">
                <img src="../assets/create/jordan.jpg" alt="random" />
                <p>Gonzales Barcayola Jordan Piero</p>
                <p>u19211847</p>
            </div>
            <div class="integrant">
                <img src="../assets/create/jorge.jpeg" alt="random" />
                <p>Astoray Campos Jorge Alonso</p>
                <p>U18311011</p>
            </div>
            <div class="integrant">
                <img src="../assets/create/elian.jpeg" alt="random" />
                <p>Joyo Villanueva Elian Andre</p>
                <p>U20208415</p>
            </div>
            <div class="integrant">
                <img src="" alt="random" />
                <p>nombre</p>
            </div>
            <div class="integrant">
                <img src="" alt="random" />
                <p>nombre</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container_group {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
}
.title {
    font-size: 2rem;
    font-weight: 600;
    margin: 2rem;
}
.grid_group {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    width: 100%;
    max-width: 1200px;
    padding: 0 2rem;
    gap: 3rem;
}
.integrant {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.integrant img {
    width: 300px;
    height: 300px;
    border-radius: 5%;
    margin: 0 1rem;
}
.integrant p {
    margin: 0 2rem;
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--color-text);
}
</style>
