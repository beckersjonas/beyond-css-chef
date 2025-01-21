const displayFontSizes = () => {
  const ro = new ResizeObserver((entries) => {
    entries.forEach(entry => {
      const fs = (parseFloat(entry.target.computedStyleMap().get("font-size")) / 16).toFixed(2, "0")
      entry.target.querySelector("span").innerHTML = `-> ${fs}`
    })
  })
  
  const divs = document.querySelectorAll("div[class*='fs-']")
  divs.forEach(div => ro.observe(div))
}
displayFontSizes()