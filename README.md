### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById calls an id, getElementsByClassName calls classes, querySelector can call both id and classes but only the first one, querySelectorAll can call all the classes and id.

### 2. How do you create and insert a new element into the DOM?
Ans: At first, we need to create an element using document.createElement, after that we can insert that new element into the DOM by using appendChild.

### 3. What is Event Bubbling? And how does it work?
Ans: Suppose there is a div and inside that div there is a button. If we add eventListener on both div and buttons then if we click inside div, its eventListener responds but if we click the button, both div and buttons eventListener works. This is called Event Bubbling.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation is a method that helps to click one element at a time.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() helps to stop default browser behavior and stopPropagation() helps to stops the bubble going higher.
