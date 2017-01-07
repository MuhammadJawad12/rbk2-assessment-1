var makeHashTable = function() {
  //Do not change the max!
  var max = 4;
  return {
    _storage: [],
    retrieve: function(key) {
      // wanna loop over the storage and check for all the values in there 
      // if the key already exists in one of the inner arrays return the inner array 
      for (var i = 0; i < this._storage.length; i++) {
        if(this._storage[i][0] === key){
          return this._storage[i] ;
        }
      }
    },

    insert: function(key, value) {
      // wanna create an index to add values inside ot it ;
    var index= hashFn(key ,max) ;
    var val  = [];
    // if our storage is empty we can add the values 
    if(this._storage.length === 0){
     val.push(key , value)
     this._storage.splice(index , 0 ,val) 
     return this._storage;
   }
   //if the key already exists in one of the array there we wanna replace it's value 
       else {
             for(var i = 0 ; i< this._storage.length ; i++){
              if(this._storage[i][0] === key){
               this._storage[i][1] = value ;

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