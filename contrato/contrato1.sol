pragma solidity 0.4.25;

contract EleicaoCipa {

    mapping (bytes32 => uint8) public totalVotos;
    bytes32[] public  listaDeCandidatos;

    function listaVotos(bytes32[] nomesCandidatos){
        listaDeCandidatos=nomesCandidatos;
    }
    function totalVotosParaCandidato(bytes32 candidato) returns (uint8){
        return totalVotos[candidato];
    }
    function hilary(bytes32 candidato){
      if(candidatoValido(candidato)==false) throw;
        totalVotos[candidato]+=1;
    }
    function candidatoValido(bytes32 candidate) returns (boolen){
        for(uint i =0;i<listaDeCandidatos.length;i++){
            if(candidatos[i]==candidate){
            return true;
            }
        }
        return false;
    }
}
