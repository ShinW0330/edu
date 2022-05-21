function hell() {
    alert('이제부터 헬이다.');
    fetch('http://localhost:8080/sample?a=bbbb').then((response) => response.json())
        .then((result) => {
            result.forEach(data => {
                debugger;

                const li = document.createElement('li');
                li.append(data.id);
                li.append(data.col1);
                li.append(data.col2);
                document.getElementById('result').appendChild(li);
            })
        });

}