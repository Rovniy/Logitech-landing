<template>
  <section class="section test">
    <div class="test-container">
      <!--<img class="test-bg" src="images/section-test-bg.png" alt="" loading="lazy">-->
      <!--<div class="test-shadow" />-->
      <h3 id="sectionTest" class="test-title">
        ПРОЙДИ ТЕСТ И УЗНАЙ НАСКОЛЬКО ХОРОШО ТЫ РАЗБИРАЕШЬСЯ В ИГРАХ
      </h3>
      <span class="test-separator" />
      <span class="test-desc">
        Если ты хочешь доказать, что ты геймер со стажем, этот тест для тебя! Звук в играх сильно влияет на общий успех. Какие-то из них расхватали на мемы, другие до сих пор навевают воспоминания. Проверь свои знания!
      </span>
      <button v-show="!isShow" class="test-btn" @click="showTest">
        Пройти тест
      </button>
      <Competition v-show="isShow" />
      <div v-scroll-to="'#container'" class="go-up-area">
        <img class="go-up-area-btn" src="/images/misc/gotoup.svg" alt="">
      </div>
    </div>
  </section>
</template>

<script>
import Competition from './competition'

export default {
  components: {
    Competition
  },
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    showTest() {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="sass" scoped>
.test
  &-container
    width: 100%
    overflow: hidden
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    position: relative
    padding: 40px 20px
    @include tablet
      background: url("/images/section-test-bg.png") center -30% / 80% auto no-repeat, radial-gradient(50% 50% at 50% 50%, rgba(188, 213, 221, 0.2) 0%, rgba(87, 87, 87, 0) 100%) center 0 / 50% auto no-repeat
      padding: 80px 80px 200px
    @include desktop
      background: url("/images/section-test-bg.png") center 90% / 110% auto no-repeat, radial-gradient(50% 50% at 50% 50%, rgba(188, 213, 221, 0.2) 0%, rgba(87, 87, 87, 0) 100%) center 0 / 50% auto no-repeat
      padding: 190px 0
  
  &-shadow
    background:
    width: 50%
    height: 100%
    position: absolute
    z-index: 0
    top: 0
  
  &-bg
    width: 100%
    display: none
    visibility: hidden
    margin: 0 auto
    position: absolute
    top: -800px
    left: 0
    z-index: 1
    @include tablet
      display: block
      visibility: visible
  
  &-title
    font: bold 30px/36px $font-main
    color: #ffffff
    text-transform: uppercase
    display: block
    margin: 0 auto
    position: relative
    z-index: 3
    text-align: center
    max-width: 750px
    @include tablet
      font: bold 38px/46px $font-main
  
  &-separator
    display: block
    background: #C3C6C8
    width: 100%
    max-width: 84px
    height: 6px
    margin: 30px auto 0
    @include desktop
      margin: 40px auto 0
  
  &-desc
    position: relative
    z-index: 3
    font: 16px/19px $font-main
    color: #ffffff
    display: block
    max-width: 700px
    width: 100%
    margin: 30px auto 0
    text-align: justify
    @include tablet
      margin: 40px auto 0
      font: 24px/29px $font-main
  
  &-btn
    background: $color-blue
    font: bold 14px/14px $font-main
    border-radius: 4px
    border: none
    position: relative
    z-index: 3
    color: #000
    text-align: center
    padding: 20px 40px
    margin: 80px auto 0
    text-transform: uppercase
    display: block
    &:hover
      cursor: pointer
      background: $color-blue-hover
    &:focus
      outline: none
    
  
.go-up-area
  display: none
  @include tablet
    display: block
    width: 70px
    height: 70px
    position: absolute
    right: 80px
    bottom: 60px
    cursor: pointer
  @include desktop
    right: 60px
  &-btn
    width: 100%
    
</style>
