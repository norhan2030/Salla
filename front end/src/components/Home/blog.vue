<template>
  <div class="container brand mt-5">
    <div class="Section_Title mt-5">
      <div class="row">
        <div class="col-6">
          <h3>  أحدث المقالات </h3>
          <p>  تسوق احدث المنتجات المميزة المضافة جديد </p>
        </div>
        <div class="col-6 all_p">
          <a href="#">
            <i class="fa fa-chevron-left"></i>عرض الكل
          </a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12 p-5 pt-0" v-for="blog in blogs" :key="blog.id">
        <div class="row">
          <div class="img">
            <img :src="'../../images/blogs/' + blog.id + '.png'" alt="">
          </div>
        </div>
        <div class="row pt-3 text-center">
          <div class="title">
            {{ blog.title }}
          </div>
        </div>
        <div class="row pt-2 text-center">
          <div class="desc">
            {{ blog.content }}
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      blogs: [],
    };
  },
  async mounted() {
    
    await axios
      .get(
        "blog/" 
      )
      .then((res) => {
        this.blogs = res.data.data;
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data.errors);
      });
      
  },
}
</script>

<style lang="scss">
.Section_Title{
  h3{
    font-size: 24px;
    color: black;
  }
}
.brand{
  .img{
  height: 258px;
  border-radius: var(--Radius---Sm, 4px);
  align-self: stretch;
  width: 100%;
  img{
    height: 100%;
    width: 100%;
  }
}
.title{
align-self: stretch;
color:  #333;
font-family: DIN Next LT Arabic;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-align: center;
}
.desc{
  align-self: stretch;
  color:  #666;
  font-family: DIN Next LT Arabic;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  // text-align: center;
}
}
</style>