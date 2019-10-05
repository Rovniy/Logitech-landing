<template>
  <div class="competition-question-area">
    <h1>Question</h1>
    <span>{{ question.title }}</span>
    <span>{{ question.description }}</span>
    <img class="question-area" :src="createImageUrl" alt="">
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    question :{
      type: Object,
      default: () => {}
    }
  },
  computed: {
    createImageUrl() {
      return '/images/competition/' + this.question.image
    }
  }
}
</script>

<style lang="scss" scoped>
.question-area {
  height: 100px;
}
</style>
