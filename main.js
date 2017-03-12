$(document).ready(function() {
    var links = [{
        name: 'nilsson',
        link: 'http://steamcommunity.com/profiles/76561198064129752/'
    }, {
        name: 'concreteproductions',
        link: 'http://steamcommunity.com/id/Emelge'
    }, {
        name: 'frost',
        link: 'http://steamcommunity.com/id/frostguards/'
    }, {
        name: 'rubin',
        link: 'http://steamcommunity.com/profiles/76561198079657835/'
    }, {
        name: 'axel',
        link: 'http://steamcommunity.com/profiles/76561198079922052'
    },{
        name: 'ludwig',
        link: 'http://steamcommunity.com/id/TomzBroz/'
    }, ];

    for (var i in links) {
        var link = links[i];

        $('#marquee').append('<a href="' + link.link + '">' + link.name + '</a>');

        var link = $('#marquee').children('a').last();

        link.mouseover(function() {
            $('#hover')[0].play();
        });

        link.mousedown(function() {
            $('#click')[0].play();
        });

        link.mouseup(function() {
            $('#release')[0].play();
        });

        if (i != links.length - 1) {
            $('#marquee').append(' - ');
        }
    }

    $('#marquee').marquee({
        duration: 13000,
        gap: 400,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    });
});
