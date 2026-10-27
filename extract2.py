path=r'C:\Users\laohu\OneDrive\Bureau\Portfolio\guichet-cinema\app.js'
with open(path,encoding='utf-8') as f:
    d=f.read()
s=d.find("s.flowchart === 'vertical'")
rs=d.rfind('return',0,s)
end=d.find("</div>`;",s)
end2=end+len("</div>`;")
open(r'C:\Users\laohu\OneDrive\Bureau\Portfolio\extract_out.txt','w',encoding='utf-8').write(d[rs:end2])
print('done')
