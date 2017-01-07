var Stack = function() {
	this._storage =[] ;
};

Stack.prototype.add=  function (value){
	this._storage.unshift(value) ;
}

Stack.prototype.remove = function(){
	return this._storage.shift()
}