<template>
  <div class="answers-area">
    <h1>answers</h1>
    <span v-for="item in answers" :key="item.text" class="answers-submit" @click="checkAnswer(item)">{{ item.text }}</span>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    answers: {
      type: Array,
      default: () => []
    },
    setAnswer: {
      type: Function,
      default: new Function()
    }
  },
  methods: {
    checkAnswer(item) {
      this.setAnswer(item)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
