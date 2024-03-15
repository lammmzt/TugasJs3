
function dataPerson() {
    // get form
    let form = document.getElementById('frm');
    // get div to show data
    let contents = document.getElementById('hasil');

    // gat data from form
    let nama = form.nama.value;
    let pekerjaan = form.pekerjaan.value;
    let hobby = form.hobby.value;
    
    // parse data to html
    contents.innerHTML = `Nama: ${nama} <br> Pekerjaan: ${pekerjaan} <br> Hobby: ${hobby}`; 
}

