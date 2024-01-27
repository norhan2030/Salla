<template>
  <div class="down">
    <div class="containder">
      <ul>
        <li><router-link  :to="{name:'shoppingCard' }"  class="router">كل المنتجات  <i class="fa fa-chevron-down"></i></router-link></li>
        <!-- <li> <a href="http://#">  </a></li> -->
        <li> <a href="http://#"> الكترونيات  <i class="fa fa-chevron-down"></i> </a></li>
        <li> <a href="http://#"> موبيلات  <i class="fa fa-chevron-down"></i> </a></li>
        <li> <a href="http://#"> كاميرات مراقبة  <i class="fa fa-chevron-down"></i> </a></li>
        <li> <a href="http://#"> سماعات رقمية  <i class="fa fa-chevron-down"></i> </a></li>
        <li> <a href="http://#"> كاميرات رقمية  <i class="fa fa-chevron-down"></i> </a></li>
        <li> <a href="http://#"> اكسيسوارات  <i class="fa fa-chevron-down"></i> </a></li>
        <li> <a href="http://#"> شاشات كمبيوتر  <i class="fa fa-chevron-down"></i> </a></li>
        <li> <a href="http://#"> الكترونيات  <i class="fa fa-chevron-down"></i> </a></li>
        <li> <a href="http://#"> سماعات  <i class="fa fa-chevron-down"></i> </a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.down{
  background-color: #222;
  ul{
    margin: 0 !important;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
    gap: 10px;
    @media (max-width: 991px) {
      display: none;
    }
    li{
      margin: 0 10px;
      a{
        color: aliceblue;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        i{
          font-size: 9px;
        }
        :hover{
          color: antiquewhite;
        }
      }
    }
  }
}
</style>