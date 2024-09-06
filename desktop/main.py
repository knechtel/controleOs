from tkinter import * 
import webbrowser 
import  tkinter    as tk
from tkinter import messagebox
from datetime import datetime, timedelta
from service.client_service import client_find_all, client_update
from service.equipment_service import equipment_update
itemAutorizado = None

list=[]
editName=False
textObs = None
data_saida=''
data_entrada=''
i=0
index=0
master = Tk('')
var = tk.IntVar()
devolucao_state = tk.IntVar()
pronto_state = tk.IntVar()
entregue_state = tk.IntVar()
master.title("Controle de OS")
listbox = Listbox(master)
listbox.grid(row=3,column=0,padx=10,pady=10,rowspan=26)
listbox.config(width=5,height=20)
entryName = Entry(master)
client_cpy = None

for client in client_find_all():
	index+=1
	list.append(client)
	listbox.insert(index,client["id"])


def print_selected_item():
	selected_index = listbox.curselection()  # Get the selected item's index
	if selected_index:
		selected_item = listbox.get(selected_index[0])  # Get the selected item
		print(f"Selected Item: {selected_item}")
	else:
		print("no selected item ")


def get_sate_entregue():
	global entregue_state
	if(entregue_state.get() == 1):
		return True
	else:
		return False
	

def get_sate_autorizado():
	global var
	state = var.get()
	if(state == 1):
		return True
	else:
		return False
	

def get_sate_devolucao():
	global devolucao_state
	if(devolucao_state.get() == 1):
		return True
	else:
		return False
	
def get_sate_pronto():
	global pronto_state
	if(pronto_state.get() == 1):
		return True
	else:
		return False

def imprimir_os():
	webbrowser.open("https://www.google.com")  

def novo_os():
	clear_fields()
	print("prepara nova Os.")

def myfunction():
	global i
	global editName
	global client_cpy
	client_cpy["name"] = entryName.get()
	client_cpy["cpf"] = eCPF.get()
	client_cpy["phone"] = eTelefone.get()
	client_cpy["address"] = endereco.get()
	client_cpy["email"] = eEmail.get()
	client_cpy["price"] = eAparelhoPreco.get()
	#client_cpy["equipment"][0][""] = eAparelho.get()
	print('ola mundo ',i, ' swui name ',client_cpy["name"])
	print('ola mundo ',i, ' swui cpf ',client_cpy["cpf"])
	print('ola mundo ',i, ' swui phone ',client_cpy["phone"])
	print('ola mundo ',i, ' swui address',client_cpy["address"])
	messagebox.showwarning ('Aviso!', 'Cliente editado com sucesso!') 



#	listbox.insert(i,i)
	# if(editName==False):
	# 	entryName.config(state='normal')
	# else:
	# 	entryName.config(state='readonly')
	client_update(client_cpy)
	client_cpy["equipments"][0]["brand"] = eAparelhoMarca.get()
	client_cpy["equipments"][0]["defectForRepair"] = eAparelhoDefeito.get()
	client_cpy["equipments"][0]["price"] = eAparelhoPreco.get()
	print("olha obs  ----     ",textObs.get("1.0",END))
	client_cpy["equipments"][0]["obs"] = textObs.get("1.0",END)
	global var
	client_cpy["equipments"][0]["autorizado"] =  get_sate_autorizado()
	client_cpy["equipments"][0]["devolucao"] =  get_sate_devolucao()
	client_cpy["equipments"][0]["pronto"] =  get_sate_pronto()
	client_cpy["equipments"][0]["entregue"] =  get_sate_entregue()
	print("verifica  =  ",get_sate_entregue())
	listbox.delete(0,tk.END)
	equipment_update(client_cpy)
	index=0
	list.clear()
	
	for client in client_find_all():
		index+=1
		list.append(client)
		listbox.insert(index,client["id"])
	listbox.get(1)
	



