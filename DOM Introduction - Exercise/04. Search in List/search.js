function search() {
   let rows = Array.from(document.querySelectorAll('ul#towns>li'));
   rows.forEach(element => {
      element.style.fontWeight = 'normal';
      element.style.textDecoration = 'none';
   });

   let searchRef = document.querySelector('input#searchText').value;
   let resultRef = document.querySelector('div#result');

   let searchMatchesArr = [];
   let result = '';
   for (let row of rows) {
      if (row.textContent.toLowerCase().includes(searchRef.value.toLowerCase())) {
         searchMatchesArr.push(row);
         row.style.fontWeight = 'bolder';
         row.style.textDecoration = 'underline';
      }   
   }
   result += `${searchMatchesArr.length} matches found`;
   resultRef.textContent = result;
   searchRef.value = '';
}

function search() {
   towns = Array.from(document.querySelectorAll('ul#towns>li'));
   searchText = document.querySelector('input#searchText').value;
   resultDiv = document.querySelector('div#result');

   let matches = 0;
   towns.forEach(townLiElement => {
      let townName = townLiElement.textContent;
      if (searchText && townName.indexOf(searchText) >= 0) {
         townLiElement.innerHTML = `<bold><u>${townName}</u></bold>`;
         matches++;
      }
   });
   resultDiv.textContent = `${matches} matches found`;
}

