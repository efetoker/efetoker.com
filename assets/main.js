$(() => {
    $('.tech-stack > .tech-stack-row > img').on('mouseenter', function(e) {
        x = e.target.offsetLeft;
        y = e.target.offsetTop;

        x = x - 48;
        y = y - 48;

        console.log(x, y);
        
        // We will be append temporary tooltip to body

        // Create tooltip
        let tooltip = $('<div class="tooltip"></div>');
        tooltip.text($(this).attr('alt'));
        tooltip.css({
            'width': '72px',
            'top': y + 120,
            'left': x + 32,
            'opacity': 0,
            'position': 'absolute',
            'background-color': '#000',
            'color': 'white',
            'padding': '5px',
            'border-radius': '5px',
            'font-size': '13px',
            'z-index': 9999,
            'text-align': 'center'
        });

        $('body').append(tooltip);

        tooltip.animate({
            'opacity': 1
        }, 100);

        $(this).on('mouseleave', function() {
            tooltip.animate({
                'opacity': 0
            }, 100, function() {
                $(this).remove();
            });
        });
    });
})