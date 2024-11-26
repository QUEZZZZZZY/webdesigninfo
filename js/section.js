const urlParams = new URLSearchParams(window.location.search);
const sectionKey = urlParams.get('section');

// Объект с данными для разделов
const sections = {
  intro: {
    title: "Введение в Web-дизайн",
    description: "Web-дизайн — это процесс создания внешнего вида и структуры веб-страниц."
  },
  history: {
    title: "История Web-дизайна",
    description: "История Web-дизайна начинается с первых сайтов в 1990-х годах."
  },
  composition: {
    title: "Основы визуальной композиции",
    description: "Композиция включает в себя работу с сетками, выравниванием и визуальной иерархией."
  },
  structure: {
    title: "Структура и навигация",
    description: "Структура сайта помогает пользователю находить нужную информацию."
  },
  tech: {
    title: "Технические аспекты",
    description: "HTML, CSS и JavaScript — основные инструменты web-дизайнера."
  }
};

// Задаем данные для текущего раздела
const section = sections[sectionKey];
document.getElementById('section-title').textContent = section.title;
document.getElementById('section-description').textContent = section.description;

document.getElementById('back-button').addEventListener('click', () => {
    window.location.href = 'map.html'; // Переход на карту разделов
});
