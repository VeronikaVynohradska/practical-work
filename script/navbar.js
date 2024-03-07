document.querySelector('.dropdownContainer').addEventListener('mouseenter', function(e) {
    const contentBlock = e.target.querySelector('.contentBlock');
    contentBlock.style.transform = 'scaleY(1)';
    contentBlock.style.maxHeight = '1000px';
});

document.querySelector('.dropdownContainer').addEventListener('mouseleave', function(e) {
    const contentBlock = e.target.querySelector('.contentBlock');
    contentBlock.style.transform = 'scaleY(0)';
    contentBlock.style.maxHeight = '0';
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.stickyHeader');
    const container = document.querySelector('.container');
    const containerOffset = container.getBoundingClientRect().top;

    if (containerOffset <= 0) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});