class SnackItem:
    def __init__(self, snack_id, name, price, available, quantity):
        self.snack_id = snack_id
        self.name = name
        self.price = price
        self.available = available
        self.quantity = quantity

def display_menu():
    print("Menu:")
    print("1. Add Snack")
    print("2. Remove Snack")
    print("3. Update Snack Availability")
    print("4. Record Sale")
    print("5. Show Total Inventory")
    print("6. Show All Snacks")
    print("7. Exit")

def add_snack(snack_inventory):
    snack_id = input("Enter Snack ID: ")
    name = input("Enter Snack Name: ")
    price = float(input("Enter Price: "))
    available = input("Is Snack Available (yes/no): ").lower() == "yes"
    quantity = int(input("Enter Quantity: "))  # Add this line
    snack = SnackItem(snack_id, name, price, available, quantity)  # Update this line
    snack_inventory[snack_id] = snack

def remove_snack(snack_inventory, snack_id):
    if snack_id in snack_inventory:
        del snack_inventory[snack_id]
    else:
        print("Snack not found in inventory.")

def update_availability(snack_inventory, snack_id, available):
    if snack_id in snack_inventory:
        snack_inventory[snack_id].available = available
    else:
        print("Snack not found in inventory.")

def record_sale(snack_inventory, sales_records, snack_id):
    if snack_id in snack_inventory and snack_inventory[snack_id].available:
        quantity = int(input("Enter Quantity Sold: "))
        if quantity > snack_inventory[snack_id].quantity:
            print("Insufficient quantity in inventory.")
            return

        total_price = quantity * snack_inventory[snack_id].price
        snack_inventory[snack_id].quantity -= quantity
        sales_record = {
            "snack_id": snack_id,
            "quantity_sold": quantity,
            "total_price": total_price
        }
        sales_records.append(sales_record)
    else:
        print("Snack not available for sale.")

def show_total_inventory(snack_inventory):
    total_inventory = sum(item.quantity for item in snack_inventory.values())
    print(f"Total Inventory: {total_inventory}")

def show_all_snacks(snack_inventory):
    print("Snack Inventory:")
    for snack_id, snack in snack_inventory.items():
        print(f"ID: {snack.snack_id}, Name: {snack.name}, Price: {snack.price}, "
              f"Available: {'Yes' if snack.available else 'No'}, Quantity: {snack.quantity}")

def main():
    snack_inventory = {}
    sales_records = []

    while True:
        display_menu()
        choice = input("Enter your choice: ")

        if choice == "1":
            add_snack(snack_inventory)
        elif choice == "2":
            snack_id = input("Enter Snack ID to remove: ")
            remove_snack(snack_inventory, snack_id)
        elif choice == "3":
            snack_id = input("Enter Snack ID to update availability: ")
            available = input("Is Snack Available (yes/no): ").lower() == "yes"
            update_availability(snack_inventory, snack_id, available)
        elif choice == "4":
            snack_id = input("Enter Snack ID for sale: ")
            record_sale(snack_inventory, sales_records, snack_id)
        elif choice == "5":
            show_total_inventory(snack_inventory)
        elif choice == "6":
            show_all_snacks(snack_inventory)
        elif choice == "7":
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
