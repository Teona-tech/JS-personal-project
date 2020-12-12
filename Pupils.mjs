import {makeId} from './id.mjs'
import {objectValidation,teacherAndStudent} from './validate.mjs'
class Pupils {

    constructor() {
        this.pupils = new Map();
    }
    
    add(pupil) {
        objectValidation(pupil);
        teacherAndStudent(pupil);
        const id = makeId();
        pupil.id = id;
        this.pupils.set(pupil.id,pupil);
        return this.pupils.get(pupil.id);
                
    }

    read(id) {
      if (!id) {
        throw new Error ("id is required dude ");
      }
      return { id, ...this.pupils.get(id) };
    }

    update(id, pupil) {
      if (!id || !pupil) {
        throw new Error ("id is required dude ");
      }
      objectValidation(pupil);
      teacherAndStudent(pupil);

      return this.pupils.set(id, pupil);
    }

    remove(id) {
      if (!id) {
        throw new Error ("id is required dude ");
      }
      return this.pupils.delete(id);
    }

}


var student = {
    "name": {
      "first": "string",
      "last": "string"
    },
    "image": "string",
    "dateOfBirth": "string", // format date
    "phones": [
      {
        "phone": "string",
        "primary": true
      }
    ],
    "sex": "female", // male OR female
    "description": "string"
  }

var student1 = {
  "name": {
    "first": "string",
    "last": "string"
  },
  "image": "string",
  "dateOfBirth": "string", // format date
  "phones": [
    {
      "phone": "string",
      "primary": true
    }
  ],
  "sex": "male", // male OR female
  "description": "string"
}
const pupils = new Pupils();
export const pupil = pupils.add(student);
const pupil1 = pupils.add(student1);

console.log(pupils.read(pupil.id));
console.log(pupils.remove(pupil.id));
console.log(pupils.update(pupil.id,pupil));
console.log(pupils);
