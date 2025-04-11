// This file contains the JavaScript code for the web browser application. It handles user interactions, manages the browser's functionality, and manipulates the DOM.

document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('url-input');
    const goButton = document.getElementById('go-button');
    const iframe = document.getElementById('web-view');

    goButton.addEventListener('click', () => {
        const url = urlInput.value;
        if (url) {
            // Check if the URL starts with http or https
            const formattedUrl = url.startsWith('http://') || url.startsWith('https://') ? url : 'http://' + url;
            iframe.src = formattedUrl;
        }
    });

    urlInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            goButton.click();
        }
    });
});