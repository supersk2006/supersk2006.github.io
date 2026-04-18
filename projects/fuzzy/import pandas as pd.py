import pandas as pd
import re
import os
import pypdf

def extract_text_from_pdf(file_path):
    """Extracts all text from a PDF file."""
    text = ""
    try:
        with open(file_path, "rb") as f:
            reader = pypdf.PdfReader(f)
            for page in reader.pages:
                text += page.extract_text() + "\n"
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
    return text

def parse_mock_exams(raw_texts):
    """Parses extracted text into a structured list of questions."""
    all_data = []

    for exam_text in raw_texts:
        # Identify the Exam (e.g., Mock Exam 1)
        exam_name_match = re.search(r"Mock Exam\s*(\d+)", exam_text, re.IGNORECASE)
        exam_id = f"Mock Exam {exam_name_match.group(1)}" if exam_name_match else "Unknown"

        # Separate the Answer Key section
        if "Answer Key" not in exam_text:
            print(f"Warning: 'Answer Key' not found in {exam_id}")
            answer_key_section = ""
        else:
            answer_key_section = exam_text.split("Answer Key")[-1]
        
        # Extract answers into a dictionary
        answers = dict(re.findall(r"(\d+):\s*([A-D])", answer_key_section))

        # Split the text into question blocks based on 'Q1.', 'Q2.' etc.
        question_blocks = re.split(r"Q\d+\.", exam_text)[1:]
        
        for i, block in enumerate(question_blocks):
            q_num = str(i + 1)
            
            # Extract Source and Difficulty metadata
            source_match = re.search(r"Source:\s*(.*?)(?=\s*\||Difficulty|$)", block, re.DOTALL)
            source = source_match.group(1).strip() if source_match else "N/A"
            
            difficulty_match = re.search(r"Difficulty:\s*(\w+)", block)
            difficulty = difficulty_match.group(1).strip() if difficulty_match else "N/A"

            # Clean block: remove Source/Difficulty info to isolate question and options
            clean_block = re.sub(r"Source:.*|Difficulty:.*", "", block, flags=re.DOTALL).strip()
            
            # Split into question text and options A, B, C, D
            parts = re.split(r"([A-D]\))", clean_block)
            question_text = parts[0].strip()
            
            options = {"A": "", "B": "", "C": "", "D": ""}
            for j in range(1, len(parts), 2):
                label = parts[j][0] # Get 'A' from 'A)'
                text = parts[j+1].strip()
                options[label] = text

            all_data.append({
                "Exam": exam_id,
                "Question Number": q_num,
                "Question": question_text,
                "Option A": options["A"],
                "Option B": options["B"],
                "Option C": options["C"],
                "Option D": options["D"],
                "Correct Answer": answers.get(q_num, "N/A"),
                "Source": source,
                "Difficulty": difficulty
            })

    return pd.DataFrame(all_data)

# Main Execution Block
if __name__ == "__main__":
    # Define workspace path
    workspace_path = "s:/NPTEL"
    
    # Discover PDF files
    pdf_files = [f for f in os.listdir(workspace_path) if f.endswith(".pdf") and f.startswith("mock_exam_")]
    pdf_files.sort() # Process in order

    mock_exam_texts = []
    for file_name in pdf_files:
        file_path = os.path.join(workspace_path, file_name)
        print(f"Extracting text from {file_name}...")
        extracted_text = extract_text_from_pdf(file_path)
        if extracted_text:
            mock_exam_texts.append(extracted_text)

    if mock_exam_texts:
        df = parse_mock_exams(mock_exam_texts)
        output_file = os.path.join(workspace_path, "fuzzy_logic_exams.csv")
        df.to_csv(output_file, index=False)
        print(f"\nSuccess! Converted {len(pdf_files)} PDFs to {output_file}")
        print(f"Total questions extracted: {len(df)}")
    else:
        print("No mock exam files found or text extraction failed.")