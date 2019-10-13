<template>
  <section class="section section-comments">
    <div class="section-comments-container">
      <!-- COMMENTS -->
      <div class="block block-comments">
        <h3 class="block-comments-title">
          Обзоры и отзывы
        </h3>
        <div class="area">
          <article class="area-item">
            <span class="area-item-name">Анатолий</span>
            <span class="area-item-text">
              Понравилось как гарнитура сидит на голове, очень удобно. Крутилка громкости теперь на чашке и не нужно ловить её на кабеле. Штанга микрофона при поднятии механически отключает микрофон - замечательное и интуитивное решение. Прекрасные, приятные кожеподобные а...
            </span>
            <a href="#" target="_blank" class="area-item-read_more">
              Читать полностью
            </a>
          </article>
      
          <article class="area-item">
            <span class="area-item-name">LSoul</span>
            <span class="area-item-text">
              Амбишуры полностью охватывают ушную раковину. Звуков из вне, практически не слышно. Понравился микрофон, удобен и очень функционален. В комплекте звукавая карта(переходник с 3,5 на USB) - настройка эквалайзера и т.д. Но можно старым способом 3,5 в комп и уже встроенной звуковой ка...
            </span>
            <a href="#" target="_blank" class="area-item-read_more">
              Читать полностью
            </a>
          </article>
      
          <article class="area-item">
            <span class="area-item-name">Евгений Е.</span>
            <span class="area-item-text">
              До этого четыре года пользовался G430. В Logitech G432, по сравнению с G430 нашёл для себя следующие минусы: провод стал короче, провод теперь без матерчатой оплётки (на 430 приятнее), амбушюры стали кожаные вместо матерчатых (переставил со старых)...
            </span>
            <a href="#" target="_blank" class="area-item-read_more">
              Читать полностью
            </a>
          </article>
        </div>
      </div>
  
      <hr class="section-comments-hr">
  
      <!-- REVIEW -->
      <div class="block block-review">
        <article class="area-item">
          <span class="area-item-source">4FRAG.RU</span>
          <span class="area-item-title">
            Обзор гарнитур Logitech G332 и Logitech G432. Дабл-килл
          </span>
          <a href="#" target="_blank" class="area-item-read_more">
            https://4frags.ru
          </a>
        </article>
    
        <article class="area-item">
          <span class="area-item-source">trashbox.ru</span>
          <span class="area-item-title">
            Обзор Logitech G432 и Logitech G935: Вам с проводом или без?
          </span>
          <a href="#" target="_blank" class="area-item-read_more">
            https://trashbox.ru
          </a>
        </article>
    
        <article class="area-item">
          <span class="area-item-source">ЯНДЕКС МАРКЕТ</span>
          <span class="area-item-title">
            Игровая гарнитура Logitech G432 с объёмным звуком
          </span>
          <a href="#" target="_blank" class="area-item-read_more">
            https://market.yandex.ru
          </a>
        </article>
      </div>
  
      <hr class="section-comments-hr">
  
  
      <!-- VIDEO -->
      <div class="block block-video">
        <article v-for="item in videos" :key="item.id" class="area-item" @click="previewVideo(item.id)">
          <img :src="`/images/video-${item.id}.jpg`" alt="" loading="lazy" class="area-item-bg">
          <img :src="`/images/video-${item.id}-icon.png`" alt="" loading="lazy" class="area-item-icon">
          <span class="area-item-name">{{ item.title }}</span>
          <div class="area-item-hover">
            <i class="area-item-hover-icon" />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          id: 1,
          title: 'LOGITECH G432 7.1. От классики не убе...',
          href: 'https://www.youtube.com/watch?v=wy01grzbBUI&t='
        },
        {
          id: 2,
          title: 'Logitech G432 распаковка наушников (П...',
          href: 'https://www.youtube.com/watch?v=Emf54ncsQKA'
        },
        {
          id: 3,
          title: 'Logitech g432 интересная игровая гар...',
          href: 'https://www.youtube.com/watch?v=m6JdJQE0r6s&t='
        }
      ]
    }
  },
  methods: {
    previewVideo(id) {
      console.log(id)
    }
  }
}
</script>

