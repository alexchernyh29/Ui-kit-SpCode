<template>
    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <Transition
            appear
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
        >
            <LogoIcon/>
        </Transition>
    </div>
</template>

<script>
import LogoIcon from '../components/icons/IconLogo.vue';
import gsap from 'gsap';
export default {
  setup() {
    const beforeEnter = (el) => {
      console.log('before enter - set ')
      el.style.transform = 'translateY(-60px)'
      el.style.opasity = 0.1
    }
    const enter = (el, done) => {
      console.log('starting to enter = make transition')
      gsap.to(el, {
        duration: 3,
        y: 0,
        opacity: 1,
        ease: 'bounse out',
        onComplete: done
      })
    }

    const afterEnter = () => {
      console.log('after enter')
    }

    return { beforeEnter, enter }
  }
}
</script>

<style scoped>

.wrap__link {
    display: flex;
    flex-direction: column;
}
</style>