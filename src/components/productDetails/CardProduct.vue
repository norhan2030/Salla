<template>
<div class="container">
     <div class="row row1">
        <p>الرئسية/ <span>  كل المنتجات</span></p>
    </div>
    <div class="row ">
        
        <div class="col-md-8 " >
            <div class="row prod"  v-if="show">
                <div class="col-md-6 ri" >
                    <div class="row topp">
                        <div class="col-md-4 imgg">
                            <img src="../../assets/imags/p3.png" alt="">
                        </div>
                        <div class="col-md-8 text">
                            <p class="desc">وبايل  آبل آيفون بشريحتين و 64 جيجا بالإضافة الى كاميرتين</p>
                            <span>50.00 رس</span>
                        </div>

                    </div>
                </div>
                <hr>
                <div class="col-md-6">
                    <div class="row down">
                        <div class="col-md-6 amount">
                            <button @click="addOne"><i class="fa-solid fa-plus"></i></button><span>{{count}}</span><button @click="minusOne"><i class="fa-solid fa-minus"></i></button>
                        </div>
                        <div class="col-md-4 price">
                            <p>{{50 *count}}.00 ر.س</p>
                        </div>
                        <div class="col-md-2 le">
                            <button type="button" @click="show=false"  class="btn-close" ></button>
                        </div>

                    </div>
                </div>

            </div>
            
            

        </div>
        
        <div class="col-md-3  left">
            <p class="p1">ملخص الطلب</p>
            <div class="row">
                <div class="col-md-8 ppp">
                    <p class="p2">مجموع المنتجات</p>
                </div>
                <div class="col-md-4 span">
                    <span>145 رس</span>
                </div>
            </div>
            <p class="p2 des">هل لديك كود خصم</p>
            <div class="row">
                <form action="">
                     <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                     <button type="submit" class="btn btnn">اضافة</button>
                </form>
            </div>
            <div class="row total">
                <div class="col-md-8 ppp">
                    <p>الإجمالى</p>
                </div>
                <div class="col-md-4 span">
                    <span>145 رس</span>
                </div>
                <label>الاسعار شاملة للضريبة *</label>
            </div>
            <div class="row done">
                <button>اتمام الطلب</button>
            </div>

        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
           
            show:true,
            count:0

        }
    },
    methods : {
    addOne() {
      this.count=this.count+1;
    },
    minusOne() {
      if(this.count>0){
        this.count=this.count-1;
      }
    },
    
  }
}
</script>
<style scoped>
.left{
    border: 1px solid #E0E0E0;
    border-radius: 5px;
    padding-top: 15px;
    padding-bottom: 5px;
    margin-bottom: 10px;
}
.prod{
     border: 1px solid #E0E0E0;
    border-radius: 5px;
    padding-top: 15px;
    padding-bottom: 5px;
    margin-bottom: 10px;
    margin-left: 10px;
    height: 110px;

}
.row1{
    margin-top: 10px;
    color: var(--primary);
    margin-bottom: 30px;
    
}
.row1 span{
    color: var(--text-gray);
}
.imgg img{
    width: 95px;
    height: 80px;
}
.text p{
    padding-top: 5px;
    font-family: DIN Next LT Arabic;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-bottom: 0;
}
.amount{
    padding: 5px 0;
    
}
.price{
    padding-left: 0;
    padding-right: 0;
}
.amount button,.amount span{
    border:1px solid #E0E0E0;
   
    border-radius: 1px;
    padding: 15px 20px ;
    background-color: white;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

}
.amount i{
    color: var(--text-gray);

}
.price p{
    font-family: DIN Next LT Arabic;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 25px;
padding-top: 10px;
}
.btn-close{
    padding-top: 20px;
}
.p1{
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 25px;
}
.p2{
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 25px;
}
form{
    display: flex;
    margin-bottom: 10px;
}
input{
    width: 75%;
}
.btnn{
    padding: 0;
    width: 25%;
     border: 1px solid var(--primary);
     color: var(--primary);
    border-radius: 5px;
}
.btnn:hover{
    background-color: var(--primary);
    color: white;
}
.total p,.total span{
    font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.done button{
    border: none;
    margin: 5px 15px;
    padding: 10px 10px;
    border-radius: 5px;
       width: 90%;
    margin-top: 5px;
    font-weight: bold;
    background-color: var(--primary);
    color: white;
}
.des{
    margin-bottom: 0;
}
label{
    margin-top: 0;
    padding-top: 0;
}
.invisible{
    display: none;
}
hr{
    display: none;
}
.down{
  background: none !important;
}
@media(max-width:991px) {
    .ri{
        /* padding-left: 0; */
        padding-right: 0;
    }
    .le{
        padding-left: 0;
        padding-right: 0;
    }
    .amount button,.amount span{
padding: 10px 10px;
    }
}
@media(max-width:767px) {
    .topp{
        width: 100%;
    }
    .imgg{
        width: 30%;
    }
    .text{
        width: 70%;
    }
    .down{
        width: 100%;
      
        padding-right: 20px;
    }
    .amount{
        width: 65%;
        
    }
    .price{
        width: 30%;
        padding-right: 10px;
    }
    .le{
        width: 5%;
    }
    .prod{
        height: 180px;
    }
    hr{
        margin-right: 20px;
        width: 85%;
        display: block;
        margin-top: 5px;
    }
    .desc{
        font-weight:bold !important;

    }
    .amount button,.amount span{
    padding: 16px 22px ;
    }
    .left{
        width: 96%;
    }
    .ppp{
        width: 80%;
    }
    .span{
width: 15%;
padding: 0;
text-align: left;
    }
    .done button{
        width: 94%;
    }
   

}
</style>
