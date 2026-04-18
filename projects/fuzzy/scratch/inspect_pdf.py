import pypdf

def debug_pdf(filename):
    print(f"--- Debugging {filename} ---")
    with open(filename, "rb") as f:
        reader = pypdf.PdfReader(f)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        
        print("First 1000 characters:")
        print(text[:1000])
        print("\n--- End of preview ---")
        
        # Check for key markers used in regex
        print(f"Contains 'Mock Exam': {'Mock Exam' in text}")
        print(f"Contains 'Answer Key': {'Answer Key' in text}")
        print(f"Contains 'Q1.': {'Q1.' in text}")

debug_pdf("mock_exam_1.pdf")
