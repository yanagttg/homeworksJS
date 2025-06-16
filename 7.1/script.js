/*
  При наведении на изображение, отображайте увеличенную миниатюру
  
  Пример: https://codepen.io/neizerth/pen/KKJYReG
*/

/* 1. сохраните в константу исходное изображение .product__image */
const originalImage = document.querySelector('.product__image');
/* 2. сохраните в константу изображение для просмотра .preview__data */
const previewImage = document.querySelector('.preview__data');
/* 3. сохраните в константу блок просмотра .preview */
const previewBox = document.querySelector('.preview');

/* 4.1 при перемещении курсора внутрь (.onmouseenter) изображения (пункт 1) */
originalImage.addEventListener('mouseenter', function() { 
 /* 4.2. уберите у блока просмотра (пункт 3) класс preview_hidden
  не забудьте закрывающую скобку }*/
previewBox.classList.remove('preview_hidden');
});
/* 5.1 при выходе курсора за пределы (.onmouseleave) изображения (пункт 1) */
originalImage.addEventListener('mouseleave', function() {
  /* 5.2. добавьте блоку просмотра (пункт 3) класс preview_hidden */
 previewBox.classList.add('preview_hidden');
}); /* не забудьте закрывающую скобку }


/* 6.1. при перемещении курсора (.onmousemove) по изображению (пункт 1)*/
originalImage.addEventListener('mousemove', function(e) { 
const originalImageRect = originalImage.getBoundingClientRect();
 const mouseXInImage = e.clientX - originalImageRect.left;
  const mouseYInImage = e.clientY - originalImageRect.top;
  /* 6.2. сохраните в константу, насколько ширина (.clientWidth) картинки для просмотра больше ширины исходного изображения */
const scaleFactor = previewImage.clientWidth / previewBox.clientWidth;
  
  /* 6.3. Сохраните в константу левый отступ картинки для просмотра
   он равен ширине (.clientWidth) блока просмотра (пункт 3) 
   минус e.pageX * k
   k - коэффициент из пункта 6.2, e - объект события в function(e) (пункт 6.1) */
    const leftOffsetPreviewImage = -mouseXInImage * scaleFactor;

  /* 6.4. Сохраните в константу верхний отступ картинки для просмотра
   он равен высоте (.clientHeight) блока просмотра (пункт 3) 
   минус e.pageY * k
   k - коэффициент из пункта 6.2, e - объект события в function(e) (пункт 6.1) */
   const topOffsetPreviewImage = -mouseYInImage * scaleFactor;

  
  /* 6.5. запишите в CSS-стили изображения для просмотра (пункт 2) 
   левый отступ (свойство left) из пункта 6.3 */
    previewImage.style.left = leftOffsetPreviewImage + 'px';
  
  /*6.5. запишите в CSS-стили изображения для просмотра (пункт 2) 
   верхний отступ (свойство top) из пункта 6.4 */
   previewImage.style.top = topOffsetPreviewImage + 'px';
  
  /* 6.6. Запишите в константу любое число, например 20, 50 или 70
   Оно будет отступом для блока просмотра позднее */
   const previewBoxOffset = 20;
  
  /* 6.7. Сохраните в константу левый отступ блока просмотра
   он равен e.pageX + отступ из пункта 6.6 */
  const leftOffsetPreviewBox = e.pageX + previewBoxOffset;
  /* 6.8. Сохраните в константу верхний отступ блока просмотра
   он равен e.pageY + отступ из пункта 6.6 */
  const topOffsetPreviewBox = e.pageY + previewBoxOffset;
 /* 6.9. запишите в CSS-стили блока для просмотра (пункт 3) 
   левый отступ (свойство left) из пункта 6.7 */
  previewBox.style.left = leftOffsetPreviewBox + 'px';
  /* 6.10. запишите в CSS-стили блока для просмотра (пункт 3) 
   верхний отступ (свойство top) из пункта 6.8 */
  previewBox.style.top = topOffsetPreviewBox + 'px';
 });
 /*не забудьте закрывающую скобку } */
