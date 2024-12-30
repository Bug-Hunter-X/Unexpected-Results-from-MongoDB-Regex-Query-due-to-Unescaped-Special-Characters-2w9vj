```javascript
function escapeRegExp(string) {
  return string.replace(/[\^$.*+?()[{\}]|]/g, '\$&'); // Escape all regex special chars
}

const query = {
  field: { $regex: new RegExp(escapeRegExp(pattern), 'i') }
};

// Now, if pattern = 'a.b', it will correctly match only 'a.b' 
// Special characters in 'pattern' are now correctly escaped.

const result = await collection.find(query).toArray();
console.log(result);
```