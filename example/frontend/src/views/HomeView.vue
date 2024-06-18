<template>
  <div class="home">
    <MenuBar/>
    <Section></Section>
    <FooterTitle></FooterTitle>
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar.vue'
import Section from '@/components/Section.vue'
import FooterTitle from '@/components/FooterTitle.vue'

export default {
  name: 'HomeView',
  components: {
    MenuBar, Section, FooterTitle
  }
}
</script>
