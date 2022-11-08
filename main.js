function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
  </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return ` 
      <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
         ${games}
        </ul>
      </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "22/11",
    "terça",
    createGame("brazil", "08:00", "cameroon") +
      createGame("hungary", "13:00", "argentina") +
      createGame("colombia", "20:00", "japan")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("botswana", "10:00", "burundi") +
      createGame("honduras", "12:00", "antiguaandbarbuda") +
      createGame("cookislands", "21:00", "kazakhstan")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "10:00", "cameroon") +
      createGame("portugal", "12:00", "ghana") +
      createGame("brazil", "21:00", "serbia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("southkorea", "10:00", "ghana") +
      createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay")
  )
