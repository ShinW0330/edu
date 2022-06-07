
function onReady(event){
    let searchBtn = document.getElementById('board_listSearchBtn');
    searchBtn.onclick = searchBtnChk;
}
function searchBtnChk() {
    // console.log('클릭 됌'); 확인 끝
    /**1. 조회하는 input type= text 에서 id 를 가져오기
     * 2. 가져온 id를 변수에 할당 변수명: searchTxt
     * 3. searchTxt의 value 값을 또다른 변수에 할당 변수명 : searchTxtValue*/

    let searchTxt =document.getElementById('searchText');
    let searchTxtValue= searchTxt.value;
    // let searchTxtValue= document.getElementById('searchText').value;

    let searchWriterValue = document.getElementById('searchWriter').value;

    let fetcHostSearch = 'http://localhost:8080/board/findAll?searchTxt='
        + searchTxtValue
        + '&searchWrite'
        +  searchWriterValue

    fetch(fetcHostSearch).then((response) => response.json()).then()
}

function printOutBoardList(result) {
    let divPrintOutInsert = '';
        for(let i= 0; i<result.length; i++){
            const item = result[i];
            divPrintOutInsert += 
            	'<div className="listItem">' +
                '<div className="num">' + item.bno + '</div>' +
                '<div className="title"><a href="#">' +item.tutle +'</a></div>' +
                '<div className="writer">' + item.writer +'</div>'
                '<div className="date">' + itme.now() +'</div>'
                '<div className="cnt">0</div>' +
                '</div>';
        }
         document.getElementById('printOutItem').innerHTML = divPrintOutInsert;
}