var AttribParser = require('../common/AttribParser');

module.exports = {

	createAttribParser: function (exclude) {

		return new AttribParser(exclude);


	}


};
