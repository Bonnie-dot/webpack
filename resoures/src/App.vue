<template>
  <div id="app">
    <el-container v-if="isLogin">
      <el-header>
        <div class="logo">
          <img src="" alt="">
          <span>金融数据分析报告</span>
        </div>
        <div class="nav">
          <ul>
            <li><router-link to="/home">首页</router-link></li>
            <li><router-link to="/openReports">公开报告库</router-link></li>
            <li><router-link to="/backend">报告系统</router-link></li>
            <li>用户名</li>
          </ul>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer height="140px">
       footer
      </el-footer>
    </el-container>
    <div v-else class="login-box">
      <p>账号登录</p>
      <el-form ref="form" :model="form" :rules="rules" >
        <el-form-item prop="username">
          <el-input
            size="large"
            placeholder="请输入账号"
            v-model="form.username"
           >
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            size="large"
            placeholder="请输入密码"
            type="password"
            v-model="form.password"
            prop="password">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="captcha"  class="icaptcha">
        <el-input
          size="large"
          placeholder="请输入验证码"
          v-model="form.captcha">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-form-item>
        <img :src="'/api'+src"  alt="点击刷新" @click="refreshCode">
        <el-button type="primary" @click="getLogon">登录</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
  import{ mapActions,mapGetters,mapMutations} from 'vuex'
  import webStorageCache from 'web-storage-cache'
  var wsCache = new webStorageCache();
export default {
  name: 'app',
  data(){
    return {
        form:{
          username:"admin",
          password:"111111",
          captcha:"",
        },
      rules: {
        username:[ { required: true, message: '请输入用户名', trigger: 'blur' }],
        password:[ { required: true, message: '请输入密码', trigger: 'blur' }],
        captcha:[ { required: true, message: '请输入验证码', trigger: 'blur' }]
      },
      src:"",
    }
  },
  created(){
    this.refreshCode();
    wsCache.get('islogin')&&(this.getLogin({isLogin:true}));
  },
  computed:{...mapGetters(['isLogin'])},
  methods:{
    ...mapActions(['login']),
    ...mapMutations(['getLogin']),
    getLogon(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
        this.login({username:this.form.username,password:this.form.password,captcha:this.form.captcha});
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    refreshCode(){
          this.src='/captcha.jpg?t='+ +new Date();
    },
  }
}
</script>

<style>
 @import "public/reset.css";
  html,body,#app,.el-container{
    height: 100%;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    height: calc( 100% - 200px);
    padding:0;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
  .el-header>.logo{
    float:left ;
    margin-left: 100px;
  }
  .el-header>.nav{
    float:right ;
  }
 .el-header>.nav li{
   float: left;
   padding:0 10px;
 }
 .el-footer{
   line-height: 32px;
   padding:10px 0;
 }
 .el-header{
   line-height: 60px;
 }
  .login-box{
    width: 300px;
    position: absolute;
    left: calc( 50% - 150px);
    top: calc( 50% - 250px);
    border: 1px solid red;
    padding:20px;
  }
 .login-box  p{
   margin:20px 0;
   text-align: center;
   font-size: 20px;
 }
 .login-box .el-fom rm{
   padding: 20px;
 }
 .login-box .icaptcha{
   width: 59%;
   display: inline-block;
   vertical-align: 14px;
 }
 .el-button--primary{
   width: 100%;
 }
 img{
   cursor: pointer;
   width:100px;
   height:40px
 }
</style>
