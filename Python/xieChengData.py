# -*- coding: utf-8 -*-
import requests
import io
from bs4 import BeautifulSoup as BS
import time


"""从网上爬取数据"""
headers = {
    "Origin": "https://piao.ctrip.com",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
}
places = ["beijing1", "shanghai2", "changsha148", "sanya61", "chongqing158", "hongkong38", "chengdu104", "haerbin151",
          "xian7", "guangzhou152", "hangzhou14"]
placenames = ["北京", "上海", "长沙", "三亚", "重庆",
              "香港", "成都", "哈尔滨", "西安", "广州", "杭州"]

places = ["beijing1"]
placenames = ["北京"]
city = "beijing"
base = "https://you.ctrip.com/sight/"
base2 = "https://you.ctrip.com"
requestlist = []

for j in range(len(places)):  # 一个景区爬10页
    requestlist.append({"url": base+places[j]+".html", "place": placenames[j]})
    for i in range(2, 4):
        tmp = base+places[j]+"/s0-p"+str(i)+".html"
        requestlist.append({"url": tmp, "place": placenames[j]})
print(requestlist)
l = []
count = 1
for i in range(len(requestlist)):
    response = requests.get(requestlist[i]["url"], headers=headers)
    html = response.text
    soup = BS(html, 'html.parser')
    vs = soup.find_all(name="div", attrs={"class": "rdetailbox"})
    print(len(vs))
    for j in range(len(vs)):
        print(j)
        try:
            # 获取子网页链接地址
            href = vs[j].find(
                name="a", attrs={"target": "_blank"}).attrs["href"]
            # 再次请求子网页，获取景点详细信息
            res = requests.get(base2+href, headers=headers)
            print(base2+href)
            with open("3.html", "w", encoding="utf-8") as f:
                f.write(res.text)
            soupi = BS(res.text, "html.parser")
            vis = soupi.find_all(name="div", attrs={"class": "text_style"})
            introduce = []
            for i in range(len(vis)):
                introduce.append(vis[i].get_text())
            imgs = []
            imglinks = soupi.find_all(name="img", attrs={"width": "350"})
            # print(imglinks)
            for img in imglinks:
                imgs.append(img.attrs["src"])
            score = soupi.find(name="span", attrs={
                               "class": "score"}).b.get_text()
            scores = []
            scores.append(score)
            scorelinks = soupi.find(
                name="dl", attrs={"class": "comment_show"}).find_all(name="dd")
            for link in scorelinks:
                scores.append(link.find(name="span", attrs={
                              "class": "score"}).string)
            comments = []
            commentlinks = soupi.find_all(
                name="span", attrs={"class": "heightbox"})
            for link in commentlinks:
                comments.append(link.get_text())
            tmp = {}
            tmp["id"] = count
            tmp["name"] = vs[j].find(
                name="a", attrs={"target": "_blank"}).string
            tmp["name"] = tmp["name"].replace(" ", "").replace("\n", "")
            tmp["introduce"] = introduce
            tmp["score"] = scores
            tmp["position"] = vs[j].find_all(
                name="dd", attrs={"class": "ellipsis"})[0].string
            tmp["position"] = tmp["position"].replace(
                " ", "").replace("\n", "")
            tmp["img"] = imgs
            tmp["city"] = city
            tmp["grade"] = soupi.find_all(
                name="span", attrs={"class": "s_sight_con"})[0].get_text()
            tmp["grade"] = tmp["grade"].replace(" ", "").replace("\n", "")
            # tmp["fujin"]=soupi.find_all(name="a", attrs={"class": "item"})
            count = count+1
            l.append(tmp)
            time.sleep(1)
        except Exception as e:
            print(e)
            pass
        print("打印tmp", tmp)
        # with open("datap/"+tmp["name"]+".pk",'wb') as f:
        # 	pickle.dump(tmp,f);
        with io.open("/Users/wuya/桌面/"+tmp["name"]+".txt", 'w', encoding="utf-8") as f:
            f.write(str(tmp))
print(l)
# # browser.close()#关闭浏览器
# with open("data2.txt",'w',encoding='utf-8') as f:
# 	f.write(str(l))
# with open("data2.pk","w",encoding="utf-8") as f:
# 	pickle.dump(l,f);
# https://hotels.ctrip.com/hotel/qingdao7/star2/k1%E4%BA%94%E5%9B%9B%E5%B9%BF%E5%9C%BA#ctm_ref=ctr_hp_sb_lst
