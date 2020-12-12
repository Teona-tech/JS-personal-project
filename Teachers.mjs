import {makeId} from './id.mjs'
import { additionalValidation } from './validate.mjs';
import {objectValidation,teacherAndStudent} from './validate.mjs'

const teacha = {
    "name": {
      "first": "string",
      "last": "string"
    },
    "image": "string",
    "dateOfBirth": "string", // format date
    "emails": [
      {
        "email": "string",
        "primary": true
      }
    ],
    "phones": [
      {
        "phone": "string",
        "primary": true
      }
    ],
    "sex": "string", // male or female
    "subjects": [
      {
        "subject": "string"
      }]
    ,
    "description": "string",
}

export class Teachers {
    constructor (){
        this.teachers = new Map();
    }

    add (teacher){
        objectValidation(teacher);
        teacherAndStudent(teacher);
        additionalValidation(teacher);
        let id = makeId();
        this.teachers.set(id,teacher);
        return id;
    }

    read(id){
      if (!id) {
        throw new Error ("id is required dude ");
      }
        return { id, ...this.teachers.get(id) };;
    }
    update(id, refresh) {
      if (!id || !refresh) {
        throw new Error ("id is required dude ");
      }
      objectValidation(refresh);
      teacherAndStudent(refresh);
      additionalValidation(teacher);


      this.teachers.set(id,refresh);
      return id;
    }

    remove(id) {
      if (!id) {
        throw new Error ("id is required dude ");
      }
      return this.teachers.delete(id);
    }

}


export var teacher = new Teachers();

export var teacherID = teacher.add(teacha);
// console.log(teacher.remove(teacherID));
// console.log(teacher.read(teacherID));
console.log(teacher);


