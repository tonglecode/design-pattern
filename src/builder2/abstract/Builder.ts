import Data from "../Data";

export default abstract class Builder {
  constructor(protected data: Data) {}

  abstract head(): string;
  abstract body(): string;
  abstract footer(): string;
}
