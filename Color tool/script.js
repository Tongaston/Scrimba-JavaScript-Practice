const hexColorInput = document.getElementById('hexColorEl')
const currentColorBox = document.getElementById('currentColor')

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
console.log(convertHexToRGB('000'))
