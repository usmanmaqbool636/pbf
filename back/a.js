const sub = require('./models/subCategory');
sub.updateMany({}, { '$rename': { 'name': 'text' } }, { new: true, strict: true })
    .then(res => console.log(res));