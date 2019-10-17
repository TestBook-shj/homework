const $ = require('jquery')
const Mock = require('mockjs')
require('./index.css')

$(function () {
  const mockData = {
    "tid|+1": 1,
    "title": '@ctitle',
    "catalog": "index",
    "fav|100-1000": 1,
    "created": '@datetime()',
    "isEnd|1": [0, 1],
    "answer|0-100": 1,
    "user": {
      "avatar": '@image()',
      "name": '@cname(2, 8)',
      "isVip|1": [0, 1],
      "level|0-6": 1
    }
  }

  Mock.mock(/\/lists/, 'get', function (options) {
    const param = transformUrl(options.url)
    const num = param.num
    const result = {
      "status": 0,
      "msg": "返回Mock数据"
    }
    result['data|' + num] = [mockData]
    console.log(result)
    return Mock.mock(result)
  })

  $('#submit').click(handleSubmit)
})

function handleSubmit() {
  const num = $('#num').val()
  const page = $('#page').val()
  doAjax('/lists', 'get', { page: page, num: num }, function (data) {
    document.getElementById('pre').innerHTML = data
  })
}

function transformUrl(url) {
  if (!url) {
    return
  }
  const param = url.split('?')[1]
  if (!param) {
    return
  }
  let result = {}
  param.split('&').forEach(function (item) {
    const arr = item.split('=')
    arr[0] && (result[arr[0]] = arr[1])
  })
  return result
}

function doAjax(url, method, data, callback) {
  $.ajax({
    url: url,
    type: method,
    data: data,
    success: function (data) {
      callback(data)
    }
  })
}
