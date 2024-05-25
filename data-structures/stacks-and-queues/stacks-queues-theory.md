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