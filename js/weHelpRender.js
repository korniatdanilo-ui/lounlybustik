document.addEventListener('DOMContentLoaded', function () {
    var cardsWrapper = document.querySelector('.weHelp__cardsWrapper');
    if (!cardsWrapper) {
        return;
    }

    fetch('js/weHelpData.json')
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Failed to load weHelp data');
            }
            return response.text();
        })
        .then(function (text) {
            var servers = JSON.parse(text);
            cardsWrapper.innerHTML = servers
                .map(function (server) {
                    return (
                        `<div class="weHelp__card weHelp__card--server">
                          <div class="server-logo">
                            <img src="${server.img}" alt="${server.alt}" />
                          </div>
                          <p class="text text-xs">${server.name}</p>
                        </div>`
                    );
                })
                .join('');
        })
        .catch(function (error) {
            console.error(error);
        });
});
