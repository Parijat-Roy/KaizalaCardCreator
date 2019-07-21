import * as _ from 'lodash';

export class Element {
    tag : String;
    properties : Array<String>;
    innerText : String;

    constructor(tag, properties,innerText?){
        this.tag = tag
        this.properties = properties;
        this.innerText = innerText;
      }

      createElement(): string {
        let property = this.setProperties(this.properties) 
          let element = "<" + this.tag + " " + (property ? property : "") +">" + (this.innerText ? this.innerText : "") + "</" + this.tag + ">";
      return element;
      }

      setProperties(p) : String { // p = [ {},{}]
        let e = "";
        p.forEach(element => {
        //    let temp = _.keys(element) + "=" + '"'+ _.values(element)+ '"';
        let temp = _.keys(element) + "=" +  _.values(element);   
        e += temp + " ";
            return temp;
              });

        console.log(e);
        return e;

      }

    
}

export interface checkBoxControlInterface {

    controlLabel : string,
    checkBoxOptions : number,
    checkBoxOptionsLabel : Array<string>

}