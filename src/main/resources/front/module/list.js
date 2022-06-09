
function onReady(event){
    let searchBtn = document.getElementById('board_listSearchBtn');
    searchBtn.onclick = searchBtnChk;
}
function searchBtnChk() {
     console.log('클릭 됌');
    /**1. 조회하는 input type= text 에서 id 를 가져오기
     * 2. 가져온 id를 변수에 할당 변수명: searchTxt
     * 3. searchTxt의 value 값을 또다른 변수에 할당 변수명 : searchTxtValue*/

    let searchTxt =document.getElementById('searchText');
    let searchTxtValue= searchTxt.value;
    // let searchTxtValue= document.getElementById('searchText').value;

	let searchWrite = document.getElementById('searchWriter');
    let searchWriterValue = searchWrite.value;
	
    let fetcHostSearch = 'http://localhost:8080/board/findAll?searchTxt='
        + searchTxtValue
        + '&searchWrite'
        +  searchWriterValue

    fetch(fetcHostSearch).then((response) => response.json()).then(printOutBoardList)
}

function printOutBoardList(result) {
    let divPrintOutInsert = '';
        for(let i= 0; i<result.length; i++){
            const listItem = result[i];
            divPrintOutInsert += 
            	'<div class="listItem">' +
                '<div class="num">'+ listItem.bno+'</div>' +
                '<div class="title"><a href="edit.html">' +listItem.title +'</a></div>' +
                '<div class="writer">' + listItem.writer +'</div>' +
                '<div class="date">' + listItem.reg_date + '</div>' +
                '<div class="cnt">0</div>' +
                '</div>';
        }
         document.getElementById('printOutItem').innerHTML = divPrintOutInsert;
}