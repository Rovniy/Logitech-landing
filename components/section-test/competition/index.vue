<template>
  <div class="competition-area">
    <span class="competition-area-title">Вопросы</span>
    <div v-if="isEmptyQuestions">
      <Question :question="currentQuestion" />
      <Answers :answers="currentAnswers" :set-answer="setAnswer" />
    </div>
    <div v-else>
      <Result :success-answers="successAnswers" :find-results="findResults" :reset-competition="resetCompetition" />
    </div>
  </div>
</template>

<script>
import Question from './question'
import Answers from './answers'
import Result from './result'
import Competition from '~/assets/data/competition.json'
import Results from '~/assets/data/results.json'
import get from 'lodash/get'

export default {
  components: {
    Question,
    Answers,
    Result
  },
  data() {
    return {
      level: 0,
      currentAnswer: 0,
      successAnswers: 0
    }
  },
  computed: {
    currentQuestion() {
      return get(Competition, `${this.currentAnswer}`, {})
    },
    currentAnswers() {
      return get(Competition, [`${this.currentAnswer}`, 'answers'], [])
    },
    isEmptyQuestions() {
      return (Competition.length > this.currentAnswer)
    },
    findResults() {
      let result = 0
      const keysArray = Object.keys(Results).map(item => parseInt(item))
      
      keysArray.forEach(item => {
        if (this.successAnswers >= item) result = Results[item]
      })
      
      return result
    }
  },
  methods: {
    setAnswer(item) {
      if (item.is_correct) this.successAnswers += this.currentQuestion.value
  
      this.currentAnswer++
    },
    resetCompetition() {
      this.currentAnswer = this.successAnswers = 0
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
  padding: 40px
  width: 100%
  max-width: 860px
  color: #000
  
  &-title
    font: bold 14px/14px $font-main
    color: #C4C4C4
    text-transform: uppercase
</style>
