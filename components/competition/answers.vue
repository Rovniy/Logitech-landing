<template>
  <div class="answers-area">
    <h1>answers</h1>
    <span v-for="item in answers" :key="item.text" class="answers-submit" @click="checkAnswer(item.is_correct)">{{ item.text }}</span>
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
    checkAnswer(is_correct) {
      this.setAnswer(is_correct)
    }
  }
}
</script>

<style lang="scss" scoped>
.answers-submit {
  cursor: pointer;
  &:hover {
    color: red;
  }
}

</style>
