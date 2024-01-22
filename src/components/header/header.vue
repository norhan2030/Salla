<template>
  
  <TopHeader />

  <div class="container">
    <div class="details">
      <div class="row">
        <div class="col-lg-2 col-md-5 cart_left">

          <img src="../../assets/imags/Menu.png" 
            @click="()=>{
            toggle=!toggle           
          }" alt=""
          type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive"
          >
          <i class="fa-solid fa-cart-shopping"></i>
          
          <div class="text" >
            متجر سلة
          </div>
        </div>
        <div class="col-6 search">
          <div class="search">
            <div class="input-group rounded">
              <input type="search" class="form-control rounded" placeholder="ابحث عما تريد"  aria-label="Search" aria-describedby="search-addon" />
              <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="row">
            <div class="col profile">
              <a type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" class="icon">
                <i class="fa-solid fa-user"></i>
              </a>
              <div class="text textnon">
                <div class="text1" >مرحبا بك</div>
                <a href="#" class="text2">
                  تسجيل دخول<i class="fa fa-chevron-down"></i>
                </a>
              </div>
            </div>
            <div class="col cart">
              <a href="#" class="icon">
                <i class="fa fa-cart-shopping"></i>
              </a>
              <div class="text " v-if="!toggle">
                <div class="text1">سلة المشتريات </div>
                <div class="text2">
                  1,200 رس
                </div>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </div>
  </div>

        <div class="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">
              جميع الأقسام
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <p class=" d-lg-none   ">
              <button class="hbtn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <div class="b">موبايلات</div>
                <i class="fa fa-chevron-down"></i>
              </button>
            </p>
            <div class="collapse" id="collapseExample">
              <div class="card card-body">
                <div class="list" v-for="i in 6 " :key="i.id">
                  شاشات كمبيوتر
                </div>
              </div>
            </div>
            <p class=" d-lg-none ">
              <button class="hbtn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                <div class="b">موبايلات</div>
                <i class="fa fa-chevron-down"></i>
              </button>
            </p>
            <div class="collapse" id="collapseExample2">
              <div class="card card-body">
                <div class="list" v-for="i in 6 " :key="i.id">
                  شاشات كمبيوتر
                </div>
              </div>
            </div>
            <p class=" d-lg-none ">
              <button class="hbtn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                <div class="b">موبايلات</div>
                <i class="fa fa-chevron-down"></i>
              </button>
            </p>
            <div class="collapse" id="collapseExample3">
              <div class="card card-body">
                <div class="list" v-for="i in 6 " :key="i.id">
                  شاشات كمبيوتر
                </div>
              </div>
            </div>
            <p class=" d-lg-none ">
              <button class="hbtn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
                <div class="b">موبايلات</div>
                <i class="fa fa-chevron-down"></i>
              </button>
            </p>
            <div class="collapse" id="collapseExample4">
              <div class="card card-body">
                <div class="list" v-for="i in 6 " :key="i.id">
                  شاشات كمبيوتر
                </div>
              </div>
            </div>
          </div>
        </div>



        <div class="offcanvas-lg  offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
          <div class="offcanvas-body small d-lg-none ltr" >
            <div class="row">
              <div class="col-3">
                <img src="../../assets/imags/man.png" alt="">
              </div>
              <div class="col-8">
                <div class="great">مرحبا بك</div>
                <div class="name"> محمد عبدالجليل </div>
              </div>
              <div class="col-1"><i class="fa fa-chevron-down "></i></div>
            </div>
            <div class="row p-2 pt-3">
              <div class="col-6">
                <i class="fa fa-bell mr-3"></i>
                الاشعارات
              </div>
              <div class="col-6 number ltr ">
                <span>10</span>
              </div>
            </div>
            <div class="row   p-2 pt-3">
              <div class="col-12 boxicon ">
                <i class="fa fa-box "></i>
                الطلبات
              </div>
            </div>
            <div class="row   p-2 pt-3">
              <div class="col-12 boxicon ">
                <i class="fa-brands fa-cc-visa"></i>
                طلبات بانتظار الدفع
              </div>
            </div>
            <div class="row   p-2 pt-3">
              <div class="col-12 boxicon ">
                <i class="fa fa-star "></i>
                تقييم المتجر والمنتجات
              </div>
            </div>
            <div class="row   p-2 pt-3">
              <div class="col-12 boxicon ">
                <i class="fa-regular fa-user "></i>
                حسابي
              </div>
            </div>
            <div class="row   p-2 pt-3">
              <div class="col-12 boxicon ">
                <i class="fa fa-heart "></i>
                المفضلة
              </div>
            </div>
            <div class="row   p-2 pt-3">
              <div class="col-12 boxicon text-danger ">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                تسجيل خروج
              </div>
            </div>

          </div>
        </div>
  <downHeader/>
  
