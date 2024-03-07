document.addEventListener('keydown', function(e) {
    const isOnCalendarPage = window.location.pathname.includes('/calendar');

    if (e.code === "Escape") {
        const menu = document.querySelector('.main-menu-container');
        if (menu && menu.style.transform === 'translateY(0)') {
            menu.style.transform = 'translateY(-100vh)';
            const closeButton = document.querySelector('#close');
            if (closeButton) {
                closeButton.style.display = 'none';
            }
            const exploreButton = document.getElementById('explore');
            if (exploreButton) {
                exploreButton.style.transform = 'translateY(0)';
            }
            document.body.classList.remove('menu-active');
        }
    }

    if (isOnCalendarPage && e.ctrlKey && e.key === '1') {
        window.location.href = '/Users/%D0%92%D0%B5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%A5%D0%9D%D0%A3%D0%A0%D0%AD/2/2.1/Web/PW/practical-work1/calendar2022.html';
    }

    if (isOnCalendarPage && e.ctrlKey && e.key === '2') {
        window.location.href = '/Users/%D0%92%D0%B5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%A5%D0%9D%D0%A3%D0%A0%D0%AD/2/2.1/Web/PW/practical-work1/calendar2023.html';
    }

    if (e.ctrlKey && e.code === "Space") {
        window.location.href = '/Users/%D0%92%D0%B5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%A5%D0%9D%D0%A3%D0%A0%D0%AD/2/2.1/Web/PW/practical-work1/index.html';
    }

    if (e.ctrlKey && e.key === '8') {
        window.location.href = '/Users/%D0%92%D0%B5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%A5%D0%9D%D0%A3%D0%A0%D0%AD/2/2.1/Web/PW/practical-work1/suggestions.html';
    }
});