//buttonsday

//popup
{const buttonElem = document.querySelector('.right-plate__footer');
const popupElem = document.querySelector('.right-plate__popup');

popupElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
`;

const closePopup = Event => {
    const target = event.target;

    if(target === popupElem || target.closest('.popup-container__close')) {

    popupElem.style.opacity = 0;

    setTimeout(() => {
    popupElem.style.visibility = 'hidden';
    },300)
    }
}

const openPopup = () => {
    popupElem.style.visibility = 'visible';
    popupElem.style.opacity = 1;
};

buttonElem.addEventListener('click', openPopup);
popupElem.addEventListener('click', closePopup);}