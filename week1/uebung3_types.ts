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
  
  let welcomeText: string = "Willkommen im TypeScript-Kurs";
  
  let participants: string[] = ["Lars", "Sophie", "Ahmed", "Marzio", "Brigitte"];
  let blacklist: string[] = ["Ahmed", "Brigitte"];
  
  console.log(greetEveryone(welcomeText, participants));
  


  function addToParticipants(name:string, participants:string[]) {
    participants.push(name);
    return participants;
  }
  
  function removeFromParticipants(name:string, participants:string[]) {
    const index = participants.indexOf(name);
    if (index > -1) {
      participants.splice(index, 1);
    }
    return participants;
  }
  
  participants = addToParticipants("Chad", participants);
  
  console.log(greetEveryone("Hi", participants));
  
  participants = removeFromParticipants("Marzio", participants);
  
  console.log(greetEveryone("Hi", participants));
  


  export {};
  