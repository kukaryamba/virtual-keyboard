let wrapper =  document.createElement('div');
wrapper.className ='wrapper';
document.body.append(wrapper);


let textarea = document.createElement('textarea');
textarea.className ='text';
textarea.value = '';
textarea.autofocus = true;
textarea.id = 'textarea';
wrapper.append(textarea);



let numbers = [{value: '`', rusValue: 'ё', code: 'Backquote'}, {value: '1', rusValue: '1', code: 'Digit1'}, {value: '2', rusValue: '2', code: 'Digit2'}, 
{value: '3', rusValue: '3', code: 'Digit3'}, {value: '4', rusValue: '4', code: 'Digit4'}, {value: '5', rusValue: '5', code: 'Digit5'},
{value: '6', rusValue: '6', code: 'Digit6'}, {value: '7', rusValue: '7', code: 'Digit7'}, {value: '8', rusValue: '8', code: 'Digit8'}, {value: '9', rusValue: '9', code: 'Digit9'},
{value: '0', rusValue: '0', code: 'Digit0'}, {value: '-', rusValue: '-', code: 'Minus'}, {value: '=', rusValue: '=', code: 'Equal'}, {class: 'system', type: 'multilang', name: 'backspase', code: 'Backspace'}];


let lettersFirstRow = [{value: '\t', rusValue: '\t', code: 'Tab', type: 'multilang', name: 'Tab'}, {value: 'q', rusValue: 'й', code: 'KeyQ'}, {value: 'w', rusValue: 'ц', code: 'KeyW'}, {value: 'e', rusValue: 'у', code: 'KeyE'}, 
{value: 'r', rusValue: 'к', code: 'KeyR'}, {value: 't', rusValue: 'е', code: 'KeyT'}, {value: 'y', rusValue: 'н', code: 'KeyY'},
{value: 'u', rusValue: 'г', code: 'KeyU'}, {value: 'i', rusValue: 'ш', code: 'KeyI'}, {value: 'o', rusValue: 'щ', code: 'KeyO'}, {value: 'p', rusValue: 'з', code: 'KeyP'},
{value: '[', rusValue: 'х', code: 'BracketLeft'}, {value: ']', rusValue: 'ъ', code: 'BracketRight'}, {value: '\\', rusValue: '\\', code: 'Backslash'}, {class: 'system', type: 'multilang', name: 'del', code: 'Delete'}];


let letters = [{ code: 'CapsLock', class: 'system', type: 'multilang', name: 'caps lock'}, {value: 'a', rusValue: 'ф', code: 'KeyA'}, {value: 's', rusValue: 'ы', code: 'KeyS'}, 
{value: 'd', rusValue: 'в', code: 'KeyD'}, {value: 'f', rusValue: 'а', code: 'KeyF'}, {value: 'g', rusValue: 'п', code: 'KeyG'}, {value: 'h', rusValue: 'р', code: 'KeyH'},
{value: 'j', rusValue: 'о', code: 'KeyJ'}, {value: 'k', rusValue: 'л', code: 'KeyK'}, {value: 'l', rusValue: 'д', code: 'KeyL'}, {value: ':', rusValue: 'ж', code: 'Semicolon'},
{value: "'", rusValue: 'э', code: 'Quote'}, {value: '\n', code: 'Enter', class: 'system', type: 'multilang', name: 'Enter'}];

let letters2 = [{value: 'Shift', rusValue: 'Shift', code: 'ShiftLeft', class: 'system', type: 'multilang', name: 'shift'}, {value: 'z', rusValue: 'я', code: 'KeyZ'}, {value: 'x', rusValue: 'ч', code: 'KeyX'}, {value: 'c', rusValue: 'с', code: 'KeyC'},
{value: 'v', rusValue: 'м', code: 'KeyV'}, {value: 'b', rusValue: 'и', code: 'KeyB'},
{value: 'n', rusValue: 'т', code: 'KeyN'}, {value: 'm', rusValue: 'ь', code: 'KeyM'}, {value: ',', rusValue: 'б', code: 'Comma'}, {value: '.', rusValue: 'ю', code: 'Period'},
{value: '/', rusValue: '.', code: 'Slash'}, {value: '▲', rusValue: '▲', code: 'ArrowUp'}, {class: 'system', type: 'multilang', name: 'Shift', code: 'ShiftRight'}];

