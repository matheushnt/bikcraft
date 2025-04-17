const links = document.querySelectorAll('.header-menu a');
console.log(links);

function ativarLink(link) {
  url = window.location.href;
  href = link.href;

  if (url.includes(href)) {
    link.classList.add('ativo');
  }
}

links.forEach(ativarLink);
