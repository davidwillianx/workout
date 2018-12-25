import { SafeValue } from '@angular/platform-browser';

export class User {
    public name: string;
    public email: string;
    // public password: string;
    public token: string;
    public avatar: string;
    public major: string;
    public avatar_bg?: SafeValue;
}
