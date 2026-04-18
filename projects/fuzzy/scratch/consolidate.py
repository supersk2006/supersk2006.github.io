import json

def generate_explanation(question, label, answer_text, q):
    """Generate an explanation for why the correct answer is right."""
    source = q.get('source', '')
    source_clean = source.replace('Lecture_', '').replace('__', ': ').replace('_', ' ')
    expl = f"{answer_text}"
    qt = question.lower()

    if 'membership' in qt and 'value' in qt and ('signif' in qt or 'range' in qt or 'typical' in qt):
        expl += " In fuzzy set theory, membership values range from 0 to 1, representing the degree to which an element belongs to a set — unlike classical sets where membership is strictly 0 or 1."
    elif 'fuzzy logic' in qt and ('distinguish' in qt or 'characteristic' in qt or 'difference' in qt or 'bivalent' in qt or 'core' in qt):
        expl += " Unlike bivalent (Boolean) logic which only allows true/false (0 or 1), fuzzy logic handles partial truth, enabling reasoning with imprecise or vague information."
    elif 'fis' in qt or 'fuzzy inference system' in qt:
        expl += " A Fuzzy Inference System consists of four main components: Fuzzifier (converts crisp inputs to fuzzy), Rule Base (stores IF-THEN rules), Inference Engine (applies rules), and Defuzzifier (converts fuzzy output to crisp)."
    elif 'fuzzifier' in qt:
        expl += " The Fuzzifier is the input stage of a FIS. It takes precise, measured values and maps them to fuzzy membership degrees using predefined membership functions."
    elif 'linguistic hedge' in qt:
        expl += " Linguistic hedges like 'very', 'more or less', and 'slightly' modify membership functions — 'very' concentrates (squares µ) while 'more or less' dilates (√µ)."
    elif 'union' in qt and ('or' in qt or 'operator' in qt or 'operation' in qt):
        expl += " In standard fuzzy set operations, union uses the max operator (corresponding to OR), intersection uses min (corresponding to AND), and complement is 1 − µ (corresponding to NOT)."
    elif 'mamdani' in qt and 'larsen' not in qt and 'tsk' not in qt:
        expl += " The Mamdani model uses fuzzy sets as both antecedents and consequents. The output is obtained by truncating (clipping) the consequent fuzzy set at the firing strength, then aggregating and defuzzifying."
    elif 'tsk' in qt or 'takagi' in qt or 'sugeno' in qt:
        expl += " The TSK (Takagi-Sugeno-Kang) model uses a crisp polynomial function as the consequent, producing a crisp output directly without needing complex defuzzification."
    elif 'larsen' in qt:
        expl += " The Larsen model scales (multiplies) the consequent fuzzy set by the firing strength rather than truncating it, preserving the original membership function shape."
    elif 'tsukamoto' in qt:
        expl += " The Tsukamoto model requires monotonic consequent membership functions, allowing direct computation of a crisp output by finding the value where µ equals the firing strength."
    elif 't-norm' in qt or 't norm' in qt or 't_norm' in qt:
        expl += " T-norm operators generalize fuzzy intersection (AND). Common T-norms include min (Zadeh), algebraic product, bounded difference, and drastic product."
    elif 's-norm' in qt or 's norm' in qt or 's_norm' in qt:
        expl += " S-norm (T-conorm) operators generalize fuzzy union (OR). They are the dual of T-norms. Common S-norms include max, algebraic sum, bounded sum, and drastic sum."
    elif 'normal fuzzy set' in qt or ('normal' in qt and 'subnormal' in qt):
        expl += " A fuzzy set is normal if at least one element has membership value 1 (height = 1). Otherwise it is subnormal."
    elif 'height' in qt and ('0.8' in qt or 'subnormal' in qt or 'normal' in qt):
        expl += " The height of a fuzzy set is the supremum of its membership values. If height < 1, the set is subnormal."
    elif 'convex' in qt and 'fuzzy' in qt:
        expl += " A fuzzy set is convex if for any λ ∈ [0,1], µ(λx₁ + (1−λ)x₂) ≥ min(µ(x₁), µ(x₂))."
    elif 'extension principle' in qt:
        expl += " The Extension Principle maps fuzzy sets through functions. When multiple inputs map to the same output, the maximum of their membership values is taken."
    elif 'defuzzif' in qt:
        expl += " Common defuzzification methods include: Centroid, Bisector, Mean of Maximum (MOM), Smallest of Maximum (SOM), and Largest of Maximum (LOM)."
    elif 'excluded middle' in qt or ('law' in qt and 'contradiction' in qt) or ('complement' in qt and 'violat' in qt):
        expl += " In fuzzy sets, A ∪ A' ≠ X and A ∩ A' ≠ ∅ because membership values are partial — max(µ, 1−µ) isn't always 1, and min(µ, 1−µ) isn't always 0."
    elif ('properties' in qt or 'property' in qt) and 'violat' in qt:
        expl += " Fuzzy sets preserve most classical set properties (commutativity, associativity, idempotency, De Morgan's laws) but violate the Law of Contradiction and Law of Excluded Middle."  
    elif 'tolerance' in qt or 'equivalence' in qt:
        expl += " A fuzzy tolerance relation requires reflexivity and symmetry. A fuzzy equivalence relation additionally requires max-min transitivity."
    elif 'transiti' in qt:
        expl += " Max-min transitivity means µ_R(x,k) ≥ max_j[min(µ_R(x,j), µ_R(j,k))] for all elements x, j, k."
    elif 'cartesian product' in qt:
        expl += " The fuzzy Cartesian product gives µ(x,y) = min(µ_A(x), µ_B(y)) for each ordered pair (x,y)."
    elif 'cylindrical extension' in qt:
        expl += " Cylindrical extension expands a fuzzy set into a higher-dimensional space. It preserves the original membership values regardless of the new dimension."
    elif 'projection' in qt:
        expl += " Projection reduces dimensionality by taking the supremum (max) along the eliminated dimension."
    elif 'distance' in qt and 'fuzzy' in qt:
        expl += " Fuzzy distance measures (Hamming, Euclidean, Minkowski) quantify how different two fuzzy sets are based on membership value differences."
    elif 'fuzzy number' in qt:
        expl += " A fuzzy number must be normal (height = 1) and convex, ensuring it represents a meaningful approximate value."
    elif 'singleton' in qt:
        expl += " A fuzzy singleton has exactly one element with µ = 1 and all others at 0. It represents a precise value in the fuzzy framework."
    elif 'contrast intensif' in qt:
        expl += " Contrast intensification reduces fuzziness by pushing values above 0.5 toward 1 and values below 0.5 toward 0, making the set more crisp-like."
    elif 'orthogonal' in qt:
        expl += " An orthogonal term set forms a partition of unity — at every point in the universe of discourse, all membership values sum to exactly 1."
    elif 'de morgan' in qt:
        expl += " De Morgan's Laws: (A ∪ B)' = A' ∩ B' and (A ∩ B)' = A' ∪ B'. These laws hold in fuzzy set theory."
    elif 'absorption' in qt:
        expl += " Standard absorption (A ∪ (A ∩ B) = A) holds in fuzzy sets, but absorption with complements may not hold since the Laws of Excluded Middle and Contradiction are violated."
    elif 'composition' in qt:
        expl += " Max-min composition of fuzzy relations is associative and distributes over union. It is the standard composition method in fuzzy inference."
    elif ('arithmetic' in qt or 'multiplication' in qt) and 'fuzzy' in qt:
        expl += " Fuzzy arithmetic uses the Extension Principle. Fuzzy multiplication on a restricted universe of discourse may produce subnormal results."
    elif 'idempoten' in qt:
        expl += " Idempotency (A ∪ A = A, A ∩ A = A) holds because max(µ,µ) = µ and min(µ,µ) = µ."
    elif 'matlab' in qt or 'toolbox' in qt:
        expl += " MATLAB's Fuzzy Logic Toolbox provides the FIS Editor, Membership Function Editor, Rule Editor, and command-line functions for building fuzzy systems."
    elif 'core' in qt and ('definition' in qt or 'fuzzy set' in qt):
        expl += " The core consists of all elements with full membership (µ = 1). It represents the 'definitely in' region of the fuzzy set."
    elif 'support' in qt and 'fuzzy' in qt:
        expl += " The support is the set of all elements with µ > 0. It defines the boundary of the fuzzy set."
    elif 'alpha' in qt or 'α-cut' in qt or 'a-cut' in qt:
        expl += " An α-cut is the crisp set of all elements with µ ≥ α. Strong α-cuts use µ > α."
    elif 'triangular' in qt and 'membership' in qt:
        expl += " Triangular MFs are defined by three parameters (a, b, c) forming a triangle. They are computationally simple and widely used."
    elif 'trapezoidal' in qt and 'membership' in qt:
        expl += " Trapezoidal MFs have a flat top (plateau) defined by four parameters. They represent ranges where membership is fully 1."
    elif 'gaussian' in qt and 'membership' in qt:
        expl += " Gaussian MFs are smooth, symmetric bell curves. They are defined by center (c) and spread (σ)."
    elif 'firing strength' in qt or 'antecedent' in qt:
        expl += " The firing strength determines how strongly a rule is activated. For AND-connected antecedents, the min operator gives the overall firing strength."
    elif 'fuzzy rule' in qt or 'if-then' in qt or 'entail' in qt or 'implication' in qt:
        expl += " Fuzzy rules use IF-THEN structure. 'A entails B' interprets the rule as logical implication (¬A ∪ B), while 'A coupled with B' uses conjunction (A ∩ B)."
    elif 'uncertainty' in qt or 'randomness' in qt:
        expl += " Fuzzy logic handles vagueness, ambiguity, and imprecision. Randomness (stochastic uncertainty) is addressed by probability theory, not fuzzy logic."
    elif 'notation' in qt or ('symbol' in qt and ('+' in qt or '/' in qt)):
        expl += " In fuzzy set notation, '/' separates membership value from element (µ/x), and '+' aggregates pairs — neither is an arithmetic operator."
    elif 'difference' in qt and 'formula' in qt:
        expl += " Fuzzy difference A \\ B = A ∩ B' = min(µ_A(x), 1 − µ_B(x))."
    elif 'yager' in qt or 'parameterized' in qt:
        expl += " In Yager's parameterized T-norm, increasing parameter w makes the intersection less strict, producing higher membership values."
    elif 'upheld' in qt or 'uphold' in qt:
        expl += " Idempotency, commutativity, associativity, distributivity, and De Morgan's laws are all preserved in fuzzy set theory."
    else:
        if source_clean:
            expl += f" (Source: {source_clean})"

    return expl


# Main execution
with open('questions.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

all_questions = []
seen = set()

for exam_name, questions in data.items():
    for q in questions:
        key = q['question'].strip().lower()[:80]
        if key in seen:
            continue
        seen.add(key)

        correct_label = q['answer'].strip()
        correct_text = q['options'].get(correct_label, '')
        q['explanation'] = generate_explanation(q['question'], correct_label, correct_text, q)
        q['source_exam'] = exam_name
        all_questions.append(q)

# Write data.js as a flat array
with open('data.js', 'w', encoding='utf-8') as f:
    f.write('const QUIZ_DATA = ')
    json.dump(all_questions, f, ensure_ascii=False, indent=2)
    f.write(';\n')

print(f"Total unique questions: {len(all_questions)}")
for d in ['Easy', 'Medium', 'Hard']:
    count = sum(1 for q in all_questions if q.get('difficulty') == d)
    print(f"  {d}: {count}")
