<template>
  <div>
    <Header />
  </div>

  <div class="container">
    <div class="row">
      <p style="margin-bottom:50px;"><span style="color: var(--primary);">الرئسية / </span><span  style="color:black;">كل المنتجات</span></p>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="posts-area">
          <!-- اختصار v-bind هو : -->
         <Sidebar />
        </div>
      </div>
      <div class="col-md-8">
        <div class="sidebar">
            <cardIicon
          />
          
        </div>
      </div>
    </div>
    
  </div>
  <div class="row">
    
      <FooterSide />
    
  </div>
</template>
<script>
import Header from '@/components/header/header.vue'
import cardIicon from "@/components/shoppingcard/CardIcon.vue";
import Sidebar from "@/components/shoppingcard/cardSidebar.vue";
import FooterSide from "@/components/FooterSide.vue";


export default {
  data: function () {
    return {
      
     
    };
  },
  name: "blog",
  components: {
    cardIicon,
    Sidebar,
    Header,
    FooterSide
  },
};
</script>
