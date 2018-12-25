import { Injectable } from '@angular/core';
import { Workout } from '../models/workout';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { LocalStorage } from '@ngx-pwa/local-storage';

const workouts: Workout[] = [
  {
    id: 1,
    imgsrc: 'https://cdn-ami-drupal.heartyhosting.com/sites/muscleandfitness.com/files/styles/homepage_top_1440x500/public/media/man-abs.jpg?itok=tQkyaZWW',
    description: 'Workout abs',
    creator: {
      name: 'Coach Bot',
      email: 'coach@coach.com',
      token: 'mockusertokenmustbeencryptedandserialized',
      major: 'Personal Bot',
      avatar: 'https://api.adorable.io/avatars/285/coach@coach.com.png'
    },
    activities: [
      {
        name: 'Plank Ups',
        sets: 10, reps: 4,
        done: false,
        description: 'Start in high plank. Bend one arm to bring your elbow and your forearm to the floor. Bring the other arm down so you are in a forearm plank. Push back up to the start position, placing each hand where your elbows were. Repeat this movement, alternating which side you lower first with each rep.'
      },
      {
        name: 'Inchworm',
        sets: 10, reps: 4,
        done: false,
        description: 'Start standing with feet hip-width apart. Hinge forward at your hips and place your palms on the mat. You can bend your knees if needed to get your palms flat on the floor. Walk your hands forward so that you’re in high plank. Your shoulders should be stacked directly above your wrists. For an extra challenge, add a push-up. Walk your hands back toward feet and stand up.'
      },
      {
        name: 'Push-Up',
        sets: 10, reps: 4,
        done: false,
        description: 'Start in high plank with your shoulders above your wrists and your spine long. Bend your elbows and lower your body to the mat. Push through the palms of your hands to straighten your arms. Drop to your knees if this is too challenging.'
      },
      {
        name: 'Triceps Dips',
        sets: 10, reps: 4,
        done: false,
        description: 'Sit on the ground with your legs in front and your back up against a box or step. Place your palms on the box or step behind you, fingers facing toward your body. Straighten your arms to lift your legs and butt off the ground, then bend your elbows to lower back down (without letting your butt touch the ground). Keep your heels on the ground, and make sure you keep your elbows directly behind your body during this exercise. ',
      },
      {
        name: 'Plank Taps',
        sets: 10, reps: 4,
        done: false,
        description: 'Start in high plank with your feet hip-distance apart. Then tap your left hand to your right shoulder while engaging your core and glutes to keep your hips as still as possible. Continue, alternating sides. '
      },
      {
        name: 'Lateral Plank Walks',
        sets: 10, reps: 4,
        done: false,
        description: 'Start in high plank with your shoulders above your wrists and abs tight. Step your right foot and your right hand to right side immediately following with your left foot and your left hand. Take a few "steps" in one direction, then walk in the opposite direction.'
      },
      {
        name: 'Diamond Push-Up',
        sets: 10, reps: 4,
        done: false,
        description: 'Start in high plank. Walk your hands together so that your thumbs and forefingers form a triangle. Bend your elbows to lower your torso toward the ground to do a complete push-up.'
      },
      {
        name: 'Modified Diamond Push-Up',
        sets: 10, reps: 4,
        done: false,
        description: 'Start in high plank, then walk your hands together so that your thumbs and forefingers form a triangle. Drop to your knees, rolling to the top of your knees to protect your knee caps. Bend your elbows to lower your torso toward the ground to do a complete push-up.'
      },
      {
        name: 'Elevated Push-Up',
        sets: 10, reps: 4,
        done: false,
        description: 'Start in high plank with your hands resting on a low box, bench, step, or couch. Keeping your elbows close to your torso, bend your arms and lower your chest to meet the top of the box. Be sure to keep your core tight and spine long. Then, push through your palms to straighten arms.'
      },
      {
        name: 'Plank Jacks',
        sets: 10, reps: 4,
        done: false,
        description: 'Start in high plank. Keeping your core engaged, jump your feet out and in (like jumping jacks). If your wrists bother you, try this move on your forearms.'
      },
      {
        name: 'Burpee With Push-Up',
        done: false,
        sets: 20, reps: 2,
        description: 'Start standing with your feet hip-distance apart and bring your palms to the floor. Jump your feet back so that you are in high plank, keeping your core tight and your hips lifted. Bend your elbows and lower yourself into a push-up, then push back up into high plank. Now jump your feet to the outside of your hands. As you stand up, explode up and jump as high as you can, bringing your arms overhead.'
      }
    ]

  },

  {
    id: 2,
    imgsrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Xq3D0T31H4tR3JxyeKzB3fMGRCvF7FD5nAcCu3uJdpakwvzO',
    description: 'Workout arms',
    creator: {
      name: 'Doggo Coach',
      email: 'doggocoach@coach.com',
      token: 'mockusertokenmustbeencryptedandserialized',
      major: 'Personal Bot Coach',
      avatar: 'https://api.adorable.io/avatars/285/coach@coach.com.png'
    },
    activities: [
      {
        name: 'Plank Ups',
        sets: 10, reps: 4,
        done: false,
        description: 'Start in high plank. Bend one arm to bring your elbow and your forearm to the floor. Bring the other arm down so you are in a forearm plank. Push back up to the start position, placing each hand where your elbows were. Repeat this movement, alternating which side you lower first with each rep.'
      },
      {
        name: 'Inchworm',
        sets: 10, reps: 4,
        done: false,
        description: 'Start standing with feet hip-width apart. Hinge forward at your hips and place your palms on the mat. You can bend your knees if needed to get your palms flat on the floor. Walk your hands forward so that you’re in high plank. Your shoulders should be stacked directly above your wrists. For an extra challenge, add a push-up. Walk your hands back toward feet and stand up.'
      },
      {
        name: 'Push-Up',
        sets: 10, reps: 4,
        done: false,
        description: 'Start in high plank with your shoulders above your wrists and your spine long. Bend your elbows and lower your body to the mat. Push through the palms of your hands to straighten your arms. Drop to your knees if this is too challenging.'
      },
      {
        name: 'Triceps Dips',
        sets: 10, reps: 4,
        done: false,
        description: 'Sit on the ground with your legs in front and your back up against a box or step. Place your palms on the box or step behind you, fingers facing toward your body. Straighten your arms to lift your legs and butt off the ground, then bend your elbows to lower back down (without letting your butt touch the ground). Keep your heels on the ground, and make sure you keep your elbows directly behind your body during this exercise. ',
      },
      {
        name: 'Plank Taps',
        sets: 10, reps: 4,
        done: false,
        description: 'Start in high plank with your feet hip-distance apart. Then tap your left hand to your right shoulder while engaging your core and glutes to keep your hips as still as possible. Continue, alternating sides. '
      },
      {
        name: 'Lateral Plank Walks',
        sets: 10, reps: 4,
        done: false,
        description: 'Start in high plank with your shoulders above your wrists and abs tight. Step your right foot and your right hand to right side immediately following with your left foot and your left hand. Take a few "steps" in one direction, then walk in the opposite direction.'
      },
      {
        name: 'Diamond Push-Up',
        sets: 10, reps: 4,
        done: false,
        description: 'Start in high plank. Walk your hands together so that your thumbs and forefingers form a triangle. Bend your elbows to lower your torso toward the ground to do a complete push-up.'
      },
      {
        name: 'Modified Diamond Push-Up',
        sets: 10, reps: 4,
        done: false,
        description: 'Start in high plank, then walk your hands together so that your thumbs and forefingers form a triangle. Drop to your knees, rolling to the top of your knees to protect your knee caps. Bend your elbows to lower your torso toward the ground to do a complete push-up.'
      },
      {
        name: 'Elevated Push-Up',
        sets: 10, reps: 4,
        done: false,
        description: 'Start in high plank with your hands resting on a low box, bench, step, or couch. Keeping your elbows close to your torso, bend your arms and lower your chest to meet the top of the box. Be sure to keep your core tight and spine long. Then, push through your palms to straighten arms.'
      },
      {
        name: 'Plank Jacks',
        sets: 10, reps: 4,
        done: false,
        description: 'Start in high plank. Keeping your core engaged, jump your feet out and in (like jumping jacks). If your wrists bother you, try this move on your forearms.'
      },
      {
        name: 'Burpee With Push-Up',
        done: false,
        sets: 20, reps: 2,
        description: 'Start standing with your feet hip-distance apart and bring your palms to the floor. Jump your feet back so that you are in high plank, keeping your core tight and your hips lifted. Bend your elbows and lower yourself into a push-up, then push back up into high plank. Now jump your feet to the outside of your hands. As you stand up, explode up and jump as high as you can, bringing your arms overhead.'
      }
    ]

  },

  {
    id: 3,
    imgsrc: 'https://i.ytimg.com/vi/8yLnrF_Ar-c/maxresdefault.jpg',
    description: 'Workout legs',
    creator: {
      name: 'Super Coach',
      email: 'supercoach@coach.com',
      token: 'mockusertokenmustbeencryptedandserialized',
      major: 'Personal Bot',
      avatar: 'https://api.adorable.io/avatars/285/coach@coach.com.png'
    },
    activities: [
      {
        name: 'Plank Ups',
        sets: 10, reps: 4,
        done: false,
        description: 'Start in high plank. Bend one arm to bring your elbow and your forearm to the floor. Bring the other arm down so you are in a forearm plank. Push back up to the start position, placing each hand where your elbows were. Repeat this movement, alternating which side you lower first with each rep.'
      },
      {
        name: 'Inchworm',
        sets: 10, reps: 4,
        done: false,
        description: 'Start standing with feet hip-width apart. Hinge forward at your hips and place your palms on the mat. You can bend your knees if needed to get your palms flat on the floor. Walk your hands forward so that you’re in high plank. Your shoulders should be stacked directly above your wrists. For an extra challenge, add a push-up. Walk your hands back toward feet and stand up.'
      },
      {
        name: 'Push-Up',
        sets: 10, reps: 4,
        done: false,
        description: 'Start in high plank with your shoulders above your wrists and your spine long. Bend your elbows and lower your body to the mat. Push through the palms of your hands to straighten your arms. Drop to your knees if this is too challenging.'
      },
      {
        name: 'Triceps Dips',
        sets: 10, reps: 4,
        done: false,
        description: 'Sit on the ground with your legs in front and your back up against a box or step. Place your palms on the box or step behind you, fingers facing toward your body. Straighten your arms to lift your legs and butt off the ground, then bend your elbows to lower back down (without letting your butt touch the ground). Keep your heels on the ground, and make sure you keep your elbows directly behind your body during this exercise. ',
      },
      {
        name: 'Plank Taps',
        sets: 10, reps: 4,
        done: false,
        description: 'Start in high plank with your feet hip-distance apart. Then tap your left hand to your right shoulder while engaging your core and glutes to keep your hips as still as possible. Continue, alternating sides. '
      },
      {
        name: 'Lateral Plank Walks',
        sets: 10, reps: 4,
        done: false,
        description: 'Start in high plank with your shoulders above your wrists and abs tight. Step your right foot and your right hand to right side immediately following with your left foot and your left hand. Take a few "steps" in one direction, then walk in the opposite direction.'
      },
      {
        name: 'Diamond Push-Up',
        sets: 10, reps: 4,
        done: false,
        description: 'Start in high plank. Walk your hands together so that your thumbs and forefingers form a triangle. Bend your elbows to lower your torso toward the ground to do a complete push-up.'
      },
      {
        name: 'Modified Diamond Push-Up',
        sets: 10, reps: 4,
        done: false,
        description: 'Start in high plank, then walk your hands together so that your thumbs and forefingers form a triangle. Drop to your knees, rolling to the top of your knees to protect your knee caps. Bend your elbows to lower your torso toward the ground to do a complete push-up.'
      },
      {
        name: 'Elevated Push-Up',
        sets: 10, reps: 4,
        done: false,
        description: 'Start in high plank with your hands resting on a low box, bench, step, or couch. Keeping your elbows close to your torso, bend your arms and lower your chest to meet the top of the box. Be sure to keep your core tight and spine long. Then, push through your palms to straighten arms.'
      },
      {
        name: 'Plank Jacks',
        sets: 10, reps: 4,
        done: false,
        description: 'Start in high plank. Keeping your core engaged, jump your feet out and in (like jumping jacks). If your wrists bother you, try this move on your forearms.'
      },
      {
        name: 'Burpee With Push-Up',
        sets: 20, reps: 2,
        done: false,
        description: 'Start standing with your feet hip-distance apart and bring your palms to the floor. Jump your feet back so that you are in high plank, keeping your core tight and your hips lifted. Bend your elbows and lower yourself into a push-up, then push back up into high plank. Now jump your feet to the outside of your hands. As you stand up, explode up and jump as high as you can, bringing your arms overhead.'
      }
    ]

  }
];


