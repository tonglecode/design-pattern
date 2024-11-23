import Draft from "../models/Draft";

export default interface Display {
  title(draft: Draft): void;
  auther(draft: Draft): void;
  content(draft: Draft): void;
}
