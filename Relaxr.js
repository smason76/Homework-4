$(document).ready(function () {
    //click handler for read more link
//    $('.readmore').click(function () {
//        $('#show-this-on-click').slideDown();
//        //                alert('Hello');
//        $('.readmore').hide();
//        $('.readless').show();
//    });
//    
//    //click handler for read less link
//    $('.readless').click(function () {
//        $('#show-this-on-click').slideUp();
//        //                alert('Hello');
//        $('.readmore').show();
//        $('.readless').hide();
//    });
    
    //click handler for learn more link
    $('.learnmore').click(function () {
        $('#learnmoretext').slideDown();
        //                alert('Hello');
        $('.learnmore').hide();
    });
    
    
  //setting up the clickhandlers for the read more/ read less function  
     $('.readmore').click(function () {
        toggleReadMore();
     });
    
    $('.readless').click(function () {
        toggleReadMore();
     });
    
    
    
});
//combined read more / read less link
function toggleReadMore(){
    $('#show-this-on-click').slideToggle(function(){
        $('.readmore').toggle();
        $('.readless').toggle();
    });
        //                alert('Hello');
        
    };