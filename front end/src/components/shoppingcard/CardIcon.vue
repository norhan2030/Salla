<template>
    <div class="post">
        <div class="row listt">
            <div class="col-md-2 ii">
                <router-link to="/AllProducts" exact><a><img src="../../assets/imags/ShowStyle.png" alt=""></a></router-link> 
                <router-link to="/shoppingCard" exact><a><img class="me-2" src="../../assets/imags/Show Style.png" alt=""></a></router-link> 
            </div>
            <div class="col-md-10 textt" >ترتيب حسب : <span style="" class="updown"> من الاعلى الي الاقل</span>  <i class="fa-solid fa-chevron-down"></i></div>
        </div>
    </div>
    <div class="postt">
        <div class="row text-center">
            <div>
                <i class="fa-solid fa-basket-shopping"></i>
                <p class="p1">لا توجد منتجات حتى الان</p>
                <p class="p2">بحثك لم يتطابق اي المنتجات</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    setup() {
        
    },
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
.postt{
    
    padding: 10px;
    background-color: #fff;
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
.updown{
    font-weight: bold;
    color:black;
}
.fa-basket-shopping{
    font-size: 70px;
    margin-top: 50px;
}
.p1{
    margin-top: 20px;
    color: #BDBDBD;
    font-size: 24px;
font-style: normal;
font-weight: 500;
padding-bottom: 0;
    margin-bottom: 0;
}
.p2{
    padding-top: 0;
    margin-top: 0;
color: #E0E0E0;
font-size: 16px;
font-style: normal;
font-weight: 400;
}


@media(max-width:991px) {
   .ii{
        width: 25%;
        text-align: right;
    }
    .textt{
        width: 70%;
    }
}
@media(max-width:767px) {

    .ii{
        width: 30%;
        text-align: right;
    }
    .textt{
        width: 65%;
    }
}
</style>