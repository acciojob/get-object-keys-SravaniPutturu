//your JS code here. If required.
var student = {name : 'john',age : 20, city : 'Banglore'}

Object.prototype.getKeys = ()=>{
	return Object.keys(this)
}

student.getKeys()