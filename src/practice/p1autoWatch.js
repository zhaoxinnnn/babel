let employ = {name:'zhaoxin',salay:"1.5"};
let interceptor = {
	set(receiver,property,value){
		console.log('${property} is changed to ${value}');
		receiver[property] = value;
	}
};
employ = Proxy(employ,interceptor);
employ.salay = 2.0;