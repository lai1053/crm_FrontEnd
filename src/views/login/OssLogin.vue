<template>
  <div @click="handlesOssLogin">{{ content }}</div>
</template>

<script>
import { Loading } from 'element-ui'

export default {
  name: 'OssLogin',
  data() {
    return {
      content: '正在登录请稍后',
      form: {
        username: 13929537731
      }
    }
  },
  mounted() {
    // const localStorage = window.localStorage
    // localStorage.clear()
    // console.log(getUrlPass);
    this.getUrlPass()
  },
  methods: {
    getUrlPass() {
      const windowUrl = window.location.href // 获取当前window的url用于判定是否为单点登录过来
      const urlArr = windowUrl.split('?')
      const number = urlArr[1] * 1
      if (typeof number === 'number') {
        this.form.username = number
        this.handlesOssLogin()
      } else {
        this.content = '用户名验证失败请联系管理员'
      }
      console.log(urlArr, number)
    },
    handlesOssLogin() {
      const loading = Loading.service({
        target: document.querySelector('.login-main-content')
      })
      this.$store
        .dispatch('ossLogin', this.form)
        .then(res => {
          loading.close()
          debugger
          this.$router.push({ path: this.redirect || '/' })
        })
        .catch(() => {
          loading.close()
        })
    }
  }
}
</script>

<style scoped>

</style>
