var word1 = prompt('Enter first word', '');
var word2 = prompt('Enter second word', '');
arr1 = word1.split('');
arr2 = word2.split('');
arr1.sort();
arr2.sort();
word1 = arr1.join('');
word2 = arr2.join('');
if (word1 == word2){
    alert("Anagrams");
}
else{
    alert("Not anagrams");
}