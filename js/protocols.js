let protocols = [{t:"Protocollo 1", m:"Questo è un protocollo", id:"p_1"}, {t:"Protocollo 2", m:"Questo è un protocollo", id:"p_2"}, {t:"Protocollo 3", m:"Questo è un protocollo", id:"p_3"}]

$('#protocols').html(ejs.render(cardListTempl, {
  title: "Protocolli",
  elements: protocols,
  actions: [{name: "Vedi", link:"text.html", id:true}]
}));