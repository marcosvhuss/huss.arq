const script_do_google = 'https://script.google.com/macros/s/AKfycbz3il4L-D3ciMRl0Op9_WfY9_tMLJ1JHFldc3bCXDfTEzcNrBQobFkD1UcnR191uGS4pg/exec';
const dados_do_formulario = document.forms['formulario-contato'];

dados_do_formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    fetch(script_do_google, { method: 'POST', body: new FormData(dados_do_formulario) })
        .then(response => {
            alert('Mensagem enviada com sucesso!' , response);
            dados_do_formulario.reset();
        })
        .catch(error => alert('Erro ao enviar a mensagem: ' + error.message));
}   );
