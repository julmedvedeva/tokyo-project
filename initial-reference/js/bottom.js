//Создаем переменную, в которую сохраняем наше модальное окно
var modal = $('.mymodal');

//Функция устанавливает значение свойства display в то, которое указано в ее параметрах при вызове
function setModal(display){
  modal.css('display', display);
}

//Функция обрабатывает клик по кнопке "Оставить заявку"
$('.login-btn').click(function(){
  setModal('block');
});

//Функция обрабатывает клик по кнопке "Закрыть"
$('.close').click(function(){
  setModal('none');
});

//Функция обрабатывает клики по модальному окну, и, если клик не произошел не по блоку content и не по его дочерним элементам, то закрываем модальное окно
$(modal).click(function(e){
  var target = e.target;
  if(!($('.content').is(target)) && $('.content').has(target).length ===0){
    setModal('none');
  }
});

//Если нажата клавиша ESC, то закрываем модальное окно
$(document).keydown(function(e){
  if(e.which == 27 ){
    setModal('none');
  }
});