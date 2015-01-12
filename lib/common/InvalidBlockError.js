
function InvalidControlBlockError (msg) {

Error.call(this);
Error.captureStackTrace && Error.captureStackTrace(this, arguments.callee);
this.message = msg;
this.name = 'InvalidControlBlockError';


}

InvalidControlBlockError.prototype = Object.create(Error.prototype);
module.exports = InvalidControlBlockError;
