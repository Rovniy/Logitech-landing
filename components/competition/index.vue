<template>
  <div class="competition-area">
    <h1>competition</h1>
    <hr>
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

<style lang="scss" scoped>

</style>
