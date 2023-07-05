<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem path='/component'>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Компоненты</template>
    В этом разделе продемонстрированы основные компоненты которые требуются для современной разработки веб-сайтов. 
  </WelcomeItem>
  <WelcomeItem path='/animate'>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Анимации</template>
    В этом разделе продемонстрированы анимации различных элементов с использованием библиотеки Gsap, Css анимации и анимации Vue.
  </WelcomeItem>
  <WelcomeItem path='/slider'>
    <template #icon> 
      <SupportIcon />
    </template>
    <template #heading>Слайдеры</template>
    Здесь я показываю какие слайдеры я могу использовать для разработки сайта
  </WelcomeItem>
  <WelcomeItem path='/Chart'>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Графики</template>
    Этот раздел посвящён графикам и дашбордам при помощи библиотеки Chart.js
  </WelcomeItem>
  <WelcomeItem path='/bad'>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>JS and Vue</template>
    Этот раздел посвящён JS and Vue
  </WelcomeItem>
</template>
