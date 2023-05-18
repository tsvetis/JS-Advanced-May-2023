function print(collectionOfWords, delimeter) {
  const output = collectionOfWords.join(delimeter);
  console.log(output);
}

print(["One", "Two", "Three", "Four", "Five"], "-");
// One-Two-Three-FourFive
print(["How about no?", "I", "will", "not", "do", "it!"], "_");
// How about no?_I_will_not_do_it!
