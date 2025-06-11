const images = [
  'https://images.unsplash.com/photo-1698859858642-bb45d13a7e96?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5OTg1NDA3Mw&ixlib=rb-4.0.3&q=80&w=500',
  'https://plus.unsplash.com/premium_photo-1699109915033-d095ba84f2df?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5OTg1NDgwNA&ixlib=rb-4.0.3&q=80&w=500',
  'https://plus.unsplash.com/premium_photo-1699534955998-4bbff4aa931d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5OTg1NDg0NA&ixlib=rb-4.0.3&q=80&w=500',
  'https://images.unsplash.com/photo-1692685572998-d7913a8d665a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5OTg1NDEwNg&ixlib=rb-4.0.3&q=80&w=500',
  'https://images.unsplash.com/photo-1697293202392-0e8eadffface?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5OTg1NDg1Nw&ixlib=rb-4.0.3&q=80&w=500'
];

let currentImageIndex = 0;
const prevButton = document.querySelector('.gallery__control_prev');
const nextButton = document.querySelector('.gallery__control_next');
const mainImage = document.querySelector('.gallery__image');

nextButton.addEventListener('click', () => {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        mainImage.src = images[currentImageIndex];
    }
}
);

prevButton.addEventListener('click', () => {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        mainImage.src = images[currentImageIndex];
    }
});
