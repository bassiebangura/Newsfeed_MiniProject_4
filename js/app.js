const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');

$($pdfs).attr('download', 'true');

$($secureLinks).addClass('secure');