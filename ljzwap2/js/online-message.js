(function($) {
    $(document).ready(function() {

        var arrText = [
            '姓名(必填)',
            '邮箱',
            '电话',
            '请输入验证码'
        ];
        var iNow = 0;

        $('.common-height input').each(function( index ) {
            $(this).focus(function() {
                if( $(this).val() == arrText[index] ) {
                    $(this).val('');
                }
                iNow = index;
            });
        })

        $('.common-height input').blur(function() {
            if( $(this).val() == '' ) {
                $(this).val( arrText[iNow] );
            }
        });

        $('textarea').focus(function() {
            $(this).val('');
        });
        $('textarea').blur(function() {
            if( $(this).val() == '' ) {
                $(this).val('内容');
            }
        });

    })
})(jQuery);
