import {makeId} from './id.mjs'
import {history,LMS} from './LMS.mjs'
import {teacherID,teacher} from './Teachers.mjs'
import {groups} from './groups.mjs'
import {pupil} from './Pupils.mjs'
class GradesbooksModel {

    constructor(groups, teachers, LMS) {
        this.gradeBook = new Map()
        this.groups = groups;
        this.teachers = teachers;
        this.LMS = LMS;
    }

    add(level, groupID) {
        if (!level || typeof level !=='number') {
            throw new Error('number is required')
        }
        const id = makeId();
        this.gradeBook.set( id, {level, groupID});
        
        return id;
    }

    
    clear(){
        return this.gradeBook.clear();
    }
    addRecord(id, record) {
        if (!id || !record || typeof record !=='object'){
            throw new Error ('error');
        }
        return this.gradeBook.set("records",record);
    }

    readAll(){
        return LMS;
    }


}
      
    




