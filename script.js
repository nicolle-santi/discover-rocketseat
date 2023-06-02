function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img") //pegar a tag img

  if (html.classList.contains("light")) {
    //função substituir a imagem
    img.setAttribute("src", "./assets/avatar-light.png") //se tiver em light mode, adicionar a imagem light
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png") //se tiver sem light mode, manter a imagem normal
  }

  const alt = document.querySelector("#profile img") //pegar a tag img

  if (html.classList.contains("light")) {
    //função substituir a imagem
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo de óculos escuros e jaqueta preta, em um fundo degradê azul e roxo"
    ) //se tiver em light mode, adicionar a imagem light
  } else {
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo de óculos de grau e jaqueta preta, em um fundo degradê azul e roxo"
    ) //se tiver sem light mode, manter a imagem normal
  }
}
