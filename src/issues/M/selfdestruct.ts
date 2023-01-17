import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.M,
  title: 'Used selfdestruct',
  impact: 'Any contract that depends on another smart contract must account for the fact that the othercan vanish at any time',
  regex: /selfdestruct\([a-zA-Z0-9\.\(\)]+\)/g
  ,
};

export default issue;