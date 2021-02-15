const tabsBtn = document.querySelectorAll('.faq__question');

tabsBtn.forEach(function(item) {
  item.addEventListener('click', function() {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);
    currentBtn.classList.toggle('faq__question--active');
    currentTab.classList.toggle('faq__wrapper-text--show');
  });
});