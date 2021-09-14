
export interface FantasyLeague {
  seasonId: number;
  fantasyMembers: Array<FantasyMember>;
}

export interface FantasyMember {
  displayName: string;
  firstName: string;
  id: string;
  lastName: string;
  abbrev: string;
  location: string;
  nickName: string;
  logo: string;
  divisionId: number;
  primaryOwner: string;
  stats: Stat;
}

export interface Stat {
  currentProjectedRank: number;
  draftDayProjectedRank: number;
  playoffSeed: number;
  totalPointsScored: number;
  rankCalculatedFinal: number;
  totalAcquisitions: number;
  totalTrades: number;
  streakLength: number;
  streakType: string;
  wins: number;
  ties: number;
  awayStats: SubStat;
  homeStats: SubStat;
  divisionStats: SubStat;
  overallStats: SubStat;
}

export interface SubStat {
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
