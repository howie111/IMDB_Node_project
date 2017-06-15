function howiePalindrome(word) {
  let length = word.length;
  for(let i=0; i<Math.floor(length/2); i++) {
    console.log(word.charAt(i));
    if (word.charAt(i) !== word.charAt(length-1)) {
      console.log(false)
      return false;
    }
  }
  return true;
}

console.log(howiePalindrome('civic'));