import Iterator from "./iterator";

interface Aggregator<T> {
  iterator(): Iterator<T>;
}

export default Aggregator;
