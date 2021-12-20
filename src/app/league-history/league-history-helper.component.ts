import { FantasyTeamHistoricalStats } from "../FantasyHistoryComposite";

export function mapKeys(historyStats: FantasyTeamHistoricalStats[]) : Array<String> {
  let filterKeys : Array<String> = Object.keys(historyStats[0]);

  let indexReplace1 = filterKeys.findIndex(key => key === 'aggregateOilPowerRanking');
  filterKeys[indexReplace1] = 'Average Adjusted Power Ranking';

  let indexReplace2 = filterKeys.findIndex(key => key === 'aggregateWinningPercentage');
  filterKeys[indexReplace2] = 'Career Winning %';

  let indexReplace4 = filterKeys.findIndex(key => key === 'averageFinishRanking');
  filterKeys[indexReplace4] = 'Average Season Rank';

  let indexReplace5 = filterKeys.findIndex(key => key === 'averagePointsAgainst');
  filterKeys[indexReplace5] = 'Average Points Allowed/Season';

  let indexReplace6 = filterKeys.findIndex(key => key === 'averagePointsPerGame');
  filterKeys[indexReplace6] = 'Average Points Scored/Game';

  let indexReplace7 = filterKeys.findIndex(key => key === 'averagePointsAllowedPerGame');
  filterKeys[indexReplace7] = 'Average Points Allowed/Game';

  let indexReplace8 = filterKeys.findIndex(key => key === 'averagePointsFor');
  filterKeys[indexReplace8] = 'Average Points Scored/Season';

  let indexReplace9 = filterKeys.findIndex(key => key === 'averageRawPowerRanking');
  filterKeys[indexReplace9] = 'Average Raw Power Ranking';

  let indexReplace10 = filterKeys.findIndex(key => key === 'averageRosterMoves');
  filterKeys[indexReplace10] = 'Average Roster Moves/Season';

  let indexReplace11 = filterKeys.findIndex(key => key === 'bestSingleSeasonRecord');
  filterKeys[indexReplace11] = 'Best Single-Season Record';

  let indexReplace12 = filterKeys.findIndex(key => key === 'championships');
  filterKeys[indexReplace12] = 'Championships';

  let indexReplace13 = filterKeys.findIndex(key => key === 'highestDefeatMargin');
  filterKeys[indexReplace13] = 'Biggest Defeat Margin';

  let indexReplace14 = filterKeys.findIndex(key => key === 'highestRank');
  filterKeys[indexReplace14] = 'Highest Season Rank';

  let indexReplace15 = filterKeys.findIndex(key => key === 'highestScore');
  filterKeys[indexReplace15] = 'Highest Score';

  let indexReplace16 = filterKeys.findIndex(key => key === 'highestVictoryMargin');
  filterKeys[indexReplace16] = 'Biggest Victory Margin';

  let indexReplace17 = filterKeys.findIndex(key => key === 'longestLosingStreak');
  filterKeys[indexReplace17] = 'Longest Losing Streak';

  let indexReplace18 = filterKeys.findIndex(key => key === 'longestWinningStreak');
  filterKeys[indexReplace18] = 'Longest Winning Streak';

  let indexReplace19 = filterKeys.findIndex(key => key === 'losingSeasons');
  filterKeys[indexReplace19] = 'Losing Seasons';

  let indexReplace20 = filterKeys.findIndex(key => key === 'lowestRank');
  filterKeys[indexReplace20] = 'Lowest Season Rank';

  let indexReplace21 = filterKeys.findIndex(key => key === 'lowestScore');
  filterKeys[indexReplace21] = 'Lowest Score';

  let indexReplace22 = filterKeys.findIndex(key => key === 'overallRecord');
  filterKeys[indexReplace22] = 'Overall Record';

  let indexReplace23 = filterKeys.findIndex(key => key === 'ownerName');
  filterKeys[indexReplace23] = 'Owner Name';

  let indexReplace24 = filterKeys.findIndex(key => key === 'teamName');
  filterKeys[indexReplace24] = 'Team Name';

  let indexReplace25 = filterKeys.findIndex(key => key === 'totalPointsAgainst');
  filterKeys[indexReplace25] = 'Career Points Allowed';

  let indexReplace26 = filterKeys.findIndex(key => key === 'totalPointsFor');
  filterKeys[indexReplace26] = 'Career Points Scored';

  let indexReplace27 = filterKeys.findIndex(key => key === 'totalRosterMoves');
  filterKeys[indexReplace27] = 'Total Roster Moves';

  let indexReplace28 = filterKeys.findIndex(key => key === 'totalTrueRecord');
  filterKeys[indexReplace28] = 'Career True Record';

  let indexReplace29 = filterKeys.findIndex(key => key === 'totalTrueRecordPercentage');
  filterKeys[indexReplace29] = 'Career True Winning %';

  let indexReplace30 = filterKeys.findIndex(key => key === 'winningSeasons');
  filterKeys[indexReplace30] = 'Winning Seasons (Including .500 Seasons)';

  let indexReplace31 = filterKeys.findIndex(key => key === 'worstSingleSeasonRecord');
  filterKeys[indexReplace31] = 'Worst Single-Season Record';

  let indexReplace32 = filterKeys.findIndex(key => key === 'yearsActive');
  filterKeys[indexReplace32] = 'Years Active';

  filterKeys.sort();
  return filterKeys;
}

