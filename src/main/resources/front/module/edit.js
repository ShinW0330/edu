function onReady(event){
   let submitEditBtn = document.getElementById('editBtn');
   submitEditBtn.onclick = submitEditChk;
}

function submitEditChk(){
    console.log('수정 버튼 확인')
	
	let txtAreaEdit = document.getElementById('editContText');
	let txtAreaEditValue = txtAreaEdit.value;
debugger
	let titleEdit = document.getElementById('editTitle').value;

	let param = { title: titleEdit, content: txtAreaEditValue };
	
	param.title = titleEdit;
	param.content = txtAreaEditValue;

	let fetchHostSumitEdit = 'http://localhost:8080/board/getUpdate'

	fetch(fetchHostSumitEdit, {
		method: 'post', headers: {
			'Content-Type': 'application/json',
		}, body: JSON.stringify(param)
	}).then((response) => response.json()).then(function(result) {
		if(result === 1){
			alert('등록됨');
		}
	})


}