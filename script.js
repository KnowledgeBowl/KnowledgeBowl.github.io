function page1(depth){
	if(depth==1)
		location.href='IndexPage1.html';
	else if(depth==2)
		location.href='../IndexPage1.html';
	}

function page2(depth){
	if(depth==1)
	location.href='Pages/IndexPage2.html';
	else if(depth==2)
		location.href='IndexPage2.html';

	}

function page3(depth){
	if(depth==1)
	location.href='Pages/IndexPage3.html';
	else if(depth==2)
		location.href='IndexPage3.html';

	}

function page4(depth){
	if(depth==1)
		location.href='Pages/IndexPage4.html';
	else if(depth==2)
		location.href='IndexPage4.html';
	}


function blueImg(x) {
    x.style.opacity = .6;
}

function normalImg(x) {
    x.style.opacity = 1;
}

document.getElementById("quiz").addEventListener('change', function(event) {
	let aTotal = 0;
	let bTotal = 0;
	let cTotal = 0;
	let aukTotal = 0;

let checkedBoxes = document.querySelectorAll("#quiz input:checked");
  for( let i = 0; i < checkedBoxes.length; i++) {
    if(checkedBoxes[i].value === 'ATeam') {
      aTotal++;
    }
    if(checkedBoxes[i].value === 'BTeam') {
      bTotal++;
    }
    if(checkedBoxes[i].value === 'CTeam') {
      cTotal++;
  	}
if(checkedBoxes[i].value === 'Auk') {
      aukTotal++;
    } 
  }
  document.querySelector("#quizDiv").innerHTML = `A Team Score:${aTotal}; B Team Score:${bTotal}; C Team Score:${cTotal}; The Auk's Score:${aukTotal} `;
});
