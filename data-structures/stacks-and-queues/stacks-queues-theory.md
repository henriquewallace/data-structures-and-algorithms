# Stacks
- We can do an analogy with an stack of places, we can only access the  top plate
- A piece of data is stacked on the top of another one, vertically
- Stacks follows the LIFO paradigm, that is: Last In, First Out
- That means the last item added to a stack, will be the first to get out
- Stacks are useful and can be used for example, to browser history, to see the last visited web site
- Or even when you write some text, and you want to undo the last char, you use stacks ideas
- Stacks stores the previous state of your work in memory, with such an order that the last state appears first

## Stack methods
- Stacks usually comes with three types of methods:
  - pop - O(1)
  - push - O(1)
  - peek - O(1) - get the last item on the stack
  - lookup - O(n) - it's a heavy op

### Linked lists or array to build Stacks?
- Both works fairly, but arrays, since they have cache locality, that means, it access items in memory faster because they're right next each other
- Linked lists are scattered over the memory and have extra memory associated with them, because they have to hold those pointers
- In other hand arrays you have either static or dynamic arrays that have certain amount of memory and as soon it's getting to the limit, it's going to double up that memory and create new space in memory for them

# Queue
- Is literaly a queue
- It's the opposite of stacks, Queues follows FIFO paradigm
- It means First In, First Out, the first item added to a queue will be the first to get out
- It's useful to don't overload systems, for example, it we are receiving a lot of requests at the same time, to decrease our system overload we implement a queue, with an timeout, to process the requests in FIFO order

## Queue methods
- enqueue - O(1) - add item on the beginning
- dequeue - O(1) - remove first of the queue
- peek - O(1) - get the first item of the queue
- lookup - O(n) - very heavy to perform

### Linked lists or array to build Queues?
- We can build a Queue with both linked list or array
- But the problem building with array is because when removing or adding a new item on the first place in Queue, we need to shift indexes, so it costs more (O(n))
- Building with linked lists takes less time complexity, a constant time, because we just need to point the new item to the old head to add an item in first place of a queue
  