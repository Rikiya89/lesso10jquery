'use strict '
{
    $(function () {
        $('#flower').on('click', function () {
            $('p').animate({
                'margin-left': '-900px'
            },'slow','swing');
        });

        $('#flower').on('click', function () {
            $('p').animate({
                'margin-left': '-1800px'
            },'slow','swing');
        });
        
        $('#sea').on('click', function () {
            $('p').animate({
                'margin-left': '0'
            },'slow','swing');
        });
    });
}