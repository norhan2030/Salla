<template>
  <div class="container">
    <div class="boxs m-lg-5">
      <div class="row">
        <div class="col-lg-4 col-12 m-lg-0 mt-5">
          <div class="box">
            <div class="icon">
              <img src="../../assets/imags/Features Icons.png" alt="" srcset="">
            </div>
            <div class="detail">
              <div class="title">
                منتجات مضمونه
              </div>
              <div class="text">
                مدفوعات آمنة أقساط تصل إلى 12 شهرًا
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12 m-lg-0 mt-5">
          <div class="box">
            <div class="icon">
              <img src="../../assets/imags/Return_1_.png" alt="" srcset="">
            </div>
            <div class="detail">
              <div class="title">
                شحن مجانى
              </div>
              <div class="text">
                مدفوعات آمنة أقساط تصل إلى 12 شهرًا
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12 m-lg-0 mt-5">
          <div class="box">
            <div class="icon">
              <img src="../../assets/imags/Credit_Card.png" alt="" srcset="">
            </div>
            <div class="detail">
              <div class="title">
                مدفوعات أمنة
              </div>
              <div class="text">
                مدفوعات آمنة أقساط تصل إلى 12 شهرًا
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="boxs m-lg-5">
      <div class="row">
        <div class="col-lg-6 p-2 col-12 ">
          <div class="box1">
            <div class="content ">
              <span>سماعات ديجتال</span>
              <h5>أفضل صوت نقي</h5>
              <p><a href="#" class="abtn">
                <i class="fa-solid fa-cart-shopping"></i>
                تسوق الان 
                <i class="fa fa-chevron-left"></i>
              </a></p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 p-2 col-12 ">
          <div class="box2">
            <div class="content ">
              <span>سماعات ديجتال</span>
              <h5>أفضل صوت نقي</h5>
              <p><a href="#" class="abtn">
                <i class="fa-solid fa-cart-shopping"></i>
                تسوق الان 
                <i class="fa fa-chevron-left"></i>
              </a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.boxs
{
  .box
  {
    display: flex;
    gap: 20px;
    padding: 0 20px 0 0;
    .title{
      font-size: 20px;
      color: black;
      font-weight: bold;
    }
  }
  .box1{
    background-image: url(../../assets/imags/bunner2.png) ;
    background-size: cover;
    background-position: center;
    height: 190px;
    border-radius: 5px;
  }
  .box2{
    background-image: url(../../assets/imags/bunner1.png) ;
    background-size: cover;
    background-position: center;
    height: 190px;
    border-radius: 5px;
  }
  .box1  , .box2 {
    position: relative;
    .content{
      position: absolute;
      left: 40px;
      top: 25px;
      font-size: 15px;
      font-weight: bold;
      h5{
        margin-top: 10px;
        font-size: 20px;
        color: black;
        font-weight: bold;
      }
    }
    
  }
}
.abtn{
  display: flex;
  color: black;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  gap: 5px;
  i{
    font-size: 10px;
    display: none;
  }
}
.abtn:hover{
    i{
      display: block;
      // color: var(--primary);
    }
  }

</style>