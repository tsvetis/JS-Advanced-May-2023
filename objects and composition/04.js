function heroicInventory(input) {
  const result = [];

  input.forEach((str) => {
    const obj = {};
    const heroDataArr = str.split(" / ");
    obj.name = heroDataArr[0];
    obj.level = Number(heroDataArr[1]);

    const items = heroDataArr[2];
    obj.items = items ? items.split(", ") : [];

    result.push(obj);
  });

  return JSON.stringify(result);
}

heroicInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

// [{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},
// {"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},
// {"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]

heroicInventory(["Jake / 1000 / Gauss, HolidayGrenade"]);
// [{"name":"Jake","level":1000,"items":["Gauss","HolidayGrenade"]}]
