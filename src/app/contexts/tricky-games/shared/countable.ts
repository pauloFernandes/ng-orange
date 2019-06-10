export abstract class Countable {
  protected index:number = 0;

  setIndex(index:number):void {
    this.index = index;
  }

  getIndex():number {
    return this.index;
  }

  abstract increment():void;
  abstract decrement():void;
}
