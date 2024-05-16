const strings = ['a', 'b', 'c', 'd'];
// 4 bytes for each item --> 16 bytes of storage in memory

// push --> add item in very end of array
strings.push('e'); // O(1)

// pop --> remove very last item of array
strings.pop();
strings.pop();

// unshift --> add item in very beginning of array
strings.unshift('x'); // O(n) -- it loops for each item to shift and reorder indexes

// splice --> insert/delete items
strings.splice(2, 1, 'test')

console.log(strings)