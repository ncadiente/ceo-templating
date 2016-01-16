var fs = require('fs');

module.exports = function (filePath, options, callback){
  fs.readFile('./templates/index.dlr', function (err, content){
    if (err) console.log(err);
    var rendered = content.toString().replace('$title$', "" + options.title + "").replace('$message$', "" + options.message + "");
    return callback(null, rendered);
  });
};
