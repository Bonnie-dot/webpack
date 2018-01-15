<template>
  <div id="backend">
    <aside>
    <ul>
      <li><router-link to="/customReport">定制报告</router-link></li>
      <li><router-link to="/manageReport">管理报告</router-link></li>
    </ul>
  </aside>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script type="text/ecmascript-6" >
  export default{

  }
</script>
<style lang="scss" scoped>
  #backend{
    display: flex;
    height: 100%;
    aside{
      background-color: rgba(63, 63, 63, 1) ;
      height: 100%;
      width: 239px;
      color: #fff;
      ul{
        li{
          height: 55px;
          line-height: 55px;
          a{
            text-align: center;
            color: #ffffff;
          }

        }
      }
    }
    .content{
      flex: 1;
    }
  }

</style>
