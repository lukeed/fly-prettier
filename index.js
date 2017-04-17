const format = require('prettier').format;

module.exports = function (fly) {
	fly.plugin('prettier', {}, function * (file, opts) {
		const out = format(file.data.toString(), opts);
		file.data = Buffer.from(out);
	});
};
