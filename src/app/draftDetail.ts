export interface DraftDetail {
  season: number;
  memberId: string;
  teamName: string;
  picks: Array<FantasyPick>;
}

export interface FantasyPickMobile {
  detail: FantasyPick;
  className?: string;
}
export interface FantasyPick {
  fantasyTeamName: string;
  year: number;
  id: number;
  keeper: boolean;
  lineupSlotId: number;
  overallPickNumber: number;
  playerId: number;
  roundId: number;
  roundPickNumber: number;
  pickPlayerFullName: string;
  pickPlayerFirstName: string;
  fantasyTeamId: number;
  proTeamId: number;
  proTeamName: string;
  playerPosition: string;
  className?: string;
}
