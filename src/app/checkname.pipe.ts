import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkname'
})
export class ChecknamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args=="M"){
      value = "Welcome Mr. "+value
    }
    else if(args =="F"){
      value = "Welcome Miss. "+value
    }
    else
    value = "Enter proper gender"
    
    return value

}
}

    //   if( typeof value == "number"){
  //     value = value + " is a number"
  //   }
  //   else if ( typeof value == "string"){
  //     value = value + " is a string"
  //   }
  //   return value;

  