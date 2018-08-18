/*! Selectric Placeholder ϟ v0.1.0 (2014-09-03) - git.io/tjl9sQ - Copyright (c) 2014 Leonardo Santos - Dual licensed: MIT/GPL */
;(function($) {
    'use strict';

    if (!$.fn.selectric) {
        $.error('Selectric not initialized');
    }

    var hooks = $.fn.selectric.hooks;

    hooks.add('BeforeInit', 'placeholder', function(element, data) {
        var $elm = $(element),
        placeholder = $elm.attr('placeholder');
        $elm.prepend("<option value='' selected>" + placeholder + "</option>");
    });

    hooks.add('Init', 'placeholder', togglePlaceholder);
    hooks.add('Change', 'placeholder', togglePlaceholder);

    function togglePlaceholder(element, data) {
        var $elm = $(element),
            $wrapper = $elm.closest('.' + data.classes.wrapper),
            isPlaceholder = !Boolean($elm.val());

        if (isPlaceholder) {
            $wrapper.addClass("selectric-with-placeholder");
        }
        else {
            $wrapper.removeClass("selectric-with-placeholder");
        }
    }
}(jQuery));
// /*! Selectric Placeholder ϟ v0.1.0 (2014-09-03) - git.io/tjl9sQ - Copyright (c) 2014 Leonardo Santos - Dual licensed: MIT/GPL */
// ;(function($) {
//   'use strict';
//     if (!$.fn.selectric) {
//       $.error('Selectric not initialized');
//     }
//     var hooks = $.fn.selectric.hooks;
//     hooks.add('BeforeOpen', 'placeholder', function(element, data) {
//       var $elm = $(element),
//           $wrapper = $elm.closest('.' + data.classes.wrapper),
//           $placeholder = $wrapper.find(".selectric-scroll li:first");
//       if ($elm.val()) {
//         $placeholder.show()
//       }
//       else {
//       }
//     });
//     hooks.add('BeforeInit', 'placeholder', function(element, data) {
//       var $placeholder = $("<option>").
    //       $(element).prepend("<option")
        //           // $select = $wrapper.find('')
        //       // $wrapper.find('.label').html($elm.attr('placeholder'));
        //       // data.options = $.extend({ placeholderOnOpen: true }, data.options);
        //     });
        //     hooks.add('BeforeOpen', 'placeholder', function(element, data) {
        //       if (data.options.placeholderOnOpen) {
        //         var $elm = $(element),
        //             $wrapper = $elm.closest('.' + data.classes.wrapper);
        //         $wrapper.find('.label').data('value', $wrapper.find('.label').html()).html($elm.attr('placeholder'));
        //       }
        //     });
        //     hooks.add('BeforeClose', 'placeholder', function(element, data) {
        //       if (data.options.placeholderOnOpen) {
        //         var $elm = $(element),
        //             $wrapper = $elm.closest('.' + data.classes.wrapper);
        //         $wrapper.find('.label').html($wrapper.find('.label').data('value'));
        //       }
        //     });
        // }(jQuery));