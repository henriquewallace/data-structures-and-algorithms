# Hash Tables 

- Uses the key:value pattern
- The hash function hashes the key and transform it in a memory address and stores both key and value in memory
  -  when we use that key, will always get us the same result
- Hash tables can be hash maps, objects, hash sets, etc

## Hash Tables are useful to
- insert - O(1)
- lookup - O(1)
- delete - O(1)
- search - O(1)

- All those actions have a low time complexity, performs fast, because when insert we don't need to shift indexes
- Key has his an address in memory, it's not sorted
- So lookup became really fast too because with the key, we know exactly where the value is.

## Hash Collisions
- Collisions it's when the hash function addresses an key:value to an memory slot already in use
- It happens when we have limited and low space in memory, using hash tables, we will always have collisions
- And collisions makes the read and write operations slower O(n)
  - because it needs to iterate over the linked key:values in the same memory slot
  - those linked key:values in the same memory space are a new data structure called linked lists

### Different hash tables in JS
- Objects
  - The keys can only be strings
  - Unordered insertion
- Maps
  - Keys can be of any type, like numbers
  - Ordered insertion
- Sets
  - Similar to Maps
  - But only stores the keys
