var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var testSchema = new Schema({
  	flowName: {
        type: String,
        default: 'NOT SET'
    },
    flowStable: {
        type: String
    },
    jobs: [{
    	name: String
    }
    ]
});

module.exports = mongoose.model('FlowPart', testSchema);
