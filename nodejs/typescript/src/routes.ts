import {Request, Response} from  'express'
import CreateCourseService from './CreateCourseService'


export function createCourse(request: Request, response: Response){

    CreateCourseService.execute({
        name:"NodeJs", 
        educator:"Eu",
        duration: 3        
    });

    CreateCourseService.execute({
        name:"Html", 
        educator:"Dani"
              
    });

    return response.send();
}