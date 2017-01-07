var ArrayExtensions = function(){
	var arrayMethods ={} ;
	arrayMethods.first = function(arr){
		return arr[0] ;
	}

	arrayMethods.last = function (arr){
		return arr[arr.length-1]
	}

	return arrayMethods ;
}
