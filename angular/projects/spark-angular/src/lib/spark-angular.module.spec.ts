import { SparkAngularModule } from './spark-angular.module';

describe('SparkAngularModule', () => {
  let sparkAngularModule: SparkAngularModule;

  beforeEach(() => {
    sparkAngularModule = new SparkAngularModule();
  });

  it('should create an instance', () => {
    expect(sparkAngularModule).toBeTruthy();
  });
});
