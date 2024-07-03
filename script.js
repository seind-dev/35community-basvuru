function fetchPlayerCount() {
    fetch('https://servers-frontend.fivem.net/api/servers/single/8vdrob')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const clientCount = data.Data.selfReportedClients;
            document.getElementById('activePlayers').textContent = `AKTİF ${clientCount} OYUNCU`;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

fetchPlayerCount();

setInterval(fetchPlayerCount, 30000);

document.addEventListener('DOMContentLoaded', function () {
    const tooltips = document.querySelectorAll('.navbarCenter a');

    tooltips.forEach(item => {
        item.addEventListener('mouseenter', function () {
            const tooltip = this.querySelector('.tooltip');
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
        });

        item.addEventListener('mouseleave', function () {
            const tooltip = this.querySelector('.tooltip');
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        });
    });

    document.getElementById('join-button').addEventListener('click', function (event) {
        event.preventDefault();

        const mainWrap = document.getElementById('main-wrap');
        mainWrap.innerHTML = '';

        const iframe = document.createElement('iframe');
        iframe.src = 'https://docs.google.com/forms/d/e/1FAIpQLSc7zpF_pG-orkQAxEkA0uziH7tz7Kw9TRre2FrlmxVFiei_1g/viewform?embedded=true';
        iframe.width = '640';
        iframe.height = '640';
        iframe.frameBorder = '0';
        iframe.marginHeight = '0';
        iframe.marginWidth = '0';
        iframe.textContent = 'Yükleniyor...';

        mainWrap.appendChild(iframe);
    });
});



