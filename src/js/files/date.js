if (document.querySelector('.main-page_home')) {
  const date = new Date();
  const month = date.getMonth() + 1;
	
  if (month === 12 || month < 3) {
    const image = document.querySelector('.main-page__background-ibg img ');
    if (image) image.setAttribute('src', 'img/home/winter-background.jpg');
  }
}

