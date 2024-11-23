import Iterator from "./iterator.interface";

interface Aggregator<T> {
  iterator(): Iterator<T>;
}

export default Aggregator;
