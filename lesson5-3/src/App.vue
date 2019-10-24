<template>
  <div id="app">
    <div class="layui-container layui-form-pane">
      <form class="layui-form">
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <validation-provider name="账号" rules="required|email" v-slot="{errors}">
            <div class="layui-input-inline">
              <input
                type="text"
                name="name"
                v-model.trim="name"
                placeholder="请输入标题"
                autocomplete="off"
                class="layui-input"
              />
            </div>
            <div class="error layui-form-mid">{{errors[0]}}</div>
          </validation-provider>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <validation-provider name="密码" rules="required|min:6" v-slot="{errors}">
            <div class="layui-input-inline">
              <input
                type="password"
                name="title"
                v-model="password"
                placeholder="请输入标题"
                autocomplete="off"
                class="layui-input"
              />
            </div>
            <div class="error layui-form-mid">{{errors[0]}}</div>
          </validation-provider>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <validation-provider name="验证码" rules="required|length:4" v-slot="{errors}">
            <div class="layui-input-inline">
              <input
                type="text"
                name="title"
                v-model="code"
                placeholder="请输入标题"
                autocomplete="off"
                class="layui-input"
              />
            </div>
            <div class="error layui-form-mid">{{errors[0]}}</div>
          </validation-provider>
          <div class="layui-form-mid svg" @click="getCaptcha()" v-html="svg">图片</div>
        </div>
        <button type="button" class="layui-btn" @click="checkForm()">点击登录</button>
        <a href="http://www.layui.com" class="imooc-link">忘记密码</a>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ValidationProvider, extend } from 'vee-validate'
import { required, email, min, length } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: '请输入{_field_}'
})

extend('email', {
  ...email,
  message: '请输入正确的邮箱格式'
})

extend('min', {
  ...min,
  message: '不符合最小长度要求'
})

extend('length', {
  ...length,
  message: '{_field_}长度要求4'
})

export default {
  name: 'app',
  data () {
    return {
      svg: '',
      name: '',
      password: '',
      code: '',
      errMsg: []
    }
  },
  components: {
    ValidationProvider
  },
  mounted () {
    this.getCaptcha()
  },
  methods: {
    getCaptcha () {
      axios.get('http://localhost:3000/getCaptcha').then(res => {
        if (res.status === 200) {
          let obj = res.data
          if (obj.code === 200) {
            this.svg = obj.data
          }
        }
      })
    }
  },
  checkForm () {
    this.errMsg = []
    if (!this.name) {
      this.errMsg.push('登录名为空!')
    }
    if (!this.password) {
      this.errMsg.push('密码不得为空!')
    }
    if (this.code) {
      this.errMsg.push('验证码为空!')
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  background: #f2f2f2;
}
.layui-container {
  background: #fff;
}
input {
  width: 190px;
}
.imooc-link {
  margin-left: 10px;
  &:hover {
    color: #009688;
  }
}
.svg {
  position: relative;
  top: -15px;
}
.error {
  color: red;
}
</style>
