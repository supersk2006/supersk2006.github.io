import json

with open('questions.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

with open('data.js', 'w', encoding='utf-8') as f:
    f.write('const QUIZ_DATA = ')
    json.dump(data, f, ensure_ascii=False, indent=2)
    f.write(';\n')

print(f"data.js created with {sum(len(v) for v in data.values())} questions across {len(data)} exams.")
