import tkinter as tk
from tkinter import messagebox
import runpy
import sys

from service.user_service import user_find


global parent
# Function to validate the login
def validate_login():
    userid = username_entry.get()
    password = password_entry.get()

    # You can add your own validation logic here
    if user_find(userid,password) != None :
        parent.destroy()
        runpy.run_path('main.py')
 
    else:
        messagebox.showerror("Login Failed", "Invalid username or password")

# Create the main window
 
parent = tk.Tk()
parent.title("Cadastro de ordem de serviço.")
parent.geometry('520x300')
parent.protocol("WM_DELETE_WINDOW", validate_login)
# Create and place the username label and entry
username_label = tk.Label(parent, text="Login:")
username_label.pack()

username_entry = tk.Entry(parent)
username_entry.pack()

# Create and place the password label and entry
password_label = tk.Label(parent, text="Password:")
password_label.pack()

password_entry = tk.Entry(parent, show="*")  # Show asterisks for password
password_entry.pack()

# Create and place the login button
login_button = tk.Button(parent, text="Login", command=validate_login)
login_button.pack()

# Start the Tkinter event loop
parent.mainloop()
