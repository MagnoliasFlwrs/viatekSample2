// menu

const menuModal = document.querySelector('.menu-modal');
const overlay = document.querySelector('.overlay');
const closeMenuBtn = document.querySelector('.menu-modal .close-btn');
const burgerBtn = document.querySelector('.burger-btn');

const showMenuModal = () => {
    overlay.classList.add('open');
    menuModal.classList.add('active');
}
const hideMenuModal = () => {
    overlay.classList.remove('open');
    menuModal.classList.remove('active');
}
burgerBtn?.addEventListener('click', () => {
    showMenuModal()
})

closeMenuBtn?.addEventListener('click', () => {
    hideMenuModal()
})
overlay?.addEventListener('click', () => {
    hideMenuModal()
})


// phoneSelect

const phoneSelectWraps = document.querySelectorAll('.phone-select');


phoneSelectWraps?.forEach(phoneSelectWrap => {
    const phoneSelect = phoneSelectWrap.querySelector('.header-phones');
    phoneSelect.addEventListener('click', (e) => {
        e.stopPropagation()
        let currentSelectWrap = e.target.closest('.phone-select');
        let currentSelectBody = currentSelectWrap.querySelector('.phone-select-wrapper');
        currentSelectBody.classList.toggle('active');
        phoneSelect.classList.toggle('active');
        currentSelectWrap.classList.toggle('active');
    })
    document.addEventListener('click', (e) => {
        let lists = document.querySelectorAll('.phone-select-wrapper.active')

        if (!e.target.closest('.phone-select') && lists) {
            lists.forEach(el => {
                el.classList.remove('active');
                let currentSelectWrap = el.closest('.phone-select');
                let currentSelectPhoneSelect = currentSelectWrap.querySelector('.header-phones');
                console.log(currentSelectWrap)
                currentSelectWrap.classList.remove('active');
                currentSelectPhoneSelect.classList.remove('active');
            })
        }
    })
})



// header logo-svg animation

const animatedLogo = document.querySelector('.animated-svg');
const gradient1 = document.getElementById('paint0_linear_2001_379');
const gradient2 = document.getElementById('paint2_linear_2001_379');
const gradient3 = document.getElementById('paint1_linear_2001_379');


animatedLogo.addEventListener('mouseover', () => {
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'x1');
    animate.setAttribute('from', '-320.394');
    animate.setAttribute('to', '100');
    animate.setAttribute('dur', '0.5s');
    animate.setAttribute('fill', 'freeze');
    gradient1.appendChild(animate);
    animate.beginElement();
});

animatedLogo.addEventListener('mouseout', () => {
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'x1');
    animate.setAttribute('from', '100');
    animate.setAttribute('to', '-320.394');
    animate.setAttribute('dur', '0.5s');
    animate.setAttribute('fill', 'freeze');
    gradient1.appendChild(animate);
    animate.beginElement();
});

animatedLogo.addEventListener('mouseover', () => {
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'x1');
    animate.setAttribute('from', '-243.556');
    animate.setAttribute('to', '0');
    animate.setAttribute('dur', '0.5s');
    animate.setAttribute('fill', 'freeze');
    gradient2.appendChild(animate);
    animate.beginElement();
});

animatedLogo.addEventListener('mouseout', () => {
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'x1');
    animate.setAttribute('from', '0');
    animate.setAttribute('to', '-243.556');
    animate.setAttribute('dur', '0.5s');
    animate.setAttribute('fill', 'freeze');
    gradient2.appendChild(animate);
    animate.beginElement();
});

animatedLogo.addEventListener('mouseover', () => {
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'x1');
    animate.setAttribute('from', '-310.394');
    animate.setAttribute('to', '200');
    animate.setAttribute('dur', '0.5s');
    animate.setAttribute('fill', 'freeze');
    gradient3.appendChild(animate);
    animate.beginElement();
});

animatedLogo.addEventListener('mouseout', () => {
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'x1');
    animate.setAttribute('from', '200');
    animate.setAttribute('to', '-310.394');
    animate.setAttribute('dur', '0.5s');
    animate.setAttribute('fill', 'freeze');
    gradient3.appendChild(animate);
    animate.beginElement();
});



