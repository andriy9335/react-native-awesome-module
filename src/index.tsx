import { NativeModules } from 'react-native';

type TestPackageType = {
  multiply(a: number, b: number): Promise<number>;
};

const { TestPackage } = NativeModules;

export default TestPackage as TestPackageType;