</template>

<script>
import TopHeader from '@/components/header/TopHeader.vue'
import downHeader from '@/components/header/downHeader.vue'
import { ref } from 'vue'
export default {
  components: {
    TopHeader,
    downHeader
  },
  setup() {
    const toggle = false

    // expose to template and other options API hooks
    
    return {
      toggle
    }
  },
}
</script>

<style lang="scss">
.details{
  padding: 5px 0;
  .cart_left{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    .text
    {
      font-size: 20px;
      line-height: 20px;
      color: black;
    }
    i{
      font-size: 20px;
      color: var(--primary);
    }
    img{
      width: 20px;
      height: 20px;
      margin: 0 0 0 5px;
      cursor: pointer;
      @media (min-width: 991px) {
      display: none;
    }
    }
  }
  .search{
    .search{
    box-shadow: 0px -2px 12px #0003;
    border: 1px solid #eee;
      width: 100%;
    }
    padding: 2px 10px;
    display: flex;
    justify-content: center;
    gap: 20px;
    i{
      font-size: 20px;
      line-height: 30px;
    }
    input{
      height: 100%;
      border: none;
      box-shadow: 0px -2px 12px #0000000a;
      :focus{
        border: none;
        outline: none;
      }
    }
    @media (max-width: 991px) {
      display: none;
    }
  }
  .profile, .cart
  {
    display: flex;
    justify-items: center;
    align-items: center;
    gap: 10px;
    a{
      text-decoration: none;
      color: var(--text-gray) !important;
      transition: all .3s ease-in-out;
      :hover{
        scale: 1.2;
        color: #9e9d9d;
      }
    }
    .icon{
    background-color: #eee;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    
    i{
      font-size: 15px;
    }
    
  }
  .textnon{
    @media (max-width: 991px) {
      display: none;
    }
  }
  .text2{
    
    a{
      text-decoration: none;
      color: var(--text-gray);
    }
    color: black;
    font-size: 15px;
    i{
      margin: 0 5px 0 0;
      font-size: 10px;
    }
  }
  }
  
}
.boxicon
  {
    display: flex;
    gap: 10px !important;
    align-items: center;
    color: #666;

    i{
      display: block;
      // margin: 0px 10px !important;
    }
  }
.number{
  direction: ltr;
  span{
    color: #eee;
    background-color: #F55157;
    padding: 3px;
    border-radius: 50%;
  }
}
.offcanvas-title{
  color:  #333;
  font-family: DIN Next LT Arabic;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: right;
}
.dropdown{
  background-color: none !important;
  width: 100% !important;
  padding: 10px !important;

}
.hbtn{
  background-color: #fff ;
  width: 100% ;
  padding: 10px ;
  border: none;
  display: flex;
  gap: 80%;
  align-items: center;
  outline-color: none;
  :focus{
    border: none;
  }
}
.list
{
  color: #666666;
  padding: 5px 10px;
  color: var(--02---Dark-Color---Gray---400, #666);
text-align: right;

/* Regular/Body 5 - Regular - 14px */
font-family: DIN Next LT Arabic;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.offcanvas-lg{
  height: auto !important;
}
</style>