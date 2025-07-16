<script>
import request from "@/utils/request";
import {getImgCode, getSmsCode, login} from "@/api/login.js";
import {Toast} from "vant";
import {mapMutations} from "vuex";

export default {
  name: 'Login',
  methods: {
    ...mapMutations('user',['setUserInfo']),

    async getImgCode() {
      const res = await getImgCode();
      this.imgRes = res.data;
      Toast.success('获取图形验证码成功')
    },
    async getSmsCode() {
      if (!this.mobile) {
        Toast.fail('请输入手机号')
        return
      }
      if (!this.picCode) {
        Toast.fail('请输入图形验证码')
        return
      }
      //倒计时
      setInterval(() => {
        if (this.currentSecond > 0) {
          this.currentSecond--;
          this.codeMsg = this.currentSecond + '秒后重新获取';
        } else {
          this.currentSecond = this.totalSecond;
          this.codeMsg = '重新获取';
        }
      },1000)
      const res = await getSmsCode(this.picCode,this.imgRes.key,this.mobile);
      if (res.status === 200) {
        Toast.success('获取短信验证码成功')
      }else {
        Toast.fail('获取短信验证码失败')
      }
    },

    async login() {
      if (!this.mobile) {
        Toast.fail('请输入手机号')
        return
      }
      if (!this.msgCode) {
        Toast.fail('请输入短信验证码')
        return
      }
      const res = await login(this.msgCode,this.mobile);
      if (res.status === 200) {
        localStorage.setItem('token',res.data.token);
        Toast.success('登录成功')
        this.setUserInfo(res.data);
        // 判断有无回跳地址
        const url = this.$route.query.backUrl || '/'
        this.$router.replace(url)
      }else {
        Toast.fail('登录失败')
      }
    }
  },
  data() {
    return {
      imgRes: '',
      totalSecond: 60,
      currentSecond: 60,
      codeMsg: '获取验证码',

      mobile: '',
      msgCode: '',
      picCode: ''
    }
  },
  created() {
    this.getImgCode();
  }
}
</script>

<template>
  <div id="login">
    <van-nav-bar
      title="会员登录"
      left-arrow
      @click-left="$router.back()"
    />
    <div class="nav">
      <h1 style="font-weight: normal;">手机号登录</h1>
      <p style="color: #333">未注册手机号自动注册</p>
      <div class="form">
        <input type="text" placeholder="请输入手机号" v-model="mobile">
        <div class="imgCode">
          <input type="text" placeholder="请输入图形验证码" v-model="picCode"/>
          <img v-if="imgRes.base64" :src="`${imgRes.base64}`" alt="图片" @click="getImgCode()"/>
        </div>
        <div class="msgCode">
          <input type="text" placeholder="请输入短信验证码" v-model="msgCode"/>
          <button @click="getSmsCode()">{{ codeMsg }}</button>
        </div>
        <button class="login_button" @click="login()">登录</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav {
  margin-top: 60px;
  padding: 0 30px;
}

div {
  margin-top: 30px;
}

input {
  height: 40px;
  width: 100%;
  border: none;
  border-bottom: solid 1px #ccc;
}

.imgCode {
  width: 100%;
  display: flex;
}

.imgCode input {
  width: 70%;
}

.imgCode img {
  width: 30%;
  border-bottom: solid 1px #ccc;
}

.msgCode {
  display: flex;
  align-items: stretch;
}

.msgCode input {
  width: 70%;
}

.msgCode button {
  display: block;
  height: 40px;
  width: 30%;
  background-color: #ffffff;
  border: none;
  border-bottom: solid 1px #ccc;
}

.login_button {
  width: 100%;
  height: 40px;
  margin-top: 40px;
  background-color: orange;
  border:  none;
  border-radius: 39px;
}
</style>
