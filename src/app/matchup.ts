export interface Matchup {
  matchupId: string;
  seasonId: number;
  matchupPeriodId: Number;
  matchups: Array<Matchups>;
}

export interface Matchups {
  homeTeamId: number;
  awayTeamId: number;
  isPlayoffMatchup: boolean;
  playoffTierType: string;
  homeTeamScore: number;
  awayTeamScore: number;
  teamIdWinner: number;
  winner: string;
  homeTeamName: string;
  awayTeamName: string;
  winningTeamName: string;
  playoffMatchup: boolean;
  matchIdentifier: number;
}
