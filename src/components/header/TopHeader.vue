<template>
  <div class="top_h">
    <div class="container">
      <div class="row">
      <div class="col-lg-4 col-md-12 col-sm-12">
        <div class="row ">
          <div class="col">
            <i class="fa fa-phone-volume fa-flip-horizontal"></i>
            564685sd568
          </div>
          <div class="col left_b" >
            <i class="fa-solid fa-envelope"></i>
            Support@salla.com
          </div>
        </div>
      </div>
      <div class="col-lg-8 h_left">
        <ul>
          <li class="l1">
            <a href="#">
              <img src="../../assets/imags/icon.png" alt="" srcset="">
              العربية - رس 
            </a>
            </li>
          <li><a href="#">
            المفضلة
          </a></li>
          <li> 
            <a href="#"> سياسة الاستبدال او الاساترجاع </a>
          </li>
          <li>
            <a href="#"> تواصل معنا </a>
          </li>
        </ul>
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
.top_h
{
  background-color:var(--backg) ;
  padding:5px 10px 5px 10px;
  height: 25px;
  font-size: 13px;
  
  .left_b
  {
    border-right:1px  solid var(--primary);
  }
  i{
    color: var(--primary);
    font-size: 16px;
    margin:0 10px;
  }
  .h_left{
    @media (max-width:767px) {
      display: none;
    }
  }
  ul{
    list-style: none;
    display: flex;
    justify-content: center;
    li{
      text-align: center;
      padding: 0px 20px;
      border-right: 1px solid var(--text-gray);
      a{
        text-decoration: none;
        color: var(--text-gray);
      }
    }
    .l1{
        border-color: var(--backg);
        img{
          margin: 0 5px;
        }
      }
  }
}


</style>