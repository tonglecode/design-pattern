import SumStrategy from "./SumStrategy";

export default class SumPrint {
  print(strategy: SumStrategy, N: number, domOutput: Element) {
    const value = strategy.get(N);
    domOutput.innerHTML = `1 ~ ${N}까지의 총합은 ${value}`;
  }
}
