var word1 = prompt('Enter first word', '');
var word2 = prompt('Enter second word', '');
word1 = word1.split('').sort().join('');
word2 = word2.split('').sort().join('');
word1 == word2 ? alert("Anagrams") : alert("Not anagrams");