// const servicesSwiper = document.querySelector('.services-swiper');
//
// if (servicesSwiper) {
//     const swiper = new Swiper(servicesSwiper, {
//         slidesPerView:1.3,
//         spaceBetween: 20,
//         loop: true,
//         scrollbar: {
//             el: '.custom-swiper-scrollbar',
//         },
//         breakpoints: {
//             500: {
//                 direction: 'horizontal',
//                 slidesPerView: 1.5,
//                 spaceBetween: 20
//             },
//             590: {
//                 direction: 'horizontal',
//                 slidesPerView: 2,
//                 spaceBetween: 20
//             },
//             830: {
//                 direction: 'horizontal',
//                 slidesPerView: 3,
//                 spaceBetween: 30
//             },
//             1150: {
//                 direction: 'horizontal',
//                 slidesPerView: 4,
//                 spaceBetween: 30
//             },
//             1250: {
//                 direction: 'horizontal',
//                 slidesPerView: 5,
//                 spaceBetween: 40
//             }
//         }
//     });
// }
//
// const gallerySwiper = document.querySelector('.gallery-swiper');
//
// if (gallerySwiper) {
//     const swiper2 = new Swiper(gallerySwiper, {
//         slidesPerView:1.3,
//         spaceBetween: 20,
//         loop: true,
//         scrollbar: {
//             el: '.gallery-custom-swiper-scrollbar',
//         },
//         breakpoints: {
//             500: {
//                 direction: 'horizontal',
//                 slidesPerView: 1.5,
//                 spaceBetween: 20
//             },
//             590: {
//                 direction: 'horizontal',
//                 slidesPerView: 2,
//                 spaceBetween: 20
//             },
//             830: {
//                 direction: 'horizontal',
//                 slidesPerView: 3,
//                 spaceBetween: 30
//             },
//             1150: {
//                 direction: 'horizontal',
//                 slidesPerView: 4,
//                 spaceBetween: 30
//             },
//             1250: {
//                 direction: 'horizontal',
//                 slidesPerView: 5,
//                 spaceBetween: 40
//             }
//         }
//     });
// }



// main-page swipers block

const textSwiper = document.querySelector('.text-swiper');
const pictureSwiper = document.querySelector('.picture-swiper');

if (textSwiper && pictureSwiper) {
    let swiperTxt = new Swiper(textSwiper, {
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: '.text-swiper-pagination',
            clickable: true
        }
    });

    let swiperPic = new Swiper(pictureSwiper, {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.picture-swiper-button-next',
            prevEl: '.picture-swiper-button-prev',
        },
    });

    // Flag to prevent infinite loop
    let isSyncing = false;

    swiperTxt.on('slideChange', function () {
        if (!isSyncing) {
            isSyncing = true;
            swiperPic.slideTo(swiperTxt.realIndex);
            isSyncing = false;
        }
    });

    swiperPic.on('slideChange', function () {
        if (!isSyncing) {
            isSyncing = true;
            swiperTxt.slideTo(swiperPic.realIndex);
            isSyncing = false;
        }
    });
}



// custom select

const servicesSelect = document.querySelector('.services');
const servicesOptions = document.querySelectorAll('.services-list li');
const servicesSelectBody = document.querySelector('.services-list');


if (servicesSelect) {
    servicesSelect.addEventListener('click', () => {
        servicesSelectBody.classList.add('active');
    })
    servicesSelect.querySelector('p').addEventListener('click', () => {
        servicesSelectBody.classList.add('active');
    })
    servicesOptions.forEach(el => {
        el.addEventListener('click', () => {
            servicesSelect.querySelector('p').innerHTML = el.innerHTML;
            servicesSelect.dataset.current = el.dataset.value;
            servicesSelectBody.classList.remove('active')
        })
    })
    document.addEventListener('click', (e) => {
        if ((!e.target.closest('.services-wrap')) && servicesSelectBody.classList.contains('active')) {
            servicesSelectBody.classList.remove('active');
        }
    })
}


// modals

const showModal = (modal) => {
    overlay.classList.add('open');
    modal.classList.add('active');
}
const closeModal = (modal) => {
    overlay.addEventListener('click', () => {
        overlay.classList.remove('open');
        modal.classList.remove('active');
    })
    const closeBtns = modal.querySelectorAll('.close-btn');
    closeBtns?.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            overlay.classList.remove('open');
            modal.classList.remove('active');
        })
    })

}


