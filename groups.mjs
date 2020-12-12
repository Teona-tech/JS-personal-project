import {makeId} from './id.mjs'

class GroupsModel {

    constructor(pupil){
        this.groups = new Map();
    }

    
    doesnotExcist(){
        throw new Error('no such id !');
    }

    uniq(id){
        if(!this.groups.has(id)){
            throw new Error('id must be uniq');

        }
    }

    mustNumbera(obj){
        if(obj<= 0 || typeof obj != "number") {
            throw new Error('must be number');
        }
        
    }

    add(room){
        this.mustNumbera(room);
        
        const id = makeId();
        
        this.groups.set(id, { room, students: new Set() });

        return id;
    }

    read(id){
        this.uniq(id);

        return { id, ...this.groups.get(id) };
    }

    remove(id){
        this.uniq(id);

        this.groups.delete(id);
    }

    update(id, room){
        this.uniq(id);

        this.groups.set(id, room);
    }

    readAll(){
        const result = [];
        this.groups.forEach(({...group}, id) => {
            group.students = Array.from(group.students);
            result.push({ id, ...group });
        });

        return result;
    }

    addPupil(id, pupli){
        if(this.groups.has(id)) {
            this.groups.get(id).students.add(pupli);
        }
        else this.uniq();
    }

    removePupil(id, pupli){
        if(this.groups.has(id)) {
            this.groups.get(id).students.delete(pupli);
        }
        else this.uniq();
    }
}

export { GroupsModel };

export var groups = new GroupsModel ();
const room = 236;


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
        "primary": "boolean"
      }
    ],
    "sex": "female", // male OR female
    "description": "string"
}

var groupId = groups.add(room);
console.log(groupId);
// console.log(groups.addPupil(groupId, student));
// console.log(groups.read(groupId));
// console.log(groups.removePupil(groupId,student));
// console.log(groups.read(groupId));
// console.log(groups.readAll(groupId));
console.log(groups);


