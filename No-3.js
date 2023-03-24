function searchName(name, callback, limit) {
    let count = 0;
    const result = [];
    
    // memeriksa pencarian apakah sesuai dengan inputan
    for (let i = 0; i < names.length; i++) {
      if (names[i].toLowerCase().includes(name.toLowerCase())) {
        result.push(names[i]);
        count++;
        
        // check if the limit has been reached
        if (count === limit) {
          break;
        }
      }
    }
    
    // membalikan hasil dari fungsi callback
    callback(result);
  }
  
  const names = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela","Bella","Carol","Carolinr","Carolyn",
  "Deirde", "Diana","Elizabeth", "Ella","Faith","Olivia", "Penelope"];
  
  searchName('ao', function(result) {console.log(result); }, 3);