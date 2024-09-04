import requests

def user_find(login,password):
    url = 'http://localhost:8080/user-find'
    myobj = {'login': login, 'password':password}
    x = requests.post(url, json = myobj)

    try:
        return x.json()
    except:
        return None