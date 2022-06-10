
function onReady(event){
    let searchBtn = document.getElementById('board_listSearchBtn');
    searchBtn.onclick = searchBtnChk;
    
    
   // let linkView = document.getElementById('viewLink');
   // linkView.onclick = linkViewBtnChk;
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
                `<div class="listItem">
            	 	<div class="num">${listItem.bno}</div>
                 	<div class="title" onclick="linkViewBtnChk()">
                 	<a href="/view/view.html?bno=${listItem.bno}" id="viewLink">${listItem.title}</a></div>
                 	<div class="writer">${listItem.writer}</div>
                 	<div class="date">${listItem.reg_date}</div>
                 	<div class="cnt">0</div>
                 </div>` ;
        }
         document.getElementById('printOutItem').innerHTML = divPrintOutInsert;
}

function linkViewBtnChk(viewResult){
	//alert('안녕하세요');
	    let dlViewPrintOutInsert = '';
        for(let i= 0; i<viewResult.length; i++){
            const viewListItem = viewResult[i];
            dlViewPrintOutInsert +=                  
                 `<dl>
                    <dt>번호</dt>
                    <dd>${viewListItem.bno}</dd>
                  </dl>
                  <dl>
                    <dt>등록자</dt>
                    <dd>${viewListItem.bno}</dd>
                 </dl>
                 <dl>
                    <dt>등록일자</dt>
                    <dd>${viewListItem.reg_date}/dd>
                 </dl>
                 <dl>
                    <dt>조회</dt>
                    <dd>${viewListItem.view_cnt}</dd>
                 </dl>
           		 </div>
          
            	<div class="cont">
                ${viewListItem.content}
           	    </div>` ;
   
                 
        }
         document.getElementById('viewPrintOutInsert').innerHTML = dlViewPrintOutInsert;
}
