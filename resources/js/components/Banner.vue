<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const elts = {
    text1: document.getElementById('text1'),
    text2: document.getElementById('text2'),
  }

  const texts = ['Mokita', 'Caffe', 'Dulces', 'Y mas ...', ':)']

  const morphTime = 2
  const cooldownTime = 2

  let textIndex = texts.length - 1
  let time = new Date()
  let morph = 0
  let cooldown = cooldownTime

  elts.text1!.textContent = texts[textIndex % texts.length]
  elts.text2!.textContent = texts[(textIndex + 1) % texts.length]

  function doMorph() {
    morph -= cooldown
    cooldown = 0

    let fraction = morph / morphTime

    if (fraction > 1) {
      cooldown = cooldownTime
      fraction = 1
    }

    setMorph(fraction)
  }

  function setMorph(fraction: number) {
    elts.text2!.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`
    elts.text2!.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`

    fraction = 1 - fraction
    elts.text1!.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`
    elts.text1!.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`

    elts.text1!.textContent = texts[textIndex % texts.length]
    elts.text2!.textContent = texts[(textIndex + 1) % texts.length]
  }

  function doCooldown() {
    morph = 0

    elts.text2!.style.filter = ''
    elts.text2!.style.opacity = '100%'

    elts.text1!.style.filter = ''
    elts.text1!.style.opacity = '0%'
  }

  function animate() {
    requestAnimationFrame(animate)

    let newTime = new Date()
    let shouldIncrementIndex = cooldown > 0
    let dt = (Number(newTime) - Number(time)) / 1000
    time = newTime

    cooldown -= dt

    if (cooldown <= 0) {
      if (shouldIncrementIndex) {
        textIndex++
      }

      doMorph()
    } else {
      doCooldown()
    }
  }

  animate()
})
</script>

<template>
  <div id="container">
    <span
      class=""
      id="text1"
    ></span>
    <span
      class=""
      id="text2"
    ></span>
  </div>

  <svg id="filters">
    <defs>
      <filter id="threshold">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="1 0 0 0 0
							  0 1 0 0 0
							  0 0 1 0 0
							  0 0 0 255 -140"
        />
      </filter>
    </defs>
  </svg>
  <div class="wave">
    <img
      src="../assets/wave.svg"
      alt=""
    />
  </div>
</template>

<style scoped>
#container {
  position: absolute;
  margin: auto;
  width: 100%;
  height: 80pt;
  top: 0;
  bottom: 0;
  filter: url(#threshold) blur(0.6px);
}

#text1,
#text2 {
  position: absolute;
  transform: translateY(-100px);
  width: 100%;
  display: inline-block;
  text-align: center;
  user-select: none;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: bolder;
  font-size: 5rem;
  background: -webkit-linear-gradient(
    rgb(97, 39, 0),
    rgb(97, 39, 0),
    rgb(255, 255, 255)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 10px;
  text-transform: capitalize;
}

.wave {
  width: 100%;
  position: absolute;
  bottom: -8px;
}
</style>
