<template>
 <div class="content">
    <div class="container">
        <div class="row headee">
            <p class="title">وصل حديثا</p>
            <p>تسوق احدث المنتجات المميزة المضافة جديد</p>
        </div>
        <div class="row mid">
            <swiper
        :slidesPerView="1"
        :spaceBetween="10"
        :pagination="{
        clickable: true,
        }"
        :breakpoints="{
        '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        }"
        :modules="modules"
        class="mySwiper"
    >
            <swiper-slide 
            v-for="product in displayItems"
            :key="product.id"
            >
            <router-link :to="{ name: 'ProductDetails', params: { id: product.id,catID: product.cat.id } }" class="img d-block">
                <img 
                v-bind:src="'./images/product/' + product.img +'.png' " class="position" alt="">
               
                <span class="new text-white" v-if="popular.some(prod => prod.id === product.id)"> جديد </span>
                <span class=" text-white" v-else>  </span>
            </router-link >

                <div class="row">
                    <p class="p1">{{product.cat.name}}</p>
                    <p class="p2">{{ product.name }}</p>
                    <p class="p3">{{ product.decs}}</p>
                    <label for="">{{product.price}}.00 رس</label>
                </div>
                <div class="row btnn">
                    <div class="col-md-9">
                        <button><i class="fa-solid fa-cart-shopping"></i> اضف للسلة</button>
                    </div>
                    <div class="col-md-3">
                        <button><i class="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </swiper-slide>

            
            </swiper>
        </div>
    </div>
 </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import axios from 'axios';

export default {
components: {
    Swiper,
    SwiperSlide,  
},
data() {
    return {
        displayItems: [],
         popular:[],
      
    };
  },
async mounted() {
    

    await axios
    .get(
    "newest/" 
    )
    .then((res) => {
    this.displayItems = res.data.data;
    })
    .catch((error) => {
    console.log(error);
    console.log(error.response.data.errors);
    });
    axios.get(
          "newest/" 
        )
        .then((res) => {
          this.popular = res.data.data;
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.errors);
        });
        
        
},
setup() {
    return {
    modules: [Pagination],
    };
},
};
</script>
<style scoped>
.position{
    position: relative;
}

.new{
    position: absolute;
     top: 10px;
    left:20px;
    color: var(---Dark-Color---White, #FFF);
    font-weight: 400;
    line-height: normal;
    font-size: 16px;
    padding: 5px 15px;
    background-color: var(--Primary-Color---Primary);
}
.headee{
    padding-top: 30px !important;
}
.title{
    font-family: DIN Next LT Arabic;
font-size: 24px;
font-style: normal;
font-weight: bold;
line-height: 35px;
color: black;
margin-bottom: 0;
}
.content{
     background-color: #F8F8F8;
     height: 600px;
}


.swiper {
 padding: 0 1px 0 0 !important;
   background-color: #F8F8F8;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #FFF;
  margin: 20px 0 0 10px !important;
  padding: 0 !important;

  /* Center slide text vertically */
  /* display: flex;
  justify-content: center; */
  text-align: right;
  height: 430px;
  width: 271px !important;
}
.row{
    
    margin: 0 !important;
}
.swiper-slide img {
 width: 271px !important;
 height: 220px;
}
.p1{
    margin-top: 20px;
    font-family: DIN Next LT Arabic;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--primary);
}
.p2{
    font-family: DIN Next LT Arabic;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-bottom: 5px;
}
.p3{
    font-family: DIN Next LT Arabic;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-bottom: 5px;
}
.col-md-9{
    padding-left: 0;
}
.col-md-9 button{
    width: 100%;
    height: 50px;
    background-color: #FFF !important;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
}
.col-md-3 button{
    width: 100%;
    height: 50px;
    background-color: #FFF !important;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    
}
.btnn{
    margin-top: 10px !important;
}
button:hover{
    background-color: var(--primary) !important;
    color: white;
}
@media(max-width:767px) {
    .col-md-9 {
        width: 70%;
    }
    .col-md-3 {
        width: 25%;
    }
}
.swiper-pagination-bullet{
  color: var(--primary)  !important;
}
</style>