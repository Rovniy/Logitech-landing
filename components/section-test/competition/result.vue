<template>
  <div class="competition-result-area">
    <h2>Вопросы кончились</h2>
    <h3>{{ successAnswers }}</h3>
    <h3>{{ findResults }}</h3>
    <button @click="resetCompetition">
      Заново блеать
    </button>
  </div>
</template>

<script>
export default {
  props: {
    successAnswers: {
      type: Number,
      default: 0
    },
    findResults: {
      type: String,
      default: ''
    },
    resetCompetition: {
      type: Function,
      default: () => {}
    }
  },
}
</script>
