<template>
  <div class="competition-questions">
    <span class="competition-questions-title">
      {{ currentQuestion.title }}
    </span>
    <div class="competition-questions-player">
      <vue-plyr v-if="playerReady" ref="plyr" :menu="false">
        <audio>
          <source :src="currentSound" type="audio/mp3">
        </audio>
      </vue-plyr>
    </div>
    <div class="competition-questions-answers">
      <div v-for="(item, key) in currentQuestion.answers" :key="key" :class="['competition-questions-answers-item', {'competition-questions-answers-item-active': key === answer}]" @click="getAnswer(key)">
        {{ item.text }}
      </div>
    </div>
    <button :class="['competition-questions-next', {'competition-questions-next-active': answer !== false}]" @click="next">
      Следующий шаг
    </button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    question: {
      type: Array,
      default: () => []
    },
    count: {
      type: Number,
      default: 0
    },
    results: {
      type: Function,
      default: () => {}
    },
    setStep: {
      type: Function,
      default: () => null
    }
  },
  data() {
    return {
      step: 0,
      correctAnswers: 0,
      answer: false,
      playerReady: false
    }
  },
  computed: {
    currentQuestion() {
      return this.question[this.step]
    },
    currentSound() {
      return this.currentQuestion.sound
    }
  },
  mounted() {
    this.findLastQuestion()
    this.playerReady = true
  },
  methods: {
    findLastQuestion() {
      const lastQuestion = localStorage.getItem('lastQuestion')
      
      if (!lastQuestion) return
      
      this.step = JSON.parse(lastQuestion)
      this.setStep(this.step)
      
    },
    getAnswer(key) {
      this.answer = key
    },
    next() {
      if (this.answer === false) return
      
      this.playerReady = false
      
      if (this.currentQuestion.answers[this.answer].is_correct) this.correctAnswers++
  
      if (this.step < this.count - 1) {
        this.step++
        this.answer = false
        this.setStep(this.step)
        localStorage.setItem('lastQuestion', this.step)
      } else {
        this.results(this.correctAnswers)
      }
  
      setTimeout(() => {
        this.playerReady = true
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.competition-questions
  margin: 20px 0 0 0
  @include tablet
    margin: 40px 0 0 0

  &-title
    width: 100%
    text-align: center
    display: block
    margin: 0 auto
    font: bold 18px/22px $font-main
    color: #000000
    text-transform: uppercase
    @include tablet
      font: bold 24px/29px $font-main
  
  &-player
    width: 100%
    margin: 20px auto
    @include tablet
      width: 400px
      
  &-answers
    margin: 20px 0 0 0
    width: 100%
    border: 1px solid #EAEAEA
    border-radius: 4px
    @include tablet
      margin: 30px 0 0 0
  
    &-item
      width: 100%
      padding: 15px
      color: #000
      font: 16px/19px $font-main
      text-align: left
      border-bottom: 1px solid #EAEAEA
      cursor: pointer
      @include tablet
        padding: 25px 30px
  
      &:first-child
        border-top-left-radius: 4px
        border-top-right-radius: 4px
      &:last-child
        border: none
        border-bottom-left-radius: 4px
        border-bottom-right-radius: 4px
  
      &-active
        background: $color-blue
        color: #000000
  
  &-next
    border-radius: 8px
    width: 100%
    font: 14px/14px $font-main
    padding: 25px
    text-align: center
    border: none
    margin: 40px 0 0 0
    text-transform: uppercase
    background: #C4C4C4
    color: #000
    &:hover
      cursor: pointer
    &:focus
      outline: none
    &-active
      color: #FFFFFF
      background: #000000
    @include desktop
      font: 18px/18px $font-main

</style>
