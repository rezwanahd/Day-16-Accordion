

const header = document.querySelectorAll('.acc-header');


header.forEach(item => {
    item.addEventListener('click', function () {

        item.classList.toggle('active')

         
    if (item.classList.contains('active')) {

        item.nextElementSibling.style.height = item.nextElementSibling.scrollHeight +'px';
         
     } else {
        item.nextElementSibling.style.height = 0;
         
     }
    })
   
});



