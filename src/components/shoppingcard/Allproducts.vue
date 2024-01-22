<template>
    <div class="row conte">
        <div class="col-md-4 text-right product" v-for="Item in computedObj" :key="Item.id" >
            <div class="post text-right prod">
                <div class="row immagee">
                    <img v-bind:src="'../../images/product/' + Item.img +'.png' "  alt="" class="position">
                    <span class="diccount text-white" v-if="offered.some(item => item.id === Item.id)">  الخصم {{Item.offer}}% </span>
            <span class="new text-white" v-else-if="popular.some(item => item.id === Item.id)"> جديد </span>
            <span class=" text-white" v-else>  </span>
                </div>
                <span class="mobi" style="">{{Item.cat.name}}</span>
                <h6 class="type" style="" ><router-link class="type" :to="{ name: 'ProductDetails', params: { id: Item.id,catID: Item.cat.id } }">{{Item.name}}</router-link></h6>
                <p class="prag" style="">{{Item.decs}}</p>
                <label for="" style="" class="price">{{Item.price}}.00 رس</label>
                <div class="row" style="margin-top:20px;">
                    <div class="col-md-9 me-2 bask">
                        <div class="row">
                            <a href="#" class="btn active" role="button" data-bs-toggle="button" aria-pressed="true">  
                                <i class="fa-solid fa-cart-shopping"></i> اضف للسلة
                            </a>
                        </div>
                    </div>
                    <div class="col-md-2 me-1 love">
                        <div class="row">
                            <a href="#" class="btn active" role="button" data-bs-toggle="button" aria-pressed="true"><i class="fa-regular fa-heart"></i>  </a>
                        </div>
                    </div>
                 </div>
            </div> 
        </div>
    </div>
    <div class="row  more">
        <a href="#" class="btn active" @click="limit = 48" role="button" data-bs-toggle="button" aria-pressed="true" >  
            عرض المزيد
        </a>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data:function(){
       return{
        // type:"موبيلات",
        // name:"ايباد برو 12.9 بوصة واي فاي",
        // discription:"شاشة سوبر ريتينا ءيق مقاس 6.1 بوصة",
        // price:"250.00",
        // prePrice:"350.00",
        Items: [],
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
.immagee{
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
    width: auto;
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
    width: auto;
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
.spann{
    font-weight: bold;color:black;
}
.immagee img{
    margin-bottom:20px !important;
    height: 160px;
    
}
.mobi{
    color: var(--primary);
    margin-top:30px;
    font-weight: bold;
}
.type{
    font-weight: bold;
    color:black;
    margin-top:5px;
    font-size:15px;
    text-decoration: none;
}
.prag{
    color:black;
    font-size:14px;
    margin-bottom:5px;
    height: 60px;
    /* margin-bottom: 10px; */
}
.price{
    color:black;
    font-weight: bold;
}
.lab1{
    color:black;
    font-weight: bold;
}
.lab2{
    margin-top:5px;
    text-decoration-line:line-through;
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

@media(max-width:991px) {
    .head{
       margin-left: -100px !important;
       
    }
     .ii{
        width: 20%;
        text-align: right;
    }
    .textt{
        width: 70%;
    }
    .conte{
        margin-left: -100px;

    }
    .prod h6{
        font-size: 10px;
    }
    .prod p{
        font-size: 10px;
    }
    .lab1,.lab2{
        width: 45% !important;
    }
    .bask{
        width: 65%;
    }
    .love{
        width: 20%;
    }
    

    
}
@media(max-width:767px) {
    .sidebar{
       
       display: none;
    }
    .ii{
        width: 30%;
        text-align: right;
    }
    .textt{
        width: 50%;
    }
    .immagee{
        width: 80%;
        height: 60%;
    }
}
</style>