const team = {
  _players: [
    {
      firstName: "Pablo",
      lastName: "Sanchez",
      age: 11,
    },
    {
      firstName: "John",
      lastName: "Faz",
      age: 12,
    },
    {
      firstName: "Kie",
      lastName: "Jones",
      age: 9,
    },
  ],
  _games: [
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: "Lakers",
      teamPoints: 40,
      opponentPoints: 20,
    },
    {
      opponent: "Tall School",
      teamPoints: 50,
      opponentPoints: 10,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this.players.push(player);
  },
  addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts,
    };
    this.games.push(game);
  },
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

team.addGame("Wild Cats", 20, 50);
team.addGame("The Swans", 40, 30);
team.addGame("BBall Team", 35, 20);

console.log(team.players);
console.log("");
console.log(team.games);
