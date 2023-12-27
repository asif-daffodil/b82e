const heads = document.querySelectorAll('.heads')[0];
const details = document.querySelectorAll('.details')[0];
Array.from(heads.children).forEach((head, index) => {
    head.addEventListener('click', () => {
        Array.from(details.children).forEach((detail, i) => {
            if (index === i) {
                detail.classList.remove('d-none');
                Array.from(heads.children)[i].classList.add('active');
            } else {
                detail.classList.add('d-none');
                Array.from(heads.children)[i].classList.remove('active');
            }
        });
    });
});

// accordion
const accordion = document.querySelectorAll('.accordion')[0];
const accordionArr = Array.from(accordion.children);
accordionArr.forEach((item, index) => {
    item.addEventListener('click', () => {
        accordionArr.forEach((element, i) => {
            if (index !== i) {
                element.children[0].classList.remove('active');
                element.children[1].classList.remove('active');
            }
        });
        const h2 = item.children[0];
        const p = item.children[1];
        if (!p.classList.contains('active')) {
            p.classList.add('active');
            h2.classList.add('active');
        } else {
            p.classList.remove('active');
            h2.classList.remove('active');
        }
    });
});