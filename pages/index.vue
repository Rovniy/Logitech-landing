<template>
  <main id="container" class="container">
    <SectionFirst />
    <SectionComments />
    <hooper v-if="!isMobile" :items-to-show="1" :infinite-scroll="true">
      <slide>
        <SectionThree />
      </slide>
      <slide>
        <SectionFour />
      </slide>
    </hooper>
    <SectionThree v-if="isMobile" />
    <SectionFour v-if="isMobile" />
    <SectionBuy />
    <SectionTest />
    <Footer />
    <Noty />
  </main>
</template>

<script>
import SectionFirst from '@/components/section-first'
import SectionComments from '@/components/section-comments'
import SectionThree from '@/components/section-three'
import SectionFour from '@/components/section-four'
import SectionTest from '@/components/section-test'
import Footer from '@/components/footer'
import SectionBuy from '@/components/section-buy'
import Noty from '@/components/noty'
import { Hooper, Slide } from 'hooper'

export default {
  components: {
    SectionFirst,
    SectionComments,
    SectionThree,
    SectionFour,
    SectionTest,
    Footer,
    SectionBuy,
    Noty,
    Hooper,
    Slide
  },
  computed: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }
  }
}
</script>
