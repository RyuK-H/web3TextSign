/* 
* Created by RyuK on 2020.06.25 17:35 pm 
*/
var Web3 = require('web3');
var web3 = new Web3("ws://localhost:8545");

// private key should be prefixed with '0x'
const privateKey = '0x~~~~~~~';
const message = 'Ryuk';


const signTest = async function(){
  const sigObj = await web3.eth.accounts.sign(message, privateKey)
  const msgHash = sigObj.messageHash;
  const sig = sigObj.signature;

  console.log("message hash value : ", msgHash);
  console.log("signature : ", sig);

  // 확인을 원하는 사람은 해당 함수를 호출 로그 확인 private key에 대한 address 출력
  // const whoSigned = await web3.eth.accounts.recover(message, sig);
  // console.log(whoSigned);
}

signTest();