import re

links = [
    ("Deepthi K Moorthy", "https://www.linkedin.com/in/deepthi-k-moorthy-43212b1b2/"),
    ("Krishna L", "https://www.linkedin.com/in/krishna-l-515928373/"),
    ("Niranj R", "https://www.linkedin.com/in/niranj-r/"),
    ("Vedha Mahadevan", "https://www.linkedin.com/in/vedha-mahadevan"),
    ("Chris Thomas Abraham", "https://www.linkedin.com/in/christhomasabraham/"),
    ("Kiran Biju", "https://www.linkedin.com/in/kiranbiju04/"),
    ("Goutham B Cheraman", "https://www.linkedin.com/in/goutham-b-cheraman-25996a291/"),
    ("Josh Jacob Sunil", "https://www.linkedin.com/in/josh-sunil-591b242b2/"),
    ("Aleena Tojo", "https://www.linkedin.com/in/aleena-tojo/"),
    ("Aaron Binu Mathew", "https://www.linkedin.com/in/aaron-binu-mathew-b50627256/"),
    ("Noel Bijesh E", "https://www.linkedin.com/in/noel-bijesh-e-0bb2b326b/"),
    ("Sradhya Renish", "https://www.linkedin.com/in/sradhya-renish/"),
    ("Mohammed Afroz A", "https://www.linkedin.com/in/mohammedafroza/"),
    ("Sanal Sajan E", "https://www.linkedin.com/in/sanalsajane/"),
    ("Devnandan P Unnithan", "https://www.linkedin.com/in/devnandan-p-unnithan-559117325/"),
    ("Nihal Mohd. Sahir", "#"),
    ("Krishna Prasad", "https://www.linkedin.com/in/krishna-prasad63/"),
    ("Anaz Mohammed", "https://www.linkedin.com/in/anazmuhdd/"),
    ("Sudhin Suresh", "https://www.linkedin.com/in/sudhin-suresh-b14682284/"),
    ("Abhinav K", "https://www.linkedin.com/in/abhinavk2004/"),
    ("Shibin S R", "#"),
    ("Nivedh Nambiar", "https://www.linkedin.com/in/nivedh-nambiar-99a042343/"),
    ("Leslie Leema Varghese", "https://www.linkedin.com/in/leslie-leema-varghese-b7533822b/"),
    ("Varsha Baiju John", "https://www.linkedin.com/in/varsha-baijujohn-456422262/"),
    ("Kashinath Benny Asha", "https://www.linkedin.com/in/kashinath-benny-asha-832bb6331/")
]

people_map = {name: url for name, url in links}

with open("c:/Users/hp/Desktop/csi/CSI-Website/src/components/Team25.js", "r", encoding="utf-8") as f:
    content = f.read()

blocks = content.split('<div className="member-card">')
new_content = blocks[0]

for block in blocks[1:]:
    name_match = re.search(r'<p className="member-name">(.*?)</p>', block)
    if name_match:
        name = name_match.group(1).strip()
        
        if name in people_map:
            url = people_map[name]
            block = re.sub(r'<a href="[^"]*?" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">', 
                           f'<a href="{url}" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">', block)
            
    new_content += '<div className="member-card">' + block

with open("c:/Users/hp/Desktop/csi/CSI-Website/src/components/Team25.js", "w", encoding="utf-8") as f:
    f.write(new_content)

print("LinkedIn Replacement complete")
