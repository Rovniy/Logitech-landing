<template>
  <section class="section test">
    <div>
      <Competition />
    </div>
  </section>
</template>

<script>
import Competition from './competition'

export default {
  components: {
    Competition
  }
}
</script>

<style lang="sass" scoped>
  .container
    min-height: 100vh
    display: flex
    justify-content: center
    align-items: center
    text-align: center
</style>
