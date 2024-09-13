class Client:   
    def __init__(self):
        self.id = 0
        self.name = '' 
        self.cpf = ''  
        self.telefone =''
        self.endereco = ''
        self.email=''
        self.list_equipments=[]
    def __str__(self):
        return f"Id: {self.id}, name: {self.name}, Model = {self.cpf} list = {self.list_equipments[0]}"  