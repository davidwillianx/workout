import { BodyPart } from './body-part';
import { User } from './user';

export class Exercise {
    public name: string;
    public description: string;
    public sets: number;
    public reps: number;
    public done  = false;

    // public bodypart: BodyPart;
}
