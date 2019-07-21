import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { saveAs } from 'file-saver/dist/FileSaver.js';
import { Element } from './Element';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as _ from 'lodash';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  checkBoxControlEnable: boolean = false;
  enableMoreCheckBoxOption: boolean = false;
  checkBoxOptionHtml: string = "";

  CheckBoxCount = 0;
  inputCount = 0;
  labelCount = 0;

  optionCount = 3;

  control: string = "";
  checkBoxOptionsList: Array<string> = ["option1", "option2"];
  checkBoxOptionHtmlList: Array<string> = [];

  checkBoxOptions = {
    checkBoxOptionlabel: [''],
    option1: [''],
    option2: ['']
  };


  private checkBoxOptionForm = this.fb.group(this.checkBoxOptions);

  features = [{ id: "textBoxControl", name: "Text Box" },
  { id: 'checkBoxControl', name: 'Single Select Check-Box' },
  { id: 'dateControl', name: 'Date Control' },
  { id: 'textAreaControl', name: 'Text Area' },]

  constructor(private dataservice: DataService, private fb: FormBuilder) { }

  ngOnInit() {

  }
  private elementForm = this.fb.group({
    label: [''],
    propertyName: ['placeholder'],
    propertyValue: [''],

  });










  openAttributeBar(event) {
    this.closeAttributeBar();
    this.control = event.target.id;
    if (this.control == "checkBoxControl") {
      this.checkBoxControlEnable = true;
    }
    document.getElementById("mySidebar").style.display = "block";
  }

  reloadFrame() {
    var f = document.getElementById('iframe1');
    f.removeAttribute('src');
    f.setAttribute('src', 'html/download');
  }

  closeAttributeBar() {
    this.checkBoxControlEnable = false;
    this.optionCount = 3;
    this.checkBoxOptionsList = ["option1", "option2"];
    document.getElementById("mySidebar").style.display = "none";
    this.checkBoxOptionForm.reset();
    this.elementForm.reset();
    this.elementForm.get('propertyName').setValue('placeholder');
    this.control = "";
    this.checkBoxOptionHtmlList = [];
  }

  createTextBoxControl() {
    // document.getElementById("mySidebar").style.display = "block";
    var element = document.getElementById("dcontent");
    var div1 = document.createElement("div");
    div1.classList.add("section-div");
    div1.innerHTML = `<div id="LABEL` + ++this.labelCount + `" class="field-label">` + this.elementForm.value.label + `</div>
    <input id="INPUT`+ ++this.inputCount + `" type="text" ` + this.elementForm.value.propertyName + "=" + '"' + this.elementForm.value.propertyValue + '"' + ` contenteditable="true" class="textbox-1">`;           // add header
    element.appendChild(div1);
    var element = document.getElementById("dcontent");
    var x: String;
    x = element.outerHTML;
    let generatedHtml = {
      "html": x
    }
    this.dataservice.saveHtml(generatedHtml);
  }


  removeLastControl() {
    var element = document.getElementById("dcontent");
    element.removeChild(element.lastChild);
    var x: String;
    x = element.outerHTML;
    let generatedHtml = {
      "html": x
    }
    this.dataservice.saveHtml(generatedHtml);
    this.reloadFrame();
  }

  createTextAreaControl() {
    var element = document.getElementById("dcontent");
    var div1 = document.createElement("div");
    div1.classList.add("section-div");
    div1.innerHTML = `<div id="LABEL` + (++this.labelCount) + `" class="field-label">` + this.elementForm.value.label + `</div>
    <textarea id="INPUT`+ (++this.inputCount) + `" ` + this.elementForm.value.propertyName + "=" + '"' + this.elementForm.value.propertyValue + '"' + ` contenteditable="true" class="text-area"></textarea>`
    element.appendChild(div1);
    var element = document.getElementById("dcontent");
    var x: String;
    x = element.outerHTML;
    let generatedHtml = {
      "html": x
    }
    this.dataservice.saveHtml(generatedHtml);

  }

  getLabel() {
    return 'option' + this.optionCount;
  }

  removeCheckBoxOption() {
    // _.omit(object, [x]);
    this.checkBoxOptionsList.pop();
    this.checkBoxOptions = _.omit(this.checkBoxOptions, [this.getLabel()]);
    this.optionCount--;
    this.checkBoxOptionForm = this.fb.group(this.checkBoxOptions);
  }

  addcheckBoxOption() {
    // this.enableMoreCheckBoxOption = this.enableMoreCheckBoxOption ? false : true;
    this.checkBoxOptionsList.push(this.getLabel());
    this.checkBoxOptions = _.assign(this.checkBoxOptions, { [this.getLabel()]: [''] });
    this.checkBoxOptionForm = this.fb.group(this.checkBoxOptions);
    this.optionCount++;
    // this.checkBoxOptionForm.controls['checkBoxOptions'].reset()
  }

  createDateControl() {
    var element = document.getElementById("dcontent");
    var div1 = document.createElement("div");
    div1.classList.add("section-div");
    div1.innerHTML = `
    <div id='LABEL`+ (++this.labelCount) + `' class='field-label'>` + this.elementForm.value.label + `
    </div>
    <div id='INPUT`+ (++this.inputCount) + `' onClick='event_click(this)' class='textbox-1 image_right_date' value=''>
    </div>
    <div style='width: 0px; height: 0px; overflow: hidden;'>
    <input type='date' onChange='change_date_format(this)' class='textbox-1'>
    </div>`;
    element.appendChild(div1);
    var element = document.getElementById("dcontent");
    var x: String;
    x = element.outerHTML;
    let generatedHtml = {
      "html": x
    }
    this.dataservice.saveHtml(generatedHtml);
  }

  AppendCheckBoxOptionHtml() {

    for (let i = 2, j = 3; i < this.checkBoxOptionsList.length; i++ , j++) {
      if (this.checkBoxOptionForm.value[this.checkBoxOptionsList[i]]) {
        this.checkBoxOptionHtmlList.push(this.checkBoxOptionForm.value[this.checkBoxOptionsList[i]]);
        this.checkBoxOptionHtml += `<div class='single-select-rounded'>
      <label id='CHECKBOX`+ this.CheckBoxCount + `_` + j + `' class='unselected-label'>` + this.checkBoxOptionForm.value[this.checkBoxOptionsList[i]] +
          `</label>
      </div>`;
      }
    }

  }

  createCheckBoxControl() {
    var element = document.getElementById("dcontent");
    var div1 = document.createElement("div");
    div1.classList.add("section-div");
    this.CheckBoxCount++;
    if (this.checkBoxOptionsList.length > 2) {
      this.AppendCheckBoxOptionHtml();
    }
    div1.innerHTML = `<div id='LABEL` + (++this.labelCount) + `' class='field-label'>` + this.elementForm.value.label + `</div>
    <div class='option-div' id='CHECKBOX`+ this.CheckBoxCount + `'> 
    <div class='single-select-rounded'>
    <label id='CHECKBOX`+ this.CheckBoxCount + `_1' class='selected-label'>` + this.checkBoxOptionForm.value.option1 +
      `</label>
    </div> 
    <div class='single-select-rounded'>
    <label id='CHECKBOX`+ this.CheckBoxCount + `_2' class='unselected-label'>` + this.checkBoxOptionForm.value.option2 +
      `</label>
  </div>
    `+ this.checkBoxOptionHtml + `</div>`;

    element.appendChild(div1);
    var element = document.getElementById("dcontent");
    var x: String;
    x = element.outerHTML;
    let generatedHtml = {
      "html": x
    }
    this.dataservice.saveHtml(generatedHtml);

  }

  onSubmit() {

    switch (this.control) {
      case "textBoxControl":
        this.createTextBoxControl();
        break;
      case "textAreaControl":
        this.createTextAreaControl();
        break;
      case "checkBoxControl":
        this.createCheckBoxControl();
        break;
      case "dateControl":
        this.createDateControl();
        break;
      case "dropDownControl":
        this.createDropDownControl();
        break;
    }
    this.checkBoxOptionHtml = "";
    this.reloadFrame();
    this.closeAttributeBar();
  }
  createDropDownControl() {

    var element = document.getElementById("dcontent");
    var div1 = document.createElement("div");
    div1.classList.add("section-div");
    this.CheckBoxCount++;
    if (this.checkBoxOptionsList.length > 2) {
      this.AppendCheckBoxOptionHtml();
    }
    div1.innerHTML = `<div id='LABEL` + ++this.labelCount + `' class='field-label'>` + this.elementForm.value.label + `</div>
   
    <table id='INPUT10' class='feedbackSlderTable' title='TapBasedSlider'></table>
   
    <div class='progressbar-outer-div'>
    <div class='progressbar-inner-div'>
    </div>
    </div>
    </div>`;

    element.appendChild(div1);
    var element = document.getElementById("dcontent");
    var x: String;
    x = element.outerHTML;
    let generatedHtml = {
      "html": x
    }
    this.dataservice.saveHtml(generatedHtml);
  }


  getHtml() {
    saveAs("localhost:8080/html/download", "download.html");
  }



}
