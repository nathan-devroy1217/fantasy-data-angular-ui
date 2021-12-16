export interface FantasyHistoryComposite {
  teamHistoricalStats : Array<FantasyTeamHistoricalStats>;

}
export interface FantasyTeamHistoricalStats {
  teamName : String;
  ownerName : String;
  yearsActive : String;
  overallRecord : String;
  longestWinningStreak : String;
  longestLosingStreak : String;
  totalTrueRecord : String;
  aggregateWinningPercentage : Number;
  totalTrueRecordPercentage : Number;
  totalPointsFor :  Number;
  totalPointsAgainst : Number;
  averagePointsFor : Number;
  averagePointsAgainst : Number;
  averagePointsPerGame : Number;
  averagePointsAllowedPerGame : Number;
  highestScore : Number;
  lowestScore : Number;
  championships : String;
  highestRank : Number;
  lowestRank : Number;
  highestVictoryMargin : String;
  highestDefeatMargin : String;
  bestSingleSeasonRecord : String;
  worstSingleSeasonRecord : String;
  winningSeasons : Number;
  losingSeasons : Number;
  totalRosterMoves : Number;
  averageRosterMoves : Number;
  averageFinishRanking : Number;
  averageRawPowerRanking : Number;
  aggregateOilPowerRanking : Number;
}
