const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');
const $pdfCheckbox = ("<label><input type='checkbox'/> Allow PDF downloads</label>");

$($pdfs).attr('download', 'true'); 
$($secureLinks).addClass('secure');//Adds content 
$($pdfs).addClass('pdf');//Adds content 


$pdfs.on('click', function (event) {
    if ($(':checked').length === 0) {//Check for checked element
        event.preventDefault();
        alert('Please check the box to allow PDF downloads')
    }
})

//Unobtrusive js
$('#links').append($pdfCheckbox);

$('a').each(function(){
    const $url = $(this).attr('href');
    $(this).append('<span>');//span element is now child of link <a>
    $(this).children().append(`(${$url})`);//Literal notation's implementation in jQuery
});

//Toggle URL detail by hiding the span child element
$('.showDetail').on('click', function() {
    $('a').each(function (){
        $(this).children().toggle();//Literal notation's implementation in jQuery
    });
});

