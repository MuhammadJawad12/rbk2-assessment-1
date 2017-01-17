var makeHashTable = function() {
  //Do not change the max!
  var max = 4;
  return {
    _storage: [],
    retrieve: function(key) {
      // wanna loop over the storage and check for all the values in there 
      // if the key already exists in one of the inner arrays return the inner array 
      var index= hashFn(key , max) ;

      for (var i = 0; i < this._storage[index].length; i++) {
        if(this._storage[index][i][0] === key){
          return this._storage[index][i][1] ;
        }
      }
    },

    insert: function(key, value) {
      // wanna create an index to add values inside ot it ;
    var index= hashFn(key ,max) ;
    this._storage[index] = [] ;
    var val  = [];
    // if our storage is empty we can add the values 
    if(this._storage[index].length === 0){
      val.push(key,value)
     this._storage[index].push(val)
     return this._storage;
   }
   //if the key already exists in one of the array there we wanna replace it's value 
       else {
             for(var i = 0 ; i< this._storage[index].length ; i++){
              if(this._storage[index][i][0] === key){
               this._storage[index][i][1] = value ;

             }
          }
        }
        return this._storage;
    }
}
}

// this.splice(index, 0, item);

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};