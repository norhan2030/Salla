<template>
  
  <TopHeader />

  <div class="container">
    <div class="details">
      <div class="row">
        <div class="col-lg-2 col-md-5 cart_left">
          <img src="../../assets/imags/Menu.png" 
            @click="()=>{
            toggle=!toggle           
          }" alt="">
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
              <a href="#" class="icon">
                <i class="fa-solid fa-user"></i>
              </a>
              <div class="text textnon">
                <div class="text1">مرحبا بك</div>
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

</style>