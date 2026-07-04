import re
import sys

data = """
Ms. Deepthi K Moorthy	Core Command	CSI Branch Counsellor	deepthi.moorthy@mbcet.ac.in	deepthikmoorthi/	Deepthi K Moorthy LinkedIn
Ms. Krishna L	Core Command	CSI Co-ordinator	krishna.l@mbcet.ac.in	krishnasuku16	Krishna L |LinkedIn
Niranj R	Core Command	Chairperson	niranj.njai@gmail.com	cre.a.tor_nj/	Niranj R | LinkedIn
Vedha Mahadevan	Core Command	Vice-Chairperson	vedhamahadevan@gmail.com	vedha_17_mahadevan/	Vedha Mahadevan | LinkedIn
Chris Thomas Abraham	Core Command	Secretary	chrisevanthomas736@gmail.com	chris.innit/	Chris Thomas Abraham | LinkedIn
Kiran Biju	Core Command	Treasurer	kiranbiju.b22cs1130@mbcet.ac.in	kiranbiju221b/	Kiran Biju | LinkedIn
Goutham B Cheraman	Creative Wing	Head	gouthambcheraman25@gmail.com	gwthm.___/	Goutham B Cheraman | LinkedIn
Josh Jacob Sunil	Creative Wing	Design Sub-Head	joshjacobsunil@gmail.com	joshjacobsunil/	https://www.linkedin.com/in/josh-sunil-591b242b2/
Aleena Tojo	Creative Wing	Content Sub-Head	aleenatojo22@gmail.com	aleena_tojo/	Aleena Tojo LinkedIn
Aaron Binu Mathew	Creative Wing	Content Writer			Aaron Binu Mathew | LinkedIn
Noel Bijesh E	Creative Wing	Designer	noelbijesh@gmail.com	no3l404	Noel Bijesh E | LinkedIn
Sradhya Renish	Event Management	Lead	sradhyarenish9@gmail.com	__.sradhya18.__/	Sradhya Renish | LinkedIn
Mohammed Afroz A	Event Management	Co-Lead	mohammedafroza.b22ee2123@mbcet.ac.in	mhmd.afroz/	Mohammed Afroz A | LinkedIn
Sanal Sajan E	Event Management	Co-Lead	sanalsajan916@gmail.com	sanalsajann/	Sanal Sajan E | LinkedIn
Devnandan P Unnithan	Event Management	Event Strategist	devnandan2005@gmail.com	dev_nandan21/	Devnandan P Unnithan | LinkedIn
Nihal Mohd. Sahir	Event Management	Event Organizer	nihalmohamedsahir.b24me1141@mbcet.ac.in	abc_nihal/	-
Krishna Prasad	Tech Team	Lead	krishnaprasadsm.b22cs1230@mbcet.ac.in	keeepeee/	Krishna Prasad | LinkedIn
Anaz Mohammed	Tech Team	Co-Lead	mohammedanazar.b22cs1135@mbcet.ac.in	anazmuhdd/	https://www.linkedin.com/in/anazmuhdd/
Sudhin Suresh	Tech Team	Developer	sudhinsuresh.b22cs1258@mbcet.ac.in		Sudhin Suresh | LinkedIn
Abhinav K	Tech Team	Developer	abhinavk.b22cs1204@mbcet.ac.in	_.abhixav._/	Abhinav K | LinkedIn
Shibin S R	Marketing	Lead	shibin152005ssr@gmail.com	shibin_4593/	
Nivedh Nambiar	Marketing	Co-Lead	nivedhnambiar31@gmail.com	niv_edh_n/	Nivedh Nambiar | LinkedIn
Leslie Leema Varghese	Marketing	Marketing Strategist	leslieleemavarghese.b22cs1132@mbcet.ac.in	lezlie__lv	Leslie Leema Varghese | LinkedIn
Varsha Baiju John	PR	Lead	varshabaijujohn.b22cs1161@mbcet.ac.in		Varsha Baiju John | LinkedIn
Kashinath Benny Asha	PR	Co-Lead	kashinathbenny@gmail.com	kashi_.07/	Kashinath Asha Benny | LinkedIn
"""

people = {}
for line in data.strip().split('\n'):
    parts = line.split('\t')
    if len(parts) >= 4:
        name = parts[0].replace('Ms. ', '').strip()
        email = parts[3].strip()
        insta = parts[4].strip() if len(parts) > 4 else ''
        linkedin = parts[5].strip() if len(parts) > 5 else ''
        
        # fix insta handle
        insta = insta.strip('/')
        if insta:
            insta = f"https://www.instagram.com/{insta}/"
            
        if email:
            email = f"mailto:{email}"
            
        if linkedin and not linkedin.startswith('http'):
            # It's a text, convert to #
            linkedin = "#"
            
        if linkedin == "-":
            linkedin = "#"

        people[name] = {
            'email': email or "#",
            'insta': insta or "#",
            'linkedin': linkedin or "#"
        }

with open("c:/Users/hp/Desktop/csi/CSI-Website/src/components/Team25.js", "r", encoding="utf-8") as f:
    content = f.read()

blocks = content.split('<div className="member-card">')
new_content = blocks[0]

for block in blocks[1:]:
    name_match = re.search(r'<p className="member-name">(.*?)</p>', block)
    if name_match:
        name = name_match.group(1).strip()
        
        if name in people:
            p = people[name]
            
            # replace instagram
            block = re.sub(r'<a href="[^"]*?" target="_blank" rel="noopener noreferrer" className="social-btn instagram">', 
                           f'<a href="{p["insta"]}" target="_blank" rel="noopener noreferrer" className="social-btn instagram">', block)
                           
            # replace linkedin
            block = re.sub(r'<a href="[^"]*?" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">', 
                           f'<a href="{p["linkedin"]}" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">', block)
                           
            # replace email
            block = re.sub(r'<a href="[^"]*?" className="social-btn email">', 
                           f'<a href="{p["email"]}" className="social-btn email">', block)
                           
    new_content += '<div className="member-card">' + block

with open("c:/Users/hp/Desktop/csi/CSI-Website/src/components/Team25.js", "w", encoding="utf-8") as f:
    f.write(new_content)

print("Replacement complete")
