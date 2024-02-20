import re

string = "Friends S01E01: The One Where Monica Gets a Roommate"

pattern = r"(\b\w+\b) S(\d{2})E(\d{2}): (.*)"

match = re.search(pattern, string)

if match:
    print("Show Name:", match.group(1))
    print("Season Number:", match.group(2))
    print("Episode Number:", match.group(3))
    print("Episode Title:", match.group(4))
