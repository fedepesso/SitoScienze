let news = [{t:"Notizia 1", m:"Questa è una notizia di esempio", id:"n_1"}, {t:"Notizia 2", m:"Questa è la seconda notizia di esempio", id:"n_2"}, {t:"Notizia 3", m:"Questa è la terza notizia di esempio", id:"n_3"}, {t:"Notizia 4", m:"Questa è la quarta notizia di esempio", id:"n_4"}]

$('#news').html(ejs.render(cardListTempl, {
  title: "Home",
  elements: news,
  actions: [{name: "Leggi", link:"text.html", id:true}]
}));