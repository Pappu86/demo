/*
 Version: 0.0.1
 Author: pappu
 */

(function ( $ ) { 
    $.fn.myCarousel = function( options ) { 
        // Default options
        var settings = $.extend({}, options );
        
        return this.append(renderTmp(Template.carousel, {})); 
    };
 
}( jQuery ));

