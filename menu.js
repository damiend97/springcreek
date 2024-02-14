$(document).ready(function(){
    $('.ham').click(() => {
        if($('#navigation').hasClass('closed')) {
            $('#navigation').removeClass('closed');
        } else {
            $('#navigation').addClass('closed');
        }
        
    
    })
});


