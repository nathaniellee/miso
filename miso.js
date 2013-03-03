(function (global) {
	var Miso = {},
		queues = {};
	
	Miso.subscribe = function (topic, fn) {
		if (queues[topic] === undefined) {
			queues[topic] = [];
		}
		
		queues[topic].push(fn);
	};
	
	Miso.unsubscribe = function (topic, fn) {
		var queue, i;
		
		if (queues[topic] === undefined) {
			return false;
		}
		
		queue = queues[topic];
		
		for (i = queue.length - 1; i >= 0; i--) {
			if (queue[i] === fn) {
				queue.splice(i, 1);
			}
		}
	};
	
	Miso.publish = function (topic, data) {
		var queue, i, l;
		
		if (queues[topic] === undefined) {
			return false;
		}
		
		queue = queues[topic];
		
		for (i = 0, l = queue.length; i < l; i++) {
			queue[i](data);
		}
	};
	
	global.Miso = Miso;
})(this);