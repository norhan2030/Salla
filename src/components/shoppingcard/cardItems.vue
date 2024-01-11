<template>
  
        <!-- <div class="post">
            <div class="row listt">
                <div class="col-md-2 ii">
                    <router-link to="/AllProducts" exact><a><img src="../../assets/imags/ShowStyle.png" alt=""></a></router-link> 
                    <router-link to="/shoppingCard" exact><a><img class="me-2" src="../../assets/imags/Show Style.png" alt=""></a></router-link> 
                </div>
                <div class="col-md-10 textt" >ترتيب حسب : <span style="" class="updown"> من الاعلى الي الاقل</span>  <i class="fa-solid fa-chevron-down"></i></div>
            </div>
        </div> -->
        <div class="post">
            <div class="row">
                <div class="col-md-4 imgg" ><img src="../../assets/imags/Image.png" alt=""></div>
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
        name:"موبيل ابل ايفون 14 (128 جيجابايت)",
        discription:"موبايل ابل ايفون XDR مقاس 6.1 بوصة",
        rate:4.5,
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