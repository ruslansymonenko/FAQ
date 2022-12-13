document.addEventListener('DOMContentLoaded', ()=>{
  const websiteBtns = document.querySelectorAll('.faq-list__item-btn');
  const faqTexts = document.querySelectorAll('.faq-text');

  function showText (dataAttr) {
    faqTexts.forEach(item => {
      let curentListItem = item.closest('.faq-list__item').getAttribute('data-item');
      if (curentListItem == dataAttr) {
        item.classList.toggle('faq-text-active');
      }
    })
  }


  websiteBtns.forEach(item => {
    item.addEventListener('click', (e) => {
      let curentListItem = e.target.closest('.faq-list__item').getAttribute('data-item');
      showText(curentListItem);
    })
  })
})