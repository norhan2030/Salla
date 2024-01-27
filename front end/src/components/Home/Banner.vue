<template>
  
    <div class="banner">
      <div class="container">
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="content">
                <div class="title">
                  <h1>أفضل التخفيضات 2022</h1>
                  <p>متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى أفضل التحفيضات على المنتجات 
                    , تسوق الان واستمتع بكل بالتخفيضات على المنتجات
                  </p>
                  <a href="#" class="pbtn">
                    اكتشف المزيد
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="content">
                <div class="title">
                  <h1>أفضل التخفيضات 2023</h1>
                  <p>متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى أفضل التحفيضات على المنتجات 
                    , تسوق الان واستمتع بكل بالتخفيضات على المنتجات
                  </p>
                  <a href="#" class="pbtn">
                    اكتشف المزيد
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="content">
                <div class="title">
                  <h1>أفضل التخفيضات 2024</h1>
                  <p>متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى أفضل التحفيضات على المنتجات 
                    , تسوق الان واستمتع بكل بالتخفيضات على المنتجات
                  </p>
                  <a href="#" class="pbtn">
                    اكتشف المزيد
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.banner{
  height: 78vh;
  background-image: url(../../assets/imags/banner.jpg) ;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #222;
  margin-top: 0 !important;
  .content .title
  {
      color: antiquewhite;
    h1{
      font-size: 48px;
      margin: auto;
      text-align: center;
      margin: 60px 0;
    }
    p{
      font-size: 16px;
      padding:10px 100px;
      text-align: center;
      margin: 60px 0;
    }
    .pbtn{
      padding: 10px 50px;
      width: fit-content;
      margin: auto;
      text-align: center;
      background-color: var(--primary);
      margin-bottom:80px;
      display: block;
      color: antiquewhite;
      text-decoration: none;
      font-size: 18px;
      border-radius: 5px;
      transition: all .3s ease-in-out;      
    }
    .pbtn:hover
      {
        color: #222222 ;
        background-color: aqua;
      }

  }
  .carousel-indicators button{
    width:12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--primary);
  }
}
.pbtn{
      padding: 10px 50px;
      width: fit-content;
      margin: auto;
      text-align: center;
      background-color: var(--primary);
      margin-bottom:80px;
      display: block;
      color: antiquewhite;
      text-decoration: none;
      font-size: 18px;
      border-radius: 5px;
      transition: all .3s ease-in-out;      
    }
    .pbtn:hover
      {
        color: #222222 ;
        background-color: aqua;
      }
</style>