Label(master, text='').grid(row=0)
Label(master, text='').grid(row=1)
Label(master, bg="white", fg='#f00',text='OS').grid(row=2,column=0)
Label(master, text='Nome').grid(row=0,column=1)
Label(master, text='CPF').grid(row=1,column=1)
Label(master, text='Telefone').grid(row=2,column=1)
Label(master, text='Endereço').grid(row=1,column=2)
Label(master, text='Email').grid(row=0,column=3)

Label(master, text='CAD').grid(row=3,column=1)
Label(master, text='Aparelho').grid(row=4,column=1)
Label(master, text='Modelo').grid(row=5,column=1)
Label(master, text='Serial').grid(row=6,column=1)
Label(master, text='Marca').grid(row=7,column=1)
Label(master, text='Defeito').grid(row=4,column=3)
Label(master, text='Preco').grid(row=5,column=3)
Label(master, text='Endereço').grid(row=1,column=3)
Label(master, text='Entrada').grid(row=8,column=1)
Label(master, text='Saida').grid(row=9,column=1)
Label(master, text='Garantia').grid(row=10,column=1,rowspan=2)
itemEntregue = Checkbutton(master, text="Entregue Garantia")
itemEntregue.grid(row=10,column=2)

Label(master, text='Entrada').grid(row=11,column=1)
dataEntradaGarantia = Entry(master)
dataEntradaGarantia.grid(row=11,column=2)
dataEntradaGarantia.insert(0,"25/08/2024")
dataEntradaGarantia.config(state= "disabled")
Label(master, text='Saida').grid(row=12,column=1)
dataSaidaGarantia = Entry(master)
dataSaidaGarantia.config(state= "disabled")

dataSaidaGarantia.grid(row=12,column=2)


dataEntrada = Label(master,text='')
dataEntrada.grid(row=8,column=2)



dataSaida = Label(master,text=str(data_saida))

dataSaida.grid(row=9,column=2)
eAparelho = Entry(master)
eAparelho.grid(row=4,column=2)
eAparelho.insert(0,"E6")


entryName.grid(row=0, column=2)


eCPF = Entry(master)
eCPF.grid(row=1, column=2)

eTelefone = Entry(master)
eTelefone.grid(row=2, column=2)

eEmail = Entry(master)
eEmail.grid(row=0, column=4)

eAparelhoModelo = Entry(master)
eAparelhoModelo.grid(row=5,column=2)

eAparelhoSerial = Entry(master)
eAparelhoSerial.grid(row=6,column=2)


eAparelhoMarca = Entry(master)
eAparelhoMarca.grid(row=7,column=2)

eAparelhoDefeito = Entry(master)
eAparelhoDefeito.grid(row=4,column=4)

eAparelhoPreco = Entry(master)
eAparelhoPreco.grid(row=5,column=4)

endereco = Entry(master)
endereco.grid(row=1,column=4)

# button6=Button(master,command=myfunction, text="Enviar")
# button6.grid(row=2,column=5)
itemPronto = Checkbutton(master, text="Pronto  ",variable=pronto_state)
itemPronto.grid(row=6,column=3)
item_entregue = Checkbutton(master, text="Entregue",variable=entregue_state)
item_entregue.grid(row=7,column=3)

itemDevolucao = Checkbutton(master, text="Devolução",variable=devolucao_state)
itemDevolucao.grid(row=7,column=4)

itemAutorizado = Checkbutton(master, text="Autorizado",variable=var)
itemAutorizado.grid(row=8,column=4)
itemGarantia = Checkbutton(master, text="Garantia")
itemGarantia.grid(row=9,column=4)
 
textObs = Text(master, height = 5, width = 25)
textObs.grid(row=10,column=4)
Label(master, text='Obs').grid(row=10,column=3)
buttonAparelhoSave=Button(master,command=myfunction, text="Salvar")
buttonAparelhoSave.grid(row=11,column=4)
buttonAparelhoNovo=Button(master,command=novo_os, text="Novo")
buttonAparelhoNovo.grid(row=11,column=5)
buttonAparelhoOs=Button(master,command=imprimir_os, text="Imprimir")
buttonAparelhoOs.grid(row=11,column=6)

