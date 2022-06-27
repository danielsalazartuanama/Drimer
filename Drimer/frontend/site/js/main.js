/* Code by CodingTuting.Com */
function footerToggle(footerBtn) {
    $(footerBtn).toggleClass("btnActive");
    $(footerBtn).next().toggleClass("active");
}

$(document).ready(function(){
    $('.icon').click(function(){
        $(this).toggleClass('open');
        $('.menu-overlay').toggleClass('open');
     });
});