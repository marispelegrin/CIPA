function calcularValor() {
    
    var valorBase = document.formDecTerc.valorSalario.value;
	var meses = document.formDecTerc.meses.value;
	
    var valorCalculado;   
        if (meses == "janeiro") {
            valorCalculado = valorBase;
        } else if (meses == "fevereiro") {
            valorCalculado = valorBase/12*11;
        } else if (meses == "marco") { 
            valorCalculado = valorBase/12*10;
        } else if (meses == "abril") {
            valorCalculado = valorBase/12*9;
        } else if (meses == "maio") {
            valorCalculado = valorBase/12*8;
        } else if (meses == "junho") {
            valorCalculado = valorBase/12*7;
        } else if (meses == "julho") {
            valorCalculado = valorBase/12*6;
        }else if (meses == "agosto") {
            valorCalculado = valorBase/12*5; 
        } else if (meses == "setembro") {
            valorCalculado = valorBase/12*4;       
        } else if (meses == "outubro") {
            valorCalculado = valorBase/12*3;
        } else if (meses == "novembro") {
            valorCalculado = valorBase/12*2;
        } else if (meses == "dezembro") {
            valorCalculado = valorBase/12;
        } 
        var valorFinal = "Seu décimo terceiro salário <br>" + "Total (R$):" + valorCalculado;
        document.getElementById("calculo").innerHTML = valorFinal;
		}


web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:3000"));
abi = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]')
VotingContract = web3.eth.contract(abi);
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address

contractInstance = VotingContract.at('0x4a9c1d265d06d47e8f7b03ffa234a918ccf622');
candidates = {"Trump": "candidate-1", "Hilary": "candidate-2"};

function voteForCandidate() {
    candidateName = $("#candidate").val();
    contractInstance.voteForCandidate(candidateName, {from: web3.eth.accounts[0]}, function() {
        let div_id = candidates[candidateName];
        $("#" + div_id).html(contractInstance.totalVotesForCandidate.call(candidateName).toString());
    });
}

$(document).ready(function() {
    candidateNames = Object.keys(candidates);
    for (var i = 0; i < candidateNames.length; i++) {
        let name = candidateNames[i];
        let val = contractInstance.totalVotesFor.call(name).toString();
        $("#" + candidates[name]).html(val);
    }
});
