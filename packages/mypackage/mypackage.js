/*
 Version: 0.0.1
 Author: pappu
 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function ($) {
    'use strict';
    var myCarousel = window.myCarousel || {};

    $.fn.myCarousel = function () {
        console.log("step2",this);
        this.append(renderTmp(Template.carousel, {}));
    };

}));

