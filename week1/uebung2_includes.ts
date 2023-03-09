let welcomeText: string = "Willkommen im TypeScript-Kurs";
let participants: string[] = ["Lars", "Sophie", "Ahmed", "Marzio", "Brigitte"];
let blacklist: string[] = ["Ahmed", "Brigitte"];

function greetEveryone(greeting: string, participants: string[]): string {
  let message = "";
  

  //Jeder der nicht in der Blacklist ist, bekommt ein console.log()
  participants.forEach((participant) => {
    if (!blacklist.includes(participant)) {
      message += greeting + " " + participant + "\n";
    }
  });

  return message;
}



console.log(greetEveryone(welcomeText, participants));

export {};
