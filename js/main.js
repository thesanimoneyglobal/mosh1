const collabse = document.querySelectorAll('.collabse');
collabse.forEach((item) =>
item.addEventListener('click', function () {
  this.classList.toggle('collabse--expanded');
}))
