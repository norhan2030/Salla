<template>
        <div class="sidebar">
            <div class="row">
                <div class="col-md-6 " ><h3 class="me-3">الفئة</h3></div>
                <div class="col-md-6" >
                    <i class="fa-solid fa-angle-up" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"></i>
                </div>
            </div>
            <div class="row accordion-collapse collapse show" id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <ul class="col-md-12 list-group">
                    <li class="list-group-item ">
                        <span>(100)</span>
                            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked>
                            <label class="form-check-label me-2" for="firstRadio">الكل</label>
                    </li>
                    <li class="list-group-item ">
                        <span>(60)</span>
                        <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" >
                        <label class="form-check-label me-2" for="firstRadio">الالكترونيات و موبيلات</label>

                    </li> <li class="list-group-item ">
                        <span>(25)</span>
                            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" >
                            <label class="form-check-label me-2" for="firstRadio">التلفزيونات و الشاشات</label>
                    </li> <li class="list-group-item ">
                        <span>(30)</span>
                            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked>
                            <label class="form-check-label me-2" for="firstRadio">سمعات اذن</label>
                    </li> <li class="list-group-item ">
                        <span>(36)</span>
                            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked>
                            <label class="form-check-label me-2" for="firstRadio">كاميرات ديجيتال</label>
                    </li> <li class="list-group-item ">
                        <span>(10)</span>
                            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" >
                            <label class="form-check-label me-2" for="firstRadio">مكبيرات صوت</label>

                    </li>
                    <li>
                        <label class="form-check-label me-4" for="firstRadio">عرض المزيد </label>
                    </li>
                    
                
                </ul>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-6 " ><h3 class="me-3">الماركة</h3></div>
                <div class="col-md-6" >
                    <i class="fa-solid fa-angle-up" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne"></i>
                </div>

            </div>
            <div class="row accordion-collapse collapse show" id="collapseTwo" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <ul class="col-md-12 list-group">
                    <li class="list-group-item ">
                        <span>(100)</span>
                        <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked>
                        <label class="form-check-label me-2" for="firstRadio">الكل</label>

                    </li>
                    <li class="list-group-item ">
                        <span>(60)</span>
                            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" >
                            <label class="form-check-label me-2" for="firstRadio"> اتش بي </label>

                    </li> <li class="list-group-item ">
                        <span>(25)</span>
                            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" >
                            <label class="form-check-label me-2" for="firstRadio"> ابل </label>
                    </li> <li class="list-group-item ">
                        <span>(30)</span>
                            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" >
                            <label class="form-check-label me-2" for="firstRadio"> سامسونج</label>

                    </li> <li class="list-group-item ">
                        <span>(36)</span>
                            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" >
                            <label class="form-check-label me-2" for="firstRadio"> ديل</label>

                    </li> <li class="list-group-item ">
                        <span>(10)</span>
                            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" >
                            <label class="form-check-label me-2" for="firstRadio">لينوفو </label>

                    </li>
                    <li>
                            <label class="form-check-label me-4" for="firstRadio">عرض المزيد </label>

                    </li>
                    
                
                </ul>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-6 " ><h3 class="me-3">السعر</h3></div>

                <div class="col-md-6" >
                    <i class="fa-solid fa-angle-up" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne"></i>
                </div>

            </div>
                <div class="accordion-collapse collapse show" id="collapseThree" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">

                </div>
                <div class="row  accordion-collapse collapse show" id="collapseThree" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="row" style="text-align: right;">
                        <div class="col-md-6"><label for="" class="form-label">من</label></div>
                        <div class="col-md-6"> <label for="" class="form-label">الي</label></div>

                    </div>
                    <div class="col-md-6">
                        <div class="input-group mb-3">
                            <!-- <span class="input-group-text">$</span>
                            <span class="input-group-text">0.00</span> -->
                            <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="input-group">
                            <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
                            <!-- <span class="input-group-text">$</span>
                            <span class="input-group-text">0.00</span> -->
                        </div>
                    </div>
                </div>
                <hr>
            <div class="row">
                <div class="col-md-6 " ><h3 class="me-3">اللون</h3></div>
                <div class="col-md-6" >
                    <i class="fa-solid fa-angle-up" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour"></i>
                </div>

            </div>
            <div class="row  accordion-collapse collapse show" id="collapseFour" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <ul class="col-md-12 list-group">
                    <li class="list-group-item ">
                        <span>(100)</span>
                            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked>
                            <label class="form-check-label me-2" for="firstRadio">الكل</label>

                    </li>
                    <li class="list-group-item ">
                        <span>(60)</span>
                            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" >
                            <label class="form-check-label me-2" for="firstRadio"> <label style="color:red;"><i class="fa-solid fa-circle"></i></label> احمر </label>
                    </li> <li class="list-group-item ">
                        <span>(25)</span>
                            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" >
                            <label class="form-check-label me-2" for="firstRadio"> <label style="color:green;"><i class="fa-solid fa-circle"></i></label> اخضر </label>

                    </li> <li class="list-group-item ">
                        <span>(30)</span>
                            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" >
                            <label class="form-check-label me-2" for="firstRadio"><label style="color:black;"><i class="fa-solid fa-circle"></i></label> اسود </label>
                    </li> <li class="list-group-item ">
                        <span>(36)</span>
                            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" >
                            <label class="form-check-label me-2" for="firstRadio"><label style="color:blue;"><i class="fa-solid fa-circle"></i></label> ازرق </label>
                    </li> <li class="list-group-item ">
                        <span>(10)</span>
                            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" >
                            <label class="form-check-label me-2" for="firstRadio"><label style="color:yellow;"><i class="fa-solid fa-circle"></i></label> اصفر</label>
                    </li>
                    <li>
                            <label class="form-check-label me-4" for="firstRadio">عرض المزيد </label>

                    </li>
                    
                
                </ul>

            </div>
            <hr>
            <!-- <div class="container">
                <span id="rateMe1"></span>
            </div> -->
            <div class="row">
                <div class="col-md-6 " ><h3 class="me-3">التقييم</h3></div>
                <div class="col-md-6" >
                    <i class="fa-solid fa-angle-up" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseOne"></i>
                </div>

            </div>
            <div class="row  accordion-collapse collapse show" id="collapseFive" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <ul class="col-md-12 list-group">
                    <li class="list-group-item ">
                        <span>(100)</span>
                            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked>
                            <label class="form-check-label me-2" for="firstRadio">الكل</label>

                    </li>
                    <li class="list-group-item ">
                        <span>(60)</span>
                            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" >
                        <label class="form-check-label me-2"><div class="small-ratings">
                                    <i class="fa fa-star rating-color" style="color:orange;"></i>
                                    <i class="fa fa-star rating-color" style="color:orange;"></i>
                                    <i class="fa fa-star rating-color" style="color:orange;"></i>
                                    <i class="fa fa-star rating-color" style="color:orange;"></i>
                                    <i class="fa fa-star rating-color" style="color:orange;"></i>
                                </div>
                            </label>
                    </li>
                    <li class="list-group-item ">
                        <span>(60)</span>
                            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" >
                        <label class="form-check-label me-2"><div class="small-ratings">
                                    <i class="fa fa-star rating-color" style="color:orange;"></i>
                                    <i class="fa fa-star rating-color" style="color:orange;"></i>
                                    <i class="fa fa-star rating-color" style="color:orange;"></i>
                                    <i class="fa fa-star rating-color" style="color:orange;"></i>
                                    <i class="fa fa-star rating-color" ></i>
                                </div>
                            </label>
                    </li> 
                    <li class="list-group-item ">
                        <span>(60)</span>
                            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" >
                        <label class="form-check-label me-2"><div class="small-ratings">
                                    <i class="fa fa-star rating-color" style="color:orange;"></i>
                                    <i class="fa fa-star rating-color" style="color:orange;"></i>
                                    <i class="fa fa-star rating-color" style="color:orange;"></i>
                                    <i class="fa fa-star rating-color"></i>
                                    <i class="fa fa-star rating-color"></i>
                                </div>
                            </label>
                    </li> 
                    <li class="list-group-item ">
                        <span>(60)</span>
                            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" >
                        <label class="form-check-label me-2"><div class="small-ratings">
                                    <i class="fa fa-star rating-color" style="color:orange;"></i>
                                    <i class="fa fa-star rating-color" style="color:orange;"></i>
                                    <i class="fa fa-star rating-color"></i>
                                    <i class="fa fa-star rating-color"></i>
                                    <i class="fa fa-star rating-color"></i>
                                </div>
                            </label>
                    </li>  
                
                    <li>
                            <label class="form-check-label me-4" for="firstRadio">عرض المزيد </label>

                    </li>
                    
                
                </ul>

            </div>
            <hr>
            <div class="container">
                
            </div>
            <div class="row">
                <a href="#" class="btn active" role="button" data-bs-toggle="button" aria-pressed="true">  اعادة ضبط</a>
            </div>
        </div>
        <div class="row adver">
            <div class="col-md-12">
                <img src="../../assets/imags/banner.png" alt="">
            </div>
        </div>
</template>
<script>
export default {
    data:function(){
       return{
        title:"Testing",
       }
    },
    name:"Sidebar",
}
</script>
<style scoped>
.sidebar{
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    /* position: fixed; */
    text-align: left;
    margin-bottom: 20px;
    /* overflow-x: scroll; */
    border-radius: 5px;

}
li{

   text-align: right;
   position: relative;
}
li span{
    position: absolute;
     top: 5px;
    left: 5px;
    
    
}
.form-check-label{
    margin-left: 50px;
}
.col-md-6 h3{
    text-align: right;
}
ul li{
    border: none;
}
.me-3{
    color: black;
}
.me-4{
    color:var(--primary);
    font-weight: bold;
}
@media(max-width:991px) {
    .sidebar{
       
        margin-right: -80px;
    }
}

@media(max-width:767px) {
    .sidebar{
       
       display: none;
    }
    .adver{
        display: none;
    }
}

</style>