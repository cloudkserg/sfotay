// Инициализация валидации формы
$(".js-validate-form").parsley({
    errorsContainer: function(ParsleyField) {
        var $field = ParsleyField.$element,
            isSelect = $field.hasClass("bn-select"),
            errorContainer = false;

        if (isSelect) {
            errorContainer = $field.closest('.selectric-wrapper').parent();
        }

        return errorContainer;
    }
});

// Маски для полей
$('.js-cvv-mask').mask('999', {autoclear: false});
$('.js-card-mask').mask('9999 9999 9999 9999', {autoclear: false});
$('.js-zip-mask').mask('9999999', {autoclear: false, placeholder: ""});
$.mask.definitions['h'] = "[A-Fa-f ]";
$('.js-fullname-mask').mask('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh', {autoclear: false, placeholder: ""});