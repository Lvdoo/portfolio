path=r'C:\Users\laohu\OneDrive\Bureau\Portfolio\guichet-cinema\app.js'
import sys
with open(path,encoding='utf-8') as f:
    d=f.read()
s=d.find("s.flowchart === 'vertical'")
if s<0:
    print('no'); raise SystemExit
rs=d.rfind('return',0,s)
end=d.find("</div>`;",s)
if end<0:
    print('noe'); raise SystemExit
end2=end+len("</div>`;")
print(d[rs:end2])
