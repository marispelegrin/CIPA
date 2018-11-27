web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:3000"));
abi = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]')
VotingContract = web3.eth.contract(abi);
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address

contractInstance = VotingContract.at('0x4a9c1d265d06d47e8f7b03ffa234a918ccf622');
candidates = {"Fulano De Tal": "candidato-1", "Beltrano De Tal": "candidato-2", "Sicrano De Tal": "candidato-3"};

function votar() {
    candidatoId = $("#candidato").val();
    contractInstance.votar(candidatoId, {from: web3.eth.accounts[0]}, function() {
        let div_id = candidato[candidatoId];
        $("#" + div_id).html(contractInstance.totalVotesForCandidate.call(candidatoId).toString());
    });
}

$(document).ready(function() {
    candidatoId = Object.keys(candidatos);
    for (var i = 0; i < candidatoId.length; i++) {
        let name = candidateNames[i];
        let val = contractInstance.totalVotesFor.call(name).toString();
        $("#" + candidato[nome]).html(val);
    }
});
