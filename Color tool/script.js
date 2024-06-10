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

  currentColorBox.style.backgroundColor = inputHex
}

hexColorInput.addEventListener('input', updateColor)
