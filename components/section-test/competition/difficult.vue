<template>
  <div class="difficult-area">
    <span class="difficult-area-title">выбери уровень сложности</span>
    <div class="difficult-area-select">
      <div class="difficult-area-select-left">
        <div class="difficult-area-select-left-buttons">
          <div :class="['difficult-area-select-left-buttons-item', {'difficult-area-select-left-buttons-item-active': level === 'normal'}]" @click="setLevel('normal')">
            <span v-if="level !== 'normal'">Нормальный (15 вопросов)</span>
            <span v-if="level === 'normal'">Нормальный (выбрано)</span>
          </div>
          <div :class="['difficult-area-select-left-buttons-item', {'difficult-area-select-left-buttons-item-active': level === 'hard'}]" @click="setLevel('hard')">
            <span v-if="level !== 'hard'">Сложный (15 вопросов)</span>
            <span v-if="level === 'hard'">Сложный (выбрано)</span>
          </div>
          <div :class="['difficult-area-select-left-buttons-item', {'difficult-area-select-left-buttons-item-active': level === 'nightmare'}]" @click="setLevel('nightmare')">
            <span v-if="level !== 'nightmare'">Кошмарный (30 вопросов)</span>
            <span v-if="level === 'nightmare'">Кошмарный (выбрано)</span>
          </div>
        </div>
      </div>
      <div class="difficult-area-select-right">
        <img v-show="level === 'normal'" class="difficult-area-select-right-img" src="/images/misc/level_normal.jpg" alt="" loading="lazy">
        <img v-show="level === 'hard'" class="difficult-area-select-right-img" src="/images/misc/level_hard.jpg" alt="" loading="lazy">
        <img v-show="level === 'nightmare'" class="difficult-area-select-right-img" src="/images/misc/level_nightmare.jpg" alt="" loading="lazy">
      </div>
    </div>
    <button class="difficult-area-next" @click="start(level)">
      Начать тест
    </button>
  </div>
</template>

<script>
export default {
  props: {
    start: {
      type: Function,
      default: () => null
    }
  },
  data() {
    return {
      level: 'normal'
    }
  },
  methods: {
    setLevel(level) {
      this.level = level
      window.ga('send', 'event', 'test', 'click', 'start')
    }
  }
}
</script>

<style lang="sass" scoped>
.difficult-area
  width: 100%
  margin: 0

  &-title
    font: bold 14px/14px $font-main
    color: #000000
    text-transform: uppercase
    text-align: center
    display: block

  &-select
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    margin: 20px 0 0 0
    @include tablet
      margin: 40px 0 0 0
      flex-direction: column
    @include desktop
      margin: 0
      flex-direction: row

    &-left
      order: 1
      width: 100%
      @include tablet
        width: auto
        min-width: 350px
      @include desktop
        order: 1
        min-width: 350px

      &-buttons
        border-radius: 4px
        border: 1px solid #EAEAEA
        &-item
          padding: 24px 30px
          font: 16px/16px $font-main
          color: #000000
          text-transform: none
          border-bottom: 1px solid #EAEAEA
          cursor: pointer
          &:nth-child(3)
            border: none
          &:hover
            background: #f5f5f5

          &-active
            background: $color-blue
            color: #000
            border-top-left-radius: 4px
            border-top-right-radius: 4px
            &:nth-child(2)
              border-top-left-radius: 0
              border-top-right-radius: 0
              border-bottom-left-radius: 4px
              border-bottom-right-radius: 4px
            &:hover
              background: $color-blue

    &-right
      margin: 20px auto
      order: 0
      width: 200px
      height: 200px
      background: $color-red
      border-radius: 50%
      overflow: hidden
      @include desktop
        order: 1

      &-img
        width: 200px
        height: 200px

  &-next
    background: #000000
    border-radius: 8px
    width: 100%
    color: #FFFFFF
    font: 14px/14px $font-main
    padding: 25px
    text-align: center
    border: none
    margin: 40px 0 0 0
    text-transform: uppercase
    &:hover
      cursor: pointer
    &:focus
      outline: none
    @include desktop
      font: 18px/18px $font-main
</style>
