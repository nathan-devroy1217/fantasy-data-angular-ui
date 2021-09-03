export interface Metadata {
  id: string;
  leagueId: number;
  seasonId: number;
  members: Array<Member>;
  createTimestamp: string;
  updateTimestamp: string;
  tableName: string;
}

export interface Member {
  displayName: string;
  memberId: string;
  isLeagueManager: boolean;
  teamAbbreviation: string;
  teamLocation: string;
  teamNickname: string;
  leagueManager: boolean;
  teamId : number;
}
