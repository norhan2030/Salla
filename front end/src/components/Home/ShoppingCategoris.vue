<template>
  <div class="container">
    <div class="row content">
      <div class="col-md-8 text me-5 prag">
        <p class="p1">تسوق حسب الفئات</p>
        <p class="p2">تسوق احدث المنتجات المميزةالمضافة جديد</p>
      </div>
      <div class="col-md-3 me-2  show">
        <a
          href="#"
          class="btn active"
          role="button"
          data-bs-toggle="button"
          aria-pressed="true"
        >
          عرض المزيد <i class="fa-solid fa-angle-left"></i>
        </a>
      </div>
      <div class="row categoeies justify-content-center">
        <div class="col-md-3 col-lg-2 col-sm-4  imge ll" 
          v-for="cat in cats"
          :key="cat.id">
          <img 
            v-bind:src="'./images/cats/' + cat.img +'.png' " class="image"  alt="">
          <p class="p3 text-center">{{ cat.name }}</p>
          <p class="p4 text-center">{{ cat.products}}  منتج</p>
        </div>
      </div>
    </div>
    <div class="row imaging">
      <div class="col-md-3 images">
        <img src="../../assets/imags/Banner (5).png" alt="" />
        <div class="divv">
          <p class="p5">سماعات ديجيتال</p>
          <p class="p6">افضل صوت نقي</p>
          <a href="">تسوق الان</a>
        </div>
      </div>
      <div class="col-md-3 mid images">
        <img src="../../assets/imags/Banner (6).png" alt="" />
      </div>
      <div class="col-md-3 mid images">
        <img src="../../assets/imags/Banner (7).png" alt="" />
      </div>
      <div class="row bigimg">
        <div class="col-md-12 xx">
          <div class="bigtext">
            <p class="p7">سماعات ديجيتال</p>
            <p class="p8">افضل صوت نقي</p>
            <a href="">تسوق الان</a>
          </div>
          <img src="../../assets/imags/Banner (4).png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data: function () {
    return {
      title: "Testing",
    };
  },
  name: "categories",
  data() {
    return {
      cats: [],
    };
  },
  async mounted() {
    
    await axios
      .get(
        "Categories" 
      )
      .then((res) => {
        this.cats = res.data.data;
        
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data.errors);
      });
      
  },
  
};
</script>

<style scoped>
.container{
    margin-right: 100px !important;
    padding: 0;
}

.content {
  /* padding: 30px 40px; */
  padding-bottom: 30px;
  padding-top: 30px;
}
.p1 {
  margin-bottom: 0;
  padding-bottom: 0;
  font-size: 24px;
  font-weight: bold;
  color: black;
  /* font-family: DIN Next LT Arabic; */
}
.p2 {
  margin-top: 0;
  padding-top: 0;
}
.categoeies {
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
  margin-bottom: 100px;
  margin-right: 0;
}
.p3 {
  /* margin-bottom: 0;
  padding-bottom: 0;
  margin-right: 35px;
  margin-top: 10px; */
  /* padding-right: 15px; */
  /* position: absolute;
   */
   padding: 20px 0 0 0;
  color: black;
  font-weight: bold;
}
.p4 {
  margin-top: 10px;
  padding-top: 0;
  /* margin-right: 35px; */
  /* position: absolute; */
}
.btn {
  border-color: var(--primary) !important;
  color: var(--primary) !important;
}
/* .imge {
  margin-right: 60px;
} */
.image{
  width: 150px; 
  height: 150px; 
  border-radius: 50%;

}
.ll{
    margin-top:60px;
}
.imaging{
    width: auto;
}
.imaging img {
  /* margin-right: 40px; */
  position: relative;
  padding: 0;
  margin: 0;
  
}
.mid {
  margin-right: 115px;
}
.bigimg {
  margin-top: 20px;
  padding: 0;

  /* text-align: left; */
  /* justify-content: left; */
}
.bigimg img {
  position: relative;
  margin: 0;
  padding: 0;
}
.bigtext {
  margin-top: 40px;
  width: 90%;
  text-align: left;
  position: absolute;
  z-index: 1;
  margin-left: 0 !important;
  padding-left: 250px;

  padding-top: 10px;
  /* margin-left: -400px; */
}
.images{
    padding: 0;
}
.divv {
  position: absolute;
  z-index: 1;
  margin-top: -175px;
  padding-right: 55px;
}
.divv p {
  color: white;
}
.p5 {
  font-size: 16px;
  font-weight: 400px;
  line-height: 25px;
  font-family: DIN Next LT Arabic;
}
.p6 {
  font-size: 26px;
  font-weight: 550;
  line-height: 35px;
  font-family: DIN Next LT Arabic;
}

a {
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  font-family: DIN Next LT Arabic;
}

.p7 {
  font-size: 16px;
  font-weight: 400px;
  line-height: 25px;
  font-family: DIN Next LT Arabic;
  color: white;
}
.p8 {
  font-size: 36px;
  font-weight: bold;
  line-height: 50px;
  font-family: DIN Next LT Arabic;
  color: white;
  margin-left: -100px;
}
.show {
  text-align: left;
}

@media (max-width: 991px) {

  .categoeies .imge {
    width: 15%;
  }
  .im {
    margin-top: 70px;
  }

  .images {
    width: 33%;
    /* margin-left: -10px !important; */
    margin-right: 2px !important;
    /* padding-left: -20px !important; */
  }
  .images img {
    width: 100%;
    padding-right: 0;
    
    
  }
  .mid {
    margin-right: 0;
  }
  .imaging {
    margin-left: 0;
    padding-left: 0;
  }
  .bigimg img {
    width: 105%;
    padding-right: 15px;
    margin-right: 0;
  }
  .xx {
    margin-right: 0;
    padding-right: 0;
  }
  .bigtext {
    padding-left: 200px;
    padding-top: 0;
    margin-top: 20px;
  }
  .p5 {
    margin-top: 0;
    padding-top: 0;
    font-size: 14px;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .p6 {
    margin-bottom: 0;
    padding-bottom: 0;
    margin-top: 0;
    padding-top: 0;
    font-size: 22px;
  }
  .divv {
    padding-right: 0;
    margin-right: 20px;
    padding-top: 40px;
  }
  .p7 {
    margin-top: 0;
    padding-top: 0;
    font-size: 14px;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .p8 {
    margin-bottom: 0;
    padding-bottom: 0;
    margin-top: 0;
    padding-top: 0;
    font-size: 22px;
    padding-left: 50px;
  }
  .bigtext {
    padding-top: 10px;
  }
}
@media (max-width: 767px) {
  .prag {
    width: 50%;
    padding-right: 0;
    margin-right: 0;
  }
  .show {
    width: 20%;
    padding-right: 0;
    margin-right: 0;
  }
  .ii {
    margin-top: 70px;
  }
  .p1 {
    font-size: 20px;
    padding-right: 0;
    margin-right: 0;
  }
  .p2 {
    font-size: 13px;
    padding-right: 0;
    margin-right: 0;
  }
  .content {
    padding-right: 0;
    margin-right: 0;
    padding: 0;
  }
  .imge {
    margin-left: 25px;
  }
  .pp {
    margin-top: 70px;
  }
  .images {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
  .images img {
    width: 95%;
  }
  .bigimg {
    display: none;
  }
  .content {
    margin-top: 40px;
  }
  .container{
    margin-right: 0 !important;
    
}
}

</style>
