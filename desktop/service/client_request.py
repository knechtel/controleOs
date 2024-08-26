import requests

def client_find_all():
    x = requests.get('http://localhost:8080/client-findAll')
    data = x.json()
    print(data[1]["id"])
    return data
client_find_all()