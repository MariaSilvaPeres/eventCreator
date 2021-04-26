import { Injectable } from "@angular/core";
import { ISession } from "../shared/event.model";

@Injectable()

export class VoterService {

  deleteVoter(session: ISession, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);
  }

  addVoter(session: ISession, voterName: string) {
    session.voters.push(voterName);
  }

  userHasVoted(session: ISession, voterName: string) {
    // some method is a method on an array that will return a boolean, whether there is or is not at least one element that matches a specific condition.
    return session.voters.some(voter => voter === voterName)
  }

}
