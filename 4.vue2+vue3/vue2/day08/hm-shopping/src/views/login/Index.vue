<script lang="ts">
import { getCaptcha, login, sendSmsCaptcha } from '@/api/login'
import { Toast } from 'vant'
import { mapMutations } from 'vuex'

export default ({
  name: 'LoginIndex',
  data () {
    return {
      base64: '',
      key: '',
      md5: '',
      msg: '获取验证码',
      count: 60,
      timer: null,
      captchaCode: '',
      mobile: '',
      smsCode: ''
    }
  },
  methods: {
    async getCaptcha (this: any) {
      const res = await getCaptcha() as API.ResultData
      if (res && res.status === 200) {
        const data: API.CaptchaResponse = res.data
        this.base64 = data?.base64 || ''
        this.key = data?.key || ''
        this.md5 = data?.md5 || ''
      }
    },
    async sendMsg (this: any) {
      if (!this.captchaCode) {
        Toast('请输入图形验证码')
        return
      }
      if (!this.mobile) {
        Toast('请输入手机号')
        return
      }
      this.$refs.sendCode.disabled = true
      this.timer = setInterval(() => {
        this.msg = `重新发送(${this.count})`
        this.count--
        if (this.count <= 0) {
          this.msg = '重新发送'
          this.count = 60
          this.$refs.sendCode.disabled = false
          clearInterval(this.timer)
        }
      }, 1000)
      await sendSmsCaptcha({
        captchaCode: this.captchaCode,
        captchaKey: this.key,
        mobile: this.mobile
      })
    },
    async login (this: any) {
      try {
        const res = await login({
          form: {
            mobile: this.mobile,
            smsCode: this.smsCode,
            isParty: false,
            partyData: {}
          }
        }) as API.ResultData
        this.setUserId(res.data.userId)
        this.setToken(res.data.token)
        Toast.success('登录成功')
        await this.$router.push('/')
      } catch (error: any) {
        Toast(error)
      }
    },
    ...mapMutations('user', ['setUserId', 'setToken'])
  },
  async created (this: any) {
    await this.getCaptcha()
    Toast('加载验证码成功')
  },
  destroyed (this: any) {
    clearInterval(this.timer)
  }
})
</script>

<template>
  <div class="login-page">
    <van-nav-bar
      title="会员登录"
      left-arrow
      fixed
      placeholder
      @click-left="$router.back()"
      class="login-nav"
    />

    <div class="content">
      <h1 class="main-title">手机号登录</h1>
      <p class="sub-title">未注册的手机号登录后将自动注册</p>

      <div class="form">
        <van-field
          type="tel"
          placeholder="请输入手机号"
          clearable
          class="field"
          v-model="mobile"
        />

        <van-field
          placeholder="请输入图形验证码"
          clearable
          class="field"
          v-model="captchaCode"
        >
          <template #button>
            <img class="captcha-img" :src="base64" alt="captcha" @click="getCaptcha"/>
          </template>
        </van-field>

        <van-field
          placeholder="请输入短信验证码"
          clearable
          class="field"
          v-model="smsCode"
        >
          <template #button>
            <button class="get-code" type="button" @click="sendMsg" ref="sendCode">{{ msg }}</button>
          </template>
        </van-field>
      </div>

      <van-button class="submit" round block type="primary" @click="login">登录</van-button>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  background: #fff;
}

.login-nav ::v-deep .van-nav-bar__title {
  font-weight: 600;
  color: #333;
}

.login-nav ::v-deep .van-nav-bar__arrow {
  font-size: 18px;
  color: #333;
}

.content {
  padding: 18px 16px 0;
}

.main-title {
  margin: 10px 0 6px;
  font-size: 28px;
  font-weight: 700;
  color: #222;
}

.sub-title {
  margin: 0 0 22px;
  font-size: 13px;
  color: #a2a6ad;
}

.form {
  background: #fff;
}

.field {
  padding: 0;
}

.field ::v-deep .van-cell {
  padding: 0;
}

.field ::v-deep .van-field__control {
  height: 52px;
  padding: 0;
  font-size: 15px;
  color: #333;
}

.field ::v-deep .van-cell__value {
  border-bottom: 1px solid #f0f0f0;
}

.captcha-img {
  width: 112px;
  height: 36px;
  object-fit: cover;
  border-radius: 4px;
}

.get-code {
  padding: 0;
  border: 0;
  background: transparent;
  font-size: 14px;
  color: #d9b57a;
}

.submit {
  margin-top: 28px;
  height: 46px;
  border: 0;
  background-image: linear-gradient(90deg, #f3c56a, #eda248);
  box-shadow: 0 8px 18px rgba(237, 162, 72, 0.25);
}

.submit ::v-deep .van-button__text {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
}
</style>
