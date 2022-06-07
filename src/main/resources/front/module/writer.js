function onReady(){
    let submitButton = document.getElementById('submitBnt');
    submitButton.onclick = submitButtonChk;
}

function submitButtonChk(){
    console.log("찍힘")
    /*1 .title , content 연결\
    *2. value 값 할당 */
    debugger
    let inputTitleTxt = document.getElementById('inputTitle');
    // let inputWriterTxt = document.getElementById('inputWriter');

    let inputTitleTxtValue = inputTitleTxt.value;
    // let inputWriterTxtValue = inputWriterTxt.value;

    let inputContentTxtArea = document.getElementById('inputContent');
    let inputTxtAreaValue = inputContentTxtArea.value;

    let param = {title: inputTitleTxtValue, content : inputTxtAreaValue};

    let fetchHostSubmit = 'http://localhost:8080/board/create'

    fetch(fetchHostSubmit, {
        method: 'post', headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify(param)
    }).then((response) => response.json()).then(function(result) {
        if(result === 1){
            alert('등록됨');
        }
    })

}