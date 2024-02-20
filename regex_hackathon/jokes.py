import re

string = "Why did the chicken cross the road? Because it wanted to get to the other side"

pattern = r"Why did the (.*?)\? Because(.*?)"

match = re.search(pattern, string)

if match:
    print("Joke Setup:", match.group(1))
    print("Joke Punchline:", match.group(2))
