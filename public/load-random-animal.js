//requires jquery
$(function() {
    'use strict';
    var animaldata,
        theTemplateScript, compiledTemplate;

    var api = {
        one: 'http://adoptabledenver.herokuapp.com/', // official
        two: 'http://adopt-a-pet-denver.herokuapp.com/', // david's test api
        local: 'http://0.0.0.0:8080/api'
    };

    $.getJSON(api.two, function(data) {
        animaldata = data;
        // data is a JavaScript object now. Handle it as such
        //Get the HTML from the template   in the script tag
        theTemplateScript = $('#animal-template').html();

        //Compile the template
        compiledTemplate = Handlebars.compile(theTemplateScript);
        $('#the-thing').append(compiledTemplate(animaldata));
    });
});
