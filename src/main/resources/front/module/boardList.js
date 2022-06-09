
function onReady(event) {
	let searchBnt = document.getElementById('searchBnt');
	searchBnt.onclick = serchBntChk;

	let submitBnt = document.getElementById('submitBnt')
	submitBnt.onclick = submitBntChk;
}

function serchBntChk() {
	console.log("클릭 됌");

	let searchTxt = document.getElementById('searchText');
	let searchTxtValue = searchTxt.value;

	let searchWrite = document.getElementById('searchWriter');
	let searchWriteValue = searchWrite.value;

	let fetchHost = 'http://localhost:8080/board/findAll?searchTxt='
		+ searchTxtValue
		+ '&searchWrite='
		+ searchWriteValue

	/*
	1. searchTxt 연결
	2. searchTxt 밸류값 갖어오기
	3. path 경로 지정 
	4. searchTxt value 값을 json 파일로 변환 
	5. 변환한 json 파일을 서버에 전송 
	*/

	fetch(fetchHost).then((response) => response.json()).then(writeBoardList)

}

function writeBoardList(result) {
	let html = '';

	for (let i = 0; i < result.length; i++) {
		const item = result[i];
		html += '<div class="item">' +
			'<div class="num">' + item.bno + '</div>' +
			'<div class="title"> <a href="#">' + item.title + '</a> </div>' +
			'<div class="date">'+ item.reg_date +'</div>' +
			'<div class="writer">' + item.writer + '</div>' +
			'<div class="cnt">0</div>' +
			'</div>';

	}
	document.getElementById('result').innerHTML = html;
}

function submitBntChk() {
	console.log("submit 버튼 클릭 확인");
	/**
	1. textarea에서 id = textArea 가져와 변수txtArea 에 할당  
	2. txtArea value 값 가져오기 */
	let txtArea = document.getElementById('textArea');
	let txtAreaValue = txtArea.value;

	let title = document.getElementById('searchTitle').value;

	let param = { title: title, content: txtAreaValue };

	param.title = title;
	param.content = txtAreaValue;

	let fetchHost2 = 'http://localhost:8080/board/create'

	fetch(fetchHost2, {
		method: 'post', headers: {
			'Content-Type': 'application/json',
		}, body: JSON.stringify(param)
	}).then((response) => response.json()).then(function(result) {
		if(result === 1){
			alert('등록됨');
		}
	})


}
