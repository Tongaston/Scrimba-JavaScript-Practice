const hexColorInput = document.getElementById('hexColorEl')
const toggleBtn = document.getElementById('toggleBtn')
const lightenText = document.getElementById('lightenText')
const darkenText = document.getElementById('darkenText')
const currentColorBox = document.getElementById('currentColor')
const alteredColorBox = document.getElementById('alteredColor')
const alteredColorText = document.getElementById('alteredColorText')
const sliderText = document.getElementById('sliderText')
const slider = document.getElementById('slider')

const isValidHex = (hex) => {
  if (!hex) return false

  const strippedHex = hex.replace('#', '')
  return strippedHex.length === 3 || strippedHex.length === 6
}

const updateColor = () => {
  const inputHex = hexColorInput.value
  if (!isValidHex(inputHex)) return

  const strippedHex = inputHex.replace('#', '')
  currentColorBox.style.backgroundColor = '#' + strippedHex
  reset()
}

hexColorInput.addEventListener('keyup', updateColor)

const convertHexToRGB = (hex) => {
  if (!isValidHex(hex)) return

  let strippedHex = hex.replace('#', '')
  if (strippedHex.length === 3) {
    strippedHex =
      strippedHex[0] +
      strippedHex[0] +
      strippedHex[1] +
      strippedHex[1] +
      strippedHex[2] +
      strippedHex[2]
  } else if (strippedHex.length === 6) {
    strippedHex = strippedHex
  }

  const r = parseInt(strippedHex.substring(0, 2), 16)
  const g = parseInt(strippedHex.substring(2, 4), 16)
  const b = parseInt(strippedHex.substring(4, 6), 16)

  return { r, g, b }
}

const convertRGBToHex = (r, g, b) => {
  const firstPair = ('0' + r.toString(16)).slice(-2)
  const secondPair = ('0' + g.toString(16)).slice(-2)
  const thirdPair = ('0' + b.toString(16)).slice(-2)

  const hex = `#${firstPair}${secondPair}${thirdPair}`
  return hex
}

const increaseBrightness = (hex, percent) => {
  const { r, g, b } = convertHexToRGB(hex)

  const amount = Math.floor((percent / 100) * 255)

  const newR = rangeHexColor(r, amount)
  const newG = rangeHexColor(g, amount)
  const newB = rangeHexColor(b, amount)
  return convertRGBToHex(newR, newG, newB)
}

const rangeHexColor = (hex, amount) => {
  const newHex = hex + amount
  if (newHex > 255) return 255
  if (newHex < 0) return 0
  return newHex
}

increaseBrightness('000', -10)

slider.addEventListener('input', () => {
  if (!isValidHex(hexColorInput.value)) {
    hexColorInput.style.border = '2px solid red'
    return
  } else {
    hexColorInput.style.border = 'none'
    sliderText.textContent = `${slider.value}%`
    const valueColor = toggleBtn.classList.contains('active')
      ? -slider.value
      : slider.value
    const newHex = increaseBrightness(hexColorInput.value, valueColor)
    alteredColorBox.style.backgroundColor = newHex
    alteredColorText.textContent = `Altered color: ${newHex}`
  }
})

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active')
  if (toggleBtn.classList.contains('active')) {
    lightenText.classList.add('unselected')
    darkenText.classList.remove('unselected')
  } else {
    lightenText.classList.remove('unselected')
    darkenText.classList.add('unselected')
  }
  reset()
})

const reset = () => {
  slider.value = 0
  sliderText.textContent = '0%'
  alteredColorBox.style.backgroundColor = hexColorEl.value
  alteredColorText.textContent = `Altered color: ${hexColorEl.value}`
}
