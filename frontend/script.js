document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".menu a");
    const content = document.getElementById("content");

    menuLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const page = link.getAttribute("data-page");
            loadContent(page);
        });
    });

    function loadContent(page) {
        fetchPageContent(page)
            .then((contentHTML) => {
                content.innerHTML = contentHTML;
                enhancePage(page);
            })
            .catch((error) => {
                console.error("Error loading content:", error);
                content.innerHTML = `<h2>Error</h2><p>An error occurred while loading the content.</p>`;
            });
    }

    function fetchPageContent(page) {
        // Simulate fetching content from the server based on the page name
        // You can update this object with actual content as needed
        const content = {
            add_snack: `<h2>Add Snack</h2>
                <form id="add-snack-form" class="form">
                    <div class="form-group">
                        <label for="snack-name">Snack Name:</label>
                        <input type="text" id="snack-name" required>
                    </div>
                    <div class="form-group">
                        <label for="snack-price">Price:</label>
                        <input type="number" id="snack-price" required>
                    </div>
                    <div class="form-group">
                        <label for="snack-availability">Availability:</label>
                        <select id="snack-availability">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="snack-quantity">Quantity:</label>
                        <input type="number" id="snack-quantity" required>
                    </div>
                    <div class="form-group">
                        <button type="button" id="add-snack-button" class="btn">Add Snack</button>
                    </div>
                </form>`,
            remove_snack: `<h2>Remove Snack</h2>
                <form id="remove-snack-form" class="form">
                    <div class="form-group">
                        <label for="snack-id">Snack ID:</label>
                        <input type="text" id="snack-id" required>
                    </div>
                    <div class="form-group">
                        <button type="button" id="remove-snack-button" class="btn">Remove Snack</button>
                    </div>
                </form>`,
            update_availability: `<h2>Update Availability</h2>
                <form id="update-availability-form" class="form">
                    <div class="form-group">
                        <label for="snack-id">Snack ID:</label>
                        <input type="text" id="snack-id" required>
                    </div>
                    <div class="form-group">
                        <label for="snack-availability">Availability:</label>
                        <select id="snack-availability">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <button type="button" id="update-availability-button" class="btn">Update Availability</button>
                    </div>
                </form>`,
            record_sale: `<h2>Record Sale</h2>
                <form id="record-sale-form" class="form">
                    <div class="form-group">
                        <label for="snack-id">Snack ID:</label>
                        <input type="text" id="snack-id" required>
                    </div>
                    <div class="form-group">
                        <label for="quantity-sold">Quantity Sold:</label>
                        <input type="number" id="quantity-sold" required>
                    </div>
                    <div class="form-group">
                        <button type="button" id="record-sale-button" class="btn">Record Sale</button>
                    </div>
                </form>`,
            show_total_inventory: `<h2>Show Total Inventory</h2>
                <p>Total Inventory: <span id="total-inventory">0</span></p>`,
            show_all_snacks: `<h2>Show All Snacks</h2>
                <div id="snack-list" class="snack-list"></div>`,
            // Other page contents
        };

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(content[page] || `<h2>Page not found</h2><p>The requested page does not exist.</p>`);
            }, 500); // Simulating a delay to fetch content (500ms)
        });
    }

    function enhancePage(page) {
        switch (page) {
            case "add_snack":
                const addSnackForm = document.getElementById("add-snack-form");
                const addSnackButton = document.getElementById("add-snack-button");

                addSnackButton.addEventListener("click", () => {
                    const snackName = document.getElementById("snack-name").value;
                    const snackPrice = parseFloat(document.getElementById("snack-price").value);
                    const snackAvailability = document.getElementById("snack-availability").value;
                    const snackQuantity = parseInt(document.getElementById("snack-quantity").value);

                    // Validate form inputs
                    if (snackName && !isNaN(snackPrice) && snackQuantity > 0) {
                        // Implement logic to handle adding snack (you can use fetch API to communicate with a backend)
                        // For now, just display a success message
                        content.innerHTML = `<p>Snack "${snackName}" added to inventory.</p>`;
                    } else {
                        content.innerHTML = `<p>Please fill in all required fields.</p>`;
                    }
                });
                break;

            case "remove_snack":
                const removeSnackForm = document.getElementById("remove-snack-form");
                const removeSnackButton = document.getElementById("remove-snack-button");

                removeSnackButton.addEventListener("click", () => {
                    const snackId = document.getElementById("snack-id").value;

                    // Implement logic to handle removing snack (you can use fetch API to communicate with a backend)
                    // For now, just display a success message
                    content.innerHTML = `<p>Snack with ID "${snackId}" removed from inventory.</p>`;
                });
                break;

            case "update_availability":
                const updateAvailabilityForm = document.getElementById("update-availability-form");
                const updateAvailabilityButton = document.getElementById("update-availability-button");

                updateAvailabilityButton.addEventListener("click", () => {
                    const snackId = document.getElementById("snack-id").value;
                    const availability = document.getElementById("snack-availability").value;

                    // Implement logic to handle updating snack availability (you can use fetch API to communicate with a backend)
                    // For now, just display a success message
                    content.innerHTML = `<p>Availability for snack with ID "${snackId}" updated to "${availability}".</p>`;
                });
                break;

            case "record_sale":
                const recordSaleForm = document.getElementById("record-sale-form");
                const recordSaleButton = document.getElementById("record-sale-button");

                recordSaleButton.addEventListener("click", () => {
                    const snackId = document.getElementById("snack-id").value;
                    const quantitySold = parseInt(document.getElementById("quantity-sold").value);

                    // Implement logic to handle recording sale (you can use fetch API to communicate with a backend)
                    // For now, just display a success message
                    content.innerHTML = `<p>Recorded sale of ${quantitySold} units for snack with ID "${snackId}".</p>`;
                });
                break;

            case "show_total_inventory":
                // Implement logic to fetch and display total inventory (you can use fetch API to communicate with a backend)
                // For now, just display a placeholder message
                const totalInventorySpan = document.getElementById("total-inventory");
                totalInventorySpan.textContent = "Calculating...";
                break;

            case "show_all_snacks":
                // Implement logic to fetch and display all snacks (you can use fetch API to communicate with a backend)
                // For now, just display a placeholder message
                const snackListDiv = document.getElementById("snack-list");
                snackListDiv.innerHTML = "Loading...";
                break;

            // Other cases for enhancing different pages
        }
    }
});
