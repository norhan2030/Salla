<template>
  <div class="container">
    <div class="Section_Title">
      <div class="row">
        <div class="col-6">
          <h1>  منتجات مشابهة</h1>
          <p> تسوق احدخث المنتجات المميزةالمضافه جديد </p>
        </div>
        <div class="col-6 all_p">
          <a href="#" @click="limit =LikedProducts.length">
            <i class="fa fa-chevron-left"></i>عرض الكل
          </a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-12 mt-5" v-for="Item in computedObj" :key="Item.id">
        <div class="Product">
          <router-link :to="{ name: 'ProductDetails', params: { id: Item.id,catID: Item.cat.id } }" class="img d-block">
            <img 
            v-bind:src="'../../images/product/' + Item.img +'.png' "  alt="">
            <span class="diccount text-white" v-if="offered.some(item => item.id === Item.id)">  الخصم {{Item.offer}}% </span>
            <span class="new text-white" v-else-if="popular.some(item => item.id === Item.id)"> جديد </span>
            <span class=" text-white" v-else>  </span>
          </router-link >
          <div class="details">
            <div class="type">  {{Item.cat.name}} </div>
            <div class="title">  {{Item.name}}</div>
            <div class="desc">   {{Item.decs}} </div>
            <div class="price"> 
              <span class="currunt">
                {{Item.price}}.00 رس</span>
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
             <i class="fa-regular fa-heart"></i>
            </a>
          </div>
        </div>
        
      </div>
 
      
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
    
    props: ['id','catID'],
    data() {
        return {
        neworder:false,
        product:{},
        LikedProducts:[],
        limit:8,
        popular:[],
        offered:[]
        }
    },
    async mounted() {
        axios.get('Products/'+this.id).then((res) => {
            this.product = res.data.data;
        
            // this.stargray=5-this.Item.star;
            // this.remine=Math.abs(this.Item.quantity-this.Item.soled);
        })
        axios.get('Categories/'+this.catID).then((res) => {
            console.log(this.catID)
            this.LikedProducts = res.data.data;
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
   computed:{
    computedObj(){
        return this.limit ? this.LikedProducts.slice(0,this.limit) : this.LikedProducts
    }
   }
}
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
  .img{
    width: 100%;
    position: relative;
    img{
      max-width: 100%;
      height: 228px;
    }
    
  }
  .details{
    padding: 8px;
    .type{
      color: var(--primary);
      font-size: 18px;
    }
    .title{
      color: black;
      font-weight: bold;
      font-size: 18px;
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