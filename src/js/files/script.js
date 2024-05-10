// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

const languages = document.querySelector('.languages');
if (languages) {
  document.addEventListener('click', function (e) {
    let targetElement = e.target;
    if (targetElement.classList.contains('languages__title')) {
      if (languages) {
        languages.classList.toggle('languages_active');
      }
      e.preventDefault();
    } else {
      if (!targetElement.closest('.languages__wrapper')) {
        let languagesActive = document.querySelector('.languages.languages_active');
        if (languagesActive) languagesActive.classList.remove('languages_active');
      }
    }
  });
}
