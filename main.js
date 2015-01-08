$(window).load(function() {
        // Animate loader off screen
        $(".loader").delay(1000).fadeOut("slow");;
});

function kimonoCallback(data) {
// do something with the data
// please make sure the scope of this function is global
console.dir(data);
var teams = data.results.collection1;
var e = 1;
var champions = 5;

for (var i = 0; i < teams.length;i++) {
    
	if (i < champions) {
        $('tbody').append('<tr class="champ"><td>' + e + "</td><td>" + teams[i].Teams + "</td><td>" + teams[i].Points + "</td></tr>");
    } else if (i < teams.length - 3){
        $('tbody').append("<tr><td>" + e + "</td><td>" + teams[i].Teams + "</td><td>" + teams[i].Points + "</td></tr>");
    } else {
        $('tbody').append('<tr class="rel"><td>' + e + "</td><td>" + teams[i].Teams + "</td><td>" + teams[i].Points + "</td></tr>");
    };
	
	e++
};

};

$.ajax({
    "url":"https://www.kimonolabs.com/api/43ht2srk?apikey=6z6olU71YwkAuvFkfJYWdUpAcmK7Me6I&callback=kimonoCallback",
    "crossDomain":true,
    "dataType":"jsonp"
});

$.get("http://www.reddit.com/r/soccer/.json", function(result){
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