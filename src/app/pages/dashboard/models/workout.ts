import { User } from './user';
import { Exercise } from './exercise';
import { SafeResourceUrl } from '@angular/platform-browser';

export class Workout {
    id: number;
    description: string;
    activities: Exercise[];
    creator: User;
    imgsrc: string;
    imgTrusted?: SafeResourceUrl = null;
}
