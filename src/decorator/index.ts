import BoxDocorator from "./models/decorators/BoxDecorator";
import LineNumberDecorator from "./models/decorators/LineNumberDecorator";
import SideDecorator from "./models/decorators/SideDecorator";
import Strings from "./models/Strings";

const str = new Strings();

str.add("One day, Young-hye suddenly");
str.add("declares that she will not eat meat,");
str.add("and throws away all the meat in the refrigerator.");
str.add("Tormented by recurring horrific dreams and violent images,");
str.add("Young-hye gradually falls into the fantasy of becoming a plant.");

const sideDec = new SideDecorator(str, '"');

const LineDec = new LineNumberDecorator(str);

const boxDec = new BoxDocorator(str);

const domPre = document.body;

boxDec.print(domPre);
