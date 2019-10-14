<template>
  <section class="section test">
    <div class="test-container">
      <img class="test-bg" src="images/section-test-bg.png" alt="" loading="lazy">
      <div class="test-shadow" />
      <h3 class="test-title">Пройди тест и узнай насколько ты хорошо разбираешься в играх</h3>
      <span class="test-separator" />
      <span class="test-desc">
        Друзья!
      </span>
      <span class="test-desc">
        Мы уверены, что вы наверняка играли во множество популярных тайтлов, и знаете оттуда всевозможные цитаты, большинство из которых уже расхватали на мемы. Но сможете ли вы отгадать все эти игры?
      </span>
      <button v-show="!isShow" class="test-btn" @click="showTest">
        Пройти тест
      </button>
      <Competition v-show="isShow" />
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
    padding: 190px 0
    position: relative
    
  &-shadow
    background: radial-gradient(50% 50% at 50% 50%, rgba(188, 213, 221, 0.2) 0%, rgba(87, 87, 87, 0) 100%)
    width: 50%
    height: 100%
    position: absolute
    z-index: 0
    top: 0
  
  &-bg
    width: 100%
    display: block
    margin: 0 auto
    position: absolute
    top: -800px
    left: 0
    z-index: 1
  
  &-title
    font: bold 38px/46px $font-main
    color: #ffffff
    text-transform: uppercase
    display: block
    margin: 0 auto
    position: relative
    z-index: 3
    text-align: center
    max-width: 750px
  
  &-separator
    display: block
    background: #C3C6C8
    width: 100%
    max-width: 84px
    height: 6px
    margin: 20px auto 0
    @include desktop
      margin: 20px auto 0
  
  &-desc
    position: relative
    z-index: 3
    font: 24px/29px $font-main
    color: #ffffff
    display: block
    max-width: 770px
    width: 100%
    margin: 40px auto 0
    text-align: center
  
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
    
</style>
