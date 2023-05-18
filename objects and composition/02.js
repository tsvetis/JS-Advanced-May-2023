function constructionCrew(input) {
  const obj = { ...input };

  if (obj.dizziness) {
    obj.levelOfHydrated += 0.1 * obj.weight * obj.experience;
    obj.dizziness = false;
    return obj;
  }

  return obj;
}

constructionCrew({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
});
// { weight: 80,  experience: 1,  levelOfHydrated: 8, dizziness: false }

constructionCrew({
  weight: 120,
  experience: 20,
  levelOfHydrated: 200,
  dizziness: true,
});
// { weight: 120, experience: 20, levelOfHydrated: 440,  dizziness: false }
