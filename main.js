$(window).load(function() {
        // Animate loader off screen
        $(".loader").delay(1000).fadeOut("slow");;
});



$.ajax({
    "url":"https://www.kimonolabs.com/api/43ht2srk?apikey=6z6olU71YwkAuvFkfJYWdUpAcmK7Me6I",
    "crossDomain":true,
    "dataType":"jsonp", 
    success: function(data) {
        var teams = data.results.collection1;
        var e = 1;
        var champions = 5;

        for (var i = 0; i < teams.length;i++) {
            if (i < champions) {
                $('#teams').append('<tr class="champ"><td>' + e + "</td><td>" + teams[i].Teams + "</td><td>" + teams[i].Points + "</td></tr>");
            } else if (i < teams.length - 3){
                $('#teams').append("<tr><td>" + e + "</td><td>" + teams[i].Teams + "</td><td>" + teams[i].Points + "</td></tr>");
            } else {
                $('#teams').append('<tr class="rel"><td>' + e + "</td><td>" + teams[i].Teams + "</td><td>" + teams[i].Points + "</td></tr>");
            };
            
            e++
        };
    }
});

$.ajax({
    "url":"https://www.kimonolabs.com/api/ch017fmg?apikey=6z6olU71YwkAuvFkfJYWdUpAcmK7Me6I",
    "crossDomain":true,
    "dataType":"jsonp",
    success: function(result){
        var pop = result.results.collection1;
        for (var i =0; i<pop.length; i++) {
            $("#top_gs").append('<tr><td>' + pop[i].players + '</td><td>' + pop[i].team.text + '</td><td>' + pop[i].goals + '</td></tr}>');
        }
    }
});

$.get("http://www.reddit.com/r/soccer/.json?limit=100&after=t3_10omtd/", function(result){
    var foo = result.data.children;
    
    for (i = 0; i < foo.length; i++) {
        var domain = foo[i].data.domain;
        var link = foo[i].data.url;
        var goods = link.split("http://gfycat.com/");

        if(domain == "gfycat.com"){
            var img = goods[1];
            $('.gallery').append('<div><img class="gfyitem" data-id="' + img + '" /></div>' )
        };
    };
});

(function(d, t) {
    var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
    g.src = 'http://assets.gfycat.com/js/gfyajax-0.517d.js';
    s.parentNode.insertBefore(g, s);
}(document, 'script'));


// http://gfycat.com/WelltodoTestyArmedcrab
// http://giant.gfycat.com/WelltodoTestyArmedcrab.gif