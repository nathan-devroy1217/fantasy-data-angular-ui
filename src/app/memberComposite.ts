export interface MemberComposite {
  displayName: string;
  memberId: string;
  teamAbbreviation: string;
  teamLocation: string;
  teamNickname: string;
  logo: string;
  firstName: string;
  lastName: string;
}
export interface MemberMobileComposite {
  detail : MemberComposite;
}
