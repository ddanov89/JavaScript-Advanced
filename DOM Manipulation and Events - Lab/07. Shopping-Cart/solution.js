function solve() {
   let buttonsRef = Array.from(document.querySelectorAll('.add-product'));
   let textArea = document.querySelector('textarea');
   let checkoutRef = document.querySelector('.checkout');
   let names = new Array();
   let prices = new Array();

   for (let button of buttonsRef) {
      button.addEventListener("click", onClick);
   }
   checkoutRef.addEventListener('click', onCheckout);

   function onClick(event) {
      let name = event.target.parentElement.parentElement.children[1].children[0].textContent;
      let price = Number(event.target.parentElement.parentElement.children[3].textContent);
      let item = `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      textArea.textContent += item;
      if (!names.includes(name)) {
         names.push(name);
      }
      prices.push(price);
   }
   function onCheckout() {
      let total = prices.reduce((accumulator, currentValue) => accumulator + currentValue);
      let namesList = Array.from(names).join(", ");
      textArea.textContent += `You bought ${namesList} for ${total.toFixed(2)}.`;
      checkoutRef.disabled = true;
      buttonsRef.forEach(button => button.disabled = true
      );
   }
}

function solve() {
   let textArea = document.querySelector('body > div > textarea');
   let totalPrice = 0;
   let listOfUniqueThings = [];
   let addBtn = document.getElementsByClassName('add-product');
   let arrayAddBtn = Array.from(addBtn);
   for (let i = 0; i < arrayAddBtn.length; i++) {
       arrayAddBtn[i].addEventListener('click', function one() {
           let name = document.querySelector(`body > div > div:nth-child(${i + 2}) > div.product-details > div`).textContent;
           let price = document.querySelector(`body > div > div:nth-child(${i + 2}) > div.product-line-price`).textContent;
           if (!listOfUniqueThings.includes(name)) {
               listOfUniqueThings.push(name);
           }
           let result = `Added ${name} for ${price} to the cart.\n`;
           totalPrice += Number(price);
           textArea.value += result;
       });
   }
   let checkOut = document.querySelector('body > div > button');
   checkOut.addEventListener('click', function final() {
       let finalSting = `You bought ${listOfUniqueThings.join(', ')} for ${totalPrice.toFixed(2)}.`;
       textArea.value += finalSting;
       disableButtons();
   });

   function disableButtons() {
      let buttons = Array.from(document.querySelectorAll('button'));
      buttons.forEach(button => button.disabled = true);
   }
}