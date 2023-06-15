$(() => {
    $('.tech-stack > .tech-stack-row > img').on('mouseenter', function(e) {
        x = e.target.offsetLeft;
        y = e.target.offsetTop;

        x = x - 48;
        y = y - 48;

        let tooltip = $('<div class="tooltip"></div>');
        tooltip.text($(this).attr('alt'));
        tooltip.css({
            'width': '64px',
            'top': y + 104,
            'left': x + 32,
            'opacity': 0,
            'position': 'absolute',
            'background-color': '#000',
            'color': 'white',
            'padding': '4px',
            'border-radius': '4px',
            'font-size': '12px',
            'z-index': 9999,
            'cursor': 'default',
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

        data_level = $(this).attr('data-level');
        
        let skill_bar = $('<div class="skill-bar"></div>');
        skill_bar.css({
            'width': '64px',
            'height': '4px',
            'background-color': '#FFF',
            'position': 'absolute',
            'top': y + 144,
            'padding': '0 4px',
            'left': x + 32,
            'z-index': 9999,
            'border-radius': '4px',
            'border': '1px solid #666',
            'box-shadow': '0 0 5px rgba(0, 0, 0, 0.125)'
        });

        let skill_bar_fill = $('<div class="skill-bar-fill"></div>');
        let skill_bar_color = '#00FF00';

        if (data_level < 50) {
            skill_bar_color = '#FF0000';
        } else if (data_level < 75) {
            skill_bar_color = '#FFFF00';
        } else if (data_level < 100) {
            skill_bar_color = '#00FFFF';
        }

        skill_bar_fill.css({
            'width': data_level + '%',
            'height': '4px',
            'background-color': skill_bar_color,
            'position': 'absolute',
            'top': 0,
            'left': 0,
            'z-index': 9999,
            'border-radius': '4px'
        });

        skill_bar.append(skill_bar_fill);
        $('body').append(skill_bar);

        skill_bar.animate({
            'opacity': 1
        }, 100);

        $(this).on('mouseleave', function() {
            skill_bar.animate({
                'opacity': 0
            }, 100, function() {
                $(this).remove();
            });
        });
    });
})