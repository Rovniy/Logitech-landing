<template>
  <section class="section section-buy">
    <div class="buy-area">
      <div class="buy-area__left">
        <h3 class="buy-area-title">
          Ограниченное предложение по промокоду
        </h3>
        <span class="buy-area-separator" />
        <span class="buy-area-cost">
          =
          <span class="buy-area-cost__red">
            5 490 ₽
          </span>
        </span>
      </div>
      <div class="buy-area__right">
        <div class="right-btn-area">
          <button class="right-btn-area-btn">
            <span>Купить в</span>
            <img src="/images/mvideo.svg" class="right-btn-area-btn__mvideo" loading="lazy" alt="М.Видео">
          </button>
          <div class="right-btn-area-promocode-area">
            <span class="right-btn-area-promocode-area-text">JHG67E892VDW</span>
            <img src="images/section-first-copy.svg" class="right-btn-area-promocode-area-icon">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.section-buy
  background: linear-gradient(180deg, #1D1D1D 0%, #2D2D2D 136.39%), #000000
  
.buy-area
  width: 100%
  max-width: 294px
  display: flex
  flex-direction: column
  padding: 40px
  margin: 0 auto
  box-sizing: content-box
  @include tablet
    width: 100%
    max-width: 768px
    flex-direction: row
  @include desktop
    max-width: 970px
  
  &__left, &__right
    width: 100%
    @include tablet
      width: 50%
  
  &-title
    font: bold 18px/22px $font-main
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
      color: $color-red
  
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
    width: 294px
    height: 102px
    border-radius: 4px
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)
    @include tablet
      margin: 0 0 0 auto
    
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
        color: #3F3F3F
        margin: 0 0 0 40px
        
  &-separator
  
</style>
