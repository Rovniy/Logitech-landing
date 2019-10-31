<template>
  <div class="competition-result">
    <span class="competition-result-title">правильных ответов</span>
    <span class="competition-result-title-res">{{ correctAnswers }} / {{ questionCount }}</span>
    <div class="competition-result-image-area">
      <img id="resultImage" class="competition-result-image-area-img" :src="result.image" alt="">
      <div class="competition-result-image-area-text">
        <span class="competition-result-image-area-text-txt">{{ result.text }}</span>
      </div>
    </div>
    <div class="share">
      <script src="/library/share.js" />
      <div class="ya-share2"
           data-services="vkontakte,facebook,twitter"
           :data-title="getFullTitle"
           :data-description="getFullTitle"
           data-hashtags="Logitech, G432, новинки@logitech, LogitechG432"
           :data-image="getImageUrl"
           data-lang="ru"
           data-size="m"
           data-url="https://headsets.logitech.promo"
           @click="analytics"
      />
    </div>
    <div class="go-again">
      <span class="go-again-text" @click="doAgain">Пройти тест еще раз</span>
    </div>
  </div>
</template>

<script>
import Results from '~/assets/data/results.json'

const HASH_TAG = '#LogitechG432'

export default {
  props: {
    correctAnswers: {
      type: Number,
      default: 0
    },
    doAgain: {
      type: Function,
      default: () => null
    }
  },
  data() {
    return {
      result: {},
      canvas: null
    }
  },
  computed: {
    getImageUrl() {
      return location.protocol + '//' + location.host + this.result.image
    },
    getFullTitle() {
      return `${this.correctAnswers} из ${this.questionCount}! Пройди звуковой тест об играх и купи ${HASH_TAG} со скидкой 1500руб.`
    },
    questionCount() {
      const level = localStorage.getItem('level')
      if (level && level === 'nightmare') {
        return 30
      } else {
        return 15
      }
    }
  },
  mounted() {
    this.findResults()
    window.ga('send', 'event', 'test', 'event', 'end')
  },
  methods: {
    analytics() {
      window.ga('send', 'event', 'test', 'event', 'share')
    },
    findResults() {
      let result = 0
      const keysArray = Object.keys(Results).map(item => parseInt(item))
      const forCalculate = this.correctAnswers
      const levelCoefficient = localStorage.getItem('level') === 'nightmare' ? forCalculate / 2 : this.correctAnswers

      keysArray.forEach(item => {
        if (levelCoefficient >= item) result = Results[item]
      })

      this.result = result

      localStorage.removeItem('questions')
      localStorage.removeItem('lastQuestion')
      localStorage.removeItem('level')
    },
  }
}
</script>

<style lang="sass" scoped>
.competition-result

  &-title
    width: 100%
    text-align: center
    display: block
    margin: 0 auto
    font: bold 24px/1 $font-main
    color: #000000
    text-transform: uppercase

    &-res
      text-align: center
      display: block
      margin: 20px auto 0
      font: bold 36px/1 $font-main


  &-image-area
    position: relative
    padding: 0
    margin: 20px 0 40px 0
    @include desktop
      margin: 40px 0 0 0

    &-img
      display: block
      width: 100%
      border-radius: 4px

    &-text
      padding: 40px
      border-radius: 8px
      border: 2px solid #323232
      background: #FFFFFF
      text-align: left
      z-index: 3
      position: relative
      top: auto
      width: 100%
      left: auto
      right: auto
      margin: 20px 0 0 0
      @include desktop
        width: 660px
        top: -40px
        margin: 0 auto

      &:before
        position: absolute
        content: ''
        bottom: -10px
        left: -2px
        right: -2px
        border-radius: 8px
        background: #323232
        z-index: 1
        height: 20px
      &:after
        position: absolute
        content: ''
        bottom: 0
        left: 0
        right: 0
        border-radius: 8px
        background: #fff
        z-index: 1
        height: 20px

      &-txt
        color: #000
        font: bold 18px/22px $font-main


.share
  text-align: center

.go-again
  display: flex
  justify-content: center
  align-items: center
  margin: 40px auto 0

  &-text
    font: 14px/14px $font-main
    color: #000
    text-transform: uppercase
    cursor: pointer

</style>
