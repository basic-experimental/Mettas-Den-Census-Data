export type DinoName = string; // The name of one of the dinos in the game, starting with a capital letter
export type Diet = "Carnivore" | "Herbivore" | "Omnivore";
export type GrowthStage = "Hatchling" | "Juvenile" | "Sub Adult" | "Adult";
export type Status = "Endangered" | "Rare" | "Healthy" | "High" | "Dominant" | "Overpopulated";
export type DateString = `${number}-${number}-${number}`; // YYYY-MM-DD

export type CensusSpeciesCount = {
  count: number;
  percent: number;
}

export type PopulationComposition = {
  [diet in Diet]: CensusSpeciesCount;
};

export type TopTenSpeciesEntry = {
  dino: string;
  count: number;
  percent: number;
}

export type SpeciesBreakdown = {
  [dino: DinoName]: CensusSpeciesCount;
}

export type GrowthDistribution = {
  [growth in GrowthStage]: number;
};

export type SurvivalIndex = {
  [dino: DinoName]: number;
}

export type UnknownSpeciesEntry = {
  dino: DinoName;
}

export type SpeciesGrowthBreakdown = {
  [dino: DinoName]: Record<GrowthStage, number>;
}

export type MaturityIndex = {
  [dino: DinoName]: number;
}

export type PopulationPressureIndexEntry = {
  percent: number;
  status: Status;
}

export type PopulationPressureIndex = {
  [dino: DinoName]: PopulationPressureIndexEntry;
}

export type DailyActivity = {
  [date: DateString]: number | null;
}

export type DailyPopulationCensusEntry = {
  players: number;
  data: SpeciesBreakdown;
}

export type DailyPopulationCensus = {
  [date: DateString]: DailyPopulationCensusEntry;
}

export type SpeciesTrendMatrix = {
  [dino: DinoName]: number[];
}

export type DailyGrowthCensusEntry = {
  [dino: DinoName]: Record<GrowthStage, number>;
}

export type DailyGrowthCensus = {
  [date: DateString]: DailyGrowthCensusEntry;
}

export type Census = {
  "__source__"?: string;
  "Generated": string;
  "Unique Players": number;
  "Population Composition": PopulationComposition;
  "Top 10 Species": Record<string, TopTenSpeciesEntry>;
  "Species Breakdown": SpeciesBreakdown;
  "Growth Distribution": GrowthDistribution;
  "Survival Index": SurvivalIndex;
  "Unknown Species": UnknownSpeciesEntry[];
  "Species Growth Breakdown": SpeciesGrowthBreakdown;
  "Maturity Index": MaturityIndex;
  "Population Pressure Index": PopulationPressureIndex;
  "Daily Activity": DailyActivity;
  "Daily Population Census": DailyPopulationCensus;
  "Species Trend Matrix": SpeciesTrendMatrix;
  "Daily Growth Census": DailyGrowthCensus;
}
