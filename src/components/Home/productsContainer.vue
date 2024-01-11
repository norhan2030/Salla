<template>
  <div class="container">
    <div class="Section_Title">
      <div class="row">
        <div class="col-6">
          <h1>  منتجات مميزة</h1>
          <p> تسوق احدخث المنتجات المميزةالمضافه جديد </p>
        </div>
        <div class="col-6 all_p">
          <a href="#">
            <i class="fa fa-chevron-left"></i>عرض الكل
          </a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-12 mt-5">
        <div class="Product">
          <div class="img">
            <img src="../../assets/imags/bunner1.png" alt="">
            <span class="diccount text-white">  الخصم 25% </span>
            <span class="new text-white" v-if="neworder"> جديد </span>
          </div>
          <div class="details">
            <div class="type">  ساعات </div>
            <div class="title">  ساعة زكية جديدة من سلسلة B </div>
            <div class="desc">   سوار رياضى اسود - عادى </div>
            <div class="price"> 
              <span class="currunt">
                250.00 رس</span>
                <span class="last">
                  350.00 رس
                </span>
            </div>
          </div>
          <div class="order">
            <a href="#"> 
              اضف الى السلة
            </a>
            <a href="#" class="fav"> 
              <i class="fa fa-heart"></i>
            </a>
          </div>
        </div>
        
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 mt-5">
        <div class="Product">
          <div class="img">
            <img src="../../assets/imags/bunner1.png" alt="">
            <span class="diccount text-white">  الخصم 25% </span>
            <span class="new text-white" v-if="neworder"> جديد </span>
          </div>
          <div class="details">
            <div class="type">  ساعات </div>
            <div class="title">  ساعة زكية جديدة من سلسلة B </div>
            <div class="desc">   سوار رياضى اسود - عادى </div>
            <div class="price"> 
              <span class="currunt">
                250.00 رس</span>
                <span class="last">
                  350.00 رس
                </span>
            </div>
          </div>
          <div class="order">
            <a href="#"> 
              اضف الى السلة
            </a>
            <a href="#" class="fav"> 
              <i class="fa fa-heart"></i>
            </a>
          </div>
        </div>
        
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 mt-5">
        <div class="Product">
          <div class="img">
            <img src="../../assets/imags/bunner1.png" alt="">
            <span class="diccount text-white">  الخصم 25% </span>
            <span class="new text-white" v-if="neworder"> جديد </span>
          </div>
          <div class="details">
            <div class="type">  ساعات </div>
            <div class="title">  ساعة زكية جديدة من سلسلة B </div>
            <div class="desc">   سوار رياضى اسود - عادى </div>
            <div class="price"> 
              <span class="currunt">
                250.00 رس</span>
                <span class="last">
                  350.00 رس
                </span>
            </div>
          </div>
          <div class="order">
            <a href="#"> 
              اضف الى السلة
            </a>
            <a href="#" class="fav"> 
              <i class="fa fa-heart"></i>
            </a>
          </div>
        </div>
        
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 mt-5">
        <div class="Product">
          <div class="img">
            <img src="../../assets/imags/bunner1.png" alt="">
            <span class="diccount text-white">  الخصم 25% </span>
            <span class="new text-white" v-if="neworder"> جديد </span>
          </div>
          <div class="details">
            <div class="type">  ساعات </div>
            <div class="title">  ساعة زكية جديدة من سلسلة B </div>
            <div class="desc">   سوار رياضى اسود - عادى </div>
            <div class="price"> 
              <span class="currunt">
                250.00 رس</span>
                <span class="last">
                  350.00 رس
                </span>
            </div>
          </div>
          <div class="order">
            <a href="#"> 
              اضف الى السلة
            </a>
            <a href="#" class="fav"> 
              <i class="fa fa-heart"></i>
            </a>
          </div>
        </div>
        
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 mt-3">
        <div class="Product">
          <div class="img">
            <img src="../../assets/imags/bunner1.png" alt="">
            <span class="diccount text-white">  الخصم 25% </span>
            <span class="new text-white" v-if="neworder"> جديد </span>
          </div>
          <div class="details">
            <div class="type">  ساعات </div>
            <div class="title">  ساعة زكية جديدة من سلسلة B </div>
            <div class="desc">   سوار رياضى اسود - عادى </div>
            <div class="price"> 
              <span class="currunt">
                250.00 رس</span>
                <span class="last">
                  350.00 رس
                </span>
            </div>
          </div>
          <div class="order">
            <a href="#"> 
              اضف الى السلة
            </a>
            <a href="#" class="fav"> 
              <i class="fa fa-heart"></i>
            </a>
          </div>
        </div>
        
      </div>
      
      
      
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      neworder:false,
    }
  },
}
</script>

<style lang="scss">
.Section_Title{
  padding: 10px 30px;
  h1
  {
    margin: 0;
    color: black;
  }
  .all_p{
    direction: ltr;
  }
  a{
    display: block;
    text-decoration: none;
    color: var(--primary);
    font-size: 18px;
    padding: 7px 15px;
    border: 1px solid var(--primary);
    width: fit-content;    
    // margin: 0 60% 0 0;
    border-radius: 5px;
    i{
      margin-right: 10px;
    }
  }
}
.Product{
  .img{
    width: 100%;
    position: relative;
    img{
      max-width: 100%;
      height: 228px;
    }
    span{
      position: absolute;
      top: 10px;
      left:20px;
      font-size: 13px;
      padding: 3px 7px;
      border-radius: 3px;      
      background-color: var(--Danger-Color---Danger-Primary);
    }
    span.new{
      color: var(---Dark-Color---White, #FFF);
      font-weight: 400;
      line-height: normal;
      font-size: 16px;
      padding: 5px 15px;
      background-color: var(--Primary-Color---Primary);
    }
  }
  .details{
    padding: 8px;
    .type{
      color: var(--primary);
      font-size: 18px;
    }
    .title{
      color: black;
      font-weight: bold;
      font-size: 18px;
    }
    .price{
      margin-top: 10px;
      .currunt{
        color: var(--Danger-Color---Danger-Primary, #F55157);
        font-family: DIN Next LT Arabic;
        font-style: normal;
        font-weight: 500;
        line-height: 25px;
        text-align: right;
        font-weight: bold;
        margin-left: 5px;
      }
      .last{
        font-size: 14px;
        text-decoration-line: line-through;
      }
    }
  }
  .order{
    gap:  8px;
    display: flex;
    a{
      display: flex;
      padding:  16px 18px;
      border-radius:  4px;
      border: 1px solid  #aaa;
      justify-content: center;
      align-items: center;
      gap:  8px;
      flex: 4;
      // color: #aaa;
      color: var(--Dark-Color-Gray);
      border-radius:  4px;
      border: 1px solid  #EEE;
      align-self: stretch;
      text-decoration: none;
      text-align: center;
      width: fit-content;
      transition: all .3s;
  }
  a:hover{
        background: var(--Primary-Color---Primary);
        color: var(--Dark-Color---White, #FFF);
      }
  a.fav{
    flex: 1;
    font-size: 20px;
    
  }
  }
  
}

</style>