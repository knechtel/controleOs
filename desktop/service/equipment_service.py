import requests

def equipment_find_by_id(id):
    url = 'http://localhost:8080/equipment-findById'
    myobj = {'id': id}
    x = requests.post(url, json = myobj)
    data = x.json()
    print(data)
    return data
equipment_find_by_id(7)

def equipment_update(client):
    print("Entregue = ",client['equipments'][0]["entregue"])
    url = 'http://localhost:8080/equipment-update'
    myobj = {'id': client["equipments"][0]["id"],
             'brand':client["equipments"][0]["brand"],
             'model':client["equipments"][0]["model"],
             'serial':client['equipments'][0]["serial"],
             'defectForRepair':client["equipments"][0]["defectForRepair"],
             'price':client['equipments'][0]["price"],
             'obs':client['equipments'][0]["obs"],
             'autorizado':client['equipments'][0]["autorizado"],
             'devolucao':client['equipments'][0]["devolucao"],
             'pronto':client['equipments'][0]["pronto"],
             'entregue':client['equipments'][0]["entregue"]
             }
    x = requests.post(url, json = myobj)
    return x

def equipment_create(equipment):
    url = 'http://localhost:8080/equipment-create'
    myobj = {
             'brand':equipment.brand,
             'model':equipment.model,
             'serial':equipment.serial,
             'defectForRepair':equipment.defectForRepair,
             'price':equipment.price,
             'obs':equipment.obs,
             'autorizado':equipment.autorizado,
             'devolucao':equipment.devolucao,
             'pronto':equipment.pronto,
             'entregue':equipment.entregue
             }
    x = requests.post(url, json = myobj)
    return x