let cardListTempl =
`
<% if(title){ %>
  <h2><%= title %></h2>
<% } %>
<% for(let x in elements){ %>
  <div class="card">
    <div class="card-content">
      <span class="card-title"><%= elements[x].t %></span>
      <p><%= elements[x].m %></p>
    </div>
    <% if(actions){ %>
    <div class="card-action">
    <% for(let a in actions){ %>
      <a href="<%= actions[a].link %><% if(actions[a].id){ %>?id=<%= elements[x].id %><% } %>"><%= actions[a].name %></a>
    <% } %>
    </div>
    <% } %>
  </div>
<% } %>`

// title, elements[t, m, id], actions[link, id=false, name]