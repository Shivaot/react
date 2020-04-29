var customSet = function() {
	this.arr = [];
	this.add = (value) => {
		if (this.arr.includes(value)) {
			return ;
		} else {
			this.arr.push(value);
		}
	}
	this.remove = (value) => {
		if(this.arr.includes(value)) {
			var deleteElementPos = this.arr.indexOf(value);
			delete this.arr.splice(deleteElementPos,1);
		}
	}
	this.contains = (value) => {
		if(this.arr.includes(value)) {
			return true;
		} else {
			return false;
		}
	}
}

var customMap = function() {
	this.arr = {};
	this.add = (key,value)=>{
	  this.arr[key] = value;
	  return this.arr[key];
	};
	this.remove = (key)=>{
	  if(this.arr.hasOwnProperty(key)){
		delete this.arr[key];
	  }
	};
	this.get = (key)=>{
	  return this.arr[key];
	};
  };

 
 export {customMap,customSet}; 