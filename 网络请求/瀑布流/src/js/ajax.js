// ajaX请求函数封装
function ajax(method ,url ,callback ,data ,flag){
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = window.XMLHttpRequest;
    }else{
        xhr = new ActiveXObject('Microsoft.XMLHttp');
    }
    method = method.toUpperCase();
    if(method == 'GET'){
        var date = new Date();
        var timer = date.getTime();
        //在这里open方法需要传入三给参数，第一个请求方式，第二个url，在这里加上timer是为了使得所传入的数据能够得到
        // 一个唯一的标识，第三个参数是true表示数据传入的方式是异步传送
        xhr.open(method ,url + '?' + data + '&timer=' + timer ,flag);
        xhr.send();
    }else if(method == 'POST'){
        xhr.open(method ,url ,flag);
        xhr.setRequestHeader('Cotent-type','application/x-www-form-urlencoded');
        xhr.send(data);
    }
    xhr.onReadyStateChange = function (){
        if(xhr.readyState == 4){
            if(xhr.Status == 200){
                callback(xhr.responsText);
            }else{
                console.log('error');
            }
        }
    }
}