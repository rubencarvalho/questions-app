export function newColor() {
  const hBase = Math.random()
  const newH = Math.floor(hBase * 360)
  const newL = Math.floor(Math.random() * 16) + 75

  return `hsl(${newH}, 100%, ${newL}%)`
}
