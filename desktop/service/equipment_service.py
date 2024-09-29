import requests

def equipment_find_by_id(id):
    url = 'http://localhost:8080/equipment-findById'
    myobj = {'id': id}
    x = requests.post(url, json = myobj)
    data = x.json()
    print(data)
    return data
equipment_find_by_id(7)

def equipment_update(equipment):
    print("Entregue ",equipment.entregue)
    url = 'http://localhost:8080/equipment-update'
    myobj = {'id': equipment.id,
             'brand':equipment.brand,
             'model':equipment.model,
             'serial':equipment.serial,
             'defectForRepair':equipment.defectForRepair,
             'price':equipment.price,
             'obs':equipment.obs,
             'autorizado':equipment.autorizado,
             'devolucao':equipment.devolucao,
             'pronto':equipment.pronto,
             'entregue':equipment.entregue,
             'garantia':equipment.garantia,
             'departureEquipmentWarranty':equipment.departureEquipmentWarranty,
             'departuretWarranty':equipment.departuretWarranty,
             'entryEquipmentWarranty':equipment.entryEquipmentWarranty,
             'description':equipment.description
             }
    x = requests.post(url, json = myobj)
    return x.json()

def equipment_create(equipment):
    print("brand = ",equipment.brand)
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
             'entregue':equipment.entregue,
             'idClient':equipment.id_client,
             'description':equipment.description
             }
    x = requests.post(url, json = myobj)
    return x.json() 