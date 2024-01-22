<template>
    <div class="container">
       <hr class="head">
       <div class="row content ">
            <div class="col-md-4 row7 ">
                <div class=" row top">
                    <p class="p1" v-if="Itemm.star!=0">{{Itemm.star}} من 5</p>
                    
                        <label class="form-check-label ">
                            <div class="small-ratings" v-if="Itemm.star!=0">
                                <i class="fa fa-star rating-color" style="color:orange;" v-for="star in Itemm.star" :key="star.id"></i>
                                
                                <i class="fa fa-star rating-color gray" v-for="star in stargray" :key="star.id" ></i>
                                
                            </div>
                            
                        </label> 
                    
                    <p>{{Items.length}} تقييم على المنتج</p>
                </div>
                <div class="row mid">
                    <p>أضف تعليقك</p>
                    
                </div>
                <div class="row texatar">
                    <textarea name="" id="" cols="30" rows="10" placeholder="برجاء اضافة تعليقك .."></textarea>
                </div>
                <div class="row">
                    <button>نشر تعليقك</button>
                </div>
            </div>
        <div class="col-md-8 ">
            <div class="row row11">
                <div class="col-md-8">تعليقات المستخدمين</div>
                <div class="col-md-4 text-left"> ترتيب حسب :  <span>الاحدث</span> <i class="fa-solid fa-chevron-down"></i></div>

            </div>
            <div class="row comment" v-for="Item in Items" :key="Item.id">
                <div class="row">
                    <div class="col-md-2 imgg">
                         <img 
            v-bind:src="'../../images/user/' + Item.img +'.png' "  alt="">
                        <!-- <img src="../../assets/imags/man.png" alt=""> -->
                    </div>
                    <div class="col-md-8">
                        <div class="nameRate">
                            <p class="name"> {{Item.name}}</p>
                            <label class="form-check-label ">
                                <div class="small-ratings">
                                    <i class="fa fa-star rating-color" style="color:orange;" v-for="star in Item.star" :key="star.id"></i>
                                
                                <i class="fa fa-star rating-color gray" v-for="star in (5-Item.star)" :key="star.id" ></i>
                                    
                                </div>
                            </label> 
                        </div>
                    </div>
                    <div class="col-md-2 date">
                        <!-- <span>13/10 /2020</span> -->
                       <span>  {{Item.created_at}}</span>
                    </div>
                </div>
                <div class="row conteent">
                    <div class="col-md-2"></div>
                    <div class="col-md-10">
                        <p>{{Item.comment}}</p>
                    </div>
                </div>
                <hr>
            </div>
            
            
            <div class="row more">
                <button>عرض المزيد</button>
            </div>
        </div>
       </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    props: ['id'],
    data(){
        return{
           
            show:true,
            count:0,
            grayStar:0,
            Items:[],
            Itemm:{},
            stargray:0,
            // date:Item.created_at,
            limit:10

        }
    },
    methods : {
    // grayStar(){
    //     this.grayStar=5-this.Item.star
    // },
    
     
    
    },
   mounted() {
        axios.get('Pcomments/'+this.id).then((res) => {
            this.Items = res.data.data;
        })
        axios.get('Products/'+this.id).then((res) => {
            this.Itemm = res.data.data;
            this.stargray=5-this.Itemm.star
            // this.date=this.date.slice(0,this.limit)
        })
   },
//    computed:{
//     computedObj(){
//         return this.limit ? this.date.slice(0,this.limit) : this.date
//     },

}
</script>

<style scoped>
.row11{
border: 1px solid #E0E0E0;
    padding: 0;
  
    
    border-radius: 5px;
}
.row7{
    height: 320px;
    border: 1px solid #E0E0E0;
    padding: 0;
    /* margin-bottom: 10px; */
    
    border-radius: 5px;
}
.content{
    padding: 10px;
     border: 1px solid #E0E0E0;
     margin-bottom: 30px;
}
.content .col-md-4{
    width: 32%;
    margin-left: 5px;

}
.form-check-label i{
   font-size: 14px;
    
}
.top{
    border-radius: 5px;
    text-align: center;
    background-color: #F8F8F8;
    margin: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
}
.top P{
    margin-bottom: 0;

}
.gray{
    color: #EEEEEE;
}
.mid p{
    font-family: DIN Next LT Arabic;
font-size: 14px;
font-style: normal;
font-weight: bold;
line-height: normal;
color: black;
}
.p1{
    color: black;
}
textarea{
    border: 1px solid #E0E0E0;
    width: 95%;
   padding: 10px 10px 0 0;
   height: 110px;
   border-radius: 5px;

}
.texatar{
    padding-right: 20px;
    margin-bottom: 10px;
}
.mid p{
    padding: 10px 30px 5px 0;
    margin-bottom: 0;
}
button{
    width: 90%;
    margin-top: 5px;
    font-weight: bold;
    background-color: var(--primary);
    color: white;
    border: none;
    margin-right: 20px;
    height: 40px;
    border-radius: 5px;
    margin-top: 0;
    margin-bottom: 15px;
}

.head{
    margin-top: 0;
    margin-bottom: 0;
    border: 1px solid var(--primary);
}
.text-left{
    text-align: left;
}
.row11 .col-md-8 {
    font-family: DIN Next LT Arabic;
font-size: 16px;
font-style: normal;
font-weight: bold;
line-height: 24px;
}
.row11 .col-md-4 span{
font-weight: bold;
}
.row11{
    padding: 10px;
}
.name{
    font-family: DIN Next LT Arabic;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    margin-bottom: 0;
}
.comment{
    margin-top: 15px;
}
.comment .col-md-2{
padding-left: 0;
padding-right: 0;
text-align: center;
}
.comment .col-md-8{
    padding-right: 0 ;
    padding-left: 0;
}
.row .col-md-10{
    font-family: DIN Next LT Arabic;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.form-check-label {
   margin-top: -5px;
}
.conteent{
    margin-top: 10px;
}
hr{
    margin: 0;
    padding: 0;
}
.more button{
 width: 90%;
    margin-top: 5px;
    font-weight: bold;
   background-color: white;
    margin-right: 40px;
    height: 40px;
    border-radius: 5px;
    margin-top: 0;
    margin-bottom: 15px;
    color: var(--text-gray);
    border: 1px solid #E0E0E0;

}
img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
@media(max-width:991px) {
    button{
        width: 85% !important;
    }
    textarea{
        width: 90% ;
    }
}
@media(max-width:767px) {
 
    /* .coll{
        width: 20%;
    } */
    .row11{
        margin-top: 20px;
    }
    .row7{
        width: 100% !important;
    }
    .row11 .col-md-8{
        padding-right: 0;
        padding-left: 0;
        width: 50%;
    }
    .row11 .col-md-4{
        padding-right: 0;
        padding-left: 0;
        width: 48%;
        
    }
    .comment .row{
        padding: 0;
        width: 100%;
        margin-right: 3px;
    }
    .comment .row .imgg{
        width: 10%;
        padding: 0;
    }
    .comment .row .col-md-2 img{
        width: 90%;
    }
    .date{
        width: 30%;
    }
    .date span{
        width: 30%;
    }
    .comment .row .col-md-8{
        width: 60%;
        padding: 0;
    }
    .comment .row .col-md-8 .nameRate{
        padding-right: 10px;
        width: 40%;
    }
   
}
</style>