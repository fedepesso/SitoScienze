let text = {
  type: "Protocollo",
  t: "Protocollo 1",
  m: "Qui sarà scritto il messaggio del protocollo",
  id: "p_1"
}

actions = [{name: "Chiudi"}]

if (text.type=="Notizia"){
  actions[0].link = "index.html"
}
if (text.type=="Protocollo"){
  actions[0].link = "protocols.html"
}
if (text.type=="Protocollo sicurezza"){
  actions[0].link = "s-protocols.html"
}

$('#text').html(ejs.render(cardTempl, {
  title: text.type,
  text: text,
  actions: actions
}))