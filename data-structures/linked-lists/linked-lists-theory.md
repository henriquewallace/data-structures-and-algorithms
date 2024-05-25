# Linked Lists
- Are nodes that points to another node
- Array to linked lists:
- ['grapes', 'apples', 'pears'] to linked list: grapes --> apples --> pears --> null
- The very first item of an linked list is the head
- The very last item of a linked list is the tail
- The tail points to null, that's how we know where's the end of linked list
- We call iteration as traversal in linked lists because we don't know when it will end

## Linked Lists With Operations
- prepend - O(1)
- append - O(1)
- lookup - O(n)
- insert - O(n)
- delete - O(n)

- Linked lists just need 1 operation to prepend or append nodes (insert in very beginning, or in very end)
- Insert, delete, and lookup has an linear bigO complexity because you need to traverse over the linked list to get at the node you want

### Linked lists vs Arrays
- An advantage of Arrays over Linked lists are that they elements are indexed, while Linked lists are not, they have the addresses spread over the memory
- So since arrays are indexed, it's faster to iterate over it, while in Linked lists are a bit slower to traverse over it.
- But still, both have O(n) time complexity to perform insertions and deletions

- Linked lists just has O(1) time complexity to insert or delete nodes on the middle, while in Arrays those ops takes O(n), because they need to shift indexes.

### Linked lists vs Hash Tables
- An advantage linked lists has over hash tables is that they have some kind of order
  - An element points to the next node that points to the next one
- So they're kind of sorted

# What is a Pointer?
- A pointer is simple a reference to another place in memory, another node
- In Js:
  - const obj1 = { a: true };
  - const obj2 = obj1;
- obj2 is a pointer, it's a reference to obj1
- So in memory it's only one entry
- We aren't copying neither creating a new obj

### Linked Lists Pros
- Fast insertion/deletion
- Ordered
- Flexible size
### Cons
- Slow lookup
- More memory

## Singly vs Doubly Linked Lists
- Singly has simplier implementation
- Singly is faster to insert or delete, because we don't need to track previous node
- Doubly can traverse in a reverse order (back to front)
- Doubly requires more memory because this new property