//Source

/*
const temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');

if (temperatureInCelsius === 0) {
    alert('0 градусов по Цельсию - это температура замерзания воды')
} else if (temperatureInCelsius > 0) {
    alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}

const temperatureInFahrenheit = (temperatureIncelsius) * 9 / 5 + 32;
alert(`%{temperatureInCelsius} градусов по Цельсию - это %{temperatureInFahrenheit} по Фаренгейту.`);*/

const temperatureInCelsius = Number(prompt('Введите температуру в градусах Цельсия'));
console.log(temperatureInCelsius);
debugger;
if (temperatureInCelsius === 0) {
    alert('0 градусов по Цельсию - это температура замерзания воды')
    debugger;
} else if (temperatureInCelsius > 0) {
    alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
    debugger;
}

const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);