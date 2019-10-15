<template>
  <section class="section footer">
    <div class="footer-left">
      <span class="footer-left-copy">© 2019 Logitech. Все права защищены</span>
    </div>
    <div class="footer-right">
      <a class="footer-right-item-link" href="#" target="_blank">
        <img class="footer-right-item-link-img" src="images/misc/vk.svg" loading="lazy" alt="Logitech Vkontakte">
      </a>
      <a class="footer-right-item-link" href="#" target="_blank">
        <img class="footer-right-item-link-img" src="images/misc/facebook.svg" loading="lazy" alt="Logitech Facebook">
      </a>
    </div>
  </section>
</template>

<script>

export default {
}
</script>

<style lang="sass" scoped>
.footer
  background: #F4F4F4
  display: flex
  flex-direction: column
  align-items: center
  padding: 10px 0 30px
  @include tablet
    flex-direction: row
    padding: 40px
  @include desktop
    padding: 40px 240px
  
  &-left
    width: 100%
    text-align: center
    @include tablet
      width: 50%
      text-align: left
    
    &-copy
      font: 14px/14px 'Arial'
      color: #000
    
  &-right
    width: 100%
    display: flex
    align-items: center
    padding: 20px 0 0 0
    justify-content: center
    @include tablet
      justify-content: flex-end
      width: 50%
      padding: 0
  
  
    &-item
      height: 24px
      display: inline-flex
      list-style: none
      align-items: center
      justify-content: center

      &-link
        &:nth-child(2)
          margin: 0 0 0 35px
        &-img
    
</style>
