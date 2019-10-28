<template>
  <main id="container" class="container">
    <SectionFirst />
    <SectionComments />
    <SectionThree />
    <SectionFour />
    <SectionBuy />
    <SectionTest />
    <Footer />
    <Noty />
    <noscript>
      <img src="https://vk.com/rtrg?p=VK-RTRG-419229-aPnuU" style="position:fixed; left:-999px" alt="" />
    </noscript>
    <noscript>
      <img src="https://top-fwz1.mail.ru/counter?id=3145704;js=na" style="border:0;position:absolute;left:-9999px;" alt="Top.Mail.Ru" />
    </noscript>
    <noscript>
      <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=421168088797161&ev=PageView&noscript=1" alt="" />
    </noscript>
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MR8ZG9J" height="0" width="0" style="display:none;visibility:hidden" />
    </noscript>
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
