<template>
  <section class="section section-first">
    <div class="shadow" />
    <div class="header">
      <picture class="header-logo">
        <source srcset="images/misc/logo.svg" media="(min-width: 767px)">
        <img src="images/misc/logo_small.svg" alt="Logitech G432">
      </picture>
    </div>
    <div class="middle">
      <!-- LEFT -->
      <div class="left">
        <h2 class="left_h2">
          g432
        </h2>
        <div class="left-shield">
          <span class="left-shield-text">Серия</span>
          <span class="left-shield-g">g</span>
        </div>
        <h1 class="left_h1">
          ИГРОВАЯ ГАРНИТУРА С ПОДДЕРЖКОЙ ТЕХНОЛОГИИ ОБЪЕМНОГО ЗВУЧАНИЯ 7.1
        </h1>
      </div>
      
      <!-- CENTER -->
      <div class="center">
        <img src="/images/section-first-bg.png" class="center-img" alt="">
      </div>
      
      <!-- RIGHT -->
      <div class="right">
        <div class="right-block">
          <h2 class="right-block-h2">
            ОГРАНИЧЕННОЕ ПРЕДЛОЖЕНИЕ ПО ПРОМОКОДУ
          </h2>
          <span class="right-block-separator" />
          <span class="right-block-cost">
            =
            <span class="right-block-cost__red">
              5 490 ₽
            </span>
            <img class="right-block-cost__red__old" src="images/misc/old_price.svg" alt="old prise">
          </span>
        </div>
        <div class="right-btn-area">
          <a :href="link" class="right-btn-area-btn" target="_blank">
            <span>Купить в</span>
            <img src="/images/mvideo.svg" class="right-btn-area-btn__mvideo" loading="lazy" alt="М.Видео">
          </a>
          <div class="right-btn-area-promocode-area">
            <span class="right-btn-area-promocode-area-text">{{ promoCode }}</span>
            <img src="images/section-first-copy.svg" class="right-btn-area-promocode-area-icon" alt="" @click="copy">
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <span class="bottom__text">На дно-о-о-о-о ! Внизу ждет крутой тест !</span>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      link: process.env.MVIDEO_LINK,
      promoCode: 'JHG67E892VDW'
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
    }
  }
}
</script>

<style lang="sass" scoped>
$shadow-width: 970px

