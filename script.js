// Toggle Sidebar
function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    let content = document.querySelector(".content");

    if (sidebar.style.width === "250px" || sidebar.style.width === "") {
        sidebar.style.width = "0";
        content.style.marginLeft = "0";
    } else {
        sidebar.style.width = "250px";
        content.style.marginLeft = "270px";
    }
}

// Toggle Submenus (Independent toggling)
function toggleMenu(menuId) {
    let submenu = document.getElementById(menuId);
    submenu.classList.toggle("show");
}

// Load Chart.js
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("salesChart").getContext("2d");

    new Chart(ctx, {
        type: "line", 
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
                label: "Orders",
                data: [50, 80, 60, 100, 90, 120],
                borderColor: "#ff9900",
                borderWidth: 2,
                fill: false
            },
            {
                label: "Revenue ($)",
                data: [5000, 8000, 7500, 12000, 11000, 15000],
                borderColor: "#008000",
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Ensures proper scaling
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
});
