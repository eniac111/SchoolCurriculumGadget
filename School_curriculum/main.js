  /*
      (c)2009 Blagovest Petrov
      blagovest <{At}> petrovs -dot- info
      http://petrovs.info

      This program is free software: you can redistribute it and/or modify
      it under the terms of the GNU General Public License as published by
      the Free Software Foundation, either version 3 of the License, or
      (at your option) any later version.

      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU General Public License for more details.

      You should have received a copy of the GNU General Public License
      along with this program.  If not, see <http://www.gnu.org/licenses/>.
    */

  sysdate=new Date(); //system date
  today=sysdate.getDay(); // today in integrer (0 - 6) 
  var program_data = new Array(); // school program data
  var lesn = new Array();
  var tomorow = today + 1 ;
    switch(tomorow)
    {
    case 1:
      title_label.innerText = strings.DAY_HOLIDAY;
      break;
    case 2:
      title_label.innerText = strings.DAY_MONDAY;
      break;
    case 3:
      title_label.innerText = strings.DAY_TUESDAY;
      break;
    case 4:
      title_label.innerText = strings.DAY_WEDNESDAY;
      break;
    case 5:
      title_label.innerText = strings.DAY_THURSDAY;
      break;
    case 6:
      title_label.innerText = strings.DAY_FRIDAY;
      break;
    case 7:
      title_label.innerText = strings.DAY_HOLIDAY;
      break;
    default:
      title_label.innerText = strings.DATE_ERROR
  //title_label.innerText = tomorow
    }
  lesn[6]  = "\[11.55-12.35\]";
  lesn[7]  = "\[12.40-13.20\]";
  lesn[8]  = "\[13.30-14.10\]";
  lesn[9]  = "\[14.15-14.55\]";
  lesn[10] = "\[15.05-15.45\]";
  lesn[11] = "\[16.05-16.45\]";
  lesn[12] = "\[16.55-17.35\]";
  lesn[13] = "\[17.40-18.20\]";
  lesn[14] = "\[18.25-19.05\]";

  //program_data[0] = "<<Pochiven den >>";
  program_data[1] = 
  "7. " + strings.SUBJ_WD + " - "+lesn[7]+
  "\n 8. " + strings.SUBJ_WD + " - "+lesn[8]+
  "\n 9. " + strings.SUBJ_PT + " - "+lesn[9]+
  "\n 10. " + strings.SUBJ_PT + " - "+lesn[10]+
  "\n 11. " + strings.SUBJ_MATHS + " - "+lesn[11]+
  "\n 12. " + strings.SUBJ_MATHS + " - "+lesn[12]+"\n";

  program_data[2] = 
  "8. " + strings.SUBJ_PHILOSOPHY + " - "+lesn[8]+
  "\n 9. " + strings.SUBJ_BULGARIAN + " - "+lesn[9]+
  "\n 10. " + strings.SUBJ_BULGARIAN + " - "+lesn[10]+
  "\n 11. " + strings.SUBJ_ENGLISH + " - "+lesn[11]+
  "\n 12. " + strings.SUBJ_ENGLISH + " - "+lesn[12]+
  "\n 13. " + strings.SUBJ_GERMAN + " - "+lesn[13]+
  "\n 14. " + strings.SUBJ_GERMAN + " - "+lesn[14]+"\n";

  program_data[3] = //wednesday
  "7. " + strings.SUBJ_OC + " - "+lesn[7]+
  "\n 8. " + strings.SUBJ_OC + " - "+lesn[8]+
  "\n 9. " + strings.SUBJ_OOP + " - "+lesn[9]+
  "\n 10. " + strings.SUBJ_OOP + " - "+lesn[10]+
  "\n 11. " + strings.SUBJ_OOP + " - "+lesn[11]+
  "\n 12. " + strings.SUBJ_DB + " - "+lesn[12]+
  "\n 13. " + strings.SUBJ_DB + " - "+lesn[13]+
  "\n 14. " + strings.SUBJ_DB + " - "+lesn[14]+"\n";

  program_data[4] = //thursday
  "5. " + strings.SUBJ_OOP + " - "+lesn[5]+
  "\n 6. " + strings.SUBJ_OOP + " - "+lesn[6]+
  "\n 7. " + strings.SUBJ_HISTORY + " - "+lesn[7]+
  "\n 8. " + strings.SUBJ_HISTORY + " - "+lesn[8]+
  "\n 9. " + strings.SUBJ_MATHS_ZIP + " - "+lesn[9]+
  "\n 10. " + strings.SUBJ_GYM + " - "+lesn[10]+
  "\n 11. " + strings.SUBJ_GYM + " - "+lesn[11]+
  "\n 12. " + strings.SUBJ_BULGARIAN + " - "+lesn[12]+"\n";


  program_data[5] = //friday
  "7. " + strings.SUBJ_ENGLISH + " - "+lesn[7]+
  "\n 8. " + strings.SUBJ_CL + " - "+lesn[8]+
  "\n 9. " + strings.SUBJ_PT + " - "+lesn[9]+
  "\n 10. " + strings.SUBJ_PT + " - "+lesn[10]+"\n";

  //program_data[7] = "<<Pochiven den >>";

  function onLabelClick() {
    view.beginAnimation(doRotation, 0, 360, 500);
  }
  function doRotation() {
    title_label.rotation = event.value;
  }

  function onChange() {
  title_label.innerText = combobox.value;
    switch(combobox.value)
    {
    case strings.DAY_MONDAY:
      textarea.innerText = program_data[1];
      break;
    case strings.DAY_TUESDAY:
      textarea.innerText = program_data[2];
      break;
    case strings.DAY_WEDNESDAY:
      textarea.innerText = program_data[3];
      break;
    case strings.DAY_THURSDAY:
      textarea.innerText = program_data[4];
      break;
    case strings.DAY_FRIDAY:
      textarea.innerText = program_data[5];
      break;
    case strings.DAY_HOLIDAY:
      textarea.innerText = program_data[0];
      break;
    default:
      title_label.innerText = strings.DATE_ERROR
    }

  }