const contactsModal = document.querySelector('.contacts-modal');
const priceModal = document.querySelector('.price-modal');
const aboutModal = document.querySelector('.about-modal');

const showContactsModalBtns = document.querySelectorAll('.show-contacts-modal');
const showPriceModalBtns = document.querySelectorAll('.show-price-modal');
const showAboutModalBtns = document.querySelectorAll('.show-about-modal');



showContactsModalBtns?.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        showModal(contactsModal);
        closeModal(contactsModal);
    })
})
showPriceModalBtns?.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        showModal(priceModal);
        closeModal(priceModal);
    })
})
showAboutModalBtns?.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        showModal(aboutModal);
        closeModal(aboutModal);
    })
})



// gallery-modal
// const galleryModal = document.querySelector('.gallery-modal');
// const galleryModalImage = document.querySelector('.gallery-body .gallery-img img');
// const galleryModalCloseBtn = document.querySelector('.gallery-modal .close-modal span');
// const galleryThumbs = document.querySelectorAll('.gallery-content');
//
// function showGalleryModal() {
//     galleryThumbs.forEach(el=> {
//         el.addEventListener('click' , ()=> {
//             galleryModalImage.src = el.closest('.gallery-content').querySelector('img').src;
//             galleryModal.classList.add('open');
//             overlay.classList.add('open');
//         })
//     })
// }
// function closeGalleryModal() {
//     galleryModalCloseBtn.addEventListener('click' , ()=> {
//         galleryModal.classList.remove('open');
//         overlay.classList.remove('open');
//     })
//     overlay.addEventListener('click' , ()=> {
//         galleryModal.classList.remove('open');
//         overlay.classList.remove('open');
//     })
// }
//
// showGalleryModal();
// closeGalleryModal();


// accordeon


const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("click", boxHandler);
});

function boxHandler(e) {
    e.preventDefault();
    let currentBox = e.target.closest(".box");
    let currentContent = currentBox.querySelector('.content');

    currentBox.classList.toggle("active");

    if (currentBox.classList.contains("active")) {
        currentContent.style.maxHeight = currentContent.scrollHeight + "px";
    } else {
        currentContent.style.maxHeight = 0;
    }
}

// swiper
let advocate_slider = new Swiper(".advocate-slider", {
    pagination: {
        el: ".advocate-slider-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".advocate-slider-button-next",
        prevEl: ".advocate-slider-button-prev",
    },
});

const img_block = document.querySelectorAll('.img_block');
img_block.forEach(el => {
    el.addEventListener('mouseenter', () => {
        let img = el.querySelector('img');
        let title = el.querySelector('.content_block h2');
        let svg = el.querySelector('svg');
        svg.classList.add('svg_activator')
        let text = el.querySelector('.content_block p');
        text.classList.add('content_block_text_activator')
        title.classList.add('activator_for_title');
        img.classList.add('activator_for_img');
    })
    el.addEventListener('mouseleave', () => {
        let img = el.querySelector('img');
        let svg = el.querySelector('svg');
        svg.classList.remove('svg_activator')
        let title = el.querySelector('.content_block h2');
        let text = el.querySelector('.content_block p');
        text.classList.remove('content_block_text_activator')
        title.classList.remove('activator_for_title');
        img.classList.remove('activator_for_img')
    })
})

window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll('.form_block .phone'), function (input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                this.value = new_value;
            }
            if (event.type == "blur" && this.value.length < 5) {
                this.value = "";
            }
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);

    });

}); 

const footer_menu_block_container = document.querySelectorAll('.footer_menu_block-container');
footer_menu_block_container.forEach(el=>{
    el.addEventListener('mouseenter', () => {
        let text = el.querySelector('p');
        text.classList.add('text-active');
        let img_container = el.querySelector('.img_container');
        img_container.classList.add('actv')
        const blacker_blur = el.querySelector('.blacker_blur');
        blacker_blur.classList.add('active_blur')
    })
    el.addEventListener('mouseleave', () => {
        let text = el.querySelector('p');
        text.classList.remove('text-active');
        let img_container = el.querySelector('.img_container');
        img_container.classList.remove('actv');
        const blacker_blur = el.querySelector('.blacker_blur');
        blacker_blur.classList.remove('active_blur')
    })
})
