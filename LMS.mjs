import {makeId} from './id.mjs'

export const subjects = new Map();

class Subject {
    constructor (subj){


        if (typeof subj !== 'object' || !subj.title || !subj.lessons){
            throw new Error ("must be an object and have title and lessons");
        }

        if (typeof subj.title !== 'string' || typeof subj.lessons !=='number'){
            throw new Error ("title must be string and lessons must be a number");
            
        }

        
        this.id = makeId();

        subjects.set(this.id, subj);

        return this.id;
    }
   

}
class lms {

    constructor() {
        this.allsubjects = new Set();
    }

    add(id) {
        if (!id) {
            throw new Error ("id is required dude ");
        }
        this.allsubjects.add(id);
    }

    remove(id) {
        if (!id) {
            throw new Error ("id is required dude ");
        }
        this.allsubjects.delete(id);
    }
 

     verify(id) {
        if (!id) {
            throw new Error ("id is required dude ");
        }
        return this.allsubjects.has(id);
    }
    
    readAll() {
      let array = [];
      this.allsubjects.forEach((index)=>array.push(index));
      
      return array;
    }

}


export const history = new Subject({
    title: 'History',
    lessons: 24
});

const math = new Subject({
    title: 'math',
    lessons: 24
});

export const LMS = new lms();
LMS.add(math);
console.log(subjects);
// console.log(LMS.verify(history));
// console.log(LMS);
// console.log(LMS.readAll());