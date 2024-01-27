<template>
  <div class="bg2">
    <div class="container">
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
          slidesPerView: 1,
          spaceBetween: 20,
      },
      '@1.00': {
          slidesPerView: 1,
          spaceBetween: 40,
      },
      '@1.50': {
          slidesPerView: 1,
          spaceBetween: 50,
      },
      }"
      :modules="modules"
      class="mySwiper"
  >
        <swiper-slide>
          <div class="box">
            <div class="title">
              <h1>أفضل التخفيضات 2022</h1>
              <p>متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى أفضل التحفيضات على المنتجات 
                , تسوق الان واستمتع بكل بالتخفيضات على المنتجات
              </p>
              <a href="#" class="pbtn">
                اكتشف المزيد
              </a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="box">
            <div class="title">
              <h1>أفضل التخفيضات 2022</h1>
              <p>متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى أفضل التحفيضات على المنتجات 
                , تسوق الان واستمتع بكل بالتخفيضات على المنتجات
              </p>
              <a href="#" class="pbtn">
                اكتشف المزيد
              </a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="box">
            <div class="title">
              <h1>أفضل التخفيضات 2022</h1>
              <p>متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى أفضل التحفيضات على المنتجات 
                , تسوق الان واستمتع بكل بالتخفيضات على المنتجات
              </p>
              <a href="#" class="pbtn">
                اكتشف المزيد
              </a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="box">
            <div class="title">
              <h1>أفضل التخفيضات 2022</h1>
              <p>متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى أفضل التحفيضات على المنتجات 
                , تسوق الان واستمتع بكل بالتخفيضات على المنتجات
              </p>
              <a href="#" class="pbtn">
                اكتشف المزيد
              </a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="box">
            <div class="title">
              <h1>أفضل التخفيضات 2022</h1>
              <p>متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى أفضل التحفيضات على المنتجات 
                , تسوق الان واستمتع بكل بالتخفيضات على المنتجات
              </p>
              <a href="#" class="pbtn">
                اكتشف المزيد
              </a>
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

<style lang="scss">
.bg2{
  background: url(../../assets/imags/bannerCont.png), lightgray 0px -38.349px / 100% 117.115% no-repeat;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(../../assets/imags/bannerCont.png), lightgray 50% / cover no-repeat;
  margin-top: 50px;
  .box{
    color: aliceblue;
    text-align: center;
    margin:  75px 100px;
    h1{
      font-size: 48px;
      font-weight: 700;
    }
    p{
      font-size: 16px;
      max-width: 400px;
      margin: auto ;
      margin-bottom: 50px;
    }
  }
  
}
.swiper-pagination-bullet{
  color: var(--primary)  !important;
}
</style>