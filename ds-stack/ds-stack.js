var Stack = function() {
	this._storage =[] ;
};

Stack.prototype.add=  function (value){
	this._storage.push(value) ;
}

Stack.prototype.remove = function(){
	return this._storage.shift()
}