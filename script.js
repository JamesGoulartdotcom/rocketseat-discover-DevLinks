function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  const txt = document.querySelector("#profile text")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem
    img.setAttribute("src", "./assets/avatar-light.png")
    txt.setAttribute(
      "alt",
      "Foto de Mayk Brito sorringo, usando óculos escuros e jaqueta, sem barba e fundo azul e roxo."
    )
  } else {
    // se não, manter a imagem
    img.setAttribute("src", "./assets/avatar.png")
    txt.setAttribute(
      "alt",
      "Foto de Mayk Brito sorringo, usando óculos e camisa preta, barba e fundo amarelo."
    )
  }
}
