<script setup lang="ts"></script>
<template>
    <form>
        <fieldset>
            <legend>Tienda , Horario y Zona</legend>
            <h2>Horario</h2>
            <br />
            <label>
                <b>Tenemos atencion de delivery a partir de las hasta</b></label
            ><br />
            <input type="time1" value="08:00 " readonly /><br />
            <label><b>hasta las </b></label><br />

            <input type="time2" value="19:00" readonly /><br />

            <label><b>Solo para Villa el Villas El Salvador</b></label>
            <br />

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31195.61643909983!2d-76.96089731205764!3d-12.217641150238169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105bbdf86cf55fb%3A0xe3f98719d1fabbd4!2sVilla%20EL%20Salvador!5e0!3m2!1ses-419!2spe!4v1663794713393!5m2!1ses-419!2spe"
                width="600"
                height="450"
                style="border: 0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </fieldset>
    </form>
</template>
