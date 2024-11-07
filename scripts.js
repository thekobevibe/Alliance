function openModal(modalId, imageSrc = '', title = '', text = '') {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';

    // Работа с модальным окном статьи
    if (modalId === 'article-modal') {
        if (imageSrc) {
            document.getElementById('modal-image').src = imageSrc; // Устанавливаем изображение
        }
        if (title) {
            document.getElementById('modal-title').innerText = title; // Устанавливаем заголовок
        }
        if (text) {
            document.getElementById('modal-text').innerText = text; // Устанавливаем текст
        }
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}
