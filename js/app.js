$(document).ready(function() {
    $('#date').countdown('2019/02/02', function(event){
        $(this).html(event.strftime('<span> %D </span> days <span> %H </span> hours <span> %M </span> minutes <span> %S </span> seconds'));
    });
});