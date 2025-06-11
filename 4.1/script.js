/*
  Сделайте галерею случайных изображений собак
  
  1. При нажатии на «Далее», запросите данные по адресу 
  
  https://random.dog/woof.json?filter=mp4,webm

  2. Отобразите ответ data.url в картинке .image 
  
  Пример:
  https://codepen.io/neizerth/pen/XWOBKRM
  
  Общие задачи:
  1. Поменять классы в querySelector
  2. Поменять адрес
  3. Заменить data[0] на data.url
*/
const dogImage = document.querySelector('.image');
const nextButton = document.querySelector('.btn');
const apiUrl = 'https://random.dog/woof.json?filter=mp4,webm';

async function fetchAndDisplayDogImage() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.url.endsWith('.mp4') || data.url.endsWith('.webm')) {
            fetchAndDisplayDogImage(); 
        } else {
            dogImage.src = data.url; 
        }
    } catch (error) {
        dogImage.src = 'https://place-hold.it/200x200&text=[Ошибка загрузки]&fontsize=15';
    }
}

fetchAndDisplayDogImage();

nextButton.addEventListener('click', (event) => {
    event.preventDefault();
    fetchAndDisplayDogImage();
});



