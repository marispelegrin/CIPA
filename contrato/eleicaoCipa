pragma solidity 0.4.25;

contract EleicaoCipa {
    
    struct Candidato {
        uint id;
        string nome;
        uint contagemVotos;
    }

    // Armazena as contas que já votaram
    mapping(address => bool) public votantes;
    
    // Armazena lista de candidatos
    // Busca o candidato
    mapping(uint => Candidato) public candidatos;
    
    // Armazena contagem dos candidatos
    uint public contagemCandidatos;

    event Votou(
        address indexed _votantes
    );

    constructor () public {
        Candidato memory candidato1 = Candidato(1, "Fulano De Tal", 0);
        candidatos[1] = candidato1;
        contagemCandidatos = contagemCandidatos + 1;
        
        Candidato memory candidato2 = Candidato(2, "Beltrano De Tal", 0);
        candidatos[2] = candidato2;
        contagemCandidatos = contagemCandidatos + 1;
        
        Candidato memory candidato3 = Candidato(3, "Sicrano De Tal", 0);
        candidatos[3] = candidato3;
        contagemCandidatos = contagemCandidatos + 1;
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
        emit Votou(msg.sender);
    }
    
    function resultado () public view returns (string, uint)  {
        if (candidatos[1].contagemVotos >= candidatos[2].contagemVotos && candidatos[1].contagemVotos > candidatos[3].contagemVotos) {
           return (candidatos[1].nome, candidatos[1].contagemVotos);
        }
        if (candidatos[2].contagemVotos >= candidatos[1].contagemVotos && candidatos[2].contagemVotos > candidatos[3].contagemVotos) {
           return (candidatos[2].nome, candidatos[2].contagemVotos);
        }
        if (candidatos[3].contagemVotos >= candidatos[1].contagemVotos && candidatos[3].contagemVotos > candidatos[2].contagemVotos) {
           return (candidatos[3].nome, candidatos[3].contagemVotos);
        }   
           
    }
    
}
