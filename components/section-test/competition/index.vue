<template>
  <div class="competition-area">
    <span v-if="step === 1 && ready" class="competition-area-title">Вопросы ({{ currentStep }}/{{ totalQuestionsCount }})</span>
    <Difficult v-if="step === 0" :start="start" />
    <Question v-if="step === 1 && ready" :question="currentQuestions" :count="totalQuestionsCount" :results="goToResults" :set-step="setStep" />
    <Result v-if="step === 2" :correct-answers="correctAnswers" :do-again="doAgain" />
    <!--<Result :correct-answers="correctAnswers" />-->
  </div>
</template>

<script>
import Question from './question'
import Result from './result'
import Difficult from './difficult'
import Competition from '~/assets/data/competition.json'

const NORMAL_EASY_COUNT = 10
const NORMAL_MEDIUM_COUNT = 5
const HARD_MEDIUM_COUNT = 10
const HARD_HARD_COUNT = 5
const NIGHTMARE_MEDIUM_COUNT = 20
const NIGHTMARE_HARD_COUNT = 10

export default {
  components: {
    Question,
    Difficult,
    Result
  },
  data() {
    return {
      step: 0,
      level: 0,
      currentAnswer: 0,
      successAnswers: 0,
      currentQuestions: [],
      ready: false,
      correctAnswers: 0,
      currentStep: 1
    }
  },
  computed: {
    totalQuestionsCount() {
      return this.currentQuestions.length
    }
  },
  mounted() {
    this.findLocalData()
  },
  methods: {
    doAgain() {
      localStorage.removeItem('questions')
      localStorage.removeItem('lastQuestion')
      this.step = 0
    },
    findLocalData() {
      const questions = localStorage.getItem('questions')
      
      if (!questions) return
  
      this.currentQuestions = JSON.parse(questions)
      this.step = 1
      this.ready = true
    },
    start(level) {
      localStorage.setItem('level', level)
      
      if (level === 'normal') {
        this.createNormalQuestions()
      } else if (level === 'hard') {
        this.createHardQuestions()
      } else {
        this.createNightmareQuestions()
      }
      
      this.step = 1
    },
    createNormalQuestions() {
      const easyQuestionsCount = Competition.easy.length - 1
      const normalQuestionsCount = Competition.medium.length - 1
      
      while (this.currentQuestions.length < NORMAL_EASY_COUNT) {
        const random = this.random(easyQuestionsCount)
        console.log('easy-random-1', random)
        if (!Competition.easy[random].use) {
          Competition.easy[random].use = true
          
          const list = Competition.easy[random]
          list.answers.sort(() => Math.random() - 0.5)
          
          this.currentQuestions.push(list)
        }
      }
  
      while (this.currentQuestions.length < (NORMAL_MEDIUM_COUNT + NORMAL_EASY_COUNT)) {
        const random = this.random(normalQuestionsCount)
        console.log('easy-random-2', random)
        if (!Competition.medium[random].use) {
          Competition.medium[random].use = true
  
          const list = Competition.medium[random]
          list.answers.sort(() => Math.random() - 0.5)
          
          this.currentQuestions.push(list)
        }
      }
      
      this.currentQuestions.sort(() => Math.random() - 0.5)
      
      localStorage.setItem('questions', JSON.stringify(this.currentQuestions))
      
      this.ready = true
  
      console.log('easy', this.currentQuestions)
    },
    createHardQuestions() {
      const mediumQuestionsCount = Competition.medium.length - 1
      const hardQuestionsCount = Competition.hard.length - 1
  
      while (this.currentQuestions.length < HARD_MEDIUM_COUNT) {
        const random = this.random(mediumQuestionsCount)
        console.log('hard-random-1', random)
        if (!Competition.medium[random].use) {
          Competition.medium[random].use = true
          
          const list = Competition.medium[random]
          list.answers.sort(() => Math.random() - 0.5)
          
          this.currentQuestions.push(list)
        }
      }
  
      while (this.currentQuestions.length < (HARD_MEDIUM_COUNT + HARD_HARD_COUNT)) {
        const random = this.random(hardQuestionsCount)
        console.log('hard-random-2', random)
        if (!Competition.hard[random].use) {
          Competition.hard[random].use = true
  
          const list = Competition.medium[random]
          list.answers.sort(() => Math.random() - 0.5)
          
          this.currentQuestions.push(list)
        }
      }
  
      this.currentQuestions.sort(() => Math.random() - 0.5)
  
      localStorage.setItem('questions', JSON.stringify(this.currentQuestions))
  
      this.ready = true
  
      console.log('hard', this.currentQuestions)
    },
    createNightmareQuestions() {
      const mediumQuestionsCount = Competition.medium.length - 1
      const hardQuestionsCount = Competition.hard.length - 1
  
      while (this.currentQuestions.length < NIGHTMARE_MEDIUM_COUNT) {
        const random = this.random(mediumQuestionsCount)
        console.log('hard-random-1', random)
        if (!Competition.medium[random].use) {
          Competition.medium[random].use = true
      
          const list = Competition.medium[random]
          list.answers.sort(() => Math.random() - 0.5)
      
          this.currentQuestions.push(list)
        }
      }
  
      while (this.currentQuestions.length < (NIGHTMARE_MEDIUM_COUNT + NIGHTMARE_HARD_COUNT)) {
        const random = this.random(hardQuestionsCount)
        console.log('hard-random-2', random)
        if (!Competition.hard[random].use) {
          Competition.hard[random].use = true
      
          const list = Competition.medium[random]
          list.answers.sort(() => Math.random() - 0.5)
      
          this.currentQuestions.push(list)
        }
      }
  
      this.currentQuestions.sort(() => Math.random() - 0.5)
  
      localStorage.setItem('questions', JSON.stringify(this.currentQuestions))
  
      this.ready = true
  
      console.log('nightmare', this.currentQuestions)
    },
    random(max) {
      let rand = Math.random() * (max + 1)
      return Math.floor(rand)
    },
    goToResults(correctAnswers) {
      console.log('this.correctAnswers', correctAnswers)
      this.correctAnswers = correctAnswers
      this.step = 2
    },
    setStep(step) {
      this.currentStep = step + 1
    }
  }
}
</script>

<style lang="sass" scoped>
.competition-area
  position: relative
  z-index: 3
  background: #ffffff
  border-radius: 8px
  padding: 20px
  width: 100%
  color: #000
  margin: 40px 0 0 0
  @include tablet
    margin: 80px 0 0 0
    padding: 40px
  @include desktop
    margin: 100px 0 0 0
    max-width: 860px
  
  
  &-title
    font: bold 14px/14px $font-main
    color: #C4C4C4
    text-transform: uppercase
</style>
