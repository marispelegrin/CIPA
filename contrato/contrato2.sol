pragma  solidity 0.4.25;

contract eleicaoCipa { 
    struct candidato {
        uint id;
        string name;
        uint contagemVotos;
    }

    // Armazena as contas que já votaram
    mapping(address => bool) public votantes;
    // Armazena lista de candidatos
    // Busca o candidato
    mapping(uint => candidato) public candidatos;
    // Armazena contagem dos candidatos
    uint public contagemCandidatos;

    event votou(
        uint indexed _candidatoId
    );

    function Eleicao() public {
        addCandidate("Fulano De Tal");
        addCandidate("Beltrano De Tal");
        addCandidate("Sicrano De Tal");
    }

    function addCandidate(string _name) private {
        contagemCandidatos++;
        candidatos[contagemCandidatos] = candidato(contagemCandidatos, _name, 0);
    }

    function votar (uint _candidatoId) public {
        // Requer que o votante não tenha votado antes 
        require(!votantes[msg.sender]);
        // Requer um candidato válido
        require(_candidatoId > 0 && _candidatoId <= contagemCandidatos);
        // Grava o voto
        votantes[msg.sender] = true;
        // Atualiza a contagem dos votos dos candidatos
        candidatos [_candidatoId].contagemVotos++; 
        // Dispara a condição de votou
        emit votou(_candidatoId);
    }
}
