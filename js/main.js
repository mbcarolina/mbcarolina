var banner = (name, banners) => {
    return '<div class="row mb-4">' +
        '<div class="col-sm-2">' +
        '<h1>' + name + '</h1>' +
        '</div>' +
        '</div>' +

        '<div class="row">' +
        banners.map(banner => (
            '<div class="col-sm-3 zoom">' +
            '<img src="' + banner.path + '" class="img-fluid" alt="...">' +
            '<p class="text-indication"><i class="fas fa-info"></i></p>' +
            '<p class="text-banner">' + banner.des + '</p></div>'
        ));
        '</div>'

}

$(document).ready(function () {
    $.getJSON("data.json", function (json) {
        console.log(json.sections);
        for (var i = 0; i < json.sections.length; i++) {
           // $('#projects').append(banner(json.sections[i].name, json.sections[i].banners));
           $('#projects').append(
                '<div class="row mb-4">' +
                    '<div class="col-sm-2">' +
                        '<h1>' + json.sections[i].name + '</h1>' +
                    '</div>' +
                '</div>'+
                '<div id="'+i+'" class="row">'
           );
           for (var y = 0; y < json.sections[i].banners.length; y++){
                $('#'+i).append(
                  
                        '<div class="col-sm-3 zoom">' +
                        '<img src="' + json.sections[i].banners[y].path + '" class="img-fluid" alt="...">' +
                        '<p class="text-indication"><i class="fas fa-info"></i></p>' +
                        '<p class="text-banner">' + json.sections[i].banners[y].des + '</p></div>' 
                );
           }

           $('#projects').append(  '</div>');
        }


    });
});