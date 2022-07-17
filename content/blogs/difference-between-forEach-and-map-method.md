---
title: Difference between forEach & map method.
subtitle: Learn the difference between the forEach and the map method and when to use either.
date: 2022-07-17
slug: difference-between-forEach-and-map-method
author: Young Jun Joo
rating: 5
coverImage: https://felixgerschau.com/static/7df82b852001569bd83a736c280b8f18/5a190/foreach-map-cover.png
---

# Difference between forEach() and map() method.

**Similarity**: Both used to loop through an array.

| Method | map() | forEach() |
| ----------- | ----------- | ----------- 
| Difference | Returns a new array | Does not return a new array |
| When to use | Alter the returned array by applying some method  | Loop through an array and **save storage in your memory** by not creating a new array |



Map method returns a new array by applying the callback function on each element of an array. However, forEach method does not return anything.

The map method returns and creates a new array, thus chainable. You can call many map operations one after the other. But forEach method does not return anything. So, You cannot chain it with other methods.

If you plan to alter the array element by applying a function, use the map method. This way, the original array is kept intact. On the other hand, if I want to loop through all the elements and don't need a returned array, for the sake of saving storage in your memory, use the forEach method.

