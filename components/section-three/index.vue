<template>
  <section class="section  section-three">
    <div v-waypoint="{ active: !is_visible, callback: onWaypoint }" class="section-three-container">
      <div class="headset-area animated" :class="{'fadeIn': is_visible}">
        <img class="headset-area-img" src="/images/section-three-bg-mobile.png" loading="lazy" alt="Logitech 432">
      </div>
      <div class="text-block">
        <!-- BLOCK -->
        <h3 class="text-block-main animated" :class="{'fadeInRight': is_visible}">
          ГРОМКИЙ И РАЗБОРЧИВЫЙ ЗВУК ПРИ ГОЛОСОВОМ ОБЩЕНИИ
        </h3>
        <span class="text-block-separator animated delay-1s" :class="{'fadeInRight': is_visible}" />
        <p class="text-block-text animated" :class="{'fadeInRight': is_visible}">
          Благодаря современному микрофону увеличенного размера (6 мм) ты никогда не потеряешь связь с напарниками. Функция отключения при повороте вверх позволяет выключить голосовую связь, когда в ней нет необходимости.
        </p>
  
        <!-- BLOCK -->
        <h3 class="text-block-main animated" :class="{'fadeInRight': is_visible}">
          ТЕХНОЛОГИЯ DTS HEADPHONE:X 2.0
        </h3>
        <span class="text-block-separator animated delay-1s" :class="{'fadeInRight': is_visible}" />
        <p class="text-block-text animated" :class="{'fadeInRight': is_visible}">
          Технология объемного звучания нового поколения DTS Headphone:X 2.0 в сочетании с ПО Logitech G HUB позволит тебе обнаружить крадущегося противника, понять, что неприятель пользуется особыми способностями, и насладиться звуками окружающего мира. Объемное звучание, создаваемое 7.1-канальной системой, дает уникальную возможность ощутить себя в эпицентре происходящего.
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
.section-three
  background: linear-gradient(180deg, #1D1D1D 0%, #2D2D2D 100%), #2F3132
  
  &-container
    width: 100%
    background: none
    padding: 0
    background: #2F3132
    @include tablet
      background: url('/images/section-three-bg-tablet.png') center -12% no-repeat
      padding: 480px 0 0 0
    @include desktop
      background: url('/images/section-three-bg-desktop.png') 10% 56% no-repeat
      max-width: 1920px
      margin: 0 auto
      padding: 0

.headset-area
  display: block
  height: 273px
  background: linear-gradient(180deg, #1D1D1D 0%, #2D2D2D 100%), #2F3132
  overflow: hidden
  @include tablet
    display: none
    visibility: hidden
    
  &-img
    display: block
    margin: -75px auto 0
    height: 421px
    
.text-block
  $max-width: 660px
  padding: 40px 20px 40px 60px
  @include tablet
    width: 100%
    margin: 0 auto
    padding: 40px 50px 100px
  @include desktop
    width: 50%
    margin: 0 0 0 auto
    padding: 40px 40px 100px 100px
    
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
