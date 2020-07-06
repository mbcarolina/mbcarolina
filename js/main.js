$(document).ready(function () {
    $.getJSON("data.json", function (json) {
        for (var i = 0; i < json.sections.length; i++) {
           $('#projects').append(
                '<div class="row mb-4 mt-4">' +
                    '<div class="col-sm-2">' +
                        '<h1>' + json.sections[i].name + '</h1>' +
                    '</div>' +
                '</div>'+
                '<div id="'+i+'" class="row justify-content-center">'
           );
           for (var y = 0; y < json.sections[i].banners.length; y++){
                $('#' + i).append(
                        '<div class="col-sm-3 zoom">' +
                        '<embed src="' + json.sections[i].banners[y].path + '" class="img-fluid" alt="..."></embed>'
                );
           }
           $('#projects').append(  '</div>');
        }
    });
});