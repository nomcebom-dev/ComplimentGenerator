
    let compliments = [
      "Your presence in a room changes the energy. People feel you before you even speak.",
      "You are not too much. You are exactly enough.",
      "Your skin is not a trend. It is ancient and it is glorious.",
      "You have survived 100% of your hardest days. That is strength.",
      "The girl you are becoming is going to look back and be so proud of you.",
      "Your hair does things no one else's can. That is a gift.",
      "You walked into rooms that weren't built for you and made them yours.",
      "You are not behind. You are on your own timeline.",
      "Crying and still showing up is one of the strongest things a person can do.",
      "There is no version of beautiful that you don't fit.",
      "Everything that was meant to stop you is now behind you.",
      "You are building something real. It doesn't matter that no one can see it yet."
    ];

    let count = 0;
    let last = -1;

    function getCompliment() {
      // pick random but not same one twice in a row
      let index = last;
      while (index === last) {
        index = Math.floor(Math.random() * compliments.length);
      }
      last = index;

      document.getElementById("compliment").textContent = compliments[index];

      count++;
      document.getElementById("num").textContent = count;
    }
 
