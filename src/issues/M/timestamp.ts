import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.M,
  title: 'Timestamp Manipulation',
  impact: 'The miner can change the timestamp and manipulate the function',
  regex: /(block\.timestamp|now|block\.blockhash\(block\.timestamp\))/g
  ,
};

export default issue;