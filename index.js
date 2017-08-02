var fs = require('fs');
var Handlebars = require('handlebars');

fs.readFile('./resume.json', 'utf8', function (err1, context) {
    fs.readFile('./template.hbs', 'utf8', function (err2, source) {

        var template = Handlebars.compile(source);
        var html = template(JSON.parse(context));

        console.log(html);
    });
});