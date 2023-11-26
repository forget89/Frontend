// select
var select = document.querySelector('select')
var precipitation = document.getElementById('precipitation')
var humiduty = document.getElementById('humiduty')
var wind = document.getElementById('wind')
var locationChoose = document.getElementById('locationchoose') // если убрать choose сайт сломается 
var weatherCels = document.getElementById('weatherCels')
var weatherMain = document.getElementById('weatherMain')

// можно добавить по такому же принципу изменение в мини карточках но мне уже лень, суть алгоритма мне ясна, только не совсем понимаю как менять svg иконку тут что то есть, но может есть другие способы https://ru.stackoverflow.com/questions/1222536/%D0%A1%D0%BC%D0%B5%D0%BD%D0%B0-%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B8-%D0%B2%D0%BD%D1%83%D1%82%D1%80%D0%B8-%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B8-svg


//var icon = document.getElementById('icon') // path id= // смена иконки

select.addEventListener('change', setWeather);

// var buttonFirstDay = document.getElementById('firstday')
// var buttonSecondDay = document.getElementById('secondday')
// var buttonThirdDay = document.getElementById('thirdday')
// var buttonFourthDay = document.getElementById('fourthday')

// var test = document.getElementById('info')

function setWeather(){
    var choice = select.value

    if (choice === "Biarritz") { //??????можно убрать отсуда Biarritz, потому что у нас и так по стандарту он показывает, но тогда как возвращаться обратно к этому?
        precipitation.textContent = 
        "5%" // это использовать чтобы менялся на плашках текст
        humiduty.textContent = 
        "64%"
        wind.textContent = 
        "4 km/h"
        locationChoose.textContent =
        "Biarritz, FR"
        weatherCels.textContent =
        "29 °C "
        weatherMain.textContent =
        "Sunny"
        // buttonFirstDay.addEventListener('click', () => {   // тут и дальше в похожих коментах работа кнопок которая работает не так как задумывал, но работает
        //     test.textContent = "first"})
    } else if (choice === "Moscow") {
        precipitation.textContent =
        "0%"
        humiduty.textContent = 
        "42%"
        wind.textContent = 
        "3 km/h"
        locationChoose.textContent =
        "Moscow, RU"
        weatherCels.textContent =
        "24 °C "
        weatherMain.textContent =
        "Rainy"
        // icon.setAttribute ('d',(.))= // смена иконки

        // buttonSecondDay.addEventListener('click', () => {
        //     test.textContent = "second"})
    } else if (choice === "London") {
        precipitation.textContent =
        "10%"
        humiduty.textContent = 
        "80%"
        wind.textContent = 
        "5 km/h"
        locationChoose.textContent =
        "London, UK"
        weatherCels.textContent =
        "19 °C "
        weatherMain.textContent =
        "Cloudy"
        // buttonThirdDay.addEventListener('click', () => {
        //     test.textContent = "third"})
    } else {
        // precipitation.textContent = "";
    }
}

//popup (модальное окно, можно было не замарачиваться и сделать в 2 строки, чтобы добавлялся новый класс к уже имеющиму классу, у которого будет настройка в css visibility 1 например)

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