@Injectable({
  providedIn: 'root'
})
export class WorkoutService {


  constructor(
    private localStorage: LocalStorage,
    private sanitize: DomSanitizer
  ) { }


  /**
   * Load the selected workout, based on its id
   * @param workoutId workout filter id
   */
  public loadWorkout(workoutId: number): Observable<Workout> {
    return of(workouts.find((workout: Workout) => workout.id === workoutId));
  }

  /**
   * Loads all user's workouts
   */
  public loadWorkouts(): Observable<Workout[]> {
    return of(workouts)
      .pipe(
        map((workoutsMapped: Workout[]) => {
          const convertedWorkouts = workoutsMapped.map((workout: Workout) => {
            workout.imgTrusted = this.sanitize.bypassSecurityTrustResourceUrl(workout.imgsrc);
            return workout;
          });

          return convertedWorkouts;
        })
      );
  }

  /**
   * Search workouts based on querystring
   */
  public searchWorkouts(queryString: string): Observable<Workout[]> {
    const workoutsMatched = workouts.map((workout: Workout) => {
      const hasSomeReff = workout.description
        .toLocaleLowerCase().indexOf(queryString) !== -1;

      if (hasSomeReff) {
        return workout;
      }

    });

    return of(workoutsMatched.filter(workout => workout));
  }

  /**
   * Set workout selelected to the storage
   * @param workout workout selected to be storaged
   */
  public setStoreWorkout(workout: Workout): Observable<boolean> {
    return this.localStorage.setItem('workout', workout);
  }

  /**
   * get the storage workout
   */
  public getStoreWorkout(): Observable<any> {
    return this.localStorage
      .getItem<Workout>('workout');
  }
}
