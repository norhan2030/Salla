<template>
  
        <div class="post" v-for="Item in computedObj" :key="Item.id">
            <div class="row prod" >
                <div class="col-md-4 imgg" ><img v-bind:src="'../../images/product/' + Item.img +'.png' " class="position" alt="">
                 <span class="diccount text-white" v-if="offered.some(item => item.id === Item.id)">  الخصم {{Item.offer}}% </span>
                <span class="new text-white" v-else-if="popular.some(item => item.id === Item.id)"> جديد </span>
                <span class=" text-white" v-else>  </span>
                </div>
                <div class="col-md-8 text-right" >
                    <div class="cont">
                        <span style="" class="type">{{Item.cat.name}}</span>
                        <h6 class="name" style=""><router-link class="name" :to="{ name: 'ProductDetails', params: { id: Item.id,catID: Item.cat.id } }">{{Item.name}}</router-link></h6>
                        <p style="" class="discript">{{Item.decs}} </p>
                        <label class="form-check-label me-2">
                            <div class="small-ratings">
                                <i class="fa fa-star rating-color" style="color:orange;"  v-for="star in Item.star" :key="star.id"></i>
                                <i class="fa fa-star rating-color gray" v-for="star in (5-Item.star)" :key="star.id"></i>
                            </div>
                        </label>

                        <span style="" class="rate"> ({{Item.star}})</span>
                        <br>
                        <label for="" style="" class="lab1">{{Item.price}}.00 رس</label> <label style="" class="lab2" for="">350.00 رس</label>
                        <br>
                        
                        <div class="row btuun" style="">
                            <div class="col-md-10 bttn1">
                                <div class="row">
                                    <a href="#" class="btn active" role="button" data-bs-toggle="button" aria-pressed="true">  
                                        <i class="fa-solid fa-cart-shopping"></i> اضف للسلة
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-1 me-2 bttn2">
                                <div class="row">
                                    <a href="#" class="btn active" role="button" data-bs-toggle="button" aria-pressed="true"><i class="fa-regular fa-heart"></i>  </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row  more">
        
                <a href="#" class="btn active" @click="limit = 50" role="button" data-bs-toggle="button" aria-pressed="true">  
                    عرض المزيد
                </a>
        
        </div>
  
    
</template>
<script>
import axios from "axios";

export default {
    data:function(){
       return{
        type:"موبيلات",
        name:"موبيل ابل ايفون 14 (128 جيجابايت)",
        discription:"موبايل ابل ايفون XDR مقاس 6.1 بوصة",
        rate:4.5,
        price:"250.00",
        prePrice:"350.00",
        Items:[],
        limit:9,
        popular:[],
        offered:[]
       }
    },
    mounted() {
        axios.get(
            "Products/" 
        ).then((res) => {
            this.Items = res.data.data;
        })
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
         axios.get(
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
    name:"Ttems", 
    // دي اشتغلت
    computed:{
       
        uppercase(){
        return (v)=>{
            return v.toUpperCase()
            }
        }, 
        computedObj(){
            return this.limit ? this.Items.slice(0,this.limit) : this.Items
        }
     }
}
</script>
<style scoped>
.imgg {
    text-align: left !important;
}
.position{
    position: relative;
}
.diccount{
    position: absolute;
    top: 10px;
    left:20px;
    font-size: 13px;
    padding: 3px 7px;
    border-radius: 3px;      
    background-color: var(--Danger-Color---Danger-Primary);
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

.gray{
    color: #EEEEEE;
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

.ii{
    margin-right: 0px;
    
}
.text-right{
    text-align: right;

}
.cont{
    margin-right: 10px;
    padding-top: 10px;
}
.updown{
    font-weight: bold;
    color:black;
}
.type{
    color: var(--primary);
    margin-top:30px;
    font-weight: bold;
}
.name{
    font-weight: bold;
    color:black;
    margin-top:5px;
    font-size:18px;
    text-decoration: none;
}
.discript{
    color:black;
    font-size:15px;
    margin-bottom:5px;
}
.rate{
    margin-top:0px;
}
.lab1{
    color:red;
}
.lab2{
    margin-top:5px;
    text-decoration-line:line-through;
}
.btuun{
    margin-top:20px;
}
.more{
    justify-content: center;
   
}
.more a{
     width: 35%;
     border-color: var(--primary);
     color: var(--primary);
}
a:hover{
    background-color: var(--primary);
    color:white;
}
.imgg img{
    width: 240px;
    height: 230px;
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
    .sidebar{
       
       display: none;
    }
    .imgg{
        text-align: center;
    }
    .cont{
        text-align: center;
    }
    .bttn1{
        width: 50%;
        margin-right: 100px;
    }
    .bttn2{
         width: 50%;
       margin-right: 100px !important;
    }
    .ii{
        width: 30%;
        text-align: right;
    }
    .textt{
        width: 50%;
    }
    
}
</style>