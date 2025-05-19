
class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        print(f"Your number is {self.phone_number}.")
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        message = f"{self.phone_number} called {other_phone.phone_number}"
        self.call_history.append(message)
        print(message)

    def show_call_history(self):
        print(f"Call history for {self.phone_number}:")
        for call in self.call_history:
            print(call)

    def send_message(self, other_phone, content):
        msg = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        self.messages.append(msg)
        other_phone.messages.append(msg)

    def show_outgoing_messages(self):
        print(f"Outgoing messages from {self.phone_number}:")
        for msg in self.messages:
            if msg["from"] == self.phone_number:
                print(msg)

    def show_incoming_messages(self):
        print(f"Incoming messages for {self.phone_number}:")
        for msg in self.messages:
            if msg["to"] == self.phone_number:
                print(msg)

    def show_messages_from(self, number):
        print(f"Messages from {number} to {self.phone_number}:")
        for msg in self.messages:
            if msg["from"] == number and msg["to"] == self.phone_number:
                print(msg)

John = Phone("0533178921")
Anna = Phone("0628717200")

John.call(Anna)
John.show_call_history()

John.send_message(Anna, "Salut Anna !")
Anna.send_message(John, "Salut John !")

John.show_incoming_messages()
John.show_outgoing_messages()
Anna.show_messages_from("0533178921")

