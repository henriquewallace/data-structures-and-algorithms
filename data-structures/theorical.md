## What is a Data Structure
- It's a collection of values
- It's a way to organize our data
- Each data structure is good for his own thing
- For example, a fridge is good for store food, not shoes
- When choosing data structure, we have a trade off, like with space and memory

## Parts to understanding data structures
1. How to build one
2. How to use it

# How Computers Store Data
## RAM
- Variables, like numbers, strings and arrays are stored on memory (RAM)
- We loose the memory when the computer turns off
- The data on shelter 0 takes the same time to get the one in 99999 position

## Storage
- It's where we store video files, music files, documents, etc
- Can be a disk drive, flash drive or a solid state drive
- Data on storage is permanent, persistent (e.g. when we turn on our laptop, those data it still gonna be there)
  
## CPU
- It's the worker that does all calculations that we need
- The CPU can access the memory a lot faster than the storage

# Most Common Used Data Structures
- Arrays
- Stacks
- Queues
- Linked Lists
- Trees
- Tries
- Graphs
- Hash Tables

## Arrays vs Hash Tables
- In arrays for search by an item, we need to loop all over the array to check if item exists
- With the keys in hash tables we can immediately find an value
- Insert and deletion operations in arrays have a greater time complexity over in hash tables
  - Because in arrays, since the items are ordered, when removing or inserting, we need to shift the indexes
  - And in hash tables, it's unordered, so we can immediately remove or insert items in memory without needing to shift indexes
- Even if in hash tables we have collisions, in most cases we don't need to worry about it, just if we have a very low memory space