let special = [{code: 'ControlLeft', class: 'system', type: 'multilang', name: 'ctrl'}, {code: 'MetaLeft', class: 'system', type: 'multilang', name: 'win'}, {code: 'AltLeft', class: 'system', type: 'multilang', name: 'alt'}, 
{value: ' ', rusValue: ' ', code: 'Space', type: 'multilang', name: ' '}, {code: 'AltRight', class: 'system',  type: 'multilang', name: 'alt'}, 
{value: '◄', rusValue: '◄', code: 'ArrowLeft'}, {value: '▼', rusValue: '▼', code: 'ArrowDown'}, {value: '►', rusValue: '►', code: 'ArrowRight'}, {code: 'ControlRight', class: 'system',  type: 'multilang', name: 'ctrl'} ];



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

      if (letter.type == 'multilang'){
            div.innerHTML = letter.name;
        } else {
            div.innerHTML = letter.value;
         }

        let count = 0;

        
        if (letter.code == 'Backspace') {
            div.classList.add('backspc', 'dark-key');
        }
        
        if (letter.code == 'Tab') {
            div.classList.add('tab', 'dark-key');
        }

        if (letter.code == 'ShiftLeft') {
            div.classList.add('shift', 'dark-key');
        }

        if (letter.code == 'CapsLock') {
            div.classList.add('caps', 'dark-key');
        }

        if (letter.code == 'ShiftRight' || letter.code == 'Enter') {
            div.classList.add('shift-Right', 'dark-key');
        }

        if (letter.name == 'ctrl' || letter.name == 'del' || letter.name == 'win' || letter.name == 'alt') {
            div.classList.add('dark-key');
        }
        
        if (letter.code == 'Space') {
            div.classList.add('space', 'dark-key');
        }

        if (letter.code == 'Enter') {
            div.classList.add('enter');
        }

        if (letter.class == 'system') {
            div.classList.add('system');
        }

        function countLangChanges(){
            count += 1;
            return count % 2 !== 0 ? true : false;
        } 
        
        function hasChanged(){
            if (letter.type == 'multilang'){
                div.innerHTML = letter.name;
            } else {
                div.innerHTML = countLangChanges() ? letter.rusValue : letter.value;
            }
        }
        
        
        document.addEventListener('keyup', function(event){
            if (event.getModifierState("CapsLock")) {
                div.innerHTML = div.innerHTML.toUpperCase();
              } 
            else {
                div.innerHTML = div.innerHTML.toLowerCase();
            }
        }); 

        changeLang(
            hasChanged,
            'ControlLeft',
            'ShiftLeft'
        ); 
         

        function isCaps(){
            div.innerHTML = div.innerHTML.toUpperCase();
        }
        
        changeLang(
            isCaps,
            'CapsLock'
        ); 
         


        document.addEventListener('mouseup', function() {
            div.classList.remove('clicked');
            
        });
        
        row.append(div);

        div.dataset.code = letter.code;

        document.addEventListener('keydown', function(event){
            if(event.code == letter.code && textarea !== document.activeElement ){
                if(letter.class == 'system'){
                    textarea.value += '';
                } else {
                    textarea.value += letter.value;
                }
                }           
        });
    });
}

let keyboard = document.createElement('div');
keyboard.className = 'keyboard';
wrapper.append(keyboard); 

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


function keypressedAnimation(event) {
    let pressed = document.querySelector(`[data-code = ${event.code}]`);
    if (pressed){
        pressed.classList.toggle('clicked');
    }
}

document.addEventListener('keydown', keypressedAnimation);
document.addEventListener('keyup', keypressedAnimation);
row.addEventListener('click', keypressedAnimation);


keyboard.addEventListener('click', (event) => {
    const isButton = event.target.classList.contains('button');
    const isSystem = event.target.classList.contains('system');
    const isTab = event.target.classList.contains('tab');
    const isEnter = event.target.classList.contains('enter');
    if (isTab){
        textarea.value += '\t';
    } else if (isEnter) {
        textarea.value += '\n';
    } else if (isButton && !isSystem){
        textarea.value += event.target.innerHTML;
    }
});

let p = document.createElement('p');
p.className ='hint';
p.innerHTML = "Клавиатура создана в операционной системе Windows. <br> Для переключения языка комбинация: левыe ctrl + shift";
wrapper.append(p);