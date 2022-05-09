//import styles 'style.scss';

/* let localLanguage = localStorage.getItem('lang_keyboard');
let language = localLanguage ? localLanguage : 'en'; */

/* let lang = 'en';

function changeLang(){
    lang = lang == 'en' ? 'ru' : 'en';
}
  */

let textarea = document.createElement('textarea');
textarea.className ='text';
textarea.value = '';
textarea.autofocus = true;
textarea.id = 'textarea';
document.body.append(textarea);

let numbers = [{value: '`', rusValue: 'ё', code: 'Backquote'}, {value: '1', rusValue: '1', code: 'Digit1'}, {value: '2', rusValue: '2', code: 'Digit2'}, 
{value: '3', rusValue: '3', code: 'Digit3'}, {value: '4', rusValue: '4', code: 'Digit4'}, {value: '5', rusValue: '5', code: 'Digit5'},
{value: '6', rusValue: '6', code: 'Digit6'}, {value: '7', rusValue: '7', code: 'Digit7'}, {value: '8', rusValue: '8', code: 'Digit8'}, {value: '9', rusValue: '9', code: 'Digit9'},
{value: '0', rusValue: '0', code: 'Digit0'}, {value: '-', rusValue: '-', code: 'Minus'}, {value: '=', rusValue: '=', code: 'Equal'}, {class: 'system', name: 'backspase', code: 'Backspace'}];


let lettersFirstRow = [{value: '\t', code: 'Tab', class: 'system', name: 'Tab'}, {value: 'q', rusValue: 'й', code: 'KeyQ'}, {value: 'w', rusValue: 'ц', code: 'KeyW'}, {value: 'e', rusValue: 'у', code: 'KeyE'}, 
{value: 'r', rusValue: 'к', code: 'KeyR'}, {value: 't', rusValue: 'е', code: 'KeyT'}, {value: 'y', rusValue: 'н', code: 'KeyY'},
{value: 'u', rusValue: 'г', code: 'KeyU'}, {value: 'i', rusValue: 'ш', code: 'KeyI'}, {value: 'o', rusValue: 'щ', code: 'KeyO'}, {value: 'p', rusValue: 'з', code: 'KeyP'},
{value: '[', rusValue: 'х', code: 'BracketLeft'}, {value: ']', rusValue: 'ъ', code: 'BracketRight'}, {value: '\\', rusValue: '\\', code: 'IntlYen'}, {class: 'system', name: 'del', code: 'Delete'}];


let letters = [{ code: 'CapsLock', class: 'system', name: 'caps lock'}, {value: 'a', rusValue: 'ф', code: 'KeyA'}, {value: 's', rusValue: 'ы', code: 'KeyS'}, 
{value: 'd', rusValue: 'в', code: 'KeyD'}, {value: 'f', rusValue: 'а', code: 'KeyF'}, {value: 'g', rusValue: 'п', code: 'KeyG'}, {value: 'h', rusValue: 'р', code: 'KeyH'},
{value: 'j', rusValue: 'о', code: 'KeyJ'}, {value: 'k', rusValue: 'л', code: 'KeyK'}, {value: 'l', rusValue: 'д', code: 'KeyL'}, {value: ':', rusValue: 'ж', code: 'Semicolon'},
{value: "'", rusValue: 'э', code: 'Quote'}, {value: '\n', code: 'Enter', class: 'system', name: 'Enter'}];

let letters2 = [{value: 'Shift', rusValue: 'Shift', code: 'ShiftLeft', class: 'system', name: 'shift'}, {value: 'z', rusValue: 'я', code: 'KeyZ'}, {value: 'x', rusValue: 'ч', code: 'KeyX'}, {value: 'c', rusValue: 'с', code: 'KeyC'},
{value: 'v', rusValue: 'м', code: 'KeyV'}, {value: 'b', rusValue: 'и', code: 'KeyB'},
{value: 'n', rusValue: 'т', code: 'KeyN'}, {value: 'm', rusValue: 'ь', code: 'KeyM'}, {value: ',', rusValue: 'б', code: 'Comma'}, {value: '.', rusValue: 'ю', code: 'Period'},
{value: '/', rusValue: '.', code: 'Slash'}, {value: '▲', rusValue: '▲', code: 'ArrowUp'}, {class: 'system', name: 'Shift', code: 'ShiftRight'}];

let special = [{code: 'ControlLeft', class: 'system', name: 'ctrl'}, {code: 'MetaLeft', class: 'system', name: 'win'}, {code: 'AltLeft', class: 'system', name: 'alt'}, {code: 'Space', class: 'system', name: ''}, {code: 'AltRight', class: 'system', name: 'alt'}, 
{value: '◄', rusValue: '◄', code: 'ArrowLeft'}, {value: '▼', rusValue: '▼', code: 'ArrowDown'}, {value: '►', rusValue: '►', code: 'ArrowRight'}, {code: 'ControlRight', class: 'system', name: 'ctrl'} ];



