// Doughnut Chart
const doughnutChart = new Chart(document.getElementById('doughnutChart').getContext('2d'), {
    type: 'doughnut',
    data: {
        labels: ['32%', '27%', '23%', '18%'],
        datasets: [{
            label: 'Progress',
            data: [32, 27, 23, 18],
            backgroundColor: ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, // Pour permettre un redimensionnement flexible
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true,
            }
        }
    }
});

// Bar Chart
const barChart = new Chart(document.getElementById('barChart').getContext('2d'), {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Performance',
            data: [12, 19, 3, 5, 2, 3, 7],
            backgroundColor: '#f39c12'
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
///////TODO//////////////////////////////////
////TASK//
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupération des valeurs du formulaire
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;

    // Création d'une nouvelle ligne dans le tableau
    const taskTable = document.getElementById('taskTable').getElementsByTagName('tbody')[0];
    const newRow = taskTable.insertRow();

    // Insertion des cellules dans la nouvelle ligne
    const nameCell = newRow.insertCell(0);
    const descriptionCell = newRow.insertCell(1);

    // Assignation des valeurs aux cellules
    nameCell.textContent = taskName;
    descriptionCell.textContent = taskDescription;

    // Réinitialisation du formulaire
    document.getElementById('taskForm').reset();
});
