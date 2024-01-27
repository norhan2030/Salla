<template>
  
        <div class="container">
            <div class="row content">
                <div class="col-md-4 first">
                    <div class="row">
                        <img src="../../assets/imags/watch.png" alt="">

                    </div>
                    <div class="row">
                        <p class="p1">معالجة أسرع وأكثر ثراءً</p>
                        <p class="p2">أسرع من EXPEED 4 ، يعالج EXPEED 5 بسرعة 45.7 ميجابكسل من البيانات لتقليل التشويش</p>
                        <p class="p3"> تسوق الآن</p>
                    </div>
                </div>
                <div class="col-md-4 second">
                    <div class="row">
                        <img src="../../assets/imags/phone.png" alt="">
                    </div>
                    <div class="row">
                        <p class="p1">معالجة أسرع وأكثر ثراءً</p>
                        <p class="p2">أسرع من EXPEED 4 ، يعالج EXPEED 5 بسرعة 45.7 ميجابكسل من البيانات لتقليل التشويش</p>
                        <p class="p3"> تسوق الآن</p>
                    </div>
                </div>
                <div class="col-md-4 third">
                    <div class="row">
                        <img src="../../assets/imags/headphone.png" alt="">
                    </div>
                    <div class="row">
                        <p class="p1">معالجة أسرع وأكثر ثراءً</p>
                        <p class="p2">أسرع من EXPEED 4 ، يعالج EXPEED 5 بسرعة 45.7 ميجابكسل من البيانات لتقليل التشويش</p>
                        <p class="p3"> تسوق الآن</p>
                    </div>
                </div>

            </div>
        </div>
 
</template>
<style scoped>
.content{
    margin-top: 50px !important;
}
.first{
    border-radius:5px ;
    background-color: #E0F6F0;
    text-align: center;
    /* height: 480px; */
    margin-left: 10px;
    padding-right: 0;
    padding-right: 0;
    width: 32%;
}
.second{
    padding-right: 0;
    padding-right: 0;
     text-align: center;
    border-radius:5px ;
    background-color: #FFEFDA;
    margin-left: 10px;
    width: 32%;
}
.third{
    padding-right: 0;
    padding-right: 0;
     text-align: center;
    border-radius:5px ;
    width: 32.9%;
    background-color: #FDDCDD;

}
.p1{
    margin-top: 20px;
    margin-bottom: 5px;
    font-family: DIN Next LT Arabic;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
color: #333;
}
.p2{
    padding-left: 60px;
    padding-right: 60px;
    font-family: DIN Next LT Arabic;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.p3{
    font-family: DIN Next LT Arabic;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
color: #333;
}
.col-md-4 img{
    padding-top: 10px;
}
@media(max-width:767px) {
    .first{
        width: 100%;
        margin-bottom: 10px;
    }
    .second{
        width: 100%;
         margin-bottom: 10px;
    }
    .third{
        width: 100%;
    }
}
</style>