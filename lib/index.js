var otxSdk = require('./otx-node.js');

//be sure to add your OTX Key Below
var otx = new otxSdk('');

function streetcred(rep) {
	console.log(rep);
	var repjson = JSON.parse(rep);
	console.log(repjson);

	var reputation = repjson.reputation;

	if (typeof reputation === 'undefined' || reputation) {
		return Boolean(true);
	}else {
		return Boolean(false);
	}
}

//Section Options:  general, reputation, geo, malware, url_list, passive_dns
//Dirty IP:  183.60.48.25

function ipv4(ip, section) {
	otx.indicators.ipv4(ip, section, function(error, responseData) {
		if (error) return console.log(error);
		if (streetcred(responseData)) {
			return 'dirty';
		} else {
			return 'clean';
		}
	})
}

function ipv6(ip, section) {
		otx.indicators.ipv6(ip, section, function(error, responseData) {
		if (error) return console.log(error);
		if (streetcred(responseData)) {
			return 'dirty';
		} else {
			return 'clean';
		}
	})
}

module.exports = ipv4;
module.exports = ipv6;