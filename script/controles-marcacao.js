const { func } = require("prop-types");

document.getElementById('visibilidade-das-marcacoes').addEventListener('change', function(e){
  document.getElementsByClassName("foto-anotada")[0].classList.toggle("marcacoes-ocultas")
})


document.getElementsByClassName("controles")[0].addEventListener('change', function(e) {
  selectedBookmark.style.left =  document.getElementById('x-da-marcacao').value 
  selectedBookmark.style.top = document.getElementById('y-da-marcacao').value 
  selectedBookmark.style.width = document.getElementById('largura-da-marcacao').value 
  selectedBookmark.style.height = document.getElementById('altura-da-marcacao').value  
  selectedBookmark.setAttribute("data-titulo", document.getElementById('titulo-da-marcacao').value)
  selectedBookmark.setAttribute("data-conteudo", document.getElementById('conteudo-da-marcacao').value)
  selectedBookmark.setAttribute("data-cor", document.getElementById('cor-da-marcacao').value)
})


document.getElementsByName("formato-da-marcacao")[0].addEventListener('change', function(e){
  selectedBookmark.classList.toggle("formato-retangular")
});
document.getElementsByName("formato-da-marcacao")[1].addEventListener('change', function(e){
  selectedBookmark.classList.toggle("formato-oval")
});
document.getElementById('filtro-da-foto').addEventListener('change', function(e){
  document.getElementsByClassName("foto-anotada")[0].style.filter = e.target.value
});

