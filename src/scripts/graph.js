// This event listener waits for the DOM to be fully loaded before executing the code inside
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('progressChart').getContext('2d');

    // Data for the chart including labels (months) and datasets (weight and muscle mass)
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Weight (lbs)',
            data: [180, 175, 170, 165, 160, 155],
            borderColor: 'rgba(75, 192, 192, 1)',  // Border color for the weight line
            backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Background color (fill) for the weight line
            fill: true  // Indicates that the line should be filled with color below it
        },
        {
            label: 'Muscle Mass (%)',
            data: [25, 26, 27, 28, 29, 30],
            borderColor: 'rgba(153, 102, 255, 1)',  // Border color for the muscle mass line
            backgroundColor: 'rgba(153, 102, 255, 0.2)',  // Background color (fill) for the muscle mass line
            fill: true  // Indicates that the line should be filled with color below it
        }]
    };

    // Configuration for the chart including the type, data, and options
    const config = {
        type: 'line',  // Chart type
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',  // Position of the legend
                },
                title: {
                    display: true,
                    text: 'Fitness Progress Over Time'  // Title of the chart
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Month'  // Title for the x-axis
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Value'  // Title for the y-axis
                    }
                }
            }
        }
    };

    // Create the chart with the given context and configuration
    new Chart(ctx, config);
});
