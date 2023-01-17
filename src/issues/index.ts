import { Issue } from '../types';
import { recursiveExploration } from '../utils';
import path from 'path';

const fileNames = recursiveExploration(__dirname + '/', '.ts');

const issues: Issue[] = [];
for (let file of fileNames) {
  file = path.join(__dirname, file);
  if (file !== __filename) {
    issues.push(require(file).default);
  }
}
// log all issues names
 for (const issue of issues) {
   console.log(issue.title);
}

export default issues;
