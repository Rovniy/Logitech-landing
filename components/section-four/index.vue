<template>
  <section class="section section-four">
    <div v-waypoint="{ active: !is_visible, callback: onWaypoint }" class="section-four-container">
      <div class="headset-area animated" :class="{'fadeIn': is_visible}">
        <img class="headset-area-img" src="/images/section-four-bg-mobile.png" loading="lazy" alt="Logitech 432">
      </div>
      <div class="text-block">
        <!-- BLOCK -->
        <h3 class="text-block-main animated" :class="{'fadeInRight': is_visible}">
          ЕДИНАЯ ГАРНИТУРА ДЛЯ ВСЕХ ИГРОВЫХ ПЛАТФОРМ
        </h3>
        <span class="text-block-separator animated delay-1s" :class="{'fadeInRight': is_visible}" />
        <p class="text-block-text animated" :class="{'fadeInRight': is_visible}">
          Гарнитура совместима с ПК и PlayStation 4, также ее можно подключить к док-станции Nintendo Switch с помощью кабеля ЦАП USB, поставляемого в комплекте. Кроме того, к консолям и мобильным устройствам ее можно подключить с помощью кабеля с разъемом 3,5 мм.
        </p>
  
        <!-- BLOCK -->
        <h3 class="text-block-main animated" :class="{'fadeInRight': is_visible}">
          ПРОЧНАЯ И УДОБНАЯ КОНСТРУКЦИЯ
        </h3>
        <span class="text-block-separator animated delay-1s" :class="{'fadeInRight': is_visible}" />
        <p class="text-block-text animated" :class="{'fadeInRight': is_visible}">
          Каждый элемент наушников сконструирован таким образом, чтобы обеспечить тебе максимальный комфорт. Роскошные легкие амбушюры из искусственной кожи и оголовье исключительно комфортны и не давят на уши. Для большего удобства амбушюры можно повернуть под углом до 90°. Независимо от используемой платформы регулировать громкость звука можно с помощью колесика, расположенного на одном из наушников.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      is_visible: false
    }
  },
  methods: {
    onWaypoint ({ going }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.is_visible = true
      }
    }
  }
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
      text-align: justify
</style>
