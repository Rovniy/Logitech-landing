<template>
  <div :class="['noty', {'noty-active': is_show}]">
    <a class="link" :href="link" target="_blank">
      <span>Промокод скопирован! <span class="invisible">Перейти в</span></span>
      <img src="/images/mvideo.svg" class="img" loading="lazy" alt="М.Видео">
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      is_show: false,
      link: process.env.MVIDEO_LINK
    }
  },
  mounted(){
    this.$root.$on('SHOW_NOTY', this.showNoty)
  },
  methods: {
    showNoty() {
      this.is_show = true
      
      setTimeout(() => {
        this.is_show = false
      }, 5000)
    }
  }
}
</script>

<style lang="sass" scoped>
.noty
  position: fixed
  top: 20px
  right: 20px
  background: $color-blue
  padding: 20px
  transition: .5s ease-in-out
  transform: translateX(500px)
  z-index: 50
  
  &-active
    transform: translateX(0)
  
  .link
    color: #000
    text-decoration: none
    text-transform: uppercase
    text-align: center
    display: flex
    justify-content: flex-end
    align-items: center
    flex-direction: row
    cursor: pointer
  
  .invisible
    display: none
    @include desktop
      display: inline
  .img
    height: 20px
    margin: 0 0 0 10px
    display: none
    visibility: hidden
    @include desktop
      display: block

</style>
