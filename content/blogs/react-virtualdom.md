---
title: React Virtual Dom
subtitle: Learn React Virtual Dom
date: 2022-11-23
slug: react-virtual-dom
author: Young Jun Joo
rating: 5
coverImage: https://reactjs.org/logo-og.png
---

# Virtual DOM
In React, **virtual DOM** is a lightweight copy of the DOM. A virtual DOM has the same properties as a real DOM object. 

However, manipulating the DOM is slow. Manipulating the virtual DOM is much faster.

## How It Works
Here’s what happens when a user opens a website made using React:

* The entire virtual DOM gets updated.
* The virtual DOM gets compared to what it looked like before it was updated. React figures out which elements have changed.
* Only the objects that were changed get updated on the DOM.
* Changes on the DOM cause the screen to change.




