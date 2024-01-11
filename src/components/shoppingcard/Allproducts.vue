<template>
    <!-- <div class="post head">
        <div class="row">
            <div class="col-md-2 ii">
                <router-link to="/AllProducts" exact><a><img src="../../assets/imags/ShowStyle.png" alt=""></a></router-link> 
                <router-link to="/shoppingCard" exact><a><img class="me-2" src="../../assets/imags/Show Style.png" alt=""></a></router-link> 
            </div>
            <div class="col-md-10 textt" >ترتيب حسب : <span class="spann" style=""> من الاعلى الي الاقل</span>  <i class="fa-solid fa-chevron-down"></i></div>
        </div>
    </div> -->
    
    <div class="row conte">
        <div class="col-md-4 text-right product" >
            <div class="post text-right prod">
                <div class="row immagee"><img src="../../assets/imags/p3.png" alt="" style=""></div>
                <span class="mobi" style="">{{type}}</span>
                <h6 class="type" style="">موبيل ابل ايفون 14(128 جيجابايت)</h6>
                <p class="prag" style="">شاشة سوبر ريتينا ءيق مقاس 6.1 بوصة</p>
                <label for="" style="" class="price">250.00 رس</label>
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
        <div class="col-md-4 product" >
            <div class="post text-right prod">
                <div class="row immagee"><img src="../../assets/imags/p1.png" alt="" style="margin-bottom:20px"></div>
                <span class="mobi">{{type}}</span>
                <h6 class="type" >ابل ايباد برو 12.9 بوصة واي فاي</h6>
                <p class="prag" >شاشة ليكويد ريتينا اكس دي ار رائعة مقاس 11</p>
                <label for="" style="" class="lab1">250.00 رس</label> <label class="lab2" style="" for="">{{prePrice}} رس</label>
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
        <div class="col-md-4 product" >
             <div class="post text-right prod">
                <div class="row immagee"><img src="../../assets/imags/p2.png" alt="" ></div>
                <span class="mobi">{{type}}</span>
                <h6 class="type"> {{name}}</h6>
                <p class="prag">{{discription}}</p>
                <label for="" class="price">{{price}} رس</label> 
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
       
            <a href="#" class="btn active" role="button" data-bs-toggle="button" aria-pressed="true">  
                عرض المزيد
            </a>
    
    </div>
    
</template>
<script>
export default {
    data:function(){
       return{
        type:"موبيلات",
        name:"ايباد برو 12.9 بوصة واي فاي",
        discription:"شاشة سوبر ريتينا ءيق مقاس 6.1 بوصة",
        price:"250.00",
        prePrice:"350.00",
       }
    },
    name:"Ttems", 
    // دي اشتغلت
    computed:{
        uppercase(){
        return (v)=>{
            return v.toUpperCase()
            }
        }
     }
}
</script>
<style scoped>
.post{
    
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    position: relative;
    text-align: left;
    margin-bottom: 20px;
    border-radius: 5px;
}
i.fa-ellipsis {
   
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
}
.prag{
    color:black;
    font-size:14px;
    margin-bottom:5px;
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
    .product{
       
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