<template>
  <section class="section section-four">
    <div class="section-four-container">
      <div class="headset-area">
        <img class="headset-area-img" src="/images/section-four-bg-mobile.png" loading="lazy" alt="Logitech 432">
      </div>
      <div class="text-block">
        <h3 class="text-block-main">
          6 мм микрофон с функцией отключения при повороте
        </h3>
        <span class="text-block-separator" />
        <p class="text-block-text">
          Обеспечивает высокое качество передачи звука
        </p>
        <h3 class="text-block-main">
          Идеальная гарнитура
        </h3>
        <span class="text-block-separator" />
        <p class="text-block-text">
          Для игр в жанре королевской битвы благодаря объемному звучанию 7.1 – легче услышать противника, где бы он ни был
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.section-four
  background: linear-gradient(180deg, #1D1D1D 0%, #0B0B0B 100%), #262626
  
  &-container
    width: 100%
    background: none
    padding: 0
    background: #2F3132
    @include tablet
      background: url('/images/section-four-bg-tablet.png') center -90% no-repeat
      padding: 480px 0 0 0
    @include desktop
      background: url('/images/section-four-bg-desktop.png') 87% 99% no-repeat
      max-width: 1920px
      margin: 0 auto
      padding: 0

.headset-area
  display: block
  height: 273px
  background: linear-gradient(180deg, #1D1D1D 0%, #0B0B0B 100%), #2F3132
  overflow: hidden
  @include tablet
    display: none
    visibility: hidden
  
  &-img
    display: block
    margin: -90px auto 0
    height: 371px

.text-block
  $max-width: 660px
  padding: 40px 20px 40px 60px
  @include tablet
    width: 100%
    margin: 0 auto
    padding: 40px 50px 100px
  @include desktop
    width: 50%
    margin: 0 0 0 50px
    padding: 40px 0 100px 100px
  
  &-main
    font: bold 30px/36px $font-main
    color: #fff
    display: block
    text-transform: uppercase
    margin: 80px 0 0 0
    &:first-child
      margin: 0
    @include tablet
      margin: 60px 0 0 0
      text-align: center
      &:first-child
        margin: 60px 0 0 0
    @include desktop
      text-align: left
      max-width: $max-width
  &-separator
    display: block
    background: #C3C6C8
    width: 100%
    max-width: 84px
    height: 6px
    margin: 30px 0
    @include tablet
      margin: 30px auto
    @include desktop
      margin: 30px 0
  &-text
    font: 16px/19px $font-main
    color: #fff
    @include tablet
      text-align: center
    @include desktop
      max-width: $max-width
      text-align: left
</style>
