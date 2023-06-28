<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Компоненты</template>
    В этом разделе продемонстрированы основные компоненты которые требуются для современной разработки веб-сайтов. 
    
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Анимации</template>
    В этом разделе продемонстрированы анимации различных элементов с использованием библиотеки Gsap, Css анимации и анимации Vue.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      
      <SupportIcon />
    </template>
    <template #heading>Слайдеры</template>
    Здесь я показываю какие слайдеры я могу использовать для разработки сайта
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Графики</template>
    Этот раздел посвящён графикам и дашбордам при помощи библиотеки Graph.js
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>3D сцены</template>
    Этот раздел посвящён 3d объектам, реализованным через Tree JS
  </WelcomeItem>
</template>
