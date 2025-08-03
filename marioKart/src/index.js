const player1 = {
   NAME: 'Mario',
   SPEED: 4,
   MANEUVERABILITY: 3,
   POWER: 3,
   POINTS: 0,
};

const player2 = {
   NAME: 'Luigi',
   SPEED: 4,
   MANEUVERABILITY: 3,
   POWER: 3,
   POINTS: 0,
};

async function rollDice() {
   return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
   let random = Math.random();
   let result;

   switch (true) {
      case random < 0.33:
         result = 'RETA';
         break;
      case random < 0.66:
         result = 'CURVA';
         break;
      default:
         result = 'CONFRONTO';
         break;
   }
   return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
   console.log(
      `${characterName} 🎲 rolled a dice of ${block} ${diceResult} + ${attribute} = ${
         diceResult + attribute
      }`
   );
}

async function playRaceEngine(character1, character2) {
   for (let round = 1; round <= 5; round++) {
      console.log(`🏁 Round ${round}`);

      // draw a block
      let block = await getRandomBlock();
      console.log(`Block: ${block}`);

      // roll the dice
      let diceResult1 = await rollDice();
      let diceResult2 = await rollDice();

      // skill test
      let totalTestSkill1 = 0;
      let totalTestSkill2 = 0;

      if (block === 'RETA') {
         totalTestSkill1 = diceResult1 + character1.SPEED;
         totalTestSkill2 = diceResult2 + character2.SPEED;

         await logRollResult(character1.NAME, 'SPEED', diceResult1, character1.SPEED);
         await logRollResult(character2.NAME, 'SPEED', diceResult2, character1.SPEED);
      }
      if (block === 'CURVA') {
         totalTestSkill1 = diceResult1 + character1.MANEUVERABILITY;
         totalTestSkill2 = diceResult2 + character2.MANEUVERABILITY;

         await logRollResult(
            character1.NAME,
            'MANEUVERABILITY',
            diceResult1,
            character1.MANEUVERABILITY
         );
         await logRollResult(
            character2.NAME,
            'MANEUVERABILITY',
            diceResult2,
            character1.MANEUVERABILITY
         );
      }
      if (block === 'CONFRONTO') {
         let powerResult1 = diceResult1 + character1.POWER;
         let powerResult2 = diceResult2 + character2.POWER;
         console.log(`${character1.NAME} confronted with ${character2.NAME}!🥊`);

         await logRollResult(character1.NAME, 'POWER', diceResult1, character1.POWER);
         await logRollResult(character2.NAME, 'POWER', diceResult2, character1.POWER);

         if (powerResult1 > powerResult2 && character2.POINTS > 0) {
            console.log(
               `${character1.NAME} won the confrontation! ${character2.NAME} lost a point!`
            );

            character2.POINTS--;
         }
         if (powerResult2 > powerResult1 && character1.POINTS > 0) {
            console.log(
               `${character2.NAME} won the confrontation! ${character1.NAME} lost a point!`
            );

            character1.POINTS--;
         }

         console.log(powerResult2 === powerResult1 ? 'Game Tied' : '');
      }

      // checking the winner
      if (totalTestSkill1 > totalTestSkill2) {
         console.log(`${character1.NAME} scored a point!`);
         character1.POINTS++;
      } else if (totalTestSkill2 > totalTestSkill1) {
         console.log(`${character2.NAME} scored a point!`);
         character2.POINTS++;
      }

      console.log('---------------------------');
   }
}

async function declareWinner(character1, character2) {
   console.log('Final Result:');
   console.log(`${character1.NAME}: ${character1.POINTS} points`);
   console.log(`${character2.NAME}: ${character2.POINTS} points`);

   if (character1.POINTS > character2.POINTS)
      console.log(`\n 🏁 Winner: ${character1.NAME}, Congratulations!🏆`);
   else if (character2.POINTS > character1.POINTS)
      console.log(`\n 🏁 Winner: ${character2.NAME}, Congratulations!🏆`);
   else console.log(`\n 🏁 Game Tied!👌`);
}

(async function main() {
   console.log(`🏁🚨 Race between ${player1.NAME} and ${player2.NAME} begins...\n`);

   await playRaceEngine(player1, player2);
   await declareWinner(player1, player2);
})();
