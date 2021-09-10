import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strongPipe'
})
export class StrongPipePipe implements PipeTransform {
  transform(textValue: string, winningTeamName : string): string {
    console.log(`textValue: ${textValue},  winningTeamName: ${winningTeamName}`)
    if(textValue == winningTeamName) {
      return textValue.replace(textValue, '<strong>' + textValue + '</strong>');
    } else {
      return textValue
    }
  }
}
