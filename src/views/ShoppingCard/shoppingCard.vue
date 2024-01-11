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
        <div class="post">
            <div class="row listt">
                <div class="col-md-2 ii">
                    <a ><img @click="show='Horizontal'" src="../../assets/imags/ShowStyle.png" alt=""></a>
                    <a ><img @click="show='vertical'" class="me-2" src="../../assets/imags/Show Style.png" alt=""></a>
                    <a href="" class="hiden " ><img src="../../assets/imags/filter1.png" alt=""></a>
                </div>
                <div class="col-md-10 textt" >ترتيب حسب : <span style="" class="updown"> من الاعلى الي الاقل</span>  <i class="fa-solid fa-chevron-down"></i></div>
            </div>
        </div>
        <div class="vertical" v-if="show==='vertical'">
            <cardItems
          />
          
        </div>
        <div class="Horizontal" v-if="show==='Horizontal'">
          
          <Allproducts />
        </div>
      </div>
    </div>
    
  </div>
  <!-- <div class="container xx"> -->
    <div class="">
    
      <FooterSide />
    
    </div>
  <!-- </div> -->
  
</template>
<script>
import Header from '@/components/header/header.vue'
import cardItems from "@/components/shoppingcard/cardItems.vue";
import Allproducts from "@/components/shoppingcard/Allproducts.vue";
import Sidebar from "@/components/shoppingcard/cardSidebar.vue";
import FooterSide from "@/components/FooterSide.vue";


export default {
  data: function () {
    return {
     show:'vertical'
     
    };
  },
  name: "blog",
  components: {
    cardItems,
    Sidebar,
    Header,
    Allproducts,
    FooterSide
  },
};
</script>
<style scoped>
.post{
    
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    position: relative;
    text-align: left;
    margin-bottom: 20px;
    border-radius: 5px;
}

.ii{
    margin-right: 0px;
    
}
.hiden{
  display: none;
}
@media(max-width:991px) {
    .post{
       
        margin-left: -80px;
    }
    .cont{
        width: 80%;
        margin-right: 50px;
    }
    .ii{
        width: 20%;
        text-align: right;
    }
    .textt{
        width: 70%;
    }
}
@media(max-width:767px) {
    
   
    .hiden{
      display: block;
      width: 50px;
      margin-right: 10px;
      border: 1px solid var(--text-gray);
      text-align: center;
      border-radius: 5px;
    }

    .ii{
      display: flex;
        width: 30%;
        text-align: right;
        padding-left: 0;
    }
    .textt{
        width: 50%;
        padding: 0;
    }
    
}
</style>