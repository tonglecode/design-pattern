import SumPrint from "./services/SumPrinter";
import GaussSumStrategy from "./strategies/GaussSumStrategy";
import LoopStrategy from "./strategies/LoopSumStrategy";

const printer = new SumPrint();

const domLoop = document.createElement("h1");
document.body.append(domLoop);

const domGauss = document.createElement("h1");
document.body.append(domGauss);

printer.print(new LoopStrategy(), 100, domLoop);

printer.print(new GaussSumStrategy(), 100, domGauss);
