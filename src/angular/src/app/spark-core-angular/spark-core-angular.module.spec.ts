import { SparkCoreAngularModule } from './spark-core-angular.module';

describe('SparkCoreAngularModule', () => {
  let sparkCoreAngularModule: SparkCoreAngularModule;

  beforeEach(() => {
    sparkCoreAngularModule = new SparkCoreAngularModule();
  });

  it('should create an instance', () => {
    expect(sparkCoreAngularModule).toBeTruthy();
  });
});
