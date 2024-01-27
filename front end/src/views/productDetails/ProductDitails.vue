<template>
  <div>
    <Header />
  </div>
    <div>
        <ProductDetailsComents :id="id"/>
        <div class="container">
          <div class="row tableheader">
        <div class="col-md-2 coll " @click="show='details'" :class="{ active: show==='details'}">تفاصيل المنتج</div>
        <div class="col-md-2 coll" @click="show='features'" :class="{ active: show==='features'}">مميزات المنتج</div>
        <div class="col-md-2 coll" @click="show='Reviews'" :class="{ active: show==='Reviews'}">تقيمات المنتج</div>
       </div>
        </div>
        <div v-if="show==='features'">
          <ProductDetailsComents2 :id="id" />
        </div>
        <div v-if="show==='Reviews'" >
          <ProductDetailsComents3 :id="id" />
        </div>
        <div v-if="show==='details'">
          <ProductDetailsComents4 :id="id"/>
        </div>
        <productsContainer :id="id" :catID="catID"/>
        
        <FooterSide/>
    </div>
</template>
<script>
import Header from '@/components/header/header.vue'
import ProductDetailsComents from '@/components/productDetails/ProductDitailsComentes.vue'
import ProductDetailsComents2 from '@/components/productDetails/ProductDitailsComentes2.vue'
import ProductDetailsComents3 from '@/components/productDetails/CommentsPart.vue'
import ProductDetailsComents4 from '@/components/productDetails/DetailsProducts.vue'
import productsContainer from '@/components/productDetails/LikeProduct.vue'
import FooterSide from "@/components/FooterSide.vue";

export default {
   props: ['id','catID'],
  data: function () {
    return {
     show:"features"
    };
  },

  name: "ProductDetails",
  components: {
  
    Header,
    ProductDetailsComents,
    ProductDetailsComents2,
    productsContainer,
    ProductDetailsComents3,
    ProductDetailsComents4,
    FooterSide
    
  },
};
</script>
<style scoped>
.tableheader{
    margin: 15px 0 0 0;

}
.tableheader .coll{
    padding: 15px 0px 0 0px !important;
    margin: 0 10px !important;
    height: 56px;
    text-align: center;
    font-family: DIN Next LT Arabic;
font-size: 16px;
font-style: normal;
font-weight: bold;
line-height: normal;
}
.tableheader .coll:hover{
    background-color: var(--primary) !important;
    color: white;
}
.active{
    background-color: var(--primary);
    color: white;
}
@media(max-width:767px) {
 
    .coll{
        width: 20%;
    }
}
</style>