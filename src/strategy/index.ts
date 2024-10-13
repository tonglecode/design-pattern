import GaussSumStrategy from "./GaussSumStrategy";
import LoopStrategy from "./LoopSumStrategy";
import SumPrint from "./SumPrinter";

const printer = new SumPrint();

const domLoop = document.createElement("h1");
document.body.append(domLoop);

const domGauss = document.createElement("h1");
document.body.append(domGauss);

printer.print(new LoopStrategy(), 100, domLoop);

printer.print(new GaussSumStrategy(), 100, domGauss);
