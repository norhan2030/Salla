<template>
    <div class="container">   
       <hr>
       <div class="row tablee">
        <div class="col-md-12">
            <table class="table table- table-striped">
            <tr class="trfirst whitegray">
                <td class="table- first">العلامة التجارية</td>
                <td class="table- second">{{Item.brand}}</td>
                <td class="table-"></td>
                <td class="table-"></td>  
            </tr>
            <tr class="blackgray">
                <td class="table- first">اللون</td>
                <td class="table- second">{{Item.color}} </td>
                <td class="table-"></td>
                <td class="table-"></td> 
            </tr>
            <tr class="whitegray">
                <td class="table- first">تقنية الاتصال</td>
                <td class="table- second" v-if="Item.wire == 2">Wireless</td>
                <td class="table- second" v-if="Item.wire == 1">Wire</td>
                <td class="table-"></td>   
                <td class="table-"></td> 

            </tr >
            <tr class="blackgray">
                <td class="table- first">اسم الطراز</td>
                <td class="table- second">{{Item.model}}</td>
                <td class="table-"></td>
                <td class="table-"></td>   
            </tr>
            <tr class="whitegray">
                <td class="table- first">الابعاد</td>
                <td class="table- second">{{Item.dimn}}</td>
                <td class="table-"></td>
                <td class="table-"></td>  
            </tr>
            <tr class="blackgray">
                <td class="table- first">الشريحة</td>
                <td class="table- second" v-if="Item.sim == 1">يدعم الهاتف شريحتين</td>
                <td class="table- second" v-if="Item.sim == 2">يدعم الهاتف ِشريحة</td>
                <td class="table-"></td>
                <td class="table-"></td>


            </tr>
            <tr class="whitegray">
                <td class="table- first">المادة</td>
                <td class="table- second">{{Item.metal}}</td>
                <td class="table-"></td>
                <td class="table-"></td>   
            </tr>
            <tr class="blackgray">
                <td class="table- first">الوزن</td>
                <td class="table- second">{{Item.weight}} أوقية</td>
                <td class="table-"></td>
                <td class="table-"></td>  
            </tr>
           
        </table>
        </div>
       </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    props: ['id'],
    data(){
        return{
            Item:{}

        }
    },
    methods : {
    
    
     
    
    },
   mounted() {
        axios.get('Products/'+this.id).then((res) => {
            this.Item = res.data.data;
        })
        
   },
// setup(props) {
//     axios.get("Products/+1").then((res) => { 
//             this.Item = res.data.data; 
//             console.log(axios.Item)
//         })
//   },
}
</script>
<style scoped>

.whitegray{
   
    background-color:#F8F8F8 !important;
    /* background-color: white; */
}
.blackgray{
    /* background-color:#F8F8F8 !important; */
    
    background-color: #d6d5d5;
}
.whitegray td{
  padding: 10px 15px !important;
}

.blackgray td{
     padding: 10px 15px !important;
}
hr{
    margin-top: 0;
    border: 1px solid var(--primary);
}
.first{
    font-weight: bold;
padding-left: 0;
margin-right: 0;
}
.second{
    padding-right: 0;
    margin-right: 0;
}
tr td{
    font-family: DIN Next LT Arabic;
font-size: 16px;
font-style: normal;
font-weight: 400px;
line-height: 25px; 
}
.tablee{
    margin-bottom: 20px;
}
@media(max-width:991px) {
    
}
@media(max-width:767px) {
    /* .x{
        width: 100%;
    }
    .coll{
        width: 20%;
    } */
}
</style>