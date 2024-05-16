# Array
- Arrays items, in memory, will be stored one after another
- Best choice when you need to store data and iterate over it (go one by one)

## Commom Array Methods and Their Time Complexity
- lookup - O(1)
- push - O(1)
- insert - O(n)
- delete - O(n)

## Static vs Dynamic Arrays
- Js automatically allocates memory according to the increase in size of the array
- C++ allows managing memory
- Scale dynamic arrays in Js adds more operations underneath the hood

### Static Arrays
- Are arrays with fixed size
- You need to specify ahead of time how may items the array will hold

### Dynamic Arrays
- Don't need to specify the array size
- Copy the entire static array, move for another area of memory and add the new items