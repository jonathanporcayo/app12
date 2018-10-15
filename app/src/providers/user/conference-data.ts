import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { map } from 'rxjs/operators';

 

@Injectable()
export class ConferenceData {
  data: any;

  constructor(public http: HttpClient) {
 
  }

  load(): any {
 this.http.get('assets/data/data.json').subscribe(res=>{
     console.log(res)
 })
    
  }

  processData(data: any) {
    // just some good 'ol JS fun with objects and arrays
    // build up the data by linking speakers to sessions
    this.data = data;
    

    // this.data.tracks = [];

    // loop through each day in the schedule
    // this.data.schedule.forEach((day: any) => {
    // //   // loop through each timeline group in the day
    // //   day.groups.forEach((group: any) => {
    // //     // loop through each session in the timeline group
    // //     group.sessions.forEach((session: any) => {
    // //       session.speakers = [];
    // //       if (session.speakerNames) {
    // //         session.speakerNames.forEach((speakerName: any) => {
    // //           const speaker = this.data.speakers.find(
    // //             (s: any) => s.name === speakerName
    // //           );
    // //           if (speaker) {
    // //             session.speakers.push(speaker);
    // //             speaker.sessions = speaker.sessions || [];
    // //             speaker.sessions.push(session);
    // //           }
    // //         });
    // //       }

    // //       if (session.tracks) {
    // //         session.tracks.forEach((track: any) => {
    // //           if (this.data.tracks.indexOf(track) < 0) {
    // //             this.data.tracks.push(track);
    // //           }
    // //         });
    // //       }
    // //     });
    // //   });
    // });

    return this.data;
  }

 

   

  

 
}