function makeElement(letters, row){
    letters.forEach(letter => {
        let div = document.createElement('div');
        div.className ='button';

        function changeLang(func, ...codes){
            let pressed = new Set();
            document.addEventListener('keydown', function (event){
                pressed.add(event.code);
        
                for (let code of codes){
                    if(!pressed.has(code)){
                        return;
                    }
                }

                pressed.clear();
                func();
            });   
        
            document.addEventListener('keyup', function(event) {
                pressed.delete(event.code);
            });
        }

       // div.innerHTML = language === 'ru'? letter.rusValue : letter.value;
      if (letter.class == 'system'){
            div.innerHTML = letter.name;
        }
         else {
        div.innerHTML = letter.value;
        
         }

        let count = 0;

        function hasChanged2(){
            count += 1;
            return count % 2 !== 0 ? true : false;
        } 
        
        if (letter.code == 'Backspace') {
            div.classList.add('backspc', 'system-key');
        }
        
        if (letter.code == 'Tab') {
            div.classList.add('tab', 'system-key');
        }


        if (letter.code == 'ShiftLeft') {
            div.classList.add('shift', 'system-key');
        }

        if (letter.code == 'CapsLock') {
            div.classList.add('caps', 'system-key');
        }

        
        if (letter.code == 'ShiftRight' || letter.code == 'Enter') {
            div.classList.add('shift-Right', 'system-key');
        }

        if (letter.name == 'ctrl' || letter.name == 'del' || letter.name == 'win' || letter.name == 'alt') {
            div.classList.add('system-key');
        }
        
        if (letter.code == 'Space') {
            div.classList.add('space', 'system-key');
        }

        function hasChanged(){
            if (letter.class == 'system'){
                div.innerHTML = letter.name;
            } else {
                div.innerHTML = hasChanged2() ? letter.rusValue : letter.value;
            }
            
            //localStorage.setItem('lang_keyboard', hasChanged2() ? 'ru' : 'en');
        }
        
    /*     function hasChanged(){
            count += 1;
            if(count % 2 !== 0){
                div.innerHTML = `${letter.rusValue}`;
            }
            else {
                div.innerHTML = `${letter.value}`;
            }
        } */

        function isCaps(){
            div.innerHTML = div.innerHTML.toUpperCase();
        }

        /* document.addEventListener('keyup', function(event){
            if (event.getModifierState("CapsLock")) {
                div.innerHTML = div.innerHTML.toUpperCase();
                textarea +=  div.innerHTML.toUpperCase();
              } 
            else {
                div.innerHTML = div.innerHTML.toLowerCase();
                textarea +=  div.innerHTML;
            }
        });
 */
   /*      changeLang(
            isCaps,
            'CapsLock'
        );
 */
        changeLang(
            hasChanged,
            'ControlLeft',
            'ShiftLeft'
        );
        
        div.dataset.code = letter.code;

       /*  div.addEventListener('mousedown', function() {
            if (letter.code == 'Delete'){
                textarea.value.slice(textarea.value[length-2]);
            }
        });
 */
        div.addEventListener('mousedown', function() {
            div.classList.add('clicked');
            textarea.value += letter.value;
        });

        document.addEventListener('mouseup', function() {
            div.classList.remove('clicked');
            
        });
        
        row.append(div);

        document.addEventListener('keydown', function(event){
            if(event.code == letter.code && textarea !== document.activeElement ){
                textarea.value += letter.value;
            }
        });
    });
}

let keyboard = document.createElement('div');
keyboard.className = 'keyboard';
document.body.append(keyboard); 

let numRow = document.createElement('div');
numRow.className = 'row';
keyboard.append(numRow);

let row1 = document.createElement('div');
row1.className = 'row';
keyboard.append(row1);

let row = document.createElement('div');
row.className = 'row';
keyboard.append(row);

let row2 = document.createElement('div');
row2.className = 'row';
keyboard.append(row2);

let lastRow = document.createElement('div');
lastRow.className = 'row';
keyboard.append(lastRow);


makeElement(numbers, numRow);
makeElement(lettersFirstRow, row1);
makeElement(letters, row);
makeElement(letters2, row2);
makeElement(special, lastRow);


function keypressed(event) {
    let actoy = document.querySelector(`[data-code = ${event.code}]`);
    if (actoy){
        actoy.classList.toggle('clicked');
    }
}

document.addEventListener('keydown', keypressed);
document.addEventListener('keyup', keypressed);
row.addEventListener('click', keypressed);


