let cardTempl =
`
<% if(title){ %>
  <h2><%= title %></h2>
<% } %>
<div class="card">
  <div class="card-content">
    <span class="card-title"><%= text.t %></span>
    <p><%= text.m %></p>
  </div>
  <% if(actions){ %>
  <div class="card-action">
  <% for(let a in actions){ %>
    <a href="<%= actions[a].link %><% if(actions[a].id){ %>?id=<%= elements[x].id %><% } %>"><%= actions[a].name %></a>
  <% } %>
  </div>
  <% } %>
</div>`

// title, text[t, m, id], actions[link, id=false, name]