export function getKeyAttribute(key : String) : String {
  switch(key) {
    case 'Average Adjusted Power Ranking' :
      return 'aggregateOilPowerRanking';
    case 'Career Winning %' :
      return 'aggregateWinningPercentage';
    case 'Average Season Rank' :
      return 'averageFinishRanking';
    case 'Average Points Allowed/Season' :
      return 'averagePointsAgainst';
    case 'Average Points Scored/Game' :
      return 'averagePointsPerGame';
    case 'Average Points Allowed/Game' :
      return 'averagePointsAllowedPerGame';
    case 'Average Points Scored/Season' :
      return 'averagePointsFor';
    case 'Average Raw Power Ranking' :
      return 'averageRawPowerRanking';
    case 'Average Roster Moves/Season' :
      return 'averageRosterMoves';
    case 'Best Single-Season Record' :
      return 'bestSingleSeasonRecord';
    case 'Championships' :
      return 'championships';
    case 'Biggest Defeat Margin' :
      return 'highestDefeatMargin';
    case 'Highest Season Rank' :
      return 'highestRank';
    case 'Highest Score' :
      return 'highestScore';
    case 'Biggest Victory Margin' :
      return 'highestVictoryMargin';
    case 'Longest Losing Streak' :
      return 'longestLosingStreak';
    case 'Longest Winning Streak' :
      return 'longestWinningStreak';
    case 'Losing Seasons' :
      return 'losingSeasons';
    case 'Lowest Season Rank' :
      return 'lowestRank';
    case 'Lowest Score' :
      return 'lowestScore';
    case 'Overall Record' :
      return 'overallRecord';
    case 'Owner Name' :
      return 'ownerName';
    case 'Team Name' :
      return 'teamName';
    case 'Career Points Allowed' :
      return 'totalPointsAgainst';
    case 'Career Points Scored' :
      return 'totalPointsFor';
    case 'Total Roster Moves' :
      return 'totalRosterMoves';
    case 'Career True Record' :
      return 'totalTrueRecord';
    case 'Career True Winning %' :
      return 'totalTrueRecordPercentage';
    case 'Winning Seasons (Including .500 Seasons)' :
      return 'winningSeasons';
    case 'Worst Single-Season Record' :
      return 'worstSingleSeasonRecord';
    case 'Years Active' :
      return 'yearsActive';
    default: return key;
  }
}

export function parseData(mainObject : any, input: any, value: any): any {
  switch(value) {
    case 'championships':
      console.log(input);
      if(input === 'NONE') {
        return 0;
      } else {
        let valueAsInt : Number = input.toString().split(',').length;
        console.log('valueAsInt: ' + valueAsInt);
        return valueAsInt;
      }
    case 'highestRank':
      let inputAsNumber : Number = input;
      if(inputAsNumber < 0) {
        return 99;
      } else {
        return input;
      }
    case 'highestVictoryMargin':
    case 'highestDefeatMargin':
      let valueAsInt : Number = parseInt(input.toString().split(' (')[0]);
      console.log(valueAsInt);
      return valueAsInt;
    case 'yearsActive' :
      let yearsActive = calculateYearsActive(input);
      console.log('BWAH: ' + yearsActive);
      return yearsActive;
    case 'totalTrueRecord':
      return mainObject['totalTrueRecordPercentage'];
    case 'bestSingleSeasonRecord':
    case 'worstSingleSeasonRecord':
      let range = input.toString().split(' (')[0];
      let winLoss = range.toString().split('-');
      let wins = parseInt(winLoss[0]);
      let totalGames = wins + parseInt(winLoss[1]);
      return wins / totalGames;
    case 'averageFinishRanking':
      if(input <= 0) return 99;
      return input;
    case 'overallRecord':
      return mainObject['aggregateWinningPercentage']
    default:
      return input;
  }
}

export function calculateYearsActive(yearsActive : String) : Number {
  let totalYears : Number = 0;
  if(yearsActive.length === 4) {
    return 1;
  } else {
    yearsActive.split(',').forEach(yearRange => {
      let yearStart = parseInt(yearRange.split('-')[0]);
      let yearEnd = parseInt(yearRange.split('-')[1]);
      totalYears = yearEnd - yearStart;
    });
    return totalYears;
  }
}
