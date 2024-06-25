# Binary Trees
- Hierarchical structure
- Each node can have either zero, on or two nodes
- Every child descends from only one parent
- Leaf nodes: Last ones

### Perfect Binary Tree
- All leaf nodes are full
- A parent node always has 0 or 2 child nodes
- It's desirable
- When we move down the tree, the number of nodes doubles in each level
- The number of nodes are the sum of all level up nodes plus one
  - This means that half of our nodes are in the last level
### Full Binary Tree
- Tree is not complete
- Some parents has only one child node

## Binary Search Tree
- In a perfect tree, we can achieve the time complexity of O(log n)
- It's fast like O(1)
- For lookups, inserts and deletions
### Rules in Binary Search Tree
1. All children nodes on the right, must be greater than the current node (parent).
If you keep going to the right the values are going to increase constantly
2. Each node can have up to 2 children

### Advantages
- Really good performance (Fast lookups, insertions, deletions O(log n)
- Ordered
- Flexible size: we can place the node anywhere in memory 
### Disvantages
- Can have unbalanced trees
- No O(1) ops

## Unbalanced Trees
- If we keep adding nodes to the right, the tree will be unbalanced
- It turns into a linked-list
- Time complexity becames linear O(n) in worst cases

## Balanced Trees
- We have some strategies to balance a tree, like:
  - Red/black trees
  - AVL Trees

# Binary Heap
- Useful where ordering is important
- Priority queues
## Max Heap
- The parent node is always greater then the children nodes