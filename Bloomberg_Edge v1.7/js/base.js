var BBW = {
    starting_search_input_value: 'keyword, company, ticker',
    ext_links: function(e){
                   e.preventDefault();
                   window.open(this.href);
               },
    toggle_sub_nav: function(e){
            $(this).toggleClass('open');
             },
    toggle_font_size: function(e){
            $(this).siblings().removeClass('disabled');
            $(this).addClass('disabled');
            $('#article_body').toggleClass('font_size_up');
    },
    wipe_search_input: function(e){
            if( e.type == 'focus'){
                $(this).addClass('focused_in');
                if ( $(this).val() == BBW.starting_search_input_value ) $(this).val('');
            }
            else{
                $(this).removeClass('focused_in');
                if ( $(this).val() == '' ) $(this).val(BBW.starting_search_input_value);  
            }
    }
};

$(function() {
    $('a[rel*=external]').bind('click',BBW.ext_links); //force all external links to open in a new window
    $( ".tabs" ).tabs(); //activate the tabs this uses the jquery UI tabs plugin and a custom theme: http://jqueryui.com/ 
    $('.text_size a').bind('click', BBW.toggle_font_size); //init the text sizing links
    $('ul.sub_menu').each( function(){ //bind sun menu functions
        $(this).children('li:odd').addClass('even'); //inserts the "border right" class on the sub menu items
        $(this).children('li:first').addClass('channel_home'); //bolds the first link in the sub menu
    }); // add "lines" in the sub menu
    $('input#search_text_input').val(BBW.starting_search_input_value).bind('focus blur', BBW.wipe_search_input ); //set initial search input vale and bind  the "wipe" initial value from the search
    $('#nav ul:first li.top_level').bind('mouseenter mouseleave',BBW.toggle_sub_nav); // activate the sub menu
    $("#more_in_magazine .carousel_container").jCarouselLite({     //create more in magazine carousel
            btnNext: "#more_in_magazine .step_next",
            btnPrev: "#more_in_magazine .step_prev"
        });
    
});
