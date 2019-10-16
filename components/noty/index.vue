<template>
  <div :class="['noty', {'noty-active': is_show}]">
    Промокод скопирован в буфер обмена
  </div>
</template>

<script>
export default {
  data() {
    return {
      is_show: false
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
      }, 3000)
    }
  }
}
</script>

<style lang="sass" scoped>
.noty
  position: fixed
  top: 20px
  right: 20px
  color: #FFFFFF
  background: $color-blue
  padding: 20px
  text-align: center
  transition: .5s ease-in-out
  transform: translateX(500px)
  z-index: 50
  &-active
    transform: translateX(0)

</style>
