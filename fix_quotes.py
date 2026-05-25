import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# U+201C left double quotation mark, U+201D right double quotation mark
# Both appear as attribute delimiters in the broken edit.
# Pattern: = followed by curly quote, (content), curly quote at attribute boundary
pattern = r'=[""](.*?)[""](?=[ \t\r\n>/])'

fixed = re.sub(
    pattern,
    lambda m: '="' + m.group(1) + '"',
    content,
    flags=re.DOTALL
)

remaining = len(re.findall(r'=[""]', fixed))
print(f"Curly-quote attribute delimiters before: {len(re.findall(r'=[""]', content))}")
print(f"Curly-quote attribute delimiters after:  {remaining}")
print(f"Content changed: {content != fixed}")

with open('index.html', 'w', encoding='utf-8', newline='') as f:
    f.write(fixed)

print("Done.")
