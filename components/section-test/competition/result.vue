<template>
  <div class="competition-result">
    <span class="competition-result-title">правильных ответов</span>
    <span class="competition-result-title-res">{{ correctAnswers }} / 15</span>
    <div class="competition-result-image-area">
      <img class="competition-result-image-area-img" :src="result.image" alt="">
      <div class="competition-result-image-area-text">
        <span class="competition-result-image-area-text-txt">{{ result.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Results from '~/assets/data/results.json'

export default {
  props: {
    correctAnswers: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      result: {}
    }
  },
  mounted() {
    this.findResults()
  },
  methods: {
    findResults() {
      let result = 0
      const keysArray = Object.keys(Results).map(item => parseInt(item))
    
      keysArray.forEach(item => {
        if (this.correctAnswers >= item) result = Results[item]
      })
    
      this.result = result
      
      localStorage.removeItem('questions')
      localStorage.removeItem('lastQuestion')
  
      console.log(this.result)
    }
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
    margin: 20px 0 0 0
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
      
</style>
