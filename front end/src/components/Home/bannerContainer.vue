<template>
  <div class="mt-5 bg">
      <div class="box">
            <div class="text">
              <h1>أفضل التخفيضات 2022</h1>
              <p>متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل بالتخفيضات 
                على المنتجات</p>
                <a href="#" class="pbtn">
                      اكتشف المزيد
                    </a>
            </div>
          <div class=" img">
            <img src="../../assets/imags/lap.png" alt="">
          </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.bg{
  background: url(../../assets/imags/bannerContainer.png), lightgray 0px -38.349px / 100% 117.115% no-repeat;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(../../assets/imags/bannerContainer.png), lightgray 50% / cover no-repeat;
  
  .box{
      display: flex;
      padding: 90px 200px 0;
      align-items: center;
      gap: var(--Spacing---5xl, 48px);
      align-self: stretch;
  }
  .text{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap:  32px;
    flex:1 ;
    h1{
      color: var(--Dark-Color---White, #FFF);
      font-family: DIN Next LT Arabic;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: 70px;
      text-align: right;
      margin: 0;
    }
    p{
      color: var(--Dark-Color---White, #FFF);
      font-size: 16px;
      font-weight: 400;
      line-height: 25px;  
      margin: 0;
    }
    
  }
  .img{
      // width: 300px;
      flex: 1;
      height: 320px;
      img{
        max-width:100%;
      }
      // background: url(<path-to-image>), lightgray 0px -38.349px / 100% 117.115% no-repeat;
    }
}
</style>