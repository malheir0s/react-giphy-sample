import axios from 'axios';


const api = axios.create({
    baseURL: 'localhost:3333',
});


/**
    * Funções hipotéticas de CRUD para os gifs.
    * 
    * 
    * a função saveGifOnDatabase vai receber o gif como parametro ( poderia ser chamado na página que exibe os gifs individualmente, por exemplo)
    * 
    * 
    *  a função deleteGifOnDb recebe o ID do gif a ser deletado como parametro
    * 
    * a funcao editGifOnDb recebe a ID do gif a ser atualizado, e os dados que se desejam atualizar.
    */
function saveGifOnDataBase(gif) {
    api.post('/saveGif', gif).then(response => {
        alert('Gif salvado com sucesso.')
    }).catch(error => {
        alert('Erro salvar gif.');
        console.log(error)
    })
}

function deleteGifOnDB(id) {
    api.delete(`/gifs/${id}`).then(response => {
        alert('Gif deletado com sucesso.')
    }).catch(error => {
        alert('Erro deletar gif.');
        console.log(error)
    })
}

function editGifOnDb(data, id){
    api.put(`/gifs/${id}`, data).then(response => {
        alert('Gif deletado com sucesso.')
    }).catch(error => {
        alert('Erro deletar gif.');
        console.log(error)
    })
}

