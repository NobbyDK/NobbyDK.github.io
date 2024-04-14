from bs4 import BeautifulSoup
import requests
import time
import datetime
import json

def waktuPublishh(waktu):
    now = datetime.datetime.now()
    waktu_publish = datetime.datetime.strptime(waktu, "%d %B %Y, %H:%M")
    selisih = now - waktu_publish
    if selisih.days > 0:
        return f"{selisih.days} hari yang lalu"
    elif selisih.seconds < 60:
        return "Baru saja"
    elif selisih.seconds < 3600:
        return f"{selisih.seconds // 60} menit yang lalu"
    else:
        return f"{selisih.seconds // 3600} jam yang lalu"


def Cari_Berita():
    textHTML = requests.get('https://www.republika.co.id/').text
    soup = BeautifulSoup(textHTML , 'lxml')
    news = soup.find_all('li', class_ = 'list-group-item list-border conten1')
    data = []
    with open('data.json', 'w') as f:
        for new in news:
            judul = new.h3.text.strip()
            kategori = new.find('span', class_ = 'kanal-info').text
            waktu = new.find('div', class_ = 'date').text.split('-')
            waktuPublish = waktuPublishh(waktu[1].strip())
            waktuAkses = datetime.datetime.now().strftime("%d %B %Y %H:%M:%S")
            info = {"Judul Berita    :" : judul, "Waktu Publish   :" : waktuPublish, "Kategori        :" : kategori, "Waktu Scraping:" : waktuAkses}
            data.append(info)
        jdumps = json.dumps(data)
        f.writelines(jdumps)

if __name__ == '__main__':
    while True:
        time_wait = 1
        Cari_Berita()
        print(f"Waiting for {time_wait} minutes.....")
        time.sleep(time_wait*20)
