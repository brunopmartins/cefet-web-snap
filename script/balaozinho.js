const bookmarks = document.getElementsByClassName('marcacao');
const bookmarkContent = document.getElementById('balaozinho');
let selectedBookmark = bookmarks[0];

for (let bookmark of bookmarks){
  bookmark.addEventListener('mouseover', function(e){
    target = e.currentTarget;
    bookmarkContent.innerHTML = `<h1>${target.getAttribute('data-titulo')}</h1><p>${target.getAttribute('data-conteudo')}</p>`;
    bookmarkContent.style.background = target.getAttribute('data-cor');
    bookmarkContent.style.top = `${e.pageY}px`;
    bookmarkContent.style.left = `${e.pageX}px`;
    bookmarkContent.style.display = 'block'

  })
  bookmark.addEventListener('mouseout', function(e){
    bookmarkContent.style.display = 'none';
  })
  bookmark.addEventListener('mousemove', function(e){
    bookmarkContent.style.top = `${event.pageY}px`;
    bookmarkContent.style.left = `${event.pageX}px`;
  })
  bookmark.addEventListener('click', function(e){
    selectedBookmark.classList.toggle("selecionada")
    selectedBookmark = e.currentTarget;
    selectedBookmark.classList.toggle("selecionada")
    changeSelected()
  })
}
function changeSelected(){
  document.getElementById('x-da-marcacao').value = parseInt(selectedBookmark.style.left, 10);
  document.getElementById('y-da-marcacao').value = parseInt(selectedBookmark.style.top, 10);
  document.getElementById('largura-da-marcacao').value = parseInt(selectedBookmark.style.width, 10);
  document.getElementById('altura-da-marcacao').value = parseInt(selectedBookmark.style.height, 10);
  document.getElementById('titulo-da-marcacao').value = selectedBookmark.getAttribute('data-titulo');
  document.getElementById('conteudo-da-marcacao').value = selectedBookmark.getAttribute('data-conteudo');
  document.getElementById('cor-da-marcacao').value = selectedBookmark.getAttribute('data-cor');
  document.getElementsByName('formato-da-marcacao')[0].checked = selectedBookmark.classList.contains('formato-retangular');
  document.getElementsByName('formato-da-marcacao')[1].checked = selectedBookmark.classList.contains('formato-oval');
}