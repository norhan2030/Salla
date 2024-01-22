<template>
   <div class="container">
        <div class="row content">
            <div class="col-md-8 text me-3">
                <p class="p1">عروض تنتهي قريبا</p>
                <p class="p2">تسوق احدث المنتجات المميزةالمضافة جديد</p>
            </div>
            <div class="col-md-3 show">
                <router-link  :to="{name:'shoppingCard' }"  class="btn active"> عرض الكل <i class="fa-solid fa-angle-left"></i></router-link> 
                <!-- <a href="#"  role="button" data-bs-toggle="button" aria-pressed="true">  
                   
                </a> -->
        
            </div>
            <div class="row soon">
                <div class="col-md-6 prod right"> 
                    <div class="post">
                        <div class="row">
                            <div class="col-md-4 imgg" ><img src="../../assets/imags/product/1.png" alt=""></div>
                            <div class="col-md-8 text-right" >
                                <div class="cont">
                                    <span style="" class="type">{{type}}</span>
                                    <h6 class="name" style="">{{name}}</h6>
                                    <p style="" class="discript">{{discription}} </p>
                                    <label class="form-check-label me-2">
                                        <div class="small-ratings">
                                            <i class="fa fa-star rating-color" style="color:orange;"></i>
                                            <i class="fa fa-star rating-color" style="color:orange;"></i>
                                            <i class="fa fa-star rating-color" style="color:orange;"></i>
                                            <i class="fa fa-star rating-color" style="color:orange;"></i>
                                            <i class="fa fa-star rating-color" ></i>
                                        </div>
                                    </label>

                                    <span style="" class="rate">({{rate}})</span>
                                    <br>
                                    <label for="" style="" class="lab1">{{price}} رس</label> <label style="" class="lab2" for="">350.00 رس</label>
                                    <br>
                                    
                                    <div class="row btuun" style="">
                                        <div class="col-md-9 bttn1">
                                            <div class="row">
                                                <a href="#" class="btn active" role="button" data-bs-toggle="button" aria-pressed="true">  
                                                    <i class="fa-solid fa-cart-shopping"></i> اضف للسلة
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-2 me-2 bttn2">
                                            <div class="row">
                                                <a href="#" class="btn active" role="button" data-bs-toggle="button" aria-pressed="true"><i class="fa-regular fa-heart"></i>  </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 prod left">
                    <div class="post">
                        <div class="row">
                            <div class="col-md-4 imgg" ><img src="../../assets/imags/product/3.png" alt=""></div>
                            <div class="col-md-8 text-right" >
                                <div class="cont">
                                    <span style="" class="type">{{type}}</span>
                                    <h6 class="name" style="">{{name}}</h6>
                                    <p style="" class="discript">{{discription}} </p>
                                    <label class="form-check-label me-2">
                                        <div class="small-ratings">
                                            <i class="fa fa-star rating-color" style="color:orange;"></i>
                                            <i class="fa fa-star rating-color" style="color:orange;"></i>
                                            <i class="fa fa-star rating-color" style="color:orange;"></i>
                                            <i class="fa fa-star rating-color" style="color:orange;"></i>
                                            <i class="fa fa-star rating-color" ></i>
                                        </div>
                                    </label>

                                    <span style="" class="rate">({{rate}})</span>
                                    <br>
                                    <label for="" style="" class="lab1">{{price}} رس</label> <label style="" class="lab2" for="">350.00 رس</label>
                                    <br>
                                    
                                    <div class="row btuun" style="">
                                        <div class="col-md-9 bttn1">
                                            <div class="row">
                                                <a href="#" class="btn active" role="button" data-bs-toggle="button" aria-pressed="true">  
                                                    <i class="fa-solid fa-cart-shopping"></i> اضف للسلة
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-2 me-2 bttn2">
                                            <div class="row">
                                                <a href="#" class="btn active" role="button" data-bs-toggle="button" aria-pressed="true"><i class="fa-regular fa-heart"></i>  </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
    
</template>
<script>
export default {
    data:function(){
       return{
        type:"موبيلات",
        name:"موبيل ابل ايفون 14 (128 جيجابايت)",
        discription:"موبايل ابل ايفون XDR مقاس 6.1 بوصة",
        rate:4.5,
        price:"250.00",
        prePrice:"350.00",
       }
    },
    name:"Offers",
}
</script>

<style scoped>
.soon{
    margin-top: 20px;
    padding: 0 !important;
}
.content{
    /* padding: 70px 40px 70px 80px; */
    padding-bottom: 70px;
    padding-top: 70px;
   
}
.p1{
    margin-bottom: 0;
    padding-bottom: 0;
    font-size: 24px;
    font-weight: bold;
    color: black;
    /* font-family: DIN Next LT Arabic; */

}
.p2{
    margin-top: 0;
    padding-top: 0;
}
.btn{
    border-color: var(--primary) !important;
    color: var(--primary) !important;
}
.post{
    
    padding: 10px;
    background-color: #fff;
     border: 1px solid var(--primary);
    /* box-shadow: 0 0 5px var(--primary); */
    /* border-color: var(--primary) !important; */
    text-align: left;
    margin-bottom: 20px;
    border-radius: 5px;
}

.ii{
    margin-right: 0px;
    
}
.text-right{
    text-align: right;
    margin-left: 0;
    padding-left: 0;

}
.cont{
    margin-right: 10px;
    padding-right: 50px;
    padding-top: 20px;
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

.show{
    text-align: left;
    margin-left: 3rem m !important;
}
.left{
    padding-left: 0 !important;
}
.right{
    padding-right: 0 !important;

}
@media(max-width:991px) {
    .imgg{
        margin-right: -10px;
        padding-right: 0;
        width: 50%;
    }
    .imgg img{
        width: 100%;
        height: 100%;
        margin-right: 5px;
    }
    .text-right{
        width: 55%;
        padding-right: 0;
        margin-right: -30px;
    }
    .cont{
        margin: 0;
        padding: 0 15px 0 0;
    }
    /* .content{
        padding-left: 20px;
    } */
    .show{
        margin-right: 0 !;
        padding-right: 0;
        width: 20%;
    }
  
   

}
@media(max-width:767px){
    .container{
        margin: 0;
        padding: 0;
    }
    .imgg img{
        width: 100%;
        padding-right: 0;
        height: 300px !important;
    }
    
    .imgg{
         width: 100%;
        
         padding-right: 10px;
    }
    .left{
        padding-right: 0;
         padding-left: 10px !important;
    }
    .text-right{
        width: 100%;
        margin-top: 10px;
        margin-right: 12px;

    }
    .name{
        font-size: 16px;
    }
    .discript{
        font-size: 13px;
    }
    .form-check-label{
        margin-right: -3px !important;
    }
    .bttn1{
        width: 50%;
    }
    .bttn2{
        width: 20%;
    }
    .prag{
        width: 50%;
        padding-right: 0;
        margin-right: 0;
        
    }
    .show{
        width: 20%;
        padding-right: 0;
        margin-right: 0 !;
    }
    .p1{
        font-size: 20px;
        padding-right: 0;
        margin-right: 0;
    }
    .p2{
        font-size: 13px;
        padding-right: 0;
        margin-right: 0;
    }
    .text{
        width: 60%;
        margin-right: 0;
        padding-right: 0;
    }
    .content{
        padding-right:30px ;
    }
}
</style>