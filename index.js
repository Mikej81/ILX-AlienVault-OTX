var otxSdk = require('./otx-node.js');

var otx = new otxSdk('4a55692a9d22819362eaffc0e8e12d0b0982898738439bb998e0be69893ed009');

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

otx.indicators.ipv4('183.60.48.25', 'reputation', function(error, responseData) {
	if (error) return console.log(error);
	if (streetcred(responseData)) {
		return console.log('dirty');
	} else {
		return console.log('clean');
	};
});

otx.indicators.domain('thepiratebay.se', 'reputation', function(error, responseData) {
	if (error) return console.log(error);
		if (streetcred(responseData)) {
		return console.log('dirty');
	} else {
		return console.log('clean');
	};
});

