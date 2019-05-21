(function () {
    //拖动上传
    let drag_box = document.getElementById("drag_box");
    let fd = new FormData();
    drag_box.addEventListener('dragenter', function (e) {
        console.log('enter');
        drag_box.className = 'drag active';
    });
    drag_box.addEventListener('dragleave', function (e) {
        console.log('leave');
        drag_box.className = 'drag';
    });
    drag_box.addEventListener('drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
        drag_box.className = 'drag';
        filesVue.saveFile(e.dataTransfer.files);
    });
    drag_box.addEventListener('dragover', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });
})()