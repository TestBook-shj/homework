# 【作业第 5 周】koa 应用

## 安装依赖

`npm install`

## 运行

`node index.js`

## 测试

- postman 中请求[localhost:3000/api/user](http://www.localhost:3000/api/user)接口

- 请求头中没有 role 字段或者 role 字段不为 admin, 返回

  ```
    {
      code: 401,
      msg: 'unauthorized post'
    }
  ```

- 请求头中有 role 且字段为 admin,但请求数据中没有 name 或者 email 字段, 返回

  ```
    {
    code:404,
    'name 与 email 不能为空'
    }
  ```

- 请求头中有 role 且字段为 admin, 并且请求数据中包含 name 和 email 字段, 返回

  ```
    {
      code: 200,
      data: {
        name: 'xx',
        email: 'xx@xx.com'
      },
      msg: '上传成功'
    }
  ```

  ![运行示意图](https://github.com/TestBook-shj/homework/blob/master/static/lesson5.gif)
