function onReady(event){
   //삭제 버튼 
  let viewToDeleteBtn = document.getElementById("viewDeleteBtn");
  	viewToDeleteBtn.onclick = viewToDeleteBtnChk;
   // 수정 버튼
  let viewToEditBtn= document.getElementById("viewEditBtn");
  	viewToEditBtn.onclick = viewToEditBtnChk;
}
function viewToEditBtnChk(){
	console.log("view.html- 수정 버튼 확인") 
	
	//window.location.href = "http://localhost:8080/view/view.html";
	
}

function viewToDeleteBtnChk(){
	console.log("view.html- 삭제 버튼 확인")
}


