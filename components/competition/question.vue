<template>
  <div class="competition-area">
    <h1>Question</h1>
    <span>{{ question.title }}</span>
    <span>{{ question.description }}</span>
    <img :src="question.image" alt="">
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
  }
}
</script>

<style lang="scss" scoped>

</style>
