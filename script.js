const eye = document.querySelector('.supervisor')
const input1 = document.querySelector('.login')
const input2 = document.querySelector('.pass')
let symbolsAmount = 0

input1.addEventListener('input', e => {
  symbolsAmount = input1.value.length
  if(symbolsAmount > 0){
    if(Math.floor(symbolsAmount / 2.8) * -200 > -3400) {
      eye.style.backgroundPosition = Math.floor(symbolsAmount / 2.8) * -200 + 'px 0'
    }
    else {
      eye.style.backgroundPosition = '-3200px 0'
    }
  }
  else {
    eye.style.backgroundPosition = '-3400px 0'
  }
})

input2.addEventListener('focus', e => {
  eye.style.background = 'url(img/supervisor-password.png)'
  eye.style.backgroundSize = '1000px 200px'
  let p = new Promise((resolve) => {
    setTimeout(() => {
      eye.style.backgroundPosition = '0 0'
      resolve()
    }, 150)
  })
  p.then(() => {
    let p2 = new Promise((resolve) => {
      setTimeout(() => {
        eye.style.backgroundPosition = '-200px 0'
        resolve()
      }, 150)
    })
    p2.then(() => {
      let p3 = new Promise((resolve) => {
        setTimeout(() => {
          eye.style.backgroundPosition = '-400px 0'
          resolve()
        }, 150)
      })
      p3.then(() => {
        let p4 = new Promise((resolve) => {
          setTimeout(() => {
            eye.style.backgroundPosition = '-600px 0'
            resolve()
          }, 150)
        })
        p4.then(() => {
          let p5 = new Promise((resolve) => {
            setTimeout(() => {
              eye.style.backgroundPosition = '-800px 0'
              resolve()
            }, 150)
          })
        })
      })
    })
  })

})

input2.addEventListener('blur', e => {
  symbolsAmount = input1.value.length
  eye.style.background = 'url(img/supervisor.png)'
  eye.style.backgroundSize = '3600px 200px'
  if(symbolsAmount > 0){
    if(Math.floor(symbolsAmount / 2.8) * -200 > -3400) {
      eye.style.backgroundPosition = Math.floor(symbolsAmount / 2.8) * -200 + 'px 0'
    }
    else {
      eye.style.backgroundPosition = '-3200px 0'
    }
  }
  else {
    eye.style.backgroundPosition = '-3400px 0'
  }
})