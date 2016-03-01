var num_one, num_two, calculateBtn, total, answer;

num_one = document.querySelector('#num_one');
num_two = document.querySelector('#num_two');
calculateBtn = document.querySelector('#calculateBtn')
answer = document.querySelector('#answer')

function add(event) {
	// alert("heyoh");
	total = Number(num_one.value) + Number(num_two.value)
	answer.textContent = total
}

calculateBtn.addEventListener('click', add);