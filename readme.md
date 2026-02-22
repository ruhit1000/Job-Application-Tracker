1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementId searches for an element by its unique ID and returns a single HTML element. getElementsByClassName search for all HTML elements in an HTML file by their class name. This method provides an HTML Collection which contains all elements. querySelector and querySelectorAll are the methods which search for an element as like CSS selector. They takes parameter same as CSS selectors like #(Hashtags) or .(dot). querySelector is used to search for a single element. If it takes any class name as parameter and there are several elements according to that class name, querySelector takes the first one. querySelectorAll also acts same as querySelector but this method find all matching elements in a NodeList. 

2. How do you create and insert a new element into the DOM?
Ans: const newElement = document.createElement('h1');
newElement.innerText = 'Hello World';
document.body.append(newElement);

3. What is Event Bubbling? And how does it work?
Ans: Event bubbling is a form of event propagation. It works by triggering an event on the innermost element, and then propagating the event outwards to its parent elements in the DOM tree. This continues until the event reaches the outermost element, or the document object. Event bubbling behavior can be observed with 'target', 'currentTarget', and 'this'. For example, if we click a button inside a div and add a event listener to parent div, the click action will propagate to the div from the button by event bubbling. 

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation in JavaScript is a technique where we can attach a single event listener to a parent element instead of adding separate listeners to each of it's child elements. This allows us to manage events for multiple child elements dynamically. Instead of adding listeners to every single item, we can add a just one to their parent container. New elements added to the DOM automatically get event handling because the single parent listener catches their events too. This technique eliminates the need to re-attach listeners. So when we add or remove elements, the delegated listener automatically cover them.


5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: When preventDefault() works on the default behavior of the browser, stopPropagation() works on the event propagation on a DOM tree.

preventDefault() stops the browser's default action. It stops the browser's built-in behavior for that specific event. Like if we want to submit a form but do not want to reload the page, we can use this function to prevent the default behavior of a button which is reloading the page. In the same way, if we want to stop navigating to a URL when an anchor tag is clicked, we can stop the default behavior of clicking an anchor tag by using preventDefault(). It has variety of uses.

stopPropagation() stops event bubbling in a DOM tree. Normally any event fired in a DOM tree propagates to its outermost element. But we can stop the bubbling by using this function. 