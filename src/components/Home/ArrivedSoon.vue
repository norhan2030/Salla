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
            <swiper-slide>
                <dir>
                    <img src="../../assets/imags/car1.png" alt="">
                </dir>
                <div class="row">
                    <p class="p1">سماعات</p>
                    <p class="p2">سماعات ايربودز 3 سيم اوريجينال</p>
                    <p class="p3">سماعة ذات صوت عالي الدقة</p>
                    <label for="">250.00 رس</label>
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
                <swiper-slide> <dir>
                    <img src="../../assets/imags/car2.png" alt="">
                </dir>
                <div class="row">
                    <p class="p1">سماعات</p>
                    <p class="p2">سماعات ايربودز 3 سيم اوريجينال</p>
                    <p class="p3">سماعة ذات صوت عالي الدقة</p>
                    <label for="">250.00 رس</label>
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
                <swiper-slide>
                    <dir>
                    <img src="../../assets/imags/car1.png" alt="">
                </dir>
                <div class="row">
                    <p class="p1">سماعات</p>
                    <p class="p2">سماعات ايربودز 3 سيم اوريجينال</p>
                    <p class="p3">سماعة ذات صوت عالي الدقة</p>
                    <label for="">250.00 رس</label>
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
                <swiper-slide>
                    <dir>
                    <img src="../../assets/imags/car2.png" alt="">
                </dir>
                <div class="row">
                    <p class="p1">سماعات</p>
                    <p class="p2">سماعات ايربودز 3 سيم اوريجينال</p>
                    <p class="p3">سماعة ذات صوت عالي الدقة</p>
                    <label for="">250.00 رس</label>
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
                <swiper-slide>Slide 5</swiper-slide>
                <swiper-slide>Slide 6</swiper-slide>
                <swiper-slide>Slide 7</swiper-slide>
                <swiper-slide>Slide 8</swiper-slide>
                <swiper-slide>Slide 9</swiper-slide>
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

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },
  };
</script>
<style scoped>
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
</style>