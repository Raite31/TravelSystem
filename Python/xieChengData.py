import requests
from bs4 import BeautifulSoup
# 设置要爬取的城市和要爬取的页数
city = '北京'
page_num = 1
# 构造请求url
url = f'https://you.ctrip.com/searchsite/travels/?query={city}&PageNo={page_num}'
# 发送请求并解析响应内容
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')
# 获取所有景点信息块
spots = soup.find_all('div', {'class': 'list_mod2'})
# 遍历每个景点信息块，提取景点名称和评分
for spot in spots:
    name = spot.find('a', {'class': 'tit'}).text.strip()
    rating = spot.find('span', {'class': 'score'}).text.strip()
    print(f'{name}: {rating}')