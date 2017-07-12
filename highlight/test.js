$(function() {
    var selection = '';
    $('body').on('click', function(e) {
        if ($.selection()) {
            $('body').append(`
              <ul class="custom-highlight-color">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            `);
            selection = $.selection();
            $('.custom-highlight-color').css({ left: e.pageX + 'px', top: e.pageY + 'px' })
        }
    })
    $('body').on('click', '.custom-highlight-color li', function() {
        findAndReplaceDOMText($('body')[0], {
            find: selection,
            wrap: 'span',
            wrapClass: 'custom-highlight '+'color-'+$(this).index()
        })
        $('.custom-highlight-color').hide();
    })
})
