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
In React, **virtual DOM** is a conceptual representation of the actual DOM object, like a lightweight copy. A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen.

Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen. Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.

With virtual DOM, when changes are made to the UI and there’s a re-render, they are compared to the relevant branches in the DOM-tree. Then, the changes are applied to the DOM-tree.

![React Virtual Dom Visual Representation](https://i2.wp.com/programmingwithmosh.com/wp-content/uploads/2018/11/lnrn_0201.png?ssl=1 "React Virtual Dom Visual Representation")


The virtual DOM is not to be confused with the Shadow DOM, or any other technology or concept.

## How It Works
During a render of a JSX element, every single virtual DOM object gets updated. This sounds incredibly inefficient, but the cost is insignificant because the virtual DOM can update so quickly. Once the virtual DOM has updated, then React compares the virtual DOM with a virtual DOM snapshot that was taken right before the update.

By comparing the new virtual DOM with a pre-update version, React figures out exactly which virtual DOM objects have changed. This process is called “diffing.”

Once React knows which virtual DOM objects have changed, then React updates those objects, and only those objects, on the real DOM. For example, if changes were made to a list item, React would know to rebuild the one checked-off list item, and leave the rest of the list alone.

This makes a big difference! React can update only the necessary parts of the DOM. React’s reputation for performance comes largely from this innovation.

In summary, here’s what happens trying to update the DOM in React:

* The entire virtual DOM gets updated.
* The virtual DOM gets compared to what it looked like before it was updated. React figures out which objects have changed.
* Only the objects that were changed get updated on the real DOM.
* Changes on the real DOM cause the screen to change.