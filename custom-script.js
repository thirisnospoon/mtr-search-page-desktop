const stickyFilter = document.querySelector('.sticky-filter');
const showFilterPointer = document.querySelector('.show-filter-label');

const hideFilterPointer = document.querySelector('.hide-filter-label');

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= (showFilterPointer.offsetTop + 200) && window.pageYOffset <= (hideFilterPointer.offsetTop - 550)) {
        stickyFilter.classList.remove('hidden');
    }
    else {
        stickyFilter.classList.add('hidden');
    }
});



const stIcheck = document.querySelector('.st-icheck-2');
const innerText = document.querySelector('.check-info');

stIcheck.addEventListener('click', event => {
    if (stIcheck.classList.contains('open')) {
        innerText.classList.remove('hidden');
    }
    else {
        innerText.classList.add('hidden');
    }
});
