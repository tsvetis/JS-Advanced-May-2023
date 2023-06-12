class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }

  addGoal(peak, altitude) {
    if (this.goals[peak] === undefined) {
      this.goals[peak] = Number(altitude);
      return `You have successfully added a new goal - ${peak}`;
    }

    return `${peak} has already been added to your goals`;
  }

  hike(peak, time, difficultyLevel) {
    if (this.resources === 0) {
      return "You don't have enough resources to start the hike";
    }

    if (this.goals[peak] === undefined) {
      throw new Error(`${peak} is not in your current goals`);
    }

    const usedResources = time * 10;
    const difference = this.resources - usedResources;

    if (difference < 0) {
      return "You don't have enough resources to complete the hike";
    }

    this.resources -= usedResources;
    this.listOfHikes.push({ peak, time, difficultyLevel });
    return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
  }

  rest(time) {
    this.resources += time * 10;

    if (this.resources >= 100) {
      this.resources = 100;
      return `Your resources are fully recharged. Time for hiking!`;
    }

    return `You have rested for ${time} hours and gained ${
      time * 10
    }% resources`;
  }

  showRecord(criteria) {
    if (this.listOfHikes.length === 0) {
      return `${this.username} has not done any hiking yet`;
    }

    if (criteria === "hard" || criteria === "easy") {
      const allHikes = this.listOfHikes.filter(
        (hike) => hike.difficultyLevel === criteria
      );
      const sortedHikes = allHikes.sort((a, b) => a.time - b.time);
      const bestHike = sortedHikes[0];

      if (bestHike === undefined) {
        return `${this.username} has not done any ${criteria} hiking yet`;
      }

      return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
    } else if (criteria === "all") {
      const result = ["All hiking records:"];

      this.listOfHikes.forEach((hike) => {
        result.push(
          `${this.username} hiked ${hike.peak} for ${hike.time} hours`
        );
      });

      return result.join("\n");
    }
  }
}

// INPUT
const user = new SmartHike("Vili");
console.log(user.addGoal("Musala", 2925));
console.log(user.hike("Musala", 8, "hard"));
console.log(user.rest(4));
console.log(user.rest(5));
// OUTPUT
// You have successfully added a new goal - Musala
// You hiked Musala peak for 8 hours and you have 20% resources left
// You have rested for 4 hours and gained 40% resources
// Your resources are fully recharged. Time for hiking!

console.log("-------");
const user2 = new SmartHike("Vili");
console.log(user2.showRecord("all"));
