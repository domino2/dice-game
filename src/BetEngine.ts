export interface IBetEngine {
  myFunction(): number;
}

// class MyClassPrivateHelper implements IMyHelper {
//   constructor(private cls: MyClass) {}

//   public someHelperMethod(message: string): number {
//     this.cls.someMethod(message);
//     return 0;
//   }
// }

export default class BetEngine {
  public myFunction(): number {
    return 1;
  }
}