def cb(event):
	test = str(event) + '\n' + str(listbox.curselection())
	
	#current = list[listbox.curselection]

	obj_client = listbox.curselection()

	aux_client = str(obj_client).replace(")","",2).replace("(","",2).replace(",","",2)
	
	global client_cpy 
	client_cpy = list[int(aux_client)]
	entryName.delete(0, 'end')
	entryName.insert(0,client_cpy["name"])
	
	endereco.delete(0, 'end')
	if(client_cpy["address"] != None):
		endereco.insert(0,client_cpy["address"])
	
	eEmail.delete(0, 'end')
	eEmail.insert(0,client_cpy["email"])

	eCPF.delete(0,'end')
	eCPF.insert(0,client_cpy["cpf"])
	
	
	eTelefone.delete(0,'end')
	if(client_cpy["phone"]!= None):
		eTelefone.insert(0,client_cpy["phone"])

	eAparelhoModelo.delete(0,'end')
	if(client_cpy["equipments"]!=None):
		if(client_cpy["equipments"]!=[]):
			eAparelhoModelo.insert(0,client_cpy["equipments"][0]["model"])
	
	eAparelhoSerial.delete(0,'end')
	if(client_cpy["equipments"]!=None):
		if(client_cpy["equipments"]!=[]):
			eAparelhoSerial.insert(0,client_cpy["equipments"][0]["serial"])

	eAparelhoMarca.delete(0,'end')
	if(client_cpy["equipments"]!=None):
		if(client_cpy["equipments"]!=[]):
			eAparelhoMarca.insert(0,client_cpy["equipments"][0]["brand"])

	eAparelhoDefeito.delete(0,'end')
	
	if(client_cpy["equipments"]!=None):
		if(client_cpy["equipments"]!=[]):
			if(client_cpy["equipments"][0]["defectForRepair"]!=None):
				eAparelhoDefeito.insert(0,client_cpy["equipments"][0]["defectForRepair"])		

	eAparelhoPreco.delete(0,'end')
	if(client_cpy["equipments"]!=None):
		if(client_cpy["equipments"]!=[]):
			if(client_cpy["equipments"][0]["price"]!=None):
				eAparelhoPreco.insert(0,str(client_cpy["equipments"][0]["price"]))
	#dataEntrada
	#dataEntrada.insert(0,"test")
	
	dataEntrada.config(text = '')
	if(client_cpy["equipments"]!=None):
		if(client_cpy["equipments"]!=[]):
			if(client_cpy["equipments"][0]["entryDate"]!=None):
				timestamp_millis = client_cpy["equipments"][0]["entryDate"]

# Convertendo milissegundos para segundos
				timestamp_seconds = timestamp_millis / 1000

# Convertendo o timestamp para uma data em Python
				date = datetime.fromtimestamp(timestamp_seconds)
				formatted_date = date.strftime("%d/%m/%Y")
				data_entrada = str(formatted_date+"  -                          ")
				dataEntrada.config(text = data_entrada)
				

	#dataSaida.delete(0,'end')
	dataSaida.config(text = '')
	if(client_cpy["equipments"]!=None):
		if(client_cpy["equipments"]!=[]):
			if(client_cpy["equipments"][0]["departureDate"]!=None):
				timestamp_millis = client_cpy["equipments"][0]["departureDate"]

# Convertendo milissegundos para segundos
				timestamp_seconds = timestamp_millis / 1000

