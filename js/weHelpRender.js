document.addEventListener('DOMContentLoaded', async () => {
    const cardsWrapper = document.querySelector('.weHelp__cardsWrapper');
    if (!cardsWrapper) {
        return;
    }

    try {
        const response = await fetch('js/weHelpData.json');
        if (!response.ok) {
            throw new Error('Failed to load weHelp data');
        }

        const text = await response.text();
        const servers = JSON.parse(text);

        cardsWrapper.innerHTML = servers
            .map((server, index) => `
                <div class="weHelp__card weHelp__card--server" style="animation-delay: ${index * 70}ms;">
                    <div class="server-logo">
                        <img src="${server.img}" alt="${server.alt}" />
                    </div>
                    <p class="text text-xs">${server.name}</p>
                </div>`)
            .join('');
    } catch (error) {
        console.error(error);
    }
});
