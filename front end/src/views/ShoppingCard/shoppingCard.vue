<template>
  <div>
    <Header />
  </div>

  <div class="container">
    <div class="row">
      <p style="margin-bottom:50px;">
        <span style="color: var(--primary);">
          <router-link  :to="{name:'home' }"  class="router">الرئسية</router-link> / 
        </span> 
      <span  style="color:black;">كل المنتجات</span></p>
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
                    <a @click="see='Horizontal'" :class="{ active: see==='Horizontal'}">
                   <div class="row polss" >
                     <p >
                      <i class="fa-solid fa-ellipsis"></i>
                      </p>
                      <p>
                        <i class="fa-solid fa-ellipsis"></i>

                      </p>
                      <p>
                        <i class="fa-solid fa-ellipsis"></i>
                      </p>
                   </div>
                    </a>
                    <a class="two" @click="see='vertical'" :class="{ active: see==='vertical'}"><i  class="fa-solid fa-list-ul fa-flip-horizontal me-2"></i></a>
                    
                    <button class="btn   hiden" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-filter"></i></button>

                     
                </div>
                <div class="col-md-10 textt" >ترتيب حسب : <span style="" class="updown"> من الاعلى الي الاقل</span>  <i class="fa-solid fa-chevron-down"></i></div>
            </div>
        </div>
        <div class="vertical" v-if="see==='vertical'">
            <cardItems
          />
          
        </div>
        <div class="Horizontal" v-if="see==='Horizontal'">
          
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

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">فلترة المنتجات</h5>
   
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="row offcanvas-body" style="padding: 0;">
    <div class="col-md-12">
      <iconSidebar  />
    </div>
  </div>
</div>
</template>
<script>
import Header from '@/components/header/header.vue'
import cardItems from "@/components/shoppingcard/cardItems.vue";
import Allproducts from "@/components/shoppingcard/Allproducts.vue";
import Sidebar from "@/components/shoppingcard/cardSidebar.vue";
import iconSidebar from "@/components/shoppingcard/IconSidebar.vue";

import FooterSide from "@/components/FooterSide.vue";


export default {
  data: function () {
    return {
     see:'vertical',
     show:false
     
    };
  },
  name: "blog",
  components: {
    cardItems,
    Sidebar,
    Header,
    Allproducts,
    iconSidebar,
    FooterSide
  },
  methods:{
    // notHide:function(){
    //   sidebar
    // }
  }
};
</script>
<style scoped>
.router{
  text-decoration: none;
  border: none;
}
.router:hover{
  color: var(--primary) !important;
}
.post{
    
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    position: relative;
    text-align: left;
    margin-bottom: 20px;
    border-radius: 5px;
}
a{
  text-align: center;
  padding-right:5px ;
  /* margin-bottom: 10px; */
  border: 1px solid #E0E0E0;
  border-radius: 5px;
  margin-left: 5px;
  color: var(--text-gray) !important;
}
.ii{
    margin-right: 0px;
    display: flex;
    
}
.hiden{
  display: none;
  color: var(--text-gray);
  border: 1px solid #E0E0E0 !important;
}
.hiden:hover{
background-color: var(--primary);
  color: white !important;
}
.polss{
  width: 50px;
  /* height: 50px; */
}
.two{
  padding-right: 0;
  padding-left: 10px;
  margin-left: 0 !important;
}

.polss p{
  margin-bottom: 0;
  margin-top: 0;
  width: auto;
  height: 7px;
}


.polss p i{
  font-size: 20px;
  padding-left: 0;
  width: auto;
height: 5px !important;
}
.fa-list-ul{
  margin-top: 6px;
  font-size: 25px;
}
.active{
  background-color: var(--primary);
  color: white !important;
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