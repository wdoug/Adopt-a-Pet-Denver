/* global  Handlebars */

$(function() {
    'use strict';
    var animaldata,
        theTemplateScript, compiledTemplate;

    var api = {
        one: 'http://adoptabledenver.herokuapp.com/', // official
        two: 'http://adopt-a-pet-denver.herokuapp.com/', // david's test api
        local: '/api' // local call
    };

    theTemplateScript = $('#animal-template').html();
    compiledTemplate = Handlebars.compile(theTemplateScript);

    $.getJSON(api.one, function(data) {
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
