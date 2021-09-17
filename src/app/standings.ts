export interface Standings {
  seasonId: number;
  fantasyMembers: Array<FantasyMemberStandings>;

}

export interface FantasyMemberStandings {
  displayName: string;
  firstName: string;
  id: string;
  lastName: string;
  abbrev: string;
  location: string;
  nickName: boolean;
  logo : string;
  stats : Statistics;
  divisionId: number;
  primaryOwner: string;
}

export interface Statistics {
  currentProjectedRank: number;
  draftDayProjectedRank: number;
  playoffSeed: number;
  totalPointsScored: number;
  rankCalculatedFinal: number;
  totalAcquisitions: number;
  totalTrades: number;
  streakLength: number;
  streakType: number;
  wins: number;
  ties: number;
  drops: number;
  awayStats: SpecificStats;
  homeStatts: SpecificStats;
  divisionStats: SpecificStats;
  overallStats: SpecificStats;
}

export interface SpecificStats {
  gamesBack: number;
  losses: number;
  percentage: number;
  pointsAgainst: number;
  pointsFor: number;
  streakLength: number;
  streakType: string;
  ties: number;
  wins: number;
}
