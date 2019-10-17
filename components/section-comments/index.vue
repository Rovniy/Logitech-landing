<template>
  <section class="section section-comments">
    <div class="section-comments-container">
      <!-- COMMENTS -->
      <div class="block block-comments">
        <h3 class="block-comments-title">
          Отзывы и обзоры
        </h3>
        <div class="area">
          <hooper v-if="isMobile" :items-to-show="1" :center-mode="true" :infinite-scroll="true">
            <slide v-for="item in comments" :key="item.id">
              <article class="area-item">
                <span class="area-item-name">{{ item.name }}</span>
                <span class="area-item-text">{{ item.text }}</span>
                <a :href="item.link" target="_blank" class="area-item-read_more">
                  Читать полностью
                </a>
              </article>
            </slide>
  
            <hooper-pagination slot="hooper-addons" />
          </hooper>
  
          <div v-if="!isMobile">
            <article v-for="item in comments" :key="item.id" class="area-item">
              <span class="area-item-name">{{ item.name }}</span>
              <span class="area-item-text">{{ item.text }}</span>
              <a :href="item.link" target="_blank" class="area-item-read_more">
                Читать полностью
              </a>
            </article>
          </div>
        </div>
      </div>
  
      <hr class="section-comments-hr">
  
      <!-- REVIEW -->
      <div class="block block-review">
        <hooper v-if="isMobile" :items-to-show="1" :center-mode="true" :infinite-scroll="true">
          <slide v-for="item in reviews" :key="item.id">
            <article class="area-item">
              <span class="area-item-source">{{ item.source }}</span>
              <span class="area-item-title">{{ item.text }}</span>
              <a :href="item.link" target="_blank" class="area-item-read_more">{{ item.readMore }}</a>
            </article>
          </slide>
    
          <hooper-pagination slot="hooper-addons" />
        </hooper>
    
        <div v-if="!isMobile">
          <article v-for="item in reviews" :key="item.id" class="area-item">
            <span class="area-item-source">{{ item.source }}</span>
            <span class="area-item-title">{{ item.text }}</span>
            <a :href="item.link" target="_blank" class="area-item-read_more">{{ item.readMore }}</a>
          </article>
        </div>
      </div>
  
      <hr class="section-comments-hr">
  
  
      <!-- VIDEO -->
      <div class="block block-video">
        <hooper v-if="isMobile" :items-to-show="1" :center-mode="true" :infinite-scroll="true">
          <slide v-for="item in videos" :key="item.id">
            <article class="area-item" @click="previewVideo(item.href)">
              <img :src="`/images/video-${item.id}.jpg`" alt="" class="area-item-bg">
              <img :src="`/images/video-${item.id}-icon.png`" alt="" class="area-item-icon">
              <span class="area-item-name">{{ item.title }}</span>
              <div class="area-item-hover">
                <i class="area-item-hover-icon" />
              </div>
            </article>
          </slide>
    
          <hooper-pagination slot="hooper-addons" />
        </hooper>
        
        <div v-if="!isMobile">
          <article v-for="item in videos" :key="item.id" class="area-item" @click="previewVideo(item.href)">
            <img :src="`/images/video-${item.id}.jpg`" alt="" loading="lazy" class="area-item-bg">
            <img :src="`/images/video-${item.id}-icon.png`" alt="" loading="lazy" class="area-item-icon">
            <span class="area-item-name">{{ item.title }}</span>
            <div class="area-item-hover">
              <i class="area-item-hover-icon" />
            </div>
          </article>
        </div>
      </div>
      
      <div v-if="isVideoShow" class="modal-youtube">
        <div class="modal-youtube-bg" @click="closeVideo" />
        <iframe
          class="modal-youtube__frame"
          :src="`${videoUrl}?autoplay=1&modestbranding=1&rel=0&color=white&showinfo=0&origin=${currentHost}`"
          allow="accelerometer; autoplay; gyroscope;"
          allowfullscreen
        />
      </div>
    </div>
  </section>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination  } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  components: {
    Hooper,
    Slide,
    HooperPagination
  },
  data() {
    return {
      videos: [
        {
          id: 1,
          title: 'LOGITECH G432 7.1. От классики не убе...',
          href: 'https://www.youtube.com/embed/wy01grzbBUI'
        },
        {
          id: 2,
          title: 'Logitech G432 распаковка наушников (П...',
          href: 'https://www.youtube.com/embed/Emf54ncsQKA'
        },
        {
          id: 3,
          title: 'Logitech g432 интересная игровая гар...',
          href: 'https://www.youtube.com/embed/m6JdJQE0r6s'
        }
      ],
      comments: [
        {
          id: 1,
          name: 'CatSnow',
          text: 'Очень удобно сидят (на моей голове), хорошее шумоподавление. Не особо тяжелые или неудобные. Провода не короткие. Очень большой плюс это колёсико звука на левом наушнике сзади. Также порадовал микрофон, отключающийся при подъёме вверх...',
          link: 'https://www.dns-shop.ru/product/4494156e36323332/provodnye-nausniki-logitech-g432-cernyj/opinion/'
        },
        {
          id: 2,
          name: 'Евгений',
          text: 'Качество звука оправдывает цену более чем. Крутилка громгости теперь находится на чашке и её не надо ловить на кабеле. Микрофон включается и выключается опусканием и поднятием штанги микрофона - не забудете его отключить, когда не используете...',
          link: 'https://www.mvideo.ru/products/igrovye-naushniki-logitech-g432-981-000770-50126861/reviews'
        },
        {
          id: 3,
          name: 'Евгений Е.',
          text: 'Замечательная гарнитура для игр, фильмов и не слишком требовательного прослушивания музыки. Наушники хоть и не потягаются с дорогущей аудиофильской техникой (глупо ждать этого от игровой гарнитуры), но свои деньги явно отыгрывают. Гораздо лучше любого ноунейма...',
          link: 'https://www.dns-shop.ru/product/4494156e36323332/provodnye-nausniki-logitech-g432-cernyj/opinion/'
        }
      ],
      reviews: [
        {
          id: 1,
          source: '4FRAG.RU',
          text: 'Обзор гарнитур Logitech G332 и Logitech G432. Дабл-килл',
          link: 'https://4frag.ru/obzory_garnitur/obzor-garnitur-logitech-g332-i-logitech-g432-dabl-kill-261.html',
          readMore: 'https://4frags.ru'
        },
        {
          id: 2,
          source: 'trashbox.ru',
          text: 'Обзор Logitech G432 и Logitech G935: Вам с проводом или без?',
          link: 'https://trashbox.ru/topics/123109/obzor-logitech-g432-i-logitech-g935-vam-s-provodom-ili-bez',
          readMore: 'https://trashbox.ru'
        },
        {
          id: 3,
          source: 'ЯНДЕКС МАРКЕТ',
          text: 'Игровая гарнитура Logitech G432 с объёмным звуком',
          link: 'https://market.yandex.ru/journal/overview/igrovaja-garnitura-logitech-g432-s-obemnim-zvukom',
          readMore: 'https://market.yandex.ru'
        }
      ],
      isVideoShow: false,
      videoUrl: ''
    }
  },
  computed: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    },
    currentHost() {
      return window.location.protocol + '//' + location.host
    }
  },
  methods: {
    previewVideo(href) {
      console.log(href)
      this.videoUrl = href
      this.isVideoShow = true
    },
    closeVideo() {
      this.isVideoShow = false
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
    width: 100%
    overflow: hidden
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
    
  .area
    margin-top: 70px
  
  .area-item
      margin: 90px auto 0
      position: relative
      @include tablet
        max-width: 430px
        padding: 0 0 0 56px
        margin: 80px auto 0
      @include desktop
        margin: 20px auto 0
        height: 188px
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
        @include desktop
          font: bold 24px/1 $font-main
      &-text
        font: 14px/17px $font-main
        color: #656565
        display: block
        margin: 10px 0 0 0
        text-align: justify
      &-read_more
        font: 14px/17px $font-main
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
  @include desktop
    margin-top: 120px
    padding: 0 20px
    order: 3
  
  .area-item
    margin: 0 auto 60px
    display: flex
    flex-direction: column
    @include tablet
      max-width: 460px
    @include desktop
      margin: 0 auto 20px
      height: 188px
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
      font: 14px/17px $font-main
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
  box-sizing: content-box
  position: relative
  @include desktop
    margin-top: 120px
    width: 85%
    &:after
      position: absolute
      content: ''
      top: 0
      right: 0
      width: 1px
      height: $desktop-separator-height
      background: url('/images/misc/dot-dark-ver.gif') repeat-y

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
    
  
.modal-youtube
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  display: flex
  justify-content: center
  align-items: center
  z-index: 100
  
  &-bg
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: rgba(0,0,0,.8)
    z-index: 101
    
  &__frame
    border: none
    max-width: 90%
    position: relative
    z-index: 1000
    @include tablet
      width: 768px
      height: 432px
    @include desktop
      width: 1200px
      height: 675px
    
</style>