<style lang="sass" scoped>
$desktop-separator-height: 650px

.section-comments
  background: #ffffff

  &-hr
    background: transparent url('/images/misc/dot-dark-hor.gif') repeat-x
    border-color: transparent
    height: 1px
    width: 100%
    margin: 80px 0
    @include desktop
      display: none
      visibility: hidden
      
  &-container
    display: flex
    flex-direction: column
    justify-content: center
    align-items: flex-start
    padding: 30px 20px 80px 20px
    margin: 0 auto
    @include desktop
      flex-direction: row
      width: 100%
      max-width: 1920px


.block-comments
  width: 100%
  margin: 0 auto
  position: relative
  @include desktop
    &:after
      position: absolute
      content: ''
      top: 120px
      right: 0
      width: 1px
      height: $desktop-separator-height
      background: url('/images/misc/dot-dark-ver.gif') repeat-y
  
  &-title
    font: bold 18px/18px $font-main
    color: #000
    text-transform: uppercase
    @include desktop
      font: bold 48px/48px $font-main
    
  
  .area-item
      margin: 90px auto 0
      position: relative
      @include tablet
        max-width: 430px
        padding: 0 0 0 56px
        margin: 80px auto 0
      &:before
        position: absolute
        top: -50px
        left: 0
        content: ''
        background: url('/images/quotes.svg') no-repeat
        width: 38px
        height: 32px
        @include tablet
          top: 0
        
      &-name
        font: bold 18px/18px $font-main
        color: #000
      &-text
        font: 14px/17px 'Arial', sans-serif
        color: #656565
        display: block
        margin: 20px 0 0 0
      &-read_more
        font: 14px/17px 'Arial', sans-serif
        color: $color-blue
        display: block
        text-decoration: none
        &:hover
          text-decoration: underline
          border-color: $color-blue
        &:focus
            outline: none
  
.block-review
  width: 100%
  position: relative
  @include desktop
    margin-top: 120px
    padding: 0 20px
    &:after
      position: absolute
      content: ''
      top: 0
      right: 0
      width: 1px
      height: $desktop-separator-height
      background: url('/images/misc/dot-dark-ver.gif') repeat-y
  
  .area-item
    margin: 0 auto 60px
    display: flex
    flex-direction: column
    @include tablet
      max-width: 460px
    &:last-child
      margin: 0 auto
      
    &-source
      width: 100%
      font: bold 14px/14px $font-main
      text-transform: uppercase
      color: #676767
    &-title
      width: 100%
      font: bold 24px/29px $font-main
      color: #000
      margin: 10px 0 0 0
    &-read_more
      margin: 10px 0 0 0
      width: 100%
      font: 14px/17px 'Arial', sans-serif
      color: $color-blue
      display: block
      text-decoration: none
      &:hover
        text-decoration: underline
        border-color: $color-blue
      &:focus
        outline: none
  
  
.block-video
  width: 100%
  @include desktop
    margin-top: 120px

  .area-item
    max-width: 334px
    width: 100%
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    position: relative
    margin: 20px auto 0
    cursor: pointer
    &:first-child
      margin: 0 auto 0
    &:hover
      .area-item-hover
        display: flex
    
    &-bg
      max-width: 100%
    
    &-icon
      position: absolute
      top: 8px
      left: 8px
    &-name
      display: block
      position: absolute
      top: 17px
      left: 58px
      color: $color-white
    &-hover
      z-index: 5
      width: 74px
      height: 48px
      position: absolute
      top: calc(50% - 24px)
      left: calc(50% - 37px)
      display: none
      background: $color-red
      border-radius: 10px
      justify-content: center
      align-items: center
      &-icon
        width: 0
        height: 0
        border-top: 9px solid transparent
        border-left: 18px solid white
        border-bottom: 9px solid transparent
    
    
</style>
