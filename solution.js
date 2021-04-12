////////////// Part 1 /////////////////////
/* 1.1) Link the CSS file by setting the href attribute of <link> */


/* 1.2) Set the class of the image to "list-img" */
let image = document.querySelector('img');
image.setAttribute('class','list-img');
/* 1.3) Set the classes of the inputs (buttons) to "btn" by using a loop */
const buttons = document.querySelectorAll('input');
for(let button of buttons){
        button.setAttribute('class','btn')
}



////////////// Part 2 /////////////////////

/* 2.1) grab the <ul> that we are going to append <li> nodes to and store it in a variable */
const list = document.getElementById('grocery-list');


/* 2.2) When the user clicks the ADD button, ask them what item they need to add and then:
        1. Create a new li Element
        2. Create the text node with the user's input
        3. Append the text node to the li Element
        4. Add the li Element to the unordered list by appending it to the variable created in step 2.1 */

const addItem = () =>{
        let item = prompt(`What item would you like to add?`).toLowerCase();
        let thing = document.createElement('li');
        thing.appendChild(document.createTextNode(item));
        list.appendChild(thing)
}



/* 2.3) When the user clicks the TOTAL button:
        1. Display the total area by removing the "display-none" class from the the total-area div
        2. Total the number of groceries by getting the length of the li NodeList
        3. Add the count to the page by setting the textContent of #item-count */
        
        
const getTotal = () =>{
        let total = list.children.length;
        let num = document.querySelector('#item-count');
        num.textContent = total;
        let div = document.querySelector('.total-area')
        div.removeAttribute('class','display-none')
}



////////////// BONUS /////////////////////
/*  When the user clicks the REMOVE button, ask them what item they want to remove and then:
    1. Remove the item from the list with removeChild by comparing the user's response to the textContent of each <li> */

const removeItem = () =>{
        let total = list.children;
        let oldItem = prompt(`Choose the item you want to remove`).toLowerCase();
        for(let li of total){
                if(li.textContent === oldItem){
                        list.removeChild(li);
                }
        }


}