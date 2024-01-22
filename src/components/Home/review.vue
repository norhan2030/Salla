<template>
  <div class="container mt-5">
    <div class="Section_Title mt-5">
      <div class="row">
        <div class="col-6">
          <h3>آراء العملاء</h3>
          <p>بيتم استعراض بعض آراء وتعليقات المستخدمين</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12 p-5 pt-0" v-for="review in reviews" :key="review.id">
        <div class="row">
          <div class="col-6">
            <i class="fa fa-star yellow" v-for="star in 5" :key="star.id"></i>
          </div>
        </div>
        <div class="row">
          <p class="coment">
            {{ review.comment }}
          </p>
        </div>
        <div class="row">
          <div class="col-3">
            <div class="img">
              <img :src="'../../images/user/'+review.img+'.png'" alt="">
            </div>
          </div>
          <div class="col-9">
            <div class="name">
              {{review.name}} 
            </div>
            <div class="descr">
              {{ review.desc }}
            </div>
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
      reviews: [],
    };
  },
  async mounted() {
    
    await axios
      .get(
        "review/" 
      )
      .then((res) => {
        this.reviews = res.data.data;
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data.errors);
      });
      
  },
}
</script>

<style lang="scss" scoped>
.Section_Title{
  h3{
    font-size: 24px;
    color: black;
  }
}
.img{
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border-radius: var(--Radius---Sm, 4px);
  align-self: stretch;
  width: 100%;
  img{
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
}
.coment{
  font-size: 14px;
  height: 60px;
  overflow: hidden;
}
.name{
  align-self: stretch;
  color:  #333;
  text-align: right;
  font-family: DIN Next LT Arabic;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
}
.descr{
  font-size: 12px;
}
.fa-star{
  margin-left: 5px;
  color:#D6D6D6 ;
}
.yellow{
  color: #FFC62A;
}

</style>