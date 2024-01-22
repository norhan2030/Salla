<template>
    <div class="home">
    <Header />
    <Card />
    <FooterSide />
    

  </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/header/header.vue'
import Card from '@/components/productDetails/CardProduct.vue'
import FooterSide from '@/components/FooterSide.vue'

export default {
  // name: 'Card',
  components: {
    // TopHeader,
    Header,
    Card,
    FooterSide

  }
}
</script>