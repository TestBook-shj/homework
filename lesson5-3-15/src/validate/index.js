import Vue from 'vue'
import { ValidationProvider, extend } from 'vee-validate'
import { required, email, min, max, length, between, is } from 'vee-validate/dist/rules'

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

extend('max', {
  ...max,
  message: '不符合最大长度要求'
})

extend('length', {
  ...length,
  message: '{_field_}长度要求{length}'
})

extend('between', {
  ...between,
  message: '6到16个字符'
})

extend('is', {
  ...is,
  message: '两次输入内容不一致'
})

Vue.component('ValidationProvider', ValidationProvider)
