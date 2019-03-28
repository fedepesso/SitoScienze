let protocols = [{t:"Protocollo 1", m:"Questo è un protocollo", id:"s_1"}, {t:"Protocollo 2", m:"Questo è un protocollo", id:"s_2"}, {t:"Protocollo 3", m:"Questo è un protocollo", id:"s_3"}]

$('#s-protocols').html(ejs.render(cardListTempl, {
  title: "Protocolli di sicurezza",
  elements: protocols,
  actions: [{name: "Vedi", link:"text.html", id:true}]
}));