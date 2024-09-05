document.getElementById('agendarVisita').addEventListener('submit', function(e) {
    e.preventDefault();

    const comunidade = document.getElementById('nomeComunidade').value;
    const servico = document.getElementById('tipoServico').value;
    const data = document.getElementById('dataVisita').value;

    const servicosDisponiveis = {
        medicaoPressao: 'Medição de Pressão Arterial',
        orientacaoDoencas: 'Orientação sobre Doenças',
        apoioPsicologico: 'Apoio Psicológico'
    };

    document.getElementById('agendamentoConfirmado').innerHTML = `
        <h3>Agendamento Confirmado!</h3>
        <p><strong>Comunidade:</strong> ${comunidade}</p>
        <p><strong>Serviço:</strong> ${servicosDisponiveis[servico]}</p>
        <p><strong>Data:</strong> ${data}</p>
    `;

    document.getElementById('agendarVisita').reset();
});

// Lista de voluntários (apenas para exemplo)
const voluntarios = [
    { nome: 'Alberto da Silva Neto', especialidade: 'Enfermeiro' },
    { nome: 'Italo dos Santos', especialidade: 'Psicólogo' },
    { nome: 'Vitor Hugo Massola', especialidade: 'Médico' },
    { nome: 'João Henrique Gomes', especialidade: 'Secretário' }
];

// Exibindo voluntários
const listaVoluntarios = document.getElementById('listaVoluntarios');
voluntarios.forEach(voluntario => {
    const li = document.createElement('li');
    li.textContent = `${voluntario.nome} - ${voluntario.especialidade}`;
    listaVoluntarios.appendChild(li);
});
