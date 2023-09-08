const modal = document.getElementById("modal");

// Time Complexity is O(sqrt((n-5)/6)) and Space Complexity O(1)
function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i == 0 || number % (i + 2) == 0) return false;
  }
  return true;
}

//Time Complexity is O(n*(sqrt((n-5)/6)) and Space Complexity O(n)
function findPrimesInRange(start, end) {
  const numberStats = [];
  for (let num = Math.max(2, start); num <= end; num++) {
    const start = performance.now();
    const isNumberPrime = isPrime(num);
    const end = performance.now();
    if (isNumberPrime) {
      numberStats.push({ number: num, isPrime: true, timeTaken: end - start });
    } else {
      numberStats.push({ number: num, isPrime: false, timeTaken: end - start });
    }
  }
  return numberStats;
}

function getAverageForPrimeAndAllNumbers(numberStats) {
  let totalTimeForAllNumbers = 0;
  let totalTimeForPrimeNumbers = 0;
  let noOfPrimeNumbers = 0;
  let noOfNumbers = 0;

  for (let numberStat of numberStats) {
    if (numberStat?.isPrime) {
      totalTimeForPrimeNumbers += numberStat?.timeTaken;
      noOfPrimeNumbers++;
    }
    totalTimeForAllNumbers += numberStat?.timeTaken;
    noOfNumbers++;
  }

  return {
    totalTimeForAllNumbers,
    totalTimeForPrimeNumbers,
    averageTimeForPrimeNumbers: totalTimeForPrimeNumbers / noOfPrimeNumbers,
    averageTimeForAllNumbers: totalTimeForAllNumbers / noOfNumbers,
  };
}

function populateMainPage(start, end, totalTimeForAllNumbers, averageTimeForAllNumbers, averageTimeForPrimeNumbers) {
  // populate elements in main page
  const statsBox = document.getElementById("stats_info");

  const infoText = `Stats for numbers in range ${start} - ${end}`;
  const totalTimeForAllInstancesText = `Total time taken to run all instances: ${totalTimeForAllNumbers.toFixed(2)}ms`;
  const averageTimeForAllNumbersText = `Average time taken to determine if a single number is prime in front of each number: ${averageTimeForAllNumbers.toFixed(2)}ms`;
  const averageTimeForPrimeNumbersText = `Average time taken to determine if a single number is prime in front of prime numbers: ${averageTimeForPrimeNumbers.toFixed(2)}ms`;

  const infoTextElement = document.createElement("h3");
  infoTextElement.innerHTML = infoText;
  statsBox.appendChild(infoTextElement);

  const totalTimeForAllInstancesElement = document.createElement("p");
  totalTimeForAllInstancesElement.innerHTML = totalTimeForAllInstancesText;
  statsBox.appendChild(totalTimeForAllInstancesElement);

  const averageTimeForAllNumbersElement = document.createElement("p");
  averageTimeForAllNumbersElement.innerHTML = averageTimeForAllNumbersText;
  statsBox.appendChild(averageTimeForAllNumbersElement);

  const averageTimeForPrimeNumbersElement = document.createElement("p");
  averageTimeForPrimeNumbersElement.innerHTML = averageTimeForPrimeNumbersText;
  statsBox.appendChild(averageTimeForPrimeNumbersElement);

  const SeeMoreButtonElement = document.createElement("button");
  SeeMoreButtonElement.innerHTML = `See More`;
  SeeMoreButtonElement.onclick = function () {
    openModal();
  };
  statsBox.appendChild(SeeMoreButtonElement);
}

function populateModal(numberStats) {
  //populate elements in modal
  const table2B = document.getElementById("ex2b");
  const table2C = document.getElementById("ex2c");
  for (let numberStat of numberStats) {
    const row2B = `
          <td>${numberStat?.number}</td>
          <td>${numberStat?.isPrime ? "Prime" : "Normal"}</td>
          <td>${numberStat?.timeTaken.toFixed(2)} ms</td>
      `;

    const tableRow2BElement = document.createElement("tr");
    tableRow2BElement.innerHTML = row2B;
    table2B.appendChild(tableRow2BElement);

    if (numberStat.isPrime) {
      const row2C = `
        <td>${numberStat?.number}</td>
        <td>${numberStat?.timeTaken.toFixed(2)} ms</td>
      `;
      const tableRow2CElement = document.createElement("tr");
      tableRow2CElement.innerHTML = row2C;
      table2C.appendChild(tableRow2CElement);
    }
  }
}

function getPrimesInRangeStatsAndPopulateinPage() {
  const startValue = Number(document.getElementById("start").value);
  const endValue = Number(document.getElementById("end").value);

  if (!startValue || !endValue) {
    alert("Please enter the ranges!");
    return;
  }

  if (startValue > endValue || startValue< 0 ||endValue < 0) {
    alert("Ranges entered are not valid!");
    return;
  }

  const numberStats = findPrimesInRange(startValue, endValue);
  const {
    totalTimeForAllNumbers,
    averageTimeForAllNumbers,
    averageTimeForPrimeNumbers,
  } = getAverageForPrimeAndAllNumbers(numberStats);
  populateMainPage(startValue, endValue, totalTimeForAllNumbers, averageTimeForAllNumbers, averageTimeForPrimeNumbers);
  populateModal(numberStats);
}

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

function resetAll() {
  window.location.reload();
}

