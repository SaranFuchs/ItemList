const items = [
    {
        id: 1,
        name: "Mouse",
        category: "IT",
        inventory: 200,
        price: 240,
    },
    {
        id: 2,
        name: "Keyboard",
        category: "IT",
        inventory: 150,
        price: 490,
    },
    {
        id: 3,
        name: "Monitor",
        category: "IT",
        inventory: 75,
        price: 3200,
    },
    {
        id: 4,
        name: "USB Cable",
        category: "IT",
        inventory: 350,
        price: 120,
    },
    {
        id: 5,
        name: "Notebook",
        category: "Stationery",
        inventory: 500,
        price: 55,
    },
    {
        id: 6,
        name: "Pen",
        category: "Stationery",
        inventory: 900,
        price: 15,
    },
    {
        id: 7,
        name: "Desk Lamp",
        category: "Home",
        inventory: 120,
        price: 750,
    },
    {
        id: 8,
        name: "Water Bottle",
        category: "Lifestyle",
        inventory: 260,
        price: 210,
    },
    {
        id: 9,
        name: "Backpack",
        category: "Lifestyle",
        inventory: 95,
        price: 980,
    },
    {
        id: 10,
        name: "Phone Stand",
        category: "IT",
        inventory: 180,
        price: 160,
    },
    {
        id: 11,
        name: "Headphones",
        category: "IT",
        inventory: 130,
        price: 1450,
    },
];

const itemList = document.getElementById("item-list");

const itemId = document.getElementById("item-id");
const itemName = document.getElementById("item-name");
const itemCategory = document.getElementById("item-category");
const itemInventory = document.getElementById("item-inventory");
const itemPrice = document.getElementById("item-price");

function createOptionList() {
    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.textContent = "";
    itemList.appendChild(emptyOption);

    items.forEach((item) => {
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.name;
        itemList.appendChild(option);
    });

    itemList.value = "";
}

function clearItemDetails() {
    itemId.textContent = "";
    itemName.textContent = "";
    itemCategory.textContent = "";
    itemInventory.textContent = "";
    itemPrice.textContent = "";
}

function displayItemDetails(item) {
    itemId.textContent = item.id;
    itemName.textContent = item.name;
    itemCategory.textContent = item.category;
    itemInventory.textContent = item.inventory;
    itemPrice.textContent = item.price;
}

itemList.addEventListener("change", () => {
    const selectedId = Number(itemList.value);

    if (!selectedId) {
        clearItemDetails();
        return;
    }

    const selectedItem = items.find((item) => item.id === selectedId);

    if (selectedItem) {
        displayItemDetails(selectedItem);
    } else {
        clearItemDetails();
    }
});

createOptionList();
clearItemDetails();