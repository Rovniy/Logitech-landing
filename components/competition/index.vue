<template>
  <div class="competition-area">
    <h1>competition</h1>
    <div v-if="isEmptyQuestions">
      <Question :question="currentQuestion" />
      <Answers :answers="currentAnswers" :set-answer="setAnswer" />
    </div>
    <div v-else>
      <h2>Вопросы кончились</h2>
      <h3>{{ successAnswers }}</h3>
      <button @click="resetCompetition">
        Заново блеать
      </button>
    </div>
  </div>
</template>

<script>
import Question from './question'
import Answers from './answers'
import Competition from '~/competition.json'
import get from 'lodash/get'

export default {
  components: {
    Question,
    Answers
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
    }
  },
  mounted() {
    console.log('Competiton', Competition)
  },
  methods: {
    setAnswer(value) {
      console.log('value', value)
      this.currentAnswer++
      
      if (value) {
        this.successAnswers++
      }
    },
    resetCompetition() {
      this.currentAnswer = this.successAnswers = 0
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
