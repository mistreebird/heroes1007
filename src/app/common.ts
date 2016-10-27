export class common{

  constructor(){

  }

  static leftPad(str, len: number, ch = ' '): string {
    if (str.toString().length >= len)
      return str ;
    else
      return common.leftPad(ch+str,len,ch) ;
  }
}
