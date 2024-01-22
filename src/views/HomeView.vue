<template>
    <div class="home">
    <Header />
    <BannerVue />
    <listContainer />
    <productsContainer />
    <bannerContainer />
    <shoppingCategories />
    <shoppingOffers /> 
    <ArrivedSoon />
    <SectionDives />
    <bannerCont />
    <productsCont />
    <review />
    <blog />
    <brand />
    <FooterSide />
    

  </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/header/header.vue'
import BannerVue from '@/components/Home/Banner.vue'
import listContainer from '@/components/Home/listContainer.vue'
import bannerContainer from '@/components/Home/bannerContainer.vue'
import shoppingCategories from '@/components/Home/ShoppingCategoris.vue'
import ArrivedSoon from '@/components/Home/ArrivedSoon.vue'
import SectionDives from '@/components/Home/SectionDives.vue'
import shoppingOffers from '@/components/Home/OfferEndSoon.vue'
import productsContainer from '@/components/Home/productsContainer.vue'
import FooterSide from '@/components/FooterSide.vue'
import bannerCont from '@/components/Home/bannerCont.vue'
import productsCont from '@/components/Home/productsCont.vue'
import review from '@/components/Home/review.vue'
import blog from '@/components/Home/blog.vue'
import brand from '@/components/Home/brandContainer.vue'



export default {
  name: 'HomeView',
  components: {
    // TopHeader,
    Header,
    BannerVue,
    listContainer,
    bannerContainer,
    shoppingCategories,
    shoppingOffers,
    productsContainer,
    ArrivedSoon,
    SectionDives,
    bannerCont,
    productsCont,
    review,
    blog,
    brand,
    FooterSide

  }
}
</script>