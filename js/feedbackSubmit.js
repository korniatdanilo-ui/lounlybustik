document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('.feedbacksection__form');
    if (!form) {
        return;
    }

    let button = form.querySelector('.button');
    let feedbackNode = document.createElement('div');
    feedbackNode.className = 'feedback-message';
    form.appendChild(feedbackNode);

    form.addEventListener('submit', function (event) {
        // event.preventDefault();
        console.log('Form submission intercepted for mock mode.');
        let name = form.querySelector('input[type="text"]').value.trim();
        let phone = form.querySelector('input[type="tel"]').value.trim();
        let message = form.querySelector('textarea').value.trim();

        if (!name || !phone || !message) {
            feedbackNode.textContent = 'Please complete all fields before sending.';
            feedbackNode.classList.remove('feedback-message--success');
            feedbackNode.classList.add('feedback-message--error');
            return;
        }

        button.disabled = true;
        button.classList.add('button--loading');
        button.dataset.originalText = button.dataset.originalText || button.textContent;
        button.textContent = 'Sending...';
        feedbackNode.textContent = '';
        feedbackNode.classList.remove('feedback-message--error', 'feedback-message--success');

        setTimeout(function () {
            button.disabled = false;
            button.classList.remove('button--loading');
            button.textContent = button.dataset.originalText;
            feedbackNode.textContent = 'Success! Your request was submitted in mock mode.';
            feedbackNode.classList.remove('feedback-message--error');
            feedbackNode.classList.add('feedback-message--success');
            form.reset();
        }, 900);
    });
});