.section-first
  width: 100%
  height: auto
  display: flex
  flex-direction: column
  background: #000
  padding: 0 0 80px 0
  @include desktop
    height: 100vh
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: center
    padding: 0
  
  .shadow
    display: none
    background: #000000
    height: 100%
    width: 100%
    margin: 0 auto
    overflow: visible
    z-index: 0
    @include desktop
      display: block
      position: absolute
      top: 0
      left: calc(50% - #{$shadow-width / 2})
      width: $shadow-width
      background: radial-gradient(50% 100% at 50% 0%, rgba(188, 213, 221, 0.2) 0%, rgba(87, 87, 87, 0) 100%) -150%
  
  .header
    position: relative
    z-index: 3
    width: 100%
    padding: 10px 0 0
    @include tablet
      padding: 30px 0 0
    @include desktop
      padding: 3vh 0 0
    
    
    &-logo
      display: block
      text-align: center
      
      img
        height: 45px
        @include tablet
          height: 23px
        @include desktop
          height: 48px
  
  .middle
    position: relative
    z-index: 2
    width: 100%
    display: flex
    flex-direction: row
    flex-wrap: wrap
    margin: 30px auto 0
    @include tablet
      margin: 60px auto 0
    @include desktop
      margin: 0 auto
      max-width: 1920px
  
    .left
      order: 1
      width: 100%
      position: relative
      @include tablet
        width: 50%
        order: 0
        padding: 40px 0 0 0
  
      &_h2
        font: bold 90px/90px $font-semi
        color: $color-blue
        width: 100%
        padding: 0 0 0 50px
        text-align: left
        text-transform: uppercase
        @include tablet
          font: bold 120px/90px $font-semi
        @include desktop
          font: bold 240px/180px $font-semi
      &_h1
        font: bold 18px/22px $font-main
        color: $color-white
        width: 100%
        padding: 0 10px 0 52px
        margin: 40px 0 0 0
        text-transform: uppercase
        @include tablet
          max-width: 270px
        @include desktop
          max-width: 540px
          font: bold 36px/44px $font-main
          margin: 20px 0 0 0
      &-shield
        background: #FFFFFF
        display: flex
        justify-content: center
        align-items: center
        position: absolute
        padding: 4px 7px
        transform: rotateZ(-90deg)
        top: 150px
        left: -25px
        max-width: 70px
        @include tablet
          top: 190px
        @include desktop
          position: relative
          transform: none
          top: auto
          left: auto
          margin: 40px 0 0 52px
  
        &-text
          font: bold 10px/10px $font-main
          color: #000000
          text-transform: uppercase
          display: block
          margin: 2px 0 0 0
        &-g
          margin: 0 0 0 5px
          font: bold 18px/18px $font-semi
          color: #000000
          text-transform: uppercase
  
    .center
      order: 0
      width: 100%
      display: block
      margin: 0
      padding: 0 30px
      @include tablet
        width: 50%
        order: 1
        padding: 0 40px 0 0
      @include desktop
        width: 100%
        position: absolute
        top: -5vh
        left: 0
        z-index: -1
        text-align: center
    
      &-img
        margin: 0 auto
        width: 100%
        @include desktop
          width: auto
          max-height: 70vh
  
    .right
      order: 2
      width: 100%
      display: flex
      flex-direction: column
      @include tablet
        width: 100%
        flex-direction: row
      @include desktop
        width: 50%
        flex-direction: column
        align-items: flex-start
        padding: 0 100px 0 20%
        justify-content: center
  
      &-block
        width: 100%
        @include tablet
          width: 50%
        @include desktop
          width: 100%
          display: flex
          justify-content: flex-start
          flex-direction: column
          
        &-h2
          font: bold 18px/22px $font-main
          color: $color-white
          width: 100%
          padding: 0 10px 0 52px
          margin: 40px 0 0 0
          text-transform: uppercase
          @include tablet
            margin: 30px 0 0 0
          @include desktop
            margin: 0
            padding: 0
            width: 100%
            font: bold 36px/44px $font-main
        &-separator
          display: block
          background: #C3C6C8
          width: 100%
          max-width: 84px
          height: 6px
          margin: 20px 0 0 52px
          @include desktop
            margin: 20px 0 0 0
        &-cost
          display: block
          margin: 20px 0 0 52px
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
            
      &-btn-area
        margin: 20px auto 0
        background: #161616
        width: 294px
        height: 102px
        border-radius: 4px
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)
        @include tablet
          margin: 30px auto 0
        @include desktop
          margin: 40px 0 0 0
  
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
          padding: 0 0 0 40px
          
          &-text
            color: $color-white
            text-transform: uppercase
            font: bold 18px/18px $font-main
          &-icon
            cursor: pointer
            color: #3F3F3F
            margin: 0 0 0 40px
    
  .bottom
    display: none
    @include desktop
      position: relative
      z-index: 2
      display: block
      height: 150px
      
    &__text
      font: bold 24px/1 $font-main
      color: #fff
      text-transform: uppercase
      display: block
      padding: 18px 40px
      background: transparent
      border-radius: 2px
      position: relative
      
      &:before
        content: ''
        position: absolute
        bottom: -77px
        left: calc(50% - 8px)
        width: 16px
        height: 50px
        background: url("/images/section-first-arrow.svg") no-repeat center
        animation: arrow 1s ease-in-out infinite
  
  
@keyframes arrow
  0%
    transform: translateY(0)
  50%
    transform: translateY(10px)
  100%
    transform: translateY(0)


</style>

