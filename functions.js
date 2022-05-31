function sumFinder(arr, num) {
    let obj = {}
    let diff
  
    for (let i = 0; i < arr.length; i++) {
      diff = num - arr[i]
  
      if (obj[diff]) {
        return true
      } else {
        obj[arr[i]] = true
      }
    }
    return false
  }
  
  let sumFinderResult = sumFinder([6, -3, 3, 2], 0)


  function isUnique(togepi) {
    for (let i = 0; i < togepi.length; i++) {
      for (let j = 1 + i; j < togepi.length; j++) {
        if (str[i] === str[j]) {
          return false;
        }
      }
    }
    return true;
  }

  function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'The quick brown fox jumps over the lazy dog!'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

  function findLongestWord(str) {
    return str.length;
  }
  findLongestWord("The quick brown fox jumped over the lazy dog");