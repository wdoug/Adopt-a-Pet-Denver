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

    theTemplateScript = $('#animal-template').html();
    compiledTemplate = Handlebars.compile(theTemplateScript);

    $.getJSON(api.two, function(data) {
            animaldata = data;
        })
        .complete(function() {
            //Compile the template
            $('#the-thing').append(compiledTemplate(animaldata));
        })
        .fail(function() {
            console.log('xhr failed');
        });

});
