export function objectValidation (obj){
    if (typeof obj !== 'object'){
        throw new Error ("must be an object");
    }
}

export function teacherAndStudent(obj){
    if (!obj.name || !obj.image || !obj.dateOfBirth || !obj.phones || !obj.sex){
        throw new Error ("name image sex dateOfBirth and phone is required");
    }else if (! obj.description ){
        return "its okay";
    }else{
        if (typeof obj.name !== 'object' || typeof obj.image !== 'string'|| typeof obj.dateOfBirth !=='string' || typeof obj.sex !=="string" ||  Array.isArray(obj.phones)=== false){
          throw new Error ("Error");
            
        }else{
          if (typeof obj.name.first !== 'string'||typeof obj.name.last !== 'string' ||typeof obj.phones[0].phone !=="string" || typeof obj.phones[0].primary !=="boolean"
          )
          {
            throw new Error ('must be string');
          }
        }
}}

export function additionalValidation (obj){
  if (!obj.subjects || !obj.emails){
    throw new Error("email and subject are required dude");
  }else{
    if (Array.isArray(obj.emails)===false ||  Array.isArray(obj.subjects)===false){
      throw new Error ("must be an array");
    }
  }
}

var  data = {
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
      }]
    ,
    "sex": "string", // male or female
    "subjects": [
      {
        "subject": "string"
      }
    ],
    "description": "string",
  }

teacherAndStudent(data);

