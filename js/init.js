let user = {
  name: "Nome",
  lname: "Cognome",
  email: "nome@email.com"
}

let elements = [
  ["Home", "home", "/"],
  ["Archivio", "cloud", ""],
  "divider",
  ["Protocolli sperimentali", "assignment", ""],
  ["Protocolli sulla sicurezza", "security", ""],
  ["Materiale", "book", ""],
  ["Social Media", "people", ""],
  "divider",
  ["Esci", "exit_to_app", ""]
]

$("main").before(ejs.render(
`<header class="navbar-fixed hide-on-large-only">       
  <nav>
    <div class="nav-wrapper grey darken-4">
      <a href="/" class="brand-logo">LabNet</a>
      <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
  </nav>
</header>

<ul id="slide-out" class="sidenav sidenav-fixed">
  <li><div class="user-view grey darken-4">
    <a href="#user"><img class="circle" src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?cs=tinysrgb&w=128"></a>
    <a href="#name"><span class="white-text name"><%= user.name+" "+user.lname %></spane></a>
    <a href="#email"><span class="white-text email"><%= user.email %></span></a>
  </div></li>
  <% for(let e in elements){ %>
    <% if(elements[e]=="divider"){ %>
      <li><div class="divider"></div></li>
    <% }else{ %>
      <li><a class="waves-effect waves-orange" href="<%= elements[e][2] %>"><i class="material-icons left"><%= elements[e][1] %></i><%= elements[e][0] %></a></li>
    <% } %>
  <% } %>
</ul>`,
  {user: user, elements: elements}
))

$("main").after(
`<footer class="page-footer grey darken-4">
  <div class="container">
    <div class="row">
      <div class="col l6 s12">
        <h5 class="white-text">LabNet</h5>
        <p class="grey-text text-lighten-4">Descrizione del progetto</p>
      </div>
      <div class="col l4 offset-l2 s12">
        <h5 class="white-text">Links</h5>
        <ul>
          <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
          <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
          <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
          <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>`
)

$(() => {
  M.AutoInit()
})


