(function($) {
    $(document).ready(function() {

        var ul = $('.product-display ul');
        var ulLeft = $('.product-display ul').offset().left;
        timer = null;

        function move() {
            ulLeft = ulLeft++;
            console.log(ulLeft);
        }
        move();
    })
})(jQuery);
