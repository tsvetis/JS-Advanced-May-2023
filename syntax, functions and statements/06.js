function roadRadar(speed, area) {
  const limitsDictionary = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };

  const limit = limitsDictionary[area];

  if (speed <= limit) {
    const output = `Driving ${speed} km/h in a ${limit} zone`;
    console.log(output);
    return;
  }

  let status = "";
  let speeding = speed - limit;

  if (speeding <= 20) {
    status = "speeding";
  } else if (speeding > 20 && speeding <= 40) {
    status = "excessive speeding";
  } else {
    status = "reckless driving";
  }

  const output = `The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`;
  console.log(output);
}

roadRadar(40, "city");
//Driving 40 km/h in a 50 zone
roadRadar(21, "residential");
// The speed is 1 km/h faster than the allowed speed of 20 - speeding
roadRadar(120, "interstate");
// The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding
roadRadar(200, "motorway");
// The speed is 70 km/h faster than the allowed speed of 130 - reckless driving
