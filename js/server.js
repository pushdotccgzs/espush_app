var gl_server = '192.168.0.241:8000';
var gl_timeout = 5000;

function getSignBuf(method, appid, appkey, timestamp, param) {
	param['timestamp'] = timestamp;
	param['appid'] = appid;
	
	var sorted = [];
	for(var key in param) {
	  if(param.hasOwnProperty(key)) {
	    sorted[sorted.length] = key;
	  }
	}
	sorted.sort();
	sorted.reverse();
	
	var buf = method;
	for(var i=0; i != sorted.length; ++i) {
		buf += sorted[i];
		buf += '=';
		buf += param[sorted[i]];
		if(i !== sorted.length - 1) {
			buf += "&";
		}
	}
	buf += appkey;
	
	return buf;
}

function getParams(appid, timestamp, sign) {
	return "appid=" + appid + "&sign=" + sign + "&timestamp=" + timestamp;
}
