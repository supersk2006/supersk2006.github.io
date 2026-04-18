import pandas as pd
import json
from collections import defaultdict

def convert():
    df = pd.read_csv('fuzzy_logic_exams.csv')
    df = df.fillna('N/A')
    
    # Group by Exam
    grouped = defaultdict(list)
    for _, row in df.iterrows():
        exam = row['Exam']
        question = {
            'number': str(row['Question Number']),
            'question': row['Question'],
            'options': {
                'A': row['Option A'],
                'B': row['Option B'],
                'C': row['Option C'],
                'D': row['Option D']
            },
            'answer': row['Correct Answer'],
            'source': row['Source'],
            'difficulty': row['Difficulty']
        }
        grouped[exam].append(question)
    
    with open('questions.json', 'w') as f:
        json.dump(grouped, f, indent=4)
    print("Conversion complete: questions.json created.")

if __name__ == "__main__":
    convert()
