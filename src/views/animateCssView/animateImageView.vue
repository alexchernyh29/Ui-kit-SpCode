<template>
    <div class="scene">
        <div class="card">
            <div class="card__face card__face--front">
            <img src="https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg" />
            </div>
            <div class="card__face card__face--back">
            <img src="https://i.loli.net/2019/11/16/cqyJiYlRwnTeHmj.jpg" />
            </div>
        </div>
        <div class="card">
            <div class="card__face card__face--front">
            <img src="https://i.loli.net/2019/11/16/FLnzi5Kq4tkRZSm.jpg" />
            </div>
            <div class="card__face card__face--back">
            <img src="https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg" />
            </div>
        </div>
        <div class="card">
            <div class="card__face card__face--front">
            <img src="https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg" />
            </div>
            <div class="card__face card__face--back">
            <img src="https://i.loli.net/2019/11/03/RtVq2wxQYySDb8L.jpg" />
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style>
.scene {
  width: 30vw;
  display: flex;
  justify-content: space-between;
  perspective: 800px;
}
.scene .card {
  position: relative;
  width: 140px;
  height: 200px;
  color: white;
  cursor: pointer;
  transition: 1s ease-in-out;
  transform-style: preserve-3d;
}
.scene .card:hover {
  transform: rotateY(0.5turn);
}
.scene .card .card__face {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  transition: 1s ease-in-out;
  -webkit-box-reflect: below 0 linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.4));
}
.scene .card .card__face img {
  width: 240px;
  height: 300px;
  -o-object-fit: cover;
     object-fit: cover;
}
.scene .card .card__face--back {
  transform: rotateY(0.5turn);
}
</style>