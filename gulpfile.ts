import { Gulpclass, SequenceTask, Task } from 'gulpclass';

import { getServer } from './scripts/deploy';

const gulp = require('gulp');
const del = require('del');
const exec = require('child_process').exec;

@Gulpclass()
export class Gulpfile {

  private readonly NPM_RUN_PROD_BUILD = 'npm run build:prod';
  private deployParams = {
    env: '',
    kind: '',
    server: ''
  };

  private setDeployParams() {
    this.deployParams.env = 'dev';
    this.deployParams.kind = 'wcm';
  }

  @Task()
  clean() {
    return del('./dist/**');
  }

  @Task()
  async env() {
    return await this.setDeployParams();
  }

  @Task()
  dist(cb: Function) {
    return exec(this.NPM_RUN_PROD_BUILD, (e, stdout, stderr) => {
      if (e instanceof Error) {
        console.error(e);
        throw e;
      }
      console.log(stdout);
    }, cb);
  }

  @Task()
  async sp() {
    this.deployParams.server
      = await getServer(this.deployParams.env, this.deployParams.kind);
    console.log(this.deployParams.server);
  }

  @SequenceTask()
  deploy() {
    return ['clean', 'env', ['dist', 'sp']];
  }

  @Task('default', ['deploy'])
  defaultTask() {}
}
