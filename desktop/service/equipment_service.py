import requests

def equipment_find_by_id(id):
    url = 'http://localhost:8080/equipment-findById'
    myobj = {'id': id}
    x = requests.post(url, json = myobj)
    data = x.json()
    print(data)
    return data
equipment_find_by_id(7)