class Result {
  constructor(code, data, msg) {
    const _this = this
    // 传了code
    if (typeof code === 'number') {
      _this.code = code
      // 没传data
      if (typeof data === 'string') {
        _this.msg = data
      }
      // 传了data
      else {
        _this.data = data

        if (msg) {
          _this.msg = msg
        }
      }

    }
    // 没传code
    else {
      // 没传data
      if (typeof code === 'string') {
        _this.msg = code
      }
      // 传了data
      else {
        _this.data = code

        if (data) {
          _this.msg = data
        }
      }
    }
  }
}

module.exports = Result
