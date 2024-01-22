<template>
  <div class="container mt-5">
    <div class="Section_Title">
      <div class="row">
        <div class="col-6">
          <h1>  منتجات خاصة  </h1>
          <p> تسوق احدخث المنتجات المميزةالمضافه جديد </p>
        </div>
        <div class="col-6 all_p">
                <router-link  :to="{name:'shoppingCard' }"  class="btn active"> <i class="fa fa-chevron-left"></i>عرض الكل</router-link> 

          <!-- <a href="#">
            <i class="fa fa-chevron-left"></i>عرض الكل
          </a> -->
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-12 mt-5"
        v-for="product in displayItems"
        :key="product.id"
      >
        <div class="Product">
          <router-link :to="{ name: 'ProductDetails',params: { id: product.id,catID: product.cat.id } }" class="img d-block">
            <img 
            :src="'./images/product/' + product.img +'.png' "  alt="">
            <span class="diccount text-white" v-if="offered.some(item => item.id === product.id)">  الخصم {{product.offer}}% </span>
            <span class="new text-white" v-else-if="popular.some(item => item.id === product.id)"> جديد </span>
            <span class=" text-white" v-else>  </span>
          </router-link >
          <div class="details">
            <div class="type">  {{product.cat.name}} </div>
            <router-link :to="{ name: 'ProductDetails',params: { id: product.id,catID: product.cat.id } }" class="title d-block" > 
              {{ product.name }} 
            </router-link>
            <div class="desc"> {{ product.decs }}</div>
            <div class="price"> 
              <span class="currunt">
                {{product.price}} رس</span>
                <!-- <span class="last">
                  350.00 رس
                </span> -->
            </div>
          </div>
          <div class="order">
            <a href="#"> 
              اضف الى السلة
            </a>
            <a href="#" class="fav"> 
              <i class="fa fa-heart"></i>
            </a>
          </div>
        </div>
        
      </div>     
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      neworder:true,
      displayItems: [],
      popular:[],
      offered:[]
    };
  },
  async mounted() {
    

    await axios
      .get(
        "popular/" 
      )
      .then((res) => {
        this.displayItems = res.data.data;
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data.errors);
      });

      await axios
      .get(
        "newest/" 
      )
      .then((res) => {
        this.popular = res.data.data;
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data.errors);
      });
      await axios
      .get(
        "offered/" 
      )
      .then((res) => {
        this.offered = res.data.data;
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data.errors);
      });
  },
  methods: {
    shownew(){
      this.neworder=!this.neworder
    }
  },
};
</script>

<style lang="scss">
.Section_Title{
  padding: 10px 30px;
  h1
  {
    margin: 0;
    color: black;
  }
  .all_p{
    direction: ltr;
  }
  a{
    display: block;
    text-decoration: none;
    color: var(--primary);
    font-size: 18px;
    padding: 7px 15px;
    border: 1px solid var(--primary);
    width: fit-content;    
    // margin: 0 60% 0 0;
    border-radius: 5px;
    i{
      margin-right: 10px;
    }
  }
}
.Product{
  border: 1px solid #ccc;
  padding: 5px;
  .img{
    width: 100%;
    position: relative;
    img{
      max-width: 100%;
      height: 228px;
      mix-blend-mode: multiply;
    }
    span{
      position: absolute;
      top: 10px;
      left:20px;
      font-size: 13px;
      border-radius: 3px;      
    }
    span.diccount{
      position: absolute;
      top: 10px;
      left:20px;
      font-size: 13px;
      padding: 3px 7px;
      border-radius: 3px;      
      background-color: var(--Danger-Color---Danger-Primary);
    }
    span.new{
      color: var(---Dark-Color---White, #FFF);
      font-weight: 400;
      line-height: normal;
      font-size: 16px;
      padding: 5px 15px;
      background-color: var(--Primary-Color---Primary);
    }
  }
  .details{
    padding: 8px;
    .type{
      color: var(--primary);
      font-size: 14px;
    }
    .title{
      color: black;
      font-weight: bold;
      font-size: 16px;
    }
    .desc{
      // height: 70px;
      max-height: 40px;
      font-size: 14px;
      overflow: hidden;
    }
    .price{
      margin-top: 10px;
      .currunt{
        color: var(--Danger-Color---Danger-Primary, #F55157);
        font-family: DIN Next LT Arabic;
        font-style: normal;
        font-weight: 500;
        line-height: 25px;
        text-align: right;
        font-weight: bold;
        margin-left: 5px;
      }
      .last{
        font-size: 14px;
        text-decoration-line: line-through;
      }
    }
  }
  .order{
    gap:  8px;
    display: flex;
    a{
      display: flex;
      padding:  16px 18px;
      border-radius:  4px;
      border: 1px solid  #aaa;
      justify-content: center;
      align-items: center;
      gap:  8px;
      flex: 4;
      // color: #aaa;
      color: var(--Dark-Color-Gray);
      border-radius:  4px;
      border: 1px solid  #EEE;
      align-self: stretch;
      text-decoration: none;
      text-align: center;
      width: fit-content;
      transition: all .3s;
  }
  a:hover{
        background: var(--Primary-Color---Primary);
        color: var(--Dark-Color---White, #FFF);
      }
  a.fav{
    flex: 1;
    font-size: 20px;
    
  }
  }
  
}

</style>