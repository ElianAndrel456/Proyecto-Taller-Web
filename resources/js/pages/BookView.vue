<script setup lang="ts"></script>

<template>
    <center><a> Formulario Libro de Reclamaciones</a></center>
    <br />

    <center>
        <div>
            Conforme a lo establecido en código de la Protección y Defensa del
            consumidor contamos con Libro de Reclamaciones a tu disposición para
        </div>
    </center>
    <center>
        <div>
            que puedeas registrar tu queja o reclamo acerca de algun pedido o
            transaccion realizad a a traves de nuestra página.
        </div>
    </center>
    <br />
    <br />
    <form>
        <fieldset>
            <legend>IDENTIIFCACIÓN DEL CONSUMIDOR RECLAMANTE</legend>
            <label>Fecha :</label>
            <input type="datetime-local" /> <br />
            <label> Nombre(s):</label>
            <input type="text" /> <br />
            <label> Apellidos: </label>
            <input type="text" /> <br />
            <label> Correo: </label>
            <input type="text" /> <br />
            <label> Teléfono: </label>
            <input type="text" /> <br />
            <label> Tipo de documento: </label>
            <select>
                <option>DNI</option>
                <option>CE</option>
            </select>
            <br />
            <label>Num de documento:</label>
            <input type="number" /> <br />
            <label>Menor de edad :</label>
            <select>
                <option>si</option>
                <option>No</option></select
            ><br />
            <label> Departamento :</label>
            <select>
                <option>AMAZONAS</option>
                <option>ANCASH</option>
                <option>APURIMAC</option>
                <option>AREQUIPA</option>
                <option>AYACUCHO</option>
                <option>CAJAMARCA</option>
                <option>CUSCO</option>
                <option>HUANCAVELICA</option>
                <option>HUANUCO</option>
                <option>ICA</option>
                <option>JUNIN</option>
                <option>LA LIBERTAD</option>
                <option>LAMBAYEQUE</option>
                <option>LIMA</option>
                <option>LORETO</option>
                <option>MADRE DE DIOS</option>
                <option>MOQUEGUA</option>
                <option>PASCO</option>
                <option>PIURA</option>
                <option>PROV. CONST. DEL CALLAO</option>
                <option>PUNO</option>
                <option>SAN MARTIN</option>
                <option>TACNA</option>
                <option>TUMBES</option>
                <option>UCAYALI</option></select
            ><br />
            <label> Dirección</label>
            <input type="text" />
        </fieldset>
        <br />

        <fieldset>
            <legend>IDENTIIFCACIÓN DEL BIEN CONTRATADO</legend>
            <label> Tipo:</label><br />
            <input type="checkbox" name="identi" /><label>Producto</label>
            <input type="checkbox" name="identi" /><label>Servicio</label>
            <br />

            <label>Monto</label>
            <input type="text" placeholder="Monto" required /> <br />
        </fieldset>

        <fieldset>
            <legend>DETALLE DE LA RECLAMACIÓN Y PEDIDO DEL CONSUMIDOR</legend>
            <input type="radio" name="identi" /><label>Reclamo</label>
            <input type="radio" name="identi" /><label>Queja</label> <br />
            <label>Numero de pedido</label>
            <input type="number" /><br />
            <label>Fecha de pedido</label>
            <input type="date" /><br />
            <label>Detalle </label><br />
            <textarea name="" id="" cols="50" rows="6"></textarea><br />
            <label>Pedido en concreto:</label><br />
            <textarea name="" id="" cols="50" rows="6"></textarea>
        </fieldset>
        <br />

        <center><button type="submit">ENVIAR</button></center>
    </form>
</template>
