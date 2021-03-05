var cardHTML = `<div class="card-header" id="card-header">
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item" id="id"></li>
  <li class="list-group-item" id="email"></li>
  <li class="list-group-item" id="variable"></li>
</ul>
</div>`

function createCard(employee) {
    var card = document.createElement('div');
    card.className = "card text-white bg-primary col-sm-6";
    card.innerHTML = cardHTML;
    document.getElementById('cards').appendChild(card);
}

createCard();