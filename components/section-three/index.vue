<template>
  <section class="section  section-three">
    <div class="section-three-container">
      <div class="text-block">
        <h3 class="text-block-main">
          Высококачественное объемное звучание
        </h3>
        <span class="text-block-separator" />
        <p class="text-block-text">
          Технология объемного звука DTS: Headphone X 2.0 позволяет точно передавать положение источника звука в трехмерном пространстве, а затем передавать их на динамики 7.1. Улучшенные 50-миллимитровые диффузоры обеспечивают насыщенный звук и точную передачу низких частот
        </p>
        <h3 class="text-block-main">
          Усовершенствованные амбушюры из искусственной кожи
        </h3>
        <span class="text-block-separator" />
        <p class="text-block-text">
          премиум качества с поворотом на 90 градусов обеспечивают комфортную посадку
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
.section-three
  background: linear-gradient(180deg, #1D1D1D 0%, #2D2D2D 100%), #2F3132
  
  &-container
    background: url('/images/section-three-bg.png') no-repeat
    @include desktop
      max-width: 1920px
      margin: 0 auto
      background-position: 10% 0

.text-block
  @include desktop
    width: 50%
    margin: 0 0 0 auto
    padding: 40px 0 100px 100px
    
  &-main
    font: bold 30px/36px $font-main
    color: #fff
    margin: 60px 0 0 0
  &-separator
    display: block
    background: #C3C6C8
    width: 100%
    max-width: 84px
    height: 6px
    margin: 30px 0
  &-text
    font: 16px/19px $font-main
    color: #fff
</style>
