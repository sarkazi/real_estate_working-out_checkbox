


//чекбоксы в блоке метро


const timeMetroItem = document.querySelectorAll('.metro-filter__item');
const filterMetroBtn = document.querySelector('.metro-filter__btn');

timeMetroItem.forEach(function (i) {
   i.addEventListener('click', function () {
      i.classList.toggle('yellow');
   })
   filterMetroBtn.addEventListener('click', function () {
      i.classList.remove('yellow');
   })
})



//скрытие блоков в фильтре


//const timeMetroClose = document.querySelector('.metro-filter__title-block').querySelector('a');
//const timeMetroCloseSvg = timeMetroClose.querySelector('svg');
//const timeMetroBlock = document.querySelector('.metro-filter__block');

//timeMetroClose.addEventListener('click', function (event) {
//   event.preventDefault();
//   console.log(timeMetroClose);
//   timeMetroBlock.classList.toggle('hide');
//   if (timeMetroBlock.classList.contains('hide')) {
//      timeMetroCloseSvg.style.transform = 'rotate(180deg)';
//   } else {
//      timeMetroCloseSvg.style.transform = 'rotate(0)';
//   }
//})


const filterCloseBlock = document.querySelectorAll('.filter-title-block');

filterCloseBlock.forEach(function (i) {
   const filterCloseLinkSvg = i.querySelector('a').querySelector('svg');


   i.addEventListener('click', function (event) {
      event.preventDefault();
      const thisFilterBody = i.closest('.filter-body');
      const thisFilterBlock = thisFilterBody.querySelector('.filter-block');

      thisFilterBlock.classList.toggle('hide');

      if (thisFilterBlock.classList.contains('hide')) {
         filterCloseLinkSvg.style.transform = 'rotate(180deg)';
      } else {
         filterCloseLinkSvg.style.transform = 'rotate(0)';
      }


   })
})




//рендер карточек


const btnPlusCard = document.querySelector('.apartments__btn');
const cardItems = document.querySelector('.apartments__items');
const renderThreeCard =

   `
   <div class="apartments__item item-apartments">
   <img src="img/cart-bg.png" class="item-apartments__photo" alt=""></img>
   <div class="item-apartments__content">
      <h2 class="item-apartments__title">ЖК Ильинские луга</h2>
      <h3 class="item-apartments__date">Срок сдачи до 4 кв. 2022 г.</h3>
      <div class="item-apartments__subway-block">
         <img src="img/subway-icon.png" alt="">
         <h3>Октябрьская</h3>
      </div>
      <h4 class="item-apartments__adress">пр. Льва Толстого 180А</h4>
   </div>
   <div class="apartments__advantages">
      <div class="apartments__comfort">
         <h3>Комфорт</h3>
      </div>
      <div class="apartments__hire-purchase">
         <h3>Рассрочка 12 мес.</h3>
      </div>
   </div>
</div>
<div class="apartments__item item-apartments">
   <img src="img/cart-bg.png" class="item-apartments__photo" alt=""></img>
   <div class="item-apartments__content">
      <h2 class="item-apartments__title">ЖК Ильинские луга</h2>
      <h3 class="item-apartments__date">Срок сдачи до 4 кв. 2022 г.</h3>
      <div class="item-apartments__subway-block">
         <img src="img/subway-icon.png" alt="">
         <h3>Октябрьская</h3>
      </div>
      <h4 class="item-apartments__adress">пр. Льва Толстого 180А</h4>
   </div>
   <div class="apartments__advantages">
      <div class="apartments__comfort">
         <h3>Комфорт</h3>
      </div>
      <div class="apartments__hire-purchase">
         <h3>Рассрочка 12 мес.</h3>
      </div>
   </div>
</div>
<div class="apartments__item item-apartments">
   <img src="img/cart-bg.png" class="item-apartments__photo" alt=""></img>
   <div class="item-apartments__content">
      <h2 class="item-apartments__title">ЖК Ильинские луга</h2>
      <h3 class="item-apartments__date">Срок сдачи до 4 кв. 2022 г.</h3>
      <div class="item-apartments__subway-block">
         <img src="img/subway-icon.png" alt="">
         <h3>Октябрьская</h3>
      </div>
      <h4 class="item-apartments__adress">пр. Льва Толстого 180А</h4>
   </div>
   <div class="apartments__advantages">
      <div class="apartments__comfort">
         <h3>Комфорт</h3>
      </div>
      <div class="apartments__hire-purchase">
         <h3>Рассрочка 12 мес.</h3>
      </div>
   </div>
</div>



`


btnPlusCard.addEventListener('click', function () {
   cardItems.insertAdjacentHTML('beforeend', renderThreeCard);
})





//показать фильтр -------------------------------------------------------------------------


const filter = document.querySelector('.filter');

filter.addEventListener('click', function () {
   filter.classList.add('show');
   if (filter.classList.contains('show')) {
      window.addEventListener('click', function () {
         filter.classList.remove('show');
         filter.addEventListener('click', function (event) {
            event.stopPropagation();
         })
      })


   }
})



//показ доп. опций---------------------------------------------------------------------------


const filterOptionsBlock = document.querySelector('.options-filter__block');
const buttonShowOptions = document.querySelector('.options-filter__show-more');


const renderOptions =
   `

   <label class="options-filter__item">
   <input type="checkbox" class="options-filter__real-checkbox">
   <span class="options-filter__fake-checkbox"></span>
   <span class="options-filter__title">Собственные общественные пространства</span>
</label>
<label class="options-filter__item">
   <input type="checkbox" class="options-filter__real-checkbox">
   <span class="options-filter__fake-checkbox"></span>
   <span class="options-filter__title">Энергоэффективность дома</span>
</label>
<label class="options-filter__item">
   <input type="checkbox" class="options-filter__real-checkbox">
   <span class="options-filter__fake-checkbox"></span>
   <span class="options-filter__title">Рядом парк</span>
</label>



`

buttonShowOptions.addEventListener('click', function (event) {
   event.preventDefault();
   filterOptionsBlock.insertAdjacentHTML('beforeend', renderOptions);
   buttonShowOptions.style.display = 'none';
})



//сброс фильтров --------------------------------------------------------------


const buttonReset = document.querySelector('.button__throw-off');

const allCheckbox = document.querySelectorAll('.options-filter__real-checkbox');
const allRadio = document.querySelectorAll('.term-filter__real-radio');
const toggleCheckbox = document.querySelector('.toggle-filter__real-checkbox');


buttonReset.addEventListener('click', function () {
   allCheckbox.forEach(function (i) {
      if (i.checked === true) {
         i.checked = false;
      }
   })
   allRadio.forEach(function (i) {
      if (i.checked === true) {
         i.checked = false;
      }
   })
   timeMetroItem.forEach(function (i) {
      if (i.classList.contains('yellow')) {
         i.classList.remove('yellow');
      }
   })
   if (toggleCheckbox.checked === true) {
      toggleCheckbox.checked = false;
   }
})
