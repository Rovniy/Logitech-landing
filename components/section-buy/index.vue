<template>
  <section class="section section-buy">
    <div class="buy-area">
      <div class="buy-area__left">
        <h3 class="buy-area-title">
          Успей купить по промокоду
        </h3>
        <span class="buy-area-separator" />
        <span class="buy-area-cost">
          =
          <span class="buy-area-cost__red">
            4 990 ₽
          </span>
          <img class="buy-area-cost__red__old" src="images/misc/old_price.svg" alt="old prise">
        </span>
      </div>
      <div class="buy-area__right">
        <div class="right-btn-area" @mouseenter="popup = true" @mouseleave="popup = false">
          <a :href="link" rel="noopener" class="right-btn-area-btn" target="_blank" @click="analytics">
            <span>Купить в</span>
            <img src="/images/mvideo.svg" class="right-btn-area-btn__mvideo" loading="lazy" alt="М.Видео">
          </a>
          <div class="right-btn-area-promocode-area">
            <span class="right-btn-area-promocode-area-text">{{ promoCode }}</span>
            <img src="images/section-first-copy.svg" class="right-btn-area-promocode-area-icon" alt="" @click="copy">
          </div>
          <span :class="['right-btn-area-alarm animated fadeIn', {'visible': popup}]">Промокод нужно ввести на последнем шаге оформления заказа на сайте М.Видео</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      link: process.env.MVIDEO_LINK,
      promoCode: 'Logi1500',
      popup: false
    }
  },
  methods: {
    copy() {
      const el = document.createElement('textarea')
      el.value = this.promoCode
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)

      this.$root.$emit('SHOW_NOTY')
    },
    analytics() {
      window.fbq('track', 'InitiateCheckout')
    }
  }
}
</script>

<style lang="sass" scoped>
.section-buy
  background: linear-gradient(180deg, #1D1D1D 0%, #2D2D2D 136.39%), #000000
  @include desktop
    background: #000
    border-bottom: 3px solid $color-blue

.buy-area
  width: 100%
  max-width: 294px
  display: flex
  flex-direction: column
  padding: 40px 40px 100px
  margin: 0 auto
  box-sizing: content-box
  @include tablet
    width: 100%
    padding: 40px
    max-width: 768px
    flex-direction: row
  @include desktop
    max-width: 1100px
    padding: 80px 40px

  &__left, &__right
    width: 100%
    @include tablet
      width: 50%

  &__right
    align-items: center
    display: flex

  &-title
    font: bold 36px/44px $font-main
    text-transform: uppercase
    color: #ffffff
    text-align: left

  &-cost
    display: block
    font: bold 36px/36px $font-main
    color: $color-white
    @include desktop
      margin: 20px 0 0 0

    &__red
      margin-left: 0
      color: $color-blue
      &__old
        margin: 0 0 0 10px
        height: 20px
        opacity: .7

  &-separator
    display: block
    background: #C3C6C8
    width: 100%
    max-width: 84px
    height: 6px
    margin: 20px 0
    @include desktop
      margin: 20px 0 0 0

  .right-btn-area
    margin: 20px auto 0
    background: #161616
    width: 100%
    height: 102px
    border-radius: 4px
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)
    @include tablet
      width: 294px
      margin: 0 0 0 auto

    &-alarm
      margin: 10px 0 0 0
      display: block
      color: #fff
      font: 14px/16px $font-main
      padding: 5px
      border-radius: 4px
      border: 1px solid $color-blue
      text-align: center
      @include desktop
        display: none
        visibility: hidden

      &.visible
        display: block
        visibility: visible

    &-btn
      width: 100%
      height: 50px
      background: $color-red
      cursor: pointer
      border: none
      outline: none!important
      border-radius: 4px
      display: flex
      flex-direction: row
      justify-content: center
      align-items: center
      text-decoration: none
      &:focus
        outline: none

      span
        color: $color-white
        font: bold 14px/14px $font-main
        display: flex
        text-transform: uppercase
      &__mvideo
        height: 24px
        margin: 0 0 0 15px
        display: block

    &-promocode-area
      height: 50%
      width: 100%
      display: flex
      flex-direction: row
      align-items: center
      justify-content: center
      padding: 0
      @include tablet
        padding: 0 0 0 40px

      &-text
        color: $color-white
        text-transform: none
        font: bold 18px/18px $font-main
      &-icon
        cursor: pointer
        color: #3F3F3F
        margin: 0 0 0 40px

  &-separator

</style>
