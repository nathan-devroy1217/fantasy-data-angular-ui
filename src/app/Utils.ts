export default class Utils {
  static verifyDesktop() : boolean {
    console.log(document.body.offsetWidth);
    if(document.body.offsetWidth < 750) {
      return true;
    } else {
      return false;
    }
  }
}
