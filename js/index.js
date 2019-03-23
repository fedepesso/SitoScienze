let news = [{t:"Notizia 1", m:"Questa è una notizia di esempio"}, {t:"Notizia 2", m:"Questa è la seconda notizia di esempio"}, {t:"Notizia 3", m:"Questa è la terza notizia di esempio"}, {t:"Notizia 4", m:"Questa è la quarta notizia di esempio"}]

let templ = $("#news-card").html()
$('#news').html(ejs.render(templ, {news:news}));