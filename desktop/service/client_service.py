import requests

def client_find_all():
    x = requests.get('http://localhost:8080/client-findAll')
    data = x.json()
    print(data[1]["id"])
    return data

def client_find_by_id(id):
    url = 'http://localhost:8080/client-findById'
    myobj = {'id': id}
    x = requests.post(url, json = myobj)
    data = x.json()
    print(data)
    return data
#client_find_by_id(2)

def client_update(client):
    url = 'http://localhost:8080/client-update'
    myobj = {'id': client["id"], 'name':client["name"],
             'email':client["email"],
             'cpf':client["cpf"],
             'phone':client["phone"]
         }
    x = requests.post(url, json = myobj)
  
    print('teste = ',x)
    return x

def client_create(client):
    url = 'http://localhost:8080/client-create'