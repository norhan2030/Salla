<template>
    <div class="container mt-5 brand">
    <div class="Section_Title mt-5">
      <div class="row">
        <div class="col-6">
          <h3>  الماركات التجارية </h3>
          <p>  يمكنك التسوق من خلال الماركات التجارية </p>
        </div>
      </div>
    </div>
    <div class="boxs">
      <div class="box">
        <a href="#" class="img">
          <img src="../../assets/imags/brand/image.png" alt="">
        </a>
      </div>
      <div class="box">
        <a href="#" class="img">
          <img src="../../assets/imags/brand/2.png" alt="">
        </a>
      </div>
      <div class="box">
        <a href="#" class="img">
          <img src="../../assets/imags/brand/3.png" alt="">
        </a>
      </div>
      <div class="box">
        <a href="#" class="img">
          <img src="../../assets/imags/brand/4.png" alt="">
        </a>
      </div>
      <div class="box">
        <a href="#" class="img">
          <img src="../../assets/imags/brand/5.png" alt="">
        </a>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.brand{
  .boxs{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 120px;
  .box{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18%;

    .img{
      width: 90%;
      height: 90px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
}

</style>