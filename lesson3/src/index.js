require('./index.scss')

console.log('hello webpack!')

const Logo = require('./logo.png')
const Happy = require('./happy.jpg')

document.body.appendChild(component())

function component() {
  const element = document.createElement('div')

  return createImg(element, [Logo, Happy])
}

function createImg(ele, urls) {
  if (Object.prototype.toString.call(urls) !== '[object Array]') {
    urls = [urls]
  }
  urls.forEach(url => {
    const img = new Image()
    img.src = url
    ele.appendChild(img)
  })

  return ele
}