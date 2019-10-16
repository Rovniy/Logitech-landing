<template>
  <main class="container">
    <SectionFirst />
    <SectionComments />
    <SectionThree />
    <SectionFour />
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

export default {
  components: {
    SectionFirst,
    SectionComments,
    SectionThree,
    SectionFour,
    SectionTest,
    Footer,
    SectionBuy,
    Noty
  }
}
</script>
