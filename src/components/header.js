import { newExpression } from "@babel/types";
import axios from "axios";

const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const headerDiv = document.querySelector('div');
const dateSpan = document.querySelector('span');
const titleElem = document.querySelector('h1');
const tempSpan = document.querySelector('span');

headerDiv.classList.add('header');
dateSpan.classList.add('date');
tempSpan.classList.add('temp');

dateSpan.textContent = date;
titleElem.textContent = title;
tempSpan.textContent = temp;

headerDiv.appendChild(dateSpan);
dateSpan.appendChild(titleElem);
headerDiv.appendChild(tempSpan);

return headerDiv;
}
// console.log(Header('title', 'date', 'temp'));
const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerElem = Header('Daily News', 'December 3, 2021', '65°');
  selector.appendChild(headerElem);

  return headerElem;

}


export { Header, headerAppender }
