// Навигация: активная ссылка
const links = document.querySelectorAll('nav ul li a');
if (links.length > 0) {
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.style.borderBottom = '2px solid white';
        }
    });
}
document.querySelectorAll('.timeline-year').forEach(year => {
    year.addEventListener('click', () => {
        const detailContainer = document.getElementById('timeline-details');

        if (detailContainer) {
            // Сбрасываем анимацию, если она уже активна
            detailContainer.classList.remove('visible');

            // Обновляем содержимое
            const detailContent = year.getAttribute('data-detail');
            detailContainer.innerHTML = detailContent;

            // Добавляем класс для проигрывания анимации
            setTimeout(() => {
                detailContainer.classList.add('visible');
            }, 10);
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const timelineYears = document.querySelectorAll('.timeline-year');
    const tooltip = document.getElementById('timeline-tooltip');
    const detailsContainer = document.getElementById('timeline-details');

    if (timelineYears.length > 0 && detailsContainer) {
        timelineYears.forEach(year => {
            // Наведение на год: обновляем текст тултипа
            year.addEventListener('mouseenter', () => {
                const info = year.getAttribute('data-info');
                tooltip.textContent = info;

                tooltip.classList.add('visible');
            });

            // Уход с года: скрыть тултип
            year.addEventListener('mouseleave', () => {
                tooltip.classList.remove('visible');
            });
            
        });
    }
});

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Спасибо, ${name}! Ваше сообщение отправлено.`);
        contactForm.reset();
    });
}