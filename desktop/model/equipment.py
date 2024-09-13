class Equipment:
        def __init__(self):
            self.id = 0
            self.brand =''
            self.model = ''
            self.serial = ''
            self.defectForRepair = ''
            self.price = 0.0
            self.obs = ''
            self.autorizado = False
            self.devolucao = False
            self.pronto = False
            self.entregue = False
            self.idClient= 0 
            self.entryDate = None
            self.departureDate = None
            self.garantia = False
            self.departureEquipmentWarranty = None
        def __str__(self):
            return f"Id: {self.id}, Brand: {self.brand}, Model = {self.model}"         