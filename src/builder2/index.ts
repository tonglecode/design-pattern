import Data from "./Data";
import JsonBuilder from "./models/builder/JsonBuilder";
import PlainBuilder from "./models/builder/PlainBuilder";
import XMLBuilder from "./models/builder/XMLBuilder";
import Director from "./models/Director";

const data = new Data("jun", 42);

const build = new XMLBuilder(data);

const director = new Director(build);

console.log(director.build());
