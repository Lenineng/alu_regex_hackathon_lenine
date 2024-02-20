import re

string = "Avengers (2012), The Dark Knight (2008), Inception (2010)"

pattern = r"(\b\w+\b) \((\d{4})\)"

matches = re.findall(pattern, string)

for match in matches:
    print("Movie Title:", match[0])
    print("Year:", match[1])
