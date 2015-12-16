const SuperClass = require('./superclass');

module.exports = class ChildClass extends SuperClass {
	hello() {
		console.log(this.name);
	}
}
