import Participant from "../models/abstract/Participant";

export default interface Mediator {
  participantChanged(participant: Participant): void;
}
