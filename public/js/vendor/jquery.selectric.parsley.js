;(function($) {
    'use strict';

    if (!$.fn.selectric) {
        $.error('Selectric not initialized');
    }

    var hooks = $.fn.selectric.hooks;

    hooks.add('Init', 'parsley', function(element, data) {
        var $elm = $(element),
            $wrapper = $elm.closest('.' + data.classes.wrapper);



        $elm.parsley().on('field:success', function() {
            $wrapper.removeClass("parsley-error");
        });

        $elm.parsley().on('field:error', function() {
            $wrapper.addClass("parsley-error");
        });

        $elm.parsley().on('field:init', function() {
            console.log(this);
        });
    });
}(jQuery));