# Convertendo o timestamp para uma data em Python
				date = datetime.fromtimestamp(timestamp_seconds)
				formatted_date = date.strftime("%d/%m/%Y")
				data_saida = str(formatted_date+"  -                          ")
				dataSaida.config(text = data_saida)
	itemPronto.deselect()
	if(client_cpy["equipments"]!=None):
		if(client_cpy["equipments"]!=[]):
			if(client_cpy["equipments"][0]["pronto"]!=None):
				if(client_cpy["equipments"][0]["pronto"]!=False):
					itemPronto.select()
				else:
					itemPronto.deselect()

	itemAutorizado.deselect()
	if(client_cpy["equipments"]!=None):
		if(client_cpy["equipments"]!=[]):
			if(client_cpy["equipments"][0]["pronto"]!=None):
				if(client_cpy["equipments"][0]["autorizado"]!=False):
					itemAutorizado.select()
				else:
					itemAutorizado.deselect()
	
	if(client_cpy["equipments"]!=None):
		if(client_cpy["equipments"]!=[]):
			if(client_cpy["equipments"][0]["entregue"]!=None):
				if(client_cpy["equipments"][0]["entregue"]!=False):
					item_entregue.select()
				else:
					item_entregue.deselect()
	itemDevolucao.deselect()
	if(client_cpy["equipments"]!=None):
		if(client_cpy["equipments"]!=[]):
			if(client_cpy["equipments"][0]["devolucao"]!=None):
				if(client_cpy["equipments"][0]["devolucao"]==True):
					itemDevolucao.select()
					print("--------------------------- olha aqui")
				else:
					itemDevolucao.deselect()	

	textObs.delete("1.0", "end")
	if(client_cpy["equipments"]!=None):
		if(client_cpy["equipments"]!=[]):
			if(client_cpy["equipments"][0]["obs"]!=None):
				textObs.insert(INSERT,str(client_cpy["equipments"][0]["obs"]))
	if(client_cpy["equipments"][0]["entregue"]==True):
		entryName.config(state='readonly')
		eTelefone.config(state='readonly')
		eEmail.config(state='readonly')
		endereco.config(state='readonly')
		eCPF.config(state='readonly')
		eAparelhoModelo.config(state='readonly')
		eAparelhoSerial.config(state='readonly')
		eAparelhoMarca.config(state='readonly')
		eAparelhoDefeito.config(state='readonly')
		eAparelhoPreco.config(state='readonly')
		textObs.config(state='disabled')
	else:
		entryName.config(state='normal')
		eTelefone.config(state='normal')
		eEmail.config(state='normal')
		endereco.config(state='normal')
		eCPF.config(state='normal')
		eAparelhoModelo.config(state='normal')
		eAparelhoSerial.config(state='normal')
		eAparelhoMarca.config(state='normal')
		eAparelhoDefeito.config(state='normal')
		eAparelhoPreco.config(state='normal')
		textObs.config(state='normal')
listbox.bind('<<ListboxSelect>>', cb)

def clear_fields():
	entryName.config(state='normal')
	eTelefone.config(state='normal')
	eEmail.config(state='normal')
	endereco.config(state='normal')
	eCPF.config(state='normal')
	eAparelhoModelo.config(state='normal')
	eAparelhoSerial.config(state='normal')
	eAparelhoMarca.config(state='normal')
	eAparelhoDefeito.config(state='normal')
	eAparelhoPreco.config(state='normal')
	textObs.config(state='normal')
	entryName.delete(0, END)
	eTelefone.delete(0, END)
	eEmail.delete(0, END)
	endereco.delete(0, END)
	eCPF.delete(0, END)
	eAparelhoModelo.delete(0, END)
	eAparelhoSerial.delete(0, END)
	eAparelhoMarca.delete(0, END)
	eAparelhoDefeito.delete(0, END)
	eAparelhoPreco.delete(0, END)
	#textObs.delete(0, END)
	itemPronto.deselect()
	itemDevolucao.deselect()	
	itemAutorizado.deselect()
	item_entregue.deselect()
	itemGarantia.deselect()
mainloop()
