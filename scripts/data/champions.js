var CoC = CoC || {};
CoC.data = CoC.data || {};

//Champion Ranks and Levels
CoC.data.championLevels={
  1:[ 10, 20 ],
  2:[ 10, 20, 30 ],
  3:[ 10, 20, 30, 40 ],
  4:[ 10, 20, 30, 40, 50 ],
  5:[ 10, 20, 30, 40, 50, 60 ]
}

//Champions
CoC.data.champions = new Backbone.Collection([
  { uid:"blackbolt", name:"Black Bolt", typeId:"cosmic", stars: 2 },
  { uid:"blackbolt", name:"Black Bolt", typeId:"cosmic", stars: 3 },
  { uid:"blackbolt", name:"Black Bolt", typeId:"cosmic", stars: 4 },
  { uid:"captainmarvel", name:"Cap. Marvel", typeId:"cosmic", stars: 3 },
  { uid:"captainmarvel", name:"Cap. Marvel", typeId:"cosmic", stars: 4 },
  { uid:"drax", name:"Drax", typeId:"cosmic", stars: 2 },
  { uid:"drax", name:"Drax", typeId:"cosmic", stars: 3 },
  { uid:"drax", name:"Drax", typeId:"cosmic", stars: 4 },
  { uid:"gamora", name:"Gamora", typeId:"cosmic", stars: 1 },
  { uid:"gamora", name:"Gamora", typeId:"cosmic", stars: 2 },
  { uid:"gamora", name:"Gamora", typeId:"cosmic", stars: 3 },
  { uid:"gamora", name:"Gamora", typeId:"cosmic", stars: 4 },
  { uid:"msmarvel", name:"Ms. Marvel", typeId:"cosmic", stars: 3 },
  { uid:"msmarvel", name:"Ms. Marvel", typeId:"cosmic", stars: 4 },
  { uid:"ronan", name:"Ronan", typeId:"cosmic", stars: 2 },
  { uid:"ronan", name:"Ronan", typeId:"cosmic", stars: 3 },
  { uid:"ronan", name:"Ronan", typeId:"cosmic", stars: 4 },
  { uid:"superiorironman", name:"Sup. Iron Man", typeId:"cosmic", stars: 2 },
  { uid:"superiorironman", name:"Sup. Iron Man", typeId:"cosmic", stars: 3 },
  { uid:"superiorironman", name:"Sup. Iron Man", typeId:"cosmic", stars: 4 },
  { uid:"thor", name:"Thor", typeId:"cosmic", stars: 2 },
  { uid:"thor", name:"Thor", typeId:"cosmic", stars: 3 },
  { uid:"thor", name:"Thor", typeId:"cosmic", stars: 4 },
  { uid:"ironman", name:"Iron Man", typeId:"tech", stars: 1 },
  { uid:"ironman", name:"Iron Man", typeId:"tech", stars: 2 },
  { uid:"ironman", name:"Iron Man", typeId:"tech", stars: 3 },
  { uid:"ironman", name:"Iron Man", typeId:"tech", stars: 4 },
  { uid:"ironpatriot", name:"Iron Patriot", typeId:"tech", stars: 3 },
  { uid:"ironpatriot", name:"Iron Patriot", typeId:"tech", stars: 4 },
  { uid:"hulkbuster", name:"Hulkbuster", typeId:"tech", stars: 2 },
  { uid:"hulkbuster", name:"Hulkbuster", typeId:"tech", stars: 3 },
  { uid:"hulkbuster", name:"Hulkbuster", typeId:"tech", stars: 4 },
  { uid:"kang", name:"Kang", typeId:"tech", stars: 4 },
  { uid:"rocket", name:"Rocket Raccoon", typeId:"tech", stars: 3 },
  { uid:"rocket", name:"Rocket Raccoon", typeId:"tech", stars: 4 },
  { uid:"starlord", name:"Star-Lord", typeId:"tech", stars: 2 },
  { uid:"starlord", name:"Star-Lord", typeId:"tech", stars: 3 },
  { uid:"starlord", name:"Star-Lord", typeId:"tech", stars: 4 },
  { uid:"vision", name:"Vision", typeId:"tech", stars: 1 },
  { uid:"vision", name:"Vision", typeId:"tech", stars: 2 },
  { uid:"vision", name:"Vision", typeId:"tech", stars: 3 },
  { uid:"vision", name:"Vision", typeId:"tech", stars: 4 },
  { uid:"thevision", name:"The Vision", typeId:"tech", stars: 2 },
  { uid:"thevision", name:"The Vision", typeId:"tech", stars: 3 },
  { uid:"thevision", name:"The Vision", typeId:"tech", stars: 4 },
  { uid:"ultron", name:"Ultron", typeId:"tech", stars: 3 },
  { uid:"ultron", name:"Ultron", typeId:"tech", stars: 4 },
  { uid:"colossus", name:"Colossus", typeId:"mutant", stars: 1 },
  { uid:"colossus", name:"Colossus", typeId:"mutant", stars: 2 },
  { uid:"colossus", name:"Colossus", typeId:"mutant", stars: 3 },
  { uid:"colossus", name:"Colossus", typeId:"mutant", stars: 4 },
  { uid:"cyclops", name:"Cyclops", typeId:"mutant", stars: 2 },
  { uid:"cyclops", name:"Cyclops", typeId:"mutant", stars: 3 },
  { uid:"cyclops", name:"Cyclops", typeId:"mutant", stars: 4 },
  { uid:"deadpool", name:"Deadpool", typeId:"mutant", stars: 2 },
  { uid:"deadpool", name:"Deadpool", typeId:"mutant", stars: 3 },
  { uid:"deadpool", name:"Deadpool", typeId:"mutant", stars: 4 },
  { uid:"magneto", name:"Magneto", typeId:"mutant", stars: 3 },
  { uid:"magneto", name:"Magneto", typeId:"mutant", stars: 4 },
  { uid:"storm", name:"Storm", typeId:"mutant", stars: 2 },
  { uid:"storm", name:"Storm", typeId:"mutant", stars: 3 },
  { uid:"storm", name:"Storm", typeId:"mutant", stars: 4 },
  { uid:"wolverine", name:"Wolverine", typeId:"mutant", stars: 1 },
  { uid:"wolverine", name:"Wolverine", typeId:"mutant", stars: 2 },
  { uid:"wolverine", name:"Wolverine", typeId:"mutant", stars: 3 },
  { uid:"wolverine", name:"Wolverine", typeId:"mutant", stars: 4 },
  { uid:"blackpanther", name:"Black Panther", typeId:"skill", stars: 1 },
  { uid:"blackpanther", name:"Black Panther", typeId:"skill", stars: 2 },
  { uid:"blackpanther", name:"Black Panther", typeId:"skill", stars: 3 },
  { uid:"blackpanther", name:"Black Panther", typeId:"skill", stars: 4 },
  { uid:"blackwidow", name:"Black Widow", typeId:"skill", stars: 2 },
  { uid:"blackwidow", name:"Black Widow", typeId:"skill", stars: 3 },
  { uid:"blackwidow", name:"Black Widow", typeId:"skill", stars: 4 },
  { uid:"daredevil", name:"Daredevil", typeId:"skill", stars: 3 },
  { uid:"daredevil", name:"Daredevil", typeId:"skill", stars: 4 },
  { uid:"hawkeye", name:"Hawkeye", typeId:"skill", stars: 1 },
  { uid:"hawkeye", name:"Hawkeye", typeId:"skill", stars: 2 },
  { uid:"hawkeye", name:"Hawkeye", typeId:"skill", stars: 3 },
  { uid:"hawkeye", name:"Hawkeye", typeId:"skill", stars: 4 },
  { uid:"punisher", name:"Punisher", typeId:"skill", stars: 2 },
  { uid:"punisher", name:"Punisher", typeId:"skill", stars: 3 },
  { uid:"punisher", name:"Punisher", typeId:"skill", stars: 4 },
  { uid:"wintersoldier", name:"Winter Soldier", typeId:"skill", stars: 2 },
  { uid:"wintersoldier", name:"Winter Soldier", typeId:"skill", stars: 3 },
  { uid:"wintersoldier", name:"Winter Soldier", typeId:"skill", stars: 4 },
  { uid:"abomination", name:"Abomination", typeId:"science", stars: 2 },
  { uid:"abomination", name:"Abomination", typeId:"science", stars: 3 },
  { uid:"abomination", name:"Abomination", typeId:"science", stars: 4 },
  { uid:"captainamerica", name:"Captain America", typeId:"science", stars: 2 },
  { uid:"captainamerica", name:"Captain America", typeId:"science", stars: 3 },
  { uid:"captainamerica", name:"Captain America", typeId:"science", stars: 4 },
  { uid:"captainamericawwii", name:"Cpt. America WWII", typeId:"science", stars: 3 },
  { uid:"captainamericawwii", name:"Cpt. America WWII", typeId:"science", stars: 4 },
  { uid:"electro", name:"Electro", typeId:"science", stars: 3 },
  { uid:"electro", name:"Electro", typeId:"science", stars: 4 },
  { uid:"hulk", name:"Hulk", typeId:"science", stars: 1 },
  { uid:"hulk", name:"Hulk", typeId:"science", stars: 2 },
  { uid:"hulk", name:"Hulk", typeId:"science", stars: 3 },
  { uid:"hulk", name:"Hulk", typeId:"science", stars: 4 },
  { uid:"rhino", name:"Rhino", typeId:"science", stars: 2 },
  { uid:"rhino", name:"Rhino", typeId:"science", stars: 3 },
  { uid:"rhino", name:"Rhino", typeId:"science", stars: 4 },
  { uid:"spiderman", name:"Spider-Man", typeId:"science", stars: 1 },
  { uid:"spiderman", name:"Spider-Man", typeId:"science", stars: 2 },
  { uid:"spiderman", name:"Spider-Man", typeId:"science", stars: 3 },
  { uid:"spiderman", name:"Spider-Man", typeId:"science", stars: 4 },
  { uid:"drstrange", name:"Dr. Strange", typeId:"mystic", stars: 3 },
  { uid:"drstrange", name:"Dr. Strange", typeId:"mystic", stars: 4 },
  { uid:"ironfist", name:"Iron Fist", typeId:"mystic", stars: 2 },
  { uid:"ironfist", name:"Iron Fist", typeId:"mystic", stars: 3 },
  { uid:"juggernaut", name:"Juggernaut", typeId:"mystic", stars: 1 },
  { uid:"juggernaut", name:"Juggernaut", typeId:"mystic", stars: 2 },
  { uid:"juggernaut", name:"Juggernaut", typeId:"mystic", stars: 3 },
  { uid:"juggernaut", name:"Juggernaut", typeId:"mystic", stars: 4 },
  { uid:"magik", name:"Magik", typeId:"mystic", stars: 2 },
  { uid:"magik", name:"Magik", typeId:"mystic", stars: 3 },
  { uid:"magik", name:"Magik", typeId:"mystic", stars: 4 },
  { uid:"scarletwitch", name:"Scarlet Witch", typeId:"mystic", stars: 1 },
  { uid:"scarletwitch", name:"Scarlet Witch", typeId:"mystic", stars: 2 },
  { uid:"scarletwitch", name:"Scarlet Witch", typeId:"mystic", stars: 3 },
  { uid:"scarletwitch", name:"Scarlet Witch", typeId:"mystic", stars: 4 },
  { uid:"unstoppablecolossus", name:"Unst. Colossus", typeId:"mystic", stars: 2 },
  { uid:"unstoppablecolossus", name:"Unst. Colossus", typeId:"mystic", stars: 3 },
  { uid:"unstoppablecolossus", name:"Unst. Colossus", typeId:"mystic", stars: 4 }
  
], {
  model: CoC.model.Champion
});