<template>
    <div>
        <div class="neons col-12">
         <h1><em>Петушара</em></h1>
        </div>
        <div class="string">
            <h1 class="greeting en">Hello World!</h1>
            <h1 class="greeting es">¡Hola Mundo!</h1>
            <h1 class="greeting de">Hallo Welt!</h1>
            <h1 class="greeting it">Ciao Mondo!</h1>  
        </div>
        <div class="black">
            <p>Добро пожаловать в SpectrCode <br><a href="https://codepen.io/grohit/">SpectrCode</a></p>
        </div>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
   
  .string {
  display: flex;
  flex-direction: column;
  text-align: center;
  animation: move 4s infinite;
}

.greeting {
  position: relative;
  top: 8.6vmin;
  animation: white-out 5s infinite;
}

.en {
  color: #fa8231;
}

.es {
  color: white;
}

.de {
  color: #c678dd;
}

.it {
  color: #a9b0bd;
}

.neons {
   margin-top: rem;
   text-align: center;
}

.neons h1 {
  font-size: 2rem;
  text-align: center;
   font-weight: bold;
  -webkit-animation: glow 2s ease-in-out infinite alternate;
  -moz-animation: glow 2s ease-in-out infinite alternate;
  animation: glow 2s ease-in-out infinite alternate;
}

.black {
    background-color: #000;
    width: 100%;
}

a {
  text-decoration: none;
  color: inherit;
  font-size: 24px;
}

p {
  font-weight: 700;
  text-align: center;
  font-size: 40px;
  font-family: Hack, sans-serif;
  text-transform: uppercase;
  background: linear-gradient(90deg, #000, #fff, #000);
  letter-spacing: 5px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: no-repeat;
  background-size: 80%;
  animation: shine 5s linear infinite;
  position: relative;
}

@keyframes shine {
  0% {
    background-position-x: -500%;
  }
  100% {
    background-position-x: 500%;
  }
}

@-webkit-keyframes glow {
     from {
      color: #fff;
    text-shadow: 0 0 10px #00fff2, 0 0 20px #00fff2, 0 0 30px #00fff2, 0 0 40px #00fff2, 0 0 50px #00fff2, 0 0 60px #00fff2, 0 0 70px #00fff2, 0 0 90px #00fff2;
  }
  
  to {
     color: gray;
    text-shadow: 0 0 20px #00fff2, 0 0 30px #00fff2, 0 0 40px #00fff2, 0 0 50px #00fff2, 0 0 60px #00fff2, 0 0 70px #00fff2, 0 0 80px #00fff2, 0 1 90px #00fff2;
  }
}

@keyframes move {
  25% {
    transform: translatey(-5.8vmin);
    opacity: 1;
  }
  50% {
    transform: translatey(-11vmin);
  }
  75% {
    transform: translatey(-16.5vmin);
  }
}
  </style>