$('#galerie').imageSlide(
    {
        'width': '700px',
        'height': '300px',
        'makeLinks': true,
        'callback': function(image)
        {
            $('#description').text(image.attr('title'));
        }
    });