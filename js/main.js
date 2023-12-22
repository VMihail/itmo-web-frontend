// // Получаем все пункты меню
// var menuItems = document.querySelectorAll('#menu li');
//
// // Добавляем обработчик события для каждого пункта
// for (var i = 0; i < menuItems.length; i++) {
//     menuItems[i].addEventListener('mouseenter', function() {
//         // Действия при наведении мыши на пункт
//         this.style.backgroundColor = '#f00';
//         this.style.color = '#fff';
//     });
//
//     menuItems[i].addEventListener('mouseleave', function() {
//         // Действия при отведении мыши от пункта
//         this.style.backgroundColor = 'transparent';
//         this.style.color = '#000';
//     });
// }

let menu = document.querySelectorAll("#menu li");

console.log(menu);

for (let i = 0; i < menu.length; i++) {
    console.log(menu[i]);
}
