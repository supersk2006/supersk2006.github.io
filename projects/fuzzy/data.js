const QUIZ_DATA = [
  {
    "number": "1",
    "question": "What is the primary characteristic that distinguishes Fuzzy Logic from Bivalent Logic?",
    "options": {
      "A": "Fuzzy Logic uses only 0s and 1s.",
      "B": "Fuzzy Logic allows for degrees of truth between 0 and 1.",
      "C": "Fuzzy Logic is exclusively used in hardware.",
      "D": "Fuzzy Logic does not handle ambiguity."
    },
    "answer": "B",
    "source": "Lecture_W1L18_Lecture_1__Introduction___Fuzzy_Sets__Logic_and_Sy",
    "difficulty": "Easy",
    "explanation": "Fuzzy Logic allows for degrees of truth between 0 and 1. Unlike bivalent (Boolean) logic which only allows true/false (0 or 1), fuzzy logic handles partial truth, enabling reasoning with imprecise or vague information.",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "2",
    "question": "In the context of fuzzy sets, what does a membership value (µ) of 0.7 signify?",
    "options": {
      "A": "The element is 70% outside the set.",
      "B": "The element is 70% a member of the set.",
      "C": "The element is 7% a member of the set.",
      "D": "The element is not a member of the set."
    },
    "answer": "B",
    "source": "Lecture_W1L20_Lecture_3__Fuzzy_Sets_and_Fuzzy_Logic_Toolbox_in_M",
    "difficulty": "Easy",
    "explanation": "The element is 70% a member of the set. In fuzzy set theory, membership values range from 0 to 1, representing the degree to which an element belongs to a set — unlike classical sets where membership is strictly 0 or 1.",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "3",
    "question": "Which of the following is NOT a component of a Fuzzy Inference System (FIS)?",
    "options": {
      "A": "Fuzzifier",
      "B": "Inference Engine",
      "C": "Defuzzifier",
      "D": "Crisp Rule Base"
    },
    "answer": "D",
    "source": "Lecture_W10L94_Lecture_50__Fuzzy_Inference_System",
    "difficulty": "Easy",
    "explanation": "Crisp Rule Base A Fuzzy Inference System consists of four main components: Fuzzifier (converts crisp inputs to fuzzy), Rule Base (stores IF-THEN rules), Inference Engine (applies rules), and Defuzzifier (converts fuzzy output to crisp).",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "4",
    "question": "What is the purpose of a Linguistic Hedge in fuzzy logic?",
    "options": {
      "A": "To define the universe of discourse for a fuzzy set.",
      "B": "To modify the meaning of a primary linguistic term.",
      "C": "To convert a fuzzy set into a crisp value.",
      "D": "To establish the core of a fuzzy set."
    },
    "answer": "B",
    "source": "Lecture_W9L82_Lecture_41__Linguistic_Hedges",
    "difficulty": "Easy",
    "explanation": "To modify the meaning of a primary linguistic term. Linguistic hedges like 'very', 'more or less', and 'slightly' modify membership functions — 'very' concentrates (squares µ) while 'more or less' dilates (√µ).",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "5",
    "question": "Which fuzzy set operation corresponds to the logical 'OR' connective?",
    "options": {
      "A": "Intersection",
      "B": "Complement",
      "C": "Union",
      "D": "Difference"
    },
    "answer": "C",
    "source": "Lecture_W3L34_Lecture_11__Set_Theoretic_Operations_on_Fuzzy_Sets",
    "difficulty": "Easy",
    "explanation": "Union (Source: W3L34 11: Set Theoretic Operations on Fuzzy Sets)",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "6",
    "question": "What is the defining characteristic of a Normal Fuzzy Set?",
    "options": {
      "A": "All elements have a membership value of 0.5.",
      "B": "At least one element has a membership value of 1.",
      "C": "All elements have membership values less than 1.",
      "D": "It must be a triangular membership function."
    },
    "answer": "B",
    "source": "Lecture_W1L20_Lecture_3__Fuzzy_Sets_and_Fuzzy_Logic_Toolbox_in_M",
    "difficulty": "Easy",
    "explanation": "At least one element has a membership value of 1. A fuzzy set is normal if at least one element has membership value 1 (height = 1). Otherwise it is subnormal.",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "7",
    "question": "What is the primary function of the Fuzzifier component in a Fuzzy Inference System?",
    "options": {
      "A": "To convert fuzzy outputs to crisp values.",
      "B": "To store the fuzzy rules.",
      "C": "To convert crisp input values into fuzzy values.",
      "D": "To perform fuzzy arithmetic operations."
    },
    "answer": "C",
    "source": "Lecture_W10L94_Lecture_50__Fuzzy_Inference_System",
    "difficulty": "Easy",
    "explanation": "To convert crisp input values into fuzzy values. A Fuzzy Inference System consists of four main components: Fuzzifier (converts crisp inputs to fuzzy), Rule Base (stores IF-THEN rules), Inference Engine (applies rules), and Defuzzifier (converts fuzzy output to crisp).",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "8",
    "question": "In a Mamdani Fuzzy Model, what type of value is the consequent (THEN part) of a rule?",
    "options": {
      "A": "A crisp numerical value.",
      "B": "A fuzzy set.",
      "C": "A probability distribution.",
      "D": "A Boolean true/false statement."
    },
    "answer": "B",
    "source": "Lecture_W11L98_Lecture_51__Mamdani_Fuzzy_Model__Part_I_",
    "difficulty": "Easy",
    "explanation": "A fuzzy set. The Mamdani model uses fuzzy sets as both antecedents and consequents. The output is obtained by truncating (clipping) the consequent fuzzy set at the firing strength, then aggregating and defuzzifying.",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "9",
    "question": "Which operation is used to model the linguistic hedge \"very\"?",
    "options": {
      "A": "Dilation (square root)",
      "B": "Negation (1 - µ)",
      "C": "Concentration (squaring)",
      "D": "Union (max)"
    },
    "answer": "C",
    "source": "Lecture_W9L82_Lecture_41__Linguistic_Hedges",
    "difficulty": "Easy",
    "explanation": "Concentration (squaring) Linguistic hedges like 'very', 'more or less', and 'slightly' modify membership functions — 'very' concentrates (squares µ) while 'more or less' dilates (√µ).",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "10",
    "question": "What is the main advantage of the TSK Fuzzy Model over the Mamdani model regarding\nits output?",
    "options": {
      "A": "TSK models produce a fuzzy set as output, requiring defuzzification.",
      "B": "TSK models directly output a crisp value, bypassing complex defuzzification.",
      "C": "TSK models can handle fuzzy inputs, while Mamdani cannot.",
      "D": "TSK models use only two rules, simplifying the rule base."
    },
    "answer": "B",
    "source": "Lecture_W12L110_Lecture_60__TSK_Fuzzy_Model",
    "difficulty": "Easy",
    "explanation": "TSK models directly output a crisp value, bypassing complex defuzzification. The TSK (Takagi-Sugeno-Kang) model uses a crisp polynomial function as the consequent, producing a crisp output directly without needing complex defuzzification.",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "11",
    "question": "Consider a fuzzy set `A = 0.2/16 + 0.1/17 + 0.5/18 + 1.0/19`. What do the `+` and `/`\nsymbols represent in this notation?",
    "options": {
      "A": "`+` is arithmetic addition, `/` is division.",
      "B": "`+` denotes a collection of pairs, `/` separates membership value from element.",
      "C": "`+` is a logical OR, `/` is a logical AND.",
      "D": "`+` represents a union, `/` represents an intersection."
    },
    "answer": "B",
    "source": "Lecture_W1L20_Lecture_3__Fuzzy_Sets_and_Fuzzy_Logic_Toolbox_in_M",
    "difficulty": "Medium",
    "explanation": "`+` denotes a collection of pairs, `/` separates membership value from element. In fuzzy set notation, '/' separates membership value from element (µ/x), and '+' aggregates pairs — neither is an arithmetic operator.",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "12",
    "question": "A fuzzy set `A` has a height of 0.8. What can be concluded about this fuzzy set?",
    "options": {
      "A": "It is a normal fuzzy set.",
      "B": "It is a subnormal fuzzy set.",
      "C": "Its core is non-empty.",
      "D": "It must be a triangular membership function."
    },
    "answer": "B",
    "source": "Lecture_W2L27_Lecture_7__Nomenclatures_used_in_Fuzzy_Set_Theory_",
    "difficulty": "Medium",
    "explanation": "It is a subnormal fuzzy set. The height of a fuzzy set is the supremum of its membership values. If height < 1, the set is subnormal.",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "13",
    "question": "Which of the following properties of classical sets is VIOLATED by fuzzy sets?",
    "options": {
      "A": "Idempotency",
      "B": "Involution",
      "C": "Law of Contradiction",
      "D": "Commutativity"
    },
    "answer": "C",
    "source": "Lecture_W3L35_Lecture_12__Properties_of_Fuzzy_Sets__Part_I_",
    "difficulty": "Medium",
    "explanation": "Law of Contradiction Fuzzy sets preserve most classical set properties (commutativity, associativity, idempotency, De Morgan's laws) but violate the Law of Contradiction and Law of Excluded Middle.",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "14",
    "question": "Given two fuzzy sets `A` and `B`, what is the formula for their fuzzy difference `A \\ B`?",
    "options": {
      "A": "`max(µ_A(x), µ_B(x))`",
      "B": "`min(µ_A(x), µ_B(x))`",
      "C": "`min(µ_A(x), 1 - µ_B(x))`",
      "D": "`1 - max(µ_A(x), µ_B(x))`"
    },
    "answer": "C",
    "source": "Lecture_W3L34_Lecture_11__Set_Theoretic_Operations_on_Fuzzy_Sets",
    "difficulty": "Medium",
    "explanation": "`min(µ_A(x), 1 - µ_B(x))` Fuzzy difference A \\ B = A ∩ B' = min(µ_A(x), 1 − µ_B(x)).",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "15",
    "question": "In the context of the Mamdani model with multiple antecedents connected by `AND`,\nhow is the overall firing strength of a rule calculated using Max-Min composition?",
    "options": {
      "A": "By taking the product of individual antecedent firing strengths.",
      "B": "By taking the sum of individual antecedent firing strengths.",
      "C": "By taking the minimum of individual antecedent firing strengths.",
      "D": "By taking the maximum of individual antecedent firing strengths."
    },
    "answer": "C",
    "source": "Lecture_W11L99_Lecture_52__Mamdani_Fuzzy_Model__Part_II_",
    "difficulty": "Medium",
    "explanation": "By taking the minimum of individual antecedent firing strengths. The Mamdani model uses fuzzy sets as both antecedents and consequents. The output is obtained by truncating (clipping) the consequent fuzzy set at the firing strength, then aggregating and defuzzifying.",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "16",
    "question": "What is the key difference in how the Larsen Fuzzy Model generates its output\nmembership function compared to the Mamdani Fuzzy Model?",
    "options": {
      "A": "Larsen uses a product operator for implication, Mamdani uses min.",
      "B": "Larsen scales the consequent fuzzy set, Mamdani truncates it.",
      "C": "Larsen requires crisp inputs, Mamdani requires fuzzy inputs.",
      "D": "Larsen defuzzifies each rule's output, Mamdani aggregates fuzzy outputs."
    },
    "answer": "B",
    "source": "Lecture_W12L106_Lecture_56__Larsen_Fuzzy_Model__Part_I_",
    "difficulty": "Medium",
    "explanation": "Larsen scales the consequent fuzzy set, Mamdani truncates it. The Larsen model scales (multiplies) the consequent fuzzy set by the firing strength rather than truncating it, preserving the original membership function shape.",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "17",
    "question": "Which of the following is a characteristic of a Fuzzy Number?",
    "options": {
      "A": "It must be subnormal and non-convex.",
      "B": "It must be normal and convex.",
      "C": "It can be any fuzzy set.",
      "D": "Its membership function must be sigmoidal."
    },
    "answer": "B",
    "source": "Lecture_W2L29_Lecture_9__Nomenclatures_used_in_Fuzzy_Set_Theory_",
    "difficulty": "Medium",
    "explanation": "It must be normal and convex. A fuzzy number must be normal (height = 1) and convex, ensuring it represents a meaningful approximate value.",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "18",
    "question": "The Extension Principle resolves conflicts in many-to-one mappings by assigning what\nto the target element's membership?",
    "options": {
      "A": "The minimum membership value from all source elements.",
      "B": "The average membership value from all source elements.",
      "C": "The maximum membership value from all source elements.",
      "D": "The sum of membership values from all source elements."
    },
    "answer": "C",
    "source": "Lecture_W7L70_Lecture_35__Extension_Principle",
    "difficulty": "Medium",
    "explanation": "The maximum membership value from all source elements. The Extension Principle maps fuzzy sets through functions. When multiple inputs map to the same output, the maximum of their membership values is taken.",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "19",
    "question": "What are the two essential properties a fuzzy relation must possess to be classified as\na Fuzzy Tolerance Relation?",
    "options": {
      "A": "Transitivity and Symmetry.",
      "B": "Reflexivity and Transitivity.",
      "C": "Reflexivity and Symmetry.",
      "D": "Normality and Convexity."
    },
    "answer": "C",
    "source": "Lecture_W8L76_Lecture_38__Fuzzy_Tolerance_and_Equivalence_Relati",
    "difficulty": "Medium",
    "explanation": "Reflexivity and Symmetry. A fuzzy tolerance relation requires reflexivity and symmetry. A fuzzy equivalence relation additionally requires max-min transitivity.",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "20",
    "question": "In the context of fuzzy arithmetic, what is a notable property of fuzzy multiplication (A *",
    "options": {
      "A": "It always results in a fuzzy number.",
      "B": "It is not commutative.",
      "C": "The resulting fuzzy set may not be normal.",
      "D": "It does not propagate uncertainty."
    },
    "answer": "C",
    "source": "Lecture_W5L50_Lecture_21__Arithmetic_Operations_on_Fuzzy_Numbers",
    "difficulty": "Medium",
    "explanation": "The resulting fuzzy set may not be normal. Fuzzy arithmetic uses the Extension Principle. Fuzzy multiplication on a restricted universe of discourse may produce subnormal results.",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "21",
    "question": "Which of the following statements about the properties of fuzzy relation composition\n(max-min) is true?",
    "options": {
      "A": "It is always fully distributive over intersection.",
      "B": "It is not associative.",
      "C": "It is associative and distributes over union.",
      "D": "It is not monotonic."
    },
    "answer": "C",
    "source": "Lecture_W8L75_Lecture_37__Properties_of_Composition_of_Fuzzy_Rel",
    "difficulty": "Medium",
    "explanation": "It is associative and distributes over union. Max-min composition of fuzzy relations is associative and distributes over union. It is the standard composition method in fuzzy inference.",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "22",
    "question": "When applying a parameterized T-norm from Yager's class, what effect does increasing\nthe parameter `w` typically have on the resulting membership values of the intersection?",
    "options": {
      "A": "The membership values decrease, making the intersection stricter.",
      "B": "The membership values increase, making the intersection less strict.",
      "C": "The membership values remain unchanged.",
      "D": "The effect is unpredictable and depends on the specific input values."
    },
    "answer": "B",
    "source": "Lecture_W6L58_Lecture_26__Parameterized_T_Norm_Operators",
    "difficulty": "Medium",
    "explanation": "The membership values increase, making the intersection less strict. In fuzzy set theory, membership values range from 0 to 1, representing the degree to which an element belongs to a set — unlike classical sets where membership is strictly 0 or 1.",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "23",
    "question": "Given a fuzzy set `A` and its complement `A'`, why does the Law of Excluded Middle (`A\n∪ A' = X`) fail for fuzzy sets?",
    "options": {
      "A": "Because `min(µ_A(x), 1 - µ_A(x))` is always greater than 0.",
      "B": "Because `max(µ_A(x), 1 - µ_A(x))` is not always 1.",
      "C": "Because fuzzy sets are always subnormal.",
      "D": "Because the union operation uses the product instead of max."
    },
    "answer": "B",
    "source": "Lecture_W3L35_Lecture_12__Properties_of_Fuzzy_Sets__Part_I_",
    "difficulty": "Hard",
    "explanation": "Because `max(µ_A(x), 1 - µ_A(x))` is not always 1. In fuzzy sets, A ∪ A' ≠ X and A ∩ A' ≠ ∅ because membership values are partial — max(µ, 1−µ) isn't always 1, and min(µ, 1−µ) isn't always 0.",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "24",
    "question": "A fuzzy relation `R` is reflexive and symmetric. To confirm it is a Fuzzy Equivalence\nRelation, what additional property must it satisfy, and how is it mathematically defined?",
    "options": {
      "A": "Normality: `max(µ_R(x,y)) = 1`.",
      "B": "Convexity: `µ_R(λx1 + (1-λ)x2) ≥ min(µ_R(x1), µ_R(x2))`.",
      "C": "Transitivity: `µ_R(x,k) ≥ min(µ_R(x,j), µ_R(j,k))`.",
      "D": "Idempotency: `R ∪ R = R`."
    },
    "answer": "C",
    "source": "Lecture_W8L77_Lecture_39__Fuzzy_Tolerance_and_Equivalence_Relati",
    "difficulty": "Hard",
    "explanation": "Transitivity: `µ_R(x,k) ≥ min(µ_R(x,j), µ_R(j,k))`. A fuzzy tolerance relation requires reflexivity and symmetry. A fuzzy equivalence relation additionally requires max-min transitivity.",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "25",
    "question": "You are calculating the fuzzy distance `d(A,",
    "options": {
      "A": ", µ_B(x_",
      "B": ")` for all contributing pairs.",
      "C": "By taking the `max` of all `min(µ_A(x_",
      "D": "By averaging the `min(µ_A(x_"
    },
    "answer": "C",
    "source": "Lecture_W4L43_Lecture_17__Distance_between_Fuzzy_Sets__Part_I_",
    "difficulty": "Hard",
    "explanation": "By taking the `max` of all `min(µ_A(x_ Fuzzy distance measures (Hamming, Euclidean, Minkowski) quantify how different two fuzzy sets are based on membership value differences.",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "26",
    "question": "The TSK Fuzzy Model is characterized by a fuzzy premise and a crisp consequent.\nWhat is the nature of this crisp consequent in a First-Order TSK model?",
    "options": {
      "A": "It is always a constant value.",
      "B": "It is a fuzzy set that requires defuzzification.",
      "C": "It is a polynomial function of the input variables.",
      "D": "It is a monotonic membership function."
    },
    "answer": "C",
    "source": "Lecture_W12L110_Lecture_60__TSK_Fuzzy_Model",
    "difficulty": "Hard",
    "explanation": "It is a polynomial function of the input variables. The TSK (Takagi-Sugeno-Kang) model uses a crisp polynomial function as the consequent, producing a crisp output directly without needing complex defuzzification.",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "27",
    "question": "Why does the property `A ∪ (A' ∩",
    "options": {
      "A": "Because fuzzy union uses the `min` operator.",
      "B": "Because the Law of Contradiction is violated.",
      "C": "Because the Law of Excluded Middle is violated.",
      "D": "Because fuzzy sets are not commutative."
    },
    "answer": "C",
    "source": "Lecture_W3L38_Lecture_15__Properties_of_Fuzzy_Sets__Part_IV_",
    "difficulty": "Hard",
    "explanation": "Because the Law of Excluded Middle is violated. (Source: W3L38 15: Properties of Fuzzy Sets: Part IV )",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "28",
    "question": "What is the defining characteristic of the Tsukamoto Fuzzy Model's consequent part in\nits rules?",
    "options": {
      "A": "It is a crisp polynomial function of input variables.",
      "B": "It is a fuzzy set with a monotonically increasing or decreasing membership function.",
      "C": "It is always a constant value.",
      "D": "It is a trapezoidal membership function."
    },
    "answer": "B",
    "source": "Lecture_W12L109_Lecture_59__Tsukamoto_Fuzzy_Model",
    "difficulty": "Hard",
    "explanation": "It is a fuzzy set with a monotonically increasing or decreasing membership function. The Tsukamoto model requires monotonic consequent membership functions, allowing direct computation of a crisp output by finding the value where µ equals the firing strength.",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "29",
    "question": "Given a fuzzy set `A = {0.5/1, 1.0/2, 0.5/3}` and `B = {0.5/1, 1.0/2, 0.5/3}`. If `C = A * B`\n(fuzzy multiplication) is computed with a Universe of Discourse `UoD = [1, 3]`, which of the\nfollowing statements is most likely true about `C`?",
    "options": {
      "A": "`C` will be a normal fuzzy number.",
      "B": "`C` will be a subnormal fuzzy set.",
      "C": "`C` will be a fuzzy singleton.",
      "D": "`C` will be identical to `A`."
    },
    "answer": "B",
    "source": "Lecture_W5L50_Lecture_21__Arithmetic_Operations_on_Fuzzy_Numbers",
    "difficulty": "Hard",
    "explanation": "`C` will be a subnormal fuzzy set. Fuzzy arithmetic uses the Extension Principle. Fuzzy multiplication on a restricted universe of discourse may produce subnormal results.",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "30",
    "question": "What is the primary purpose of **cylindrical extension** in fuzzy relational calculus?",
    "options": {
      "A": "To reduce the dimensionality of a fuzzy relation.",
      "B": "To convert a fuzzy set into a crisp value.",
      "C": "To expand a fuzzy set into a higher-dimensional space, making it independent of new dimensions.",
      "D": "To find the transitive closure of a fuzzy relation."
    },
    "answer": "C",
    "source": "Lecture_W7L67_Lecture_32__Cylindrical_Extension_of_Fuzzy_Set",
    "difficulty": "Hard",
    "explanation": "To expand a fuzzy set into a higher-dimensional space, making it independent of new dimensions. Cylindrical extension expands a fuzzy set into a higher-dimensional space. It preserves the original membership values regardless of the new dimension.",
    "source_exam": "Mock Exam 1"
  },
  {
    "number": "1",
    "question": "What is the core characteristic of Fuzzy Logic that distinguishes it from Bivalent Logic?",
    "options": {
      "A": "It only deals with precise numerical values.",
      "B": "It allows for degrees of truth between 0 and 1.",
      "C": "It is strictly limited to ON/OFF states.",
      "D": "It is a form of Boolean algebra."
    },
    "answer": "B",
    "source": "Lecture_W1L18_Lecture_1__Introduction___Fuzzy_Sets__Logic_and_Sy",
    "difficulty": "Easy",
    "explanation": "It allows for degrees of truth between 0 and 1. Unlike bivalent (Boolean) logic which only allows true/false (0 or 1), fuzzy logic handles partial truth, enabling reasoning with imprecise or vague information.",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "2",
    "question": "What is the typical range of a membership value (µ) for an element in a fuzzy set?",
    "options": {
      "A": "{0, 1}",
      "B": "[0, 1]",
      "C": "(-∞, +∞)",
      "D": "[0, 100]"
    },
    "answer": "B",
    "source": "Lecture_W1L20_Lecture_3__Fuzzy_Sets_and_Fuzzy_Logic_Toolbox_in_M",
    "difficulty": "Easy",
    "explanation": "[0, 1] In fuzzy set theory, membership values range from 0 to 1, representing the degree to which an element belongs to a set — unlike classical sets where membership is strictly 0 or 1.",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "3",
    "question": "Which MATLAB Toolbox component serves as the central environment for building\nfuzzy models?",
    "options": {
      "A": "Simulink Blocks",
      "B": "M-Files",
      "C": "Fuzzy Inference System (FIS)",
      "D": "Data Clustering"
    },
    "answer": "C",
    "source": "Lecture_W1L21_Lecture_4__Fuzzy_Sets_and_Fuzzy_Logic_Toolbox_in_M",
    "difficulty": "Easy",
    "explanation": "Fuzzy Inference System (FIS) MATLAB's Fuzzy Logic Toolbox provides the FIS Editor, Membership Function Editor, Rule Editor, and command-line functions for building fuzzy systems.",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "4",
    "question": "Which standard membership function is defined by three points, forming a triangle, and\nis computationally efficient?",
    "options": {
      "A": "Trapezoidal Membership Function",
      "B": "Gaussian Membership Function",
      "C": "Triangular Membership Function",
      "D": "Sigmoidal Membership Function"
    },
    "answer": "C",
    "source": "Lecture_W1L22_Lecture_5__Membership_Functions__Part_I_",
    "difficulty": "Easy",
    "explanation": "Triangular Membership Function (Source: W1L22 5: Membership Functions: Part I )",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "5",
    "question": "What is the definition of the 'Core' of a fuzzy set A?",
    "options": {
      "A": "The set of all elements x for which µA(x) > 0.",
      "B": "The set of all elements x for which µA(x) < 1.",
      "C": "The set of all elements x for which µA(x) = 1.",
      "D": "The set of all elements x for which µA(x) = 0.5."
    },
    "answer": "C",
    "source": "Lecture_W2L27_Lecture_7__Nomenclatures_used_in_Fuzzy_Set_Theory_",
    "difficulty": "Easy",
    "explanation": "The set of all elements x for which µA(x) = 1. The core consists of all elements with full membership (µ = 1). It represents the 'definitely in' region of the fuzzy set.",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "6",
    "question": "What is a 'Fuzzy Singleton'?",
    "options": {
      "A": "A fuzzy set where all elements have a membership value of 1.",
      "B": "A fuzzy set where only one element has a non-zero membership value, and that value is exactly 1.",
      "C": "A fuzzy set with a height less than 1.",
      "D": "A fuzzy set that is both normal and convex."
    },
    "answer": "B",
    "source": "Lecture_W2L28_Lecture_8__Nomenclatures_used_in_Fuzzy_Set_Theory_",
    "difficulty": "Easy",
    "explanation": "A fuzzy set where only one element has a non-zero membership value, and that value is exactly 1. A fuzzy singleton has exactly one element with µ = 1 and all others at 0. It represents a precise value in the fuzzy framework.",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "7",
    "question": "What mathematical operator is typically used for Fuzzy Union (A ∪",
    "options": {
      "A": "min",
      "B": "max",
      "C": "product",
      "D": "sum"
    },
    "answer": "B",
    "source": "Lecture_W2L30_Lecture_10__Set_Theoretic_Operations_on_Fuzzy_Sets",
    "difficulty": "Easy",
    "explanation": "max In standard fuzzy set operations, union uses the max operator (corresponding to OR), intersection uses min (corresponding to AND), and complement is 1 − µ (corresponding to NOT).",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "8",
    "question": "What operation do T-norm operators primarily model in fuzzy logic?",
    "options": {
      "A": "Fuzzy Union (OR)",
      "B": "Fuzzy Intersection (AN",
      "C": "Fuzzy Complement (NOT)",
      "D": "Fuzzy Difference"
    },
    "answer": "B",
    "source": "Lecture_W5L53_Lecture_24__T_norm_Operators",
    "difficulty": "Easy",
    "explanation": "Fuzzy Intersection (AN T-norm operators generalize fuzzy intersection (AND). Common T-norms include min (Zadeh), algebraic product, bounded difference, and drastic product.",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "9",
    "question": "What operation do S-norm operators primarily model in fuzzy logic?",
    "options": {
      "A": "Fuzzy Union (OR)",
      "B": "Fuzzy Intersection (AN",
      "C": "Fuzzy Complement (NOT)",
      "D": "Fuzzy Difference"
    },
    "answer": "A",
    "source": "Lecture_W5L54_Lecture_25__S_norm_Operators",
    "difficulty": "Easy",
    "explanation": "Fuzzy Union (OR) S-norm (T-conorm) operators generalize fuzzy union (OR). They are the dual of T-norms. Common S-norms include max, algebraic sum, bounded sum, and drastic sum.",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "10",
    "question": "What is the primary purpose of a 'Linguistic Hedge' in fuzzy logic?",
    "options": {
      "A": "To define the universe of discourse for a fuzzy set.",
      "B": "To convert a fuzzy set into a crisp value.",
      "C": "To modify a primary linguistic term, like 'very' or 'more or less'.",
      "D": "To combine two fuzzy sets using logical AND or OR."
    },
    "answer": "C",
    "source": "Lecture_W9L82_Lecture_41__Linguistic_Hedges",
    "difficulty": "Easy",
    "explanation": "To modify a primary linguistic term, like 'very' or 'more or less'. Linguistic hedges like 'very', 'more or less', and 'slightly' modify membership functions — 'very' concentrates (squares µ) while 'more or less' dilates (√µ).",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "11",
    "question": "Which type of uncertainty is NOT primarily addressed by fuzzy logic, but rather by\nprobability theory?",
    "options": {
      "A": "Ambiguity",
      "B": "Imprecision",
      "C": "Vagueness",
      "D": "Randomness"
    },
    "answer": "D",
    "source": "Lecture_W1L18_Lecture_1__Introduction___Fuzzy_Sets__Logic_and_Sy",
    "difficulty": "Medium",
    "explanation": "Randomness Fuzzy logic handles vagueness, ambiguity, and imprecision. Randomness (stochastic uncertainty) is addressed by probability theory, not fuzzy logic.",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "12",
    "question": "How is a discrete fuzzy set typically represented using the '+' symbol in standard\nnotation?",
    "options": {
      "A": "As an arithmetic sum of membership values.",
      "B": "As a logical OR operation between elements.",
      "C": "As an aggregator for element-membership pairs, not an arithmetic operator.",
      "D": "As a concatenation of string representations."
    },
    "answer": "C",
    "source": "Lecture_W1L20_Lecture_3__Fuzzy_Sets_and_Fuzzy_Logic_Toolbox_in_M",
    "difficulty": "Medium",
    "explanation": "As an aggregator for element-membership pairs, not an arithmetic operator. In fuzzy set notation, '/' separates membership value from element (µ/x), and '+' aggregates pairs — neither is an arithmetic operator.",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "13",
    "question": "What is the primary characteristic that distinguishes the Larsen Fuzzy Model from the\nMamdani Fuzzy Model in terms of how they generate the output fuzzy set?",
    "options": {
      "A": "Larsen uses a crisp consequent, while Mamdani uses a fuzzy consequent.",
      "B": "Larsen scales the consequent fuzzy set, while Mamdani truncates (clips) it.",
      "C": "Larsen uses product for AND, while Mamdani uses min for AND.",
      "D": "Larsen requires defuzzification, while Mamdani does not."
    },
    "answer": "B",
    "source": "Lecture_W12L106_Lecture_56__Larsen_Fuzzy_Model__Part_I_",
    "difficulty": "Medium",
    "explanation": "Larsen scales the consequent fuzzy set, while Mamdani truncates (clips) it. The Larsen model scales (multiplies) the consequent fuzzy set by the firing strength rather than truncating it, preserving the original membership function shape.",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "14",
    "question": "What is the primary purpose of Contrast Intensification (INT) in fuzzy logic?",
    "options": {
      "A": "To increase the fuzziness of a set by pushing values towards 0.5.",
      "B": "To reduce the fuzziness of a set by pushing membership values towards 0 or 1.",
      "C": "To calculate the complement of a fuzzy set.",
      "D": "To combine two fuzzy sets using a T-norm operator."
    },
    "answer": "B",
    "source": "Lecture_W10L90_Lecture_46__Contrast_Intensification_of_Fuzzy_Sets",
    "difficulty": "Medium",
    "explanation": "To reduce the fuzziness of a set by pushing membership values towards 0 or 1. Contrast intensification reduces fuzziness by pushing values above 0.5 toward 1 and values below 0.5 toward 0, making the set more crisp-like.",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "15",
    "question": "What is the core condition for a term set `T(x)` to be considered 'orthogonal'?",
    "options": {
      "A": "All fuzzy sets in the term set must be subnormal.",
      "B": "For any element x, the sum of its membership grades across all fuzzy sets in the term set is exactly 1.",
      "C": "Each fuzzy set in the term set must be a fuzzy singleton.",
      "D": "The intersection of any two fuzzy sets in the term set must be an empty set."
    },
    "answer": "B",
    "source": "Lecture_W10L91_Lecture_47__Orthogonality_of_Fuzzy_Sets",
    "difficulty": "Medium",
    "explanation": "For any element x, the sum of its membership grades across all fuzzy sets in the term set is exactly 1. An orthogonal term set forms a partition of unity — at every point in the universe of discourse, all membership values sum to exactly 1.",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "16",
    "question": "What is the function of the 'Fuzzifier' component in a Fuzzy Inference System (FIS)?",
    "options": {
      "A": "It applies fuzzy logic rules to generate an output.",
      "B": "It converts the aggregated fuzzy output into a crisp numerical value.",
      "C": "It stores the collection of IF-THEN rules.",
      "D": "It converts a crisp input value into a fuzzy value by determining its degree of membership."
    },
    "answer": "D",
    "source": "Lecture_W10L94_Lecture_50__Fuzzy_Inference_System",
    "difficulty": "Medium",
    "explanation": "It converts a crisp input value into a fuzzy value by determining its degree of membership. A Fuzzy Inference System consists of four main components: Fuzzifier (converts crisp inputs to fuzzy), Rule Base (stores IF-THEN rules), Inference Engine (applies rules), and Defuzzifier (converts fuzzy output to crisp).",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "17",
    "question": "In a Mamdani Fuzzy Model, when a rule has multiple antecedents connected by an\n'AND' operator, what operator is typically used for 'antecedent aggregation' to determine the\nrule's overall firing strength?",
    "options": {
      "A": "max",
      "B": "sum",
      "C": "product",
      "D": "min"
    },
    "answer": "D",
    "source": "Lecture_W11L100_Lecture_53__Mamdani_Fuzzy_Model__Part_III_",
    "difficulty": "Medium",
    "explanation": "min The Mamdani model uses fuzzy sets as both antecedents and consequents. The output is obtained by truncating (clipping) the consequent fuzzy set at the firing strength, then aggregating and defuzzifying.",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "18",
    "question": "Which of the following classical set properties is UPHELD in fuzzy set theory?",
    "options": {
      "A": "Law of Contradiction",
      "B": "Law of Excluded Middle",
      "C": "Idempotency",
      "D": "Absorption of Complement"
    },
    "answer": "C",
    "source": "Lecture_W3L35_Lecture_12__Properties_of_Fuzzy_Sets__Part_I_",
    "difficulty": "Medium",
    "explanation": "Idempotency Idempotency, commutativity, associativity, distributivity, and De Morgan's laws are all preserved in fuzzy set theory.",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "19",
    "question": "Which of De Morgan's Laws states that the complement of the union of two fuzzy sets\nis equivalent to the intersection of their individual complements?",
    "options": {
      "A": "(A ∩",
      "B": "= A",
      "C": "A ∪ (A ∩",
      "D": "A ∩ (A ∪"
    },
    "answer": "B",
    "source": "Lecture_W4L42_Lecture_16__Properties_of_Fuzzy_Sets__Part_V_",
    "difficulty": "Medium",
    "explanation": "= A In standard fuzzy set operations, union uses the max operator (corresponding to OR), intersection uses min (corresponding to AND), and complement is 1 − µ (corresponding to NOT).",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "20",
    "question": "How is the membership value for an ordered pair (x, y) in a Fuzzy Cartesian Product (A\n×",
    "options": {
      "A": "µA×B(x, y) = µA(x) + µB(y)",
      "B": "µA×B(x, y) = max(µA(x), µB(y))",
      "C": "µA×B(x, y) = min(µA(x), µB(y))",
      "D": "µA×B(x, y) = µA(x) * µB(y)"
    },
    "answer": "C",
    "source": "Lecture_W6L61_Lecture_29__Fuzzy_Relation__Part_II_",
    "difficulty": "Medium",
    "explanation": "µA×B(x, y) = min(µA(x), µB(y)) The fuzzy Cartesian product gives µ(x,y) = min(µ_A(x), µ_B(y)) for each ordered pair (x,y).",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "21",
    "question": "What is the primary purpose of 'Projection' in fuzzy logic when applied to a fuzzy\nrelation?",
    "options": {
      "A": "To increase the dimensionality of the relation.",
      "B": "To combine two relations into a single, more complex one.",
      "C": "To reduce the dimensionality of a fuzzy relation by summarizing along one or more dimensions.",
      "D": "To convert a fuzzy relation into a crisp relation."
    },
    "answer": "C",
    "source": "Lecture_W7L66_Lecture_31__Projection_of_Fuzzy_Relation_Set",
    "difficulty": "Medium",
    "explanation": "To reduce the dimensionality of a fuzzy relation by summarizing along one or more dimensions. Projection reduces dimensionality by taking the supremum (max) along the eliminated dimension.",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "22",
    "question": "What is the core rule for calculating the membership value during 'Cylindrical\nExtension' of a fuzzy set A from its original universe X into a larger Cartesian product space\nX x Y?",
    "options": {
      "A": "(x,y) = µA(x) * µA(y)",
      "B": "µC(",
      "C": "µC(",
      "D": "µC("
    },
    "answer": "C",
    "source": "Lecture_W7L67_Lecture_32__Cylindrical_Extension_of_Fuzzy_Set",
    "difficulty": "Medium",
    "explanation": "µC( The fuzzy Cartesian product gives µ(x,y) = min(µ_A(x), µ_B(y)) for each ordered pair (x,y).",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "23",
    "question": "What is the mathematical formula for Contrast Intensification (INT) for membership\nvalues µA(x) ∈ [0, 0.5]?",
    "options": {
      "A": "(x) = √µA(x)",
      "B": "µ_INT(",
      "C": "µ_INT(",
      "D": "µ_INT("
    },
    "answer": "C",
    "source": "Lecture_W10L90_Lecture_46__Contrast_Intensification_of_Fuzzy_Sets",
    "difficulty": "Hard",
    "explanation": "µ_INT( Contrast intensification reduces fuzziness by pushing values above 0.5 toward 1 and values below 0.5 toward 0, making the set more crisp-like.",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "24",
    "question": "If a term set T(x) = {t1, t2, t3} is orthogonal, and fuzzy sets t1 and t2 are known, how is\nthe membership function for the unknown set t3 derived?",
    "options": {
      "A": "µ_t3(x) = µ_t1(x) + µ_t2(x)",
      "B": "µ_t3(x) = min(µ_t1(x), µ_t2(x))",
      "C": "µ_t3(x) = 1 - (µ_t1(x) + µ_t2(x))",
      "D": "µ_t3(x) = max(µ_t1(x), µ_t2(x))"
    },
    "answer": "C",
    "source": "Lecture_W10L91_Lecture_47__Orthogonality_of_Fuzzy_Sets",
    "difficulty": "Hard",
    "explanation": "µ_t3(x) = 1 - (µ_t1(x) + µ_t2(x)) An orthogonal term set forms a partition of unity — at every point in the universe of discourse, all membership values sum to exactly 1.",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "25",
    "question": "Which interpretation of a fuzzy rule ('IF x is A THEN y is B') is based on logical\nimplication, defining the relationship with formulas derived from classical and extended\nlogic, such as `¬A ∪ B`?",
    "options": {
      "A": "A coupled with B",
      "B": "A correlated with B",
      "C": "A entails B",
      "D": "A combined with B"
    },
    "answer": "C",
    "source": "Lecture_W10L93_Lecture_49__Fuzzy_Rules_and_Fuzzy_Reasoning__Part_",
    "difficulty": "Hard",
    "explanation": "A entails B Fuzzy rules use IF-THEN structure. 'A entails B' interprets the rule as logical implication (¬A ∪ B), while 'A coupled with B' uses conjunction (A ∩ B).",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "26",
    "question": "What is the defining characteristic of the consequent part of a rule in the Tsukamoto\nFuzzy Model?",
    "options": {
      "A": "It is always a crisp numerical value.",
      "B": "It is a fuzzy set with a monotonically increasing or decreasing membership function.",
      "C": "It is a fuzzy set that is truncated by the firing strength.",
      "D": "It is a linear polynomial function of the input variables."
    },
    "answer": "B",
    "source": "Lecture_W12L109_Lecture_59__Tsukamoto_Fuzzy_Model",
    "difficulty": "Hard",
    "explanation": "It is a fuzzy set with a monotonically increasing or decreasing membership function. The Tsukamoto model requires monotonic consequent membership functions, allowing direct computation of a crisp output by finding the value where µ equals the firing strength.",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "27",
    "question": "What is the key innovation of the TSK (Takagi-Sugeno-Kang) Fuzzy Model regarding its\nconsequent part?",
    "options": {
      "A": "The consequent is always a fuzzy set that is scaled by the firing strength.",
      "B": "The consequent is a crisp mathematical polynomial function of the input variables.",
      "C": "The consequent is a fuzzy set with a monotonic membership function.",
      "D": "The consequent is always a single, crisp constant value."
    },
    "answer": "B",
    "source": "Lecture_W12L110_Lecture_60__TSK_Fuzzy_Model",
    "difficulty": "Hard",
    "explanation": "The consequent is a crisp mathematical polynomial function of the input variables. The TSK (Takagi-Sugeno-Kang) model uses a crisp polynomial function as the consequent, producing a crisp output directly without needing complex defuzzification.",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "28",
    "question": "Which of the following absorption properties involving complements is NOT upheld in\nfuzzy set theory?",
    "options": {
      "A": "A ∪ (A ∩",
      "B": "= A ∪ B",
      "C": "(A')' = A",
      "D": "A ∪ (A' ∩"
    },
    "answer": "D",
    "source": "Lecture_W3L38_Lecture_15__Properties_of_Fuzzy_Sets__Part_IV_",
    "difficulty": "Hard",
    "explanation": "A ∪ (A' ∩ Standard absorption (A ∪ (A ∩ B) = A) holds in fuzzy sets, but absorption with complements may not hold since the Laws of Excluded Middle and Contradiction are violated.",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "29",
    "question": "In the Extension Principle, if multiple elements from the source fuzzy set (",
    "options": {
      "A": "It is the sum of the membership values of all source elements mapping to y*.",
      "B": "It is the minimum of the membership values of all source elements mapping to y*.",
      "C": "It is the product of the membership values of all source elements mapping to y*.",
      "D": "It is the maximum of the membership values of all source elements mapping to y*."
    },
    "answer": "D",
    "source": "Lecture_W7L70_Lecture_35__Extension_Principle",
    "difficulty": "Hard",
    "explanation": "It is the maximum of the membership values of all source elements mapping to y*. The Extension Principle maps fuzzy sets through functions. When multiple inputs map to the same output, the maximum of their membership values is taken.",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "30",
    "question": "What is the mathematical condition for 'Transitivity' in a fuzzy relation R, for all\nelements x, j, k in the set X?",
    "options": {
      "A": "µ_R(x, j) = µ_R(j, x)",
      "B": "µ_R(x, x) = 1",
      "C": "µ_R(x, k) ≥ min(µ_R(x, j), µ_R(j, k))",
      "D": "µ_R(x, k) = max(µ_R(x, j), µ_R(j, k))"
    },
    "answer": "C",
    "source": "Lecture_W8L77_Lecture_39__Fuzzy_Tolerance_and_Equivalence_Relati",
    "difficulty": "Hard",
    "explanation": "µ_R(x, k) ≥ min(µ_R(x, j), µ_R(j, k)) Max-min transitivity means µ_R(x,k) ≥ max_j[min(µ_R(x,j), µ_R(j,k))] for all elements x, j, k.",
    "source_exam": "Mock Exam 2"
  },
  {
    "number": "1",
    "question": "Which of the following best describes the core difference between fuzzy logic and\nbivalent logic?",
    "options": {
      "A": "Fuzzy logic uses only 0s and 1s, while bivalent logic uses real numbers.",
      "B": "Fuzzy logic allows for degrees of truth between 0 and 1, while bivalent logic is strictly true (1) or false\n(0).",
      "C": "Fuzzy logic is a subset of bivalent logic.",
      "D": "Bivalent logic handles ambiguity, imprecision, and vagueness better than fuzzy logic."
    },
    "answer": "B",
    "source": "Lecture_W1L18_Lecture_1__Introduction___Fuzzy_Sets__Logic_and_Sy",
    "difficulty": "Easy",
    "explanation": "Fuzzy logic allows for degrees of truth between 0 and 1, while bivalent logic is strictly true (1) or false\n(0). Unlike bivalent (Boolean) logic which only allows true/false (0 or 1), fuzzy logic handles partial truth, enabling reasoning with imprecise or vague information.",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "2",
    "question": "In the notation for a discrete fuzzy set, such as `A = 0.2/16 + 0.1/17`, what do the `+` and\n`/` symbols represent?",
    "options": {
      "A": "`+` is arithmetic addition, `/` is arithmetic division.",
      "B": "`+` denotes a collection or union of pairs, `/` is a separator between membership value and element.",
      "C": "`+` is a logical OR, `/` is a logical AND.",
      "D": "`+` signifies concatenation, `/` indicates a ratio."
    },
    "answer": "B",
    "source": "Lecture_W1L20_Lecture_3__Fuzzy_Sets_and_Fuzzy_Logic_Toolbox_in_M",
    "difficulty": "Easy",
    "explanation": "`+` denotes a collection or union of pairs, `/` is a separator between membership value and element. In fuzzy set notation, '/' separates membership value from element (µ/x), and '+' aggregates pairs — neither is an arithmetic operator.",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "3",
    "question": "A fuzzy set where at least one element has a membership value of 1 is called a(n):",
    "options": {
      "A": "Subnormal Fuzzy Set",
      "B": "Normal Fuzzy Set",
      "C": "Crisp Set",
      "D": "Empty Set"
    },
    "answer": "B",
    "source": "Lecture_W1L20_Lecture_3__Fuzzy_Sets_and_Fuzzy_Logic_Toolbox_in_M",
    "difficulty": "Easy",
    "explanation": "Normal Fuzzy Set (Source: W1L20 3: Fuzzy Sets and Fuzzy Logic Toolbox in M)",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "4",
    "question": "Which of the following is NOT a standard membership function introduced in Lecture 5?",
    "options": {
      "A": "Triangular Membership Function",
      "B": "Square Membership Function",
      "C": "Gaussian Membership Function",
      "D": "Sigmoidal Membership Function"
    },
    "answer": "B",
    "source": "Lecture_W1L22_Lecture_5__Membership_Functions__Part_I_",
    "difficulty": "Easy",
    "explanation": "Square Membership Function (Source: W1L22 5: Membership Functions: Part I )",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "6",
    "question": "What is the result of the fuzzy complement operation on a membership value µA(x) =\n0.7?",
    "options": {
      "A": "0.7",
      "B": "0.3",
      "C": "1.0",
      "D": "0.0"
    },
    "answer": "B",
    "source": "Lecture_W2L29_Lecture_9__Nomenclatures_used_in_Fuzzy_Set_Theory_",
    "difficulty": "Easy",
    "explanation": "0.3 (Source: W2L29 9: Nomenclatures used in Fuzzy Set Theory )",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "7",
    "question": "Which operator is typically used for Fuzzy Union (A ∪",
    "options": {
      "A": "min",
      "B": "max",
      "C": "product",
      "D": "sum"
    },
    "answer": "B",
    "source": "Lecture_W3L34_Lecture_11__Set_Theoretic_Operations_on_Fuzzy_Sets",
    "difficulty": "Easy",
    "explanation": "max In standard fuzzy set operations, union uses the max operator (corresponding to OR), intersection uses min (corresponding to AND), and complement is 1 − µ (corresponding to NOT).",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "8",
    "question": "Which of the following properties holds true for fuzzy sets?",
    "options": {
      "A": "Law of Contradiction",
      "B": "Law of Excluded Middle",
      "C": "Idempotency",
      "D": "Absorption of Complement for Union"
    },
    "answer": "C",
    "source": "Lecture_W3L35_Lecture_12__Properties_of_Fuzzy_Sets__Part_I_",
    "difficulty": "Easy",
    "explanation": "Idempotency (Source: W3L35 12: Properties of Fuzzy Sets: Part I )",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "9",
    "question": "What is the primary purpose of the Fuzzifier component in a Fuzzy Inference System\n(FIS)?",
    "options": {
      "A": "To convert fuzzy outputs into crisp numerical values.",
      "B": "To apply fuzzy logic rules to fuzzified inputs.",
      "C": "To convert crisp input values into fuzzy values (membership degrees).",
      "D": "To store the collection of IF-THEN rules."
    },
    "answer": "C",
    "source": "Lecture_W10L94_Lecture_50__Fuzzy_Inference_System",
    "difficulty": "Easy",
    "explanation": "To convert crisp input values into fuzzy values (membership degrees). A Fuzzy Inference System consists of four main components: Fuzzifier (converts crisp inputs to fuzzy), Rule Base (stores IF-THEN rules), Inference Engine (applies rules), and Defuzzifier (converts fuzzy output to crisp).",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "10",
    "question": "In the Mamdani Fuzzy Model, if a rule states 'IF x is A AND y is B THEN z is C', and the\n'AND' connective is implemented using the `min` operator, how is the overall firing strength\ncalculated?",
    "options": {
      "A": "By summing the membership values of A and B.",
      "B": "By taking the product of the membership values of A and B.",
      "C": "By taking the minimum of the membership values of A and B.",
      "D": "By taking the maximum of the membership values of A and B."
    },
    "answer": "C",
    "source": "Lecture_W11L101_Lecture_54__Example_on_Mamdani_Fuzzy_Model_for_Sin",
    "difficulty": "Easy",
    "explanation": "By taking the minimum of the membership values of A and B. The Mamdani model uses fuzzy sets as both antecedents and consequents. The output is obtained by truncating (clipping) the consequent fuzzy set at the firing strength, then aggregating and defuzzifying.",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "11",
    "question": "A fuzzy set `A` is given as `{(5, 0.1), (6, 0.5), (7, 0.8), (9, 1.0), (10, 0.7), (11, 0.3)}`. What is\nthe Support of this fuzzy set?",
    "options": {
      "A": "{9}",
      "B": "{5, 6, 7, 9, 10, 11}",
      "C": "{6}",
      "D": "{1.0}"
    },
    "answer": "B",
    "source": "Lecture_W2L27_Lecture_7__Nomenclatures_used_in_Fuzzy_Set_Theory_",
    "difficulty": "Medium",
    "explanation": "{5, 6, 7, 9, 10, 11} The support is the set of all elements with µ > 0. It defines the boundary of the fuzzy set.",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "12",
    "question": "Given fuzzy sets A = `{ (1, 0.2), (2, 0.5), (3, 0.9) }` and B = `{ (1, 0.3), (2, 0.5), (3, 0.4) }`, is A\na subset of B (A ⊆",
    "options": {
      "A": "Yes, because 0.2 ≤ 0.3 and 0.5 ≤ 0.5.",
      "B": "No, because at x=3, µA(3) = 0.9 which is not ≤ µB(3) = 0.4.",
      "C": "Yes, because they share common elements.",
      "D": "No, because they are not equal."
    },
    "answer": "B",
    "source": "Lecture_W2L29_Lecture_9__Nomenclatures_used_in_Fuzzy_Set_Theory_",
    "difficulty": "Medium",
    "explanation": "No, because at x=3, µA(3) = 0.9 which is not ≤ µB(3) = 0.4. (Source: W2L29 9: Nomenclatures used in Fuzzy Set Theory )",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "13",
    "question": "Which of the following algebraic properties of fuzzy sets is NOT preserved when using\nstandard `min` for intersection and `max` for union?",
    "options": {
      "A": "Commutativity of Union",
      "B": "Associativity of Intersection",
      "C": "Distributivity of Union over Intersection",
      "D": "Absorption of Complement for Union"
    },
    "answer": "D",
    "source": "Lecture_W3L38_Lecture_15__Properties_of_Fuzzy_Sets__Part_IV_",
    "difficulty": "Medium",
    "explanation": "Absorption of Complement for Union In standard fuzzy set operations, union uses the max operator (corresponding to OR), intersection uses min (corresponding to AND), and complement is 1 − µ (corresponding to NOT).",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "14",
    "question": "The distance between two fuzzy sets, A and B, is itself a fuzzy set. How is the\nmembership grade µd(A,",
    "options": {
      "A": ", µB(x",
      "B": "where δ = |xA - xB|.",
      "C": "As max { min(µA(x",
      "D": "As min { max(µA(x"
    },
    "answer": "C",
    "source": "Lecture_W4L43_Lecture_17__Distance_between_Fuzzy_Sets__Part_I_",
    "difficulty": "Medium",
    "explanation": "As max { min(µA(x Fuzzy distance measures (Hamming, Euclidean, Minkowski) quantify how different two fuzzy sets are based on membership value differences.",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "15",
    "question": "When performing fuzzy multiplication (A *",
    "options": {
      "A": "They must always be positive.",
      "B": "They must be integers.",
      "C": "They must fall within the predefined Universe of Discourse (Uo",
      "D": "They must be greater than 1."
    },
    "answer": "C",
    "source": "Lecture_W5L50_Lecture_21__Arithmetic_Operations_on_Fuzzy_Numbers",
    "difficulty": "Medium",
    "explanation": "They must fall within the predefined Universe of Discourse (Uo Fuzzy arithmetic uses the Extension Principle. Fuzzy multiplication on a restricted universe of discourse may produce subnormal results.",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "16",
    "question": "Which of the following is a key characteristic of the Tsukamoto Fuzzy Model?",
    "options": {
      "A": "Its consequent part is always a crisp mathematical polynomial function.",
      "B": "It requires a complex defuzzification step using Centroid of Area.",
      "C": "The consequent of each rule is a fuzzy set with a monotonically increasing or decreasing membership\nfunction.",
      "D": "It exclusively accepts fuzzy inputs, not crisp ones."
    },
    "answer": "C",
    "source": "Lecture_W12L109_Lecture_59__Tsukamoto_Fuzzy_Model",
    "difficulty": "Medium",
    "explanation": "The consequent of each rule is a fuzzy set with a monotonically increasing or decreasing membership\nfunction. The Tsukamoto model requires monotonic consequent membership functions, allowing direct computation of a crisp output by finding the value where µ equals the firing strength.",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "17",
    "question": "In the TSK Fuzzy Model, what is the nature of the consequent part of an IF-THEN rule?",
    "options": {
      "A": "It is always a fuzzy set.",
      "B": "It is a crisp mathematical polynomial function of the input variables.",
      "C": "It is a monotonically increasing or decreasing fuzzy set.",
      "D": "It is a linguistic hedge."
    },
    "answer": "B",
    "source": "Lecture_W12L110_Lecture_60__TSK_Fuzzy_Model",
    "difficulty": "Medium",
    "explanation": "It is a crisp mathematical polynomial function of the input variables. The TSK (Takagi-Sugeno-Kang) model uses a crisp polynomial function as the consequent, producing a crisp output directly without needing complex defuzzification.",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "18",
    "question": "What is the primary difference in how the Larsen Fuzzy Model generates its output\nmembership function compared to the Mamdani Fuzzy Model?",
    "options": {
      "A": "Larsen uses max-min composition, while Mamdani uses max-product.",
      "B": "Larsen scales the consequent fuzzy set by the firing strength, while Mamdani truncates (clips) it.",
      "C": "Larsen produces a crisp output, while Mamdani produces a fuzzy output.",
      "D": "Larsen only works with fuzzy inputs, while Mamdani works with crisp inputs."
    },
    "answer": "B",
    "source": "Lecture_W12L106_Lecture_56__Larsen_Fuzzy_Model__Part_I_",
    "difficulty": "Medium",
    "explanation": "Larsen scales the consequent fuzzy set by the firing strength, while Mamdani truncates (clips) it. The Larsen model scales (multiplies) the consequent fuzzy set by the firing strength rather than truncating it, preserving the original membership function shape.",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "19",
    "question": "Which property ensures that the order of composition in a three-relation chain doesn't\nmatter, i.e., (R o S1) o T = R o (S1 o T)?",
    "options": {
      "A": "Distributivity",
      "B": "Commutativity",
      "C": "Associativity",
      "D": "Monotonicity"
    },
    "answer": "C",
    "source": "Lecture_W8L75_Lecture_37__Properties_of_Composition_of_Fuzzy_Rel",
    "difficulty": "Medium",
    "explanation": "Associativity Max-min composition of fuzzy relations is associative and distributes over union. It is the standard composition method in fuzzy inference.",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "20",
    "question": "A fuzzy relation R is considered a Fuzzy Tolerance Relation if it satisfies which two\nproperties?",
    "options": {
      "A": "Reflexivity and Transitivity",
      "B": "Symmetry and Transitivity",
      "C": "Reflexivity and Symmetry",
      "D": "Anti-reflexivity and Anti-symmetry"
    },
    "answer": "C",
    "source": "Lecture_W8L76_Lecture_38__Fuzzy_Tolerance_and_Equivalence_Relati",
    "difficulty": "Medium",
    "explanation": "Reflexivity and Symmetry A fuzzy tolerance relation requires reflexivity and symmetry. A fuzzy equivalence relation additionally requires max-min transitivity.",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "21",
    "question": "What is the mathematical operation for the linguistic hedge 'very' when applied to a\nfuzzy set A?",
    "options": {
      "A": "µ_very_A(x) = √µ_A(x)",
      "B": "µ_very_A(x) = 1 - µ_A(x)",
      "C": "µ_very_A(x) = [µ_A(x)]²",
      "D": "µ_very_A(x) = µ_A(x) + 0.5"
    },
    "answer": "C",
    "source": "Lecture_W9L82_Lecture_41__Linguistic_Hedges",
    "difficulty": "Medium",
    "explanation": "µ_very_A(x) = [µ_A(x)]² Linguistic hedges like 'very', 'more or less', and 'slightly' modify membership functions — 'very' concentrates (squares µ) while 'more or less' dilates (√µ).",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "22",
    "question": "Contrast Intensification (INT) is an operation designed to reduce the fuzziness of a set.\nFor membership values µA(x) in the range [0, 0.5], what is the formula for µ_INT(",
    "options": {
      "A": "(x) = √µA(x)",
      "B": "µ_INT(",
      "C": "µ_INT(",
      "D": "µ_INT("
    },
    "answer": "B",
    "source": "Lecture_W10L90_Lecture_46__Contrast_Intensification_of_Fuzzy_Sets",
    "difficulty": "Medium",
    "explanation": "µ_INT( In fuzzy set theory, membership values range from 0 to 1, representing the degree to which an element belongs to a set — unlike classical sets where membership is strictly 0 or 1.",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "23",
    "question": "Given two fuzzy sets A = `{0.7/1, 0.5/2}` and B = `{0.1/1, 0.8/2}`. If Yager's T-norm with\nparameter `w = 1` is used to find their intersection, what is the membership value for x=1?",
    "options": {
      "A": "0.7",
      "B": "0.1",
      "C": "0",
      "D": "0.07"
    },
    "answer": "C",
    "source": "Lecture_W6L58_Lecture_26__Parameterized_T_Norm_Operators",
    "difficulty": "Hard",
    "explanation": "0 T-norm operators generalize fuzzy intersection (AND). Common T-norms include min (Zadeh), algebraic product, bounded difference, and drastic product.",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "24",
    "question": "A fuzzy set is defined as a 'Fuzzy Number' if it satisfies which two conditions?",
    "options": {
      "A": "It is symmetric and has a bandwidth of 1.",
      "B": "It is normal and convex.",
      "C": "Its support is finite and its core is non-empty.",
      "D": "It is an Open Left or Open Right set."
    },
    "answer": "B",
    "source": "Lecture_W2L28_Lecture_8__Nomenclatures_used_in_Fuzzy_Set_Theory_",
    "difficulty": "Hard",
    "explanation": "It is normal and convex. A fuzzy number must be normal (height = 1) and convex, ensuring it represents a meaningful approximate value.",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "25",
    "question": "The Law of Contradiction (`A ∩ A' = ∅`) and the Law of Excluded Middle (`A ∪ A' = X`)\nare both violated in fuzzy set theory. What is the primary reason for these violations?",
    "options": {
      "A": "Fuzzy sets use only discrete elements, unlike crisp sets.",
      "B": "Fuzzy sets allow for partial membership, representing 'gray areas' where elements can partially\nbelong to both a set and its complement.",
      "C": "Fuzzy sets do not have complements defined.",
      "D": "Fuzzy sets always have a height less than 1."
    },
    "answer": "B",
    "source": "Lecture_W3L35_Lecture_12__Properties_of_Fuzzy_Sets__Part_I_",
    "difficulty": "Hard",
    "explanation": "Fuzzy sets allow for partial membership, representing 'gray areas' where elements can partially\nbelong to both a set and its complement. In fuzzy sets, A ∪ A' ≠ X and A ∩ A' ≠ ∅ because membership values are partial — max(µ, 1−µ) isn't always 1, and min(µ, 1−µ) isn't always 0.",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "26",
    "question": "When performing fuzzy arithmetic, such as (A +",
    "options": {
      "A": "Fuzzy arithmetic is commutative.",
      "B": "The Extension Principle is flawed for complex operations.",
      "C": "Standard algebraic identities from crisp mathematics do not automatically apply to fuzzy numbers.",
      "D": "The Universe of Discourse was incorrectly defined."
    },
    "answer": "C",
    "source": "Lecture_W5L52_Lecture_23__Arithmetic_Operations_on_Fuzzy_Numbers",
    "difficulty": "Hard",
    "explanation": "Standard algebraic identities from crisp mathematics do not automatically apply to fuzzy numbers. Fuzzy arithmetic uses the Extension Principle. Fuzzy multiplication on a restricted universe of discourse may produce subnormal results.",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "27",
    "question": "Which of the following is NOT an axiom that a function must satisfy to be considered a\nvalid T-norm operator?",
    "options": {
      "A": "Boundary: T(a, 1) = a and T(a, 0) = 0.",
      "B": "Commutativity: T(a, b) = T(b, a).",
      "C": "Distributivity: T(a, T(b, c)) = T(T(a, b), T(a, c)).",
      "D": "Associativity: T(a, T(b, c)) = T(T(a, b), c)."
    },
    "answer": "C",
    "source": "Lecture_W5L53_Lecture_24__T_norm_Operators",
    "difficulty": "Hard",
    "explanation": "Distributivity: T(a, T(b, c)) = T(T(a, b), T(a, c)). T-norm operators generalize fuzzy intersection (AND). Common T-norms include min (Zadeh), algebraic product, bounded difference, and drastic product.",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "28",
    "question": "Given a fuzzy relation R (on X×Y) and S (on Y×Z), what is the relationship between R o\n(S1 ∩ S2) and (R o S1) ∩ (R o S2) in max-min composition?",
    "options": {
      "A": "R o (S1 ∩ S2) = (R o S1) ∩ (R o S2)",
      "B": "R o (S1 ∩ S2) ⊃ (R o S1) ∩ (R o S2)",
      "C": "R o (S1 ∩ S2) ⊆ (R o S1) ∩ (R o S2)",
      "D": "There is no consistent relationship between them."
    },
    "answer": "C",
    "source": "Lecture_W8L75_Lecture_37__Properties_of_Composition_of_Fuzzy_Rel",
    "difficulty": "Hard",
    "explanation": "R o (S1 ∩ S2) ⊆ (R o S1) ∩ (R o S2) Max-min composition of fuzzy relations is associative and distributes over union. It is the standard composition method in fuzzy inference.",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "29",
    "question": "A fuzzy relation R is a Fuzzy Equivalence Relation if it is reflexive, symmetric, and\ntransitive. What is the condition for transitivity?",
    "options": {
      "A": "µ_R(x, k) = µ_R(k, x) for all x, k.",
      "B": "µ_R(x, x) = 1 for all x.",
      "C": "µ_R(x, k) ≥ max(µ_R(x, j), µ_R(j, k)) for all x, j, k.",
      "D": "µ_R(x, k) ≥ min(µ_R(x, j), µ_R(j, k)) for all x, j, k."
    },
    "answer": "D",
    "source": "Lecture_W8L77_Lecture_39__Fuzzy_Tolerance_and_Equivalence_Relati",
    "difficulty": "Hard",
    "explanation": "µ_R(x, k) ≥ min(µ_R(x, j), µ_R(j, k)) for all x, j, k. A fuzzy tolerance relation requires reflexivity and symmetry. A fuzzy equivalence relation additionally requires max-min transitivity.",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "30",
    "question": "To transform a Fuzzy Tolerance Relation R into a Fuzzy Equivalence Relation, the\nprocess involves iterative self-composition (R² = R o R, R³ = R² o R, etc.) using the max-min\ncomposition operator. This process is guaranteed to find the transitive closure in at most\nhow many compositions, where n is the number of elements in the set?",
    "options": {
      "A": "n",
      "B": "n/2",
      "C": "n-1",
      "D": "2n"
    },
    "answer": "C",
    "source": "Lecture_W8L78_Lecture_40__Fuzzy_Tolerance_and_Equivalence_Relati",
    "difficulty": "Hard",
    "explanation": "n-1 A fuzzy tolerance relation requires reflexivity and symmetry. A fuzzy equivalence relation additionally requires max-min transitivity.",
    "source_exam": "Mock Exam 3"
  },
  {
    "number": "1",
    "question": "Which of the following best describes Fuzzy Logic?",
    "options": {
      "A": "A form of bivalent logic where propositions are strictly true or false.",
      "B": "A form of multi-valued logic allowing for degrees of truth between 0 and 1.",
      "C": "A system primarily used for modeling randomness and probability.",
      "D": "A subset of Machine Learning focused on deep neural networks."
    },
    "answer": "B",
    "source": "Lecture_W1L18_Lecture_1__Introduction___Fuzzy_Sets__Logic_and_Sy",
    "difficulty": "Easy",
    "explanation": "A form of multi-valued logic allowing for degrees of truth between 0 and 1. (Source: W1L18 1: Introduction:  Fuzzy Sets: Logic and Sy)",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "2",
    "question": "In the context of fuzzy sets, what does the notation `A = 0.2/16 + 0.1/17` signify?",
    "options": {
      "A": "An arithmetic sum where 0.2 is added to 16 and 0.1 is added to 17.",
      "B": "A collection of ordered pairs where 16 has a membership of 0.2 and 17 has a membership of 0.1.",
      "C": "A division operation where 0.2 is divided by 16, and 0.1 by 17.",
      "D": "A continuous fuzzy set where the integral of membership values is calculated."
    },
    "answer": "B",
    "source": "Lecture_W1L20_Lecture_3__Fuzzy_Sets_and_Fuzzy_Logic_Toolbox_in_M",
    "difficulty": "Medium",
    "explanation": "A collection of ordered pairs where 16 has a membership of 0.2 and 17 has a membership of 0.1. In fuzzy set notation, '/' separates membership value from element (µ/x), and '+' aggregates pairs — neither is an arithmetic operator.",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "3",
    "question": "Which MATLAB Fuzzy Logic Toolbox component is used for building fuzzy models\nwhere the output is a fuzzy set?",
    "options": {
      "A": "`sugfis`",
      "B": "`genfis`",
      "C": "`mamfis`",
      "D": "`trimf`"
    },
    "answer": "C",
    "source": "Lecture_W1L21_Lecture_4__Fuzzy_Sets_and_Fuzzy_Logic_Toolbox_in_M",
    "difficulty": "Easy",
    "explanation": "`mamfis` MATLAB's Fuzzy Logic Toolbox provides the FIS Editor, Membership Function Editor, Rule Editor, and command-line functions for building fuzzy systems.",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "4",
    "question": "A fuzzy set where at least one element has a membership value of 1 is called a:",
    "options": {
      "A": "Subnormal Fuzzy Set",
      "B": "Normal Fuzzy Set",
      "C": "Crisp Set",
      "D": "Singleton Fuzzy Set"
    },
    "answer": "B",
    "source": "Lecture_W1L20_Lecture_3__Fuzzy_Sets_and_Fuzzy_Logic_Toolbox_in_M",
    "difficulty": "Easy",
    "explanation": "Normal Fuzzy Set (Source: W1L20 3: Fuzzy Sets and Fuzzy Logic Toolbox in M)",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "5",
    "question": "What is the primary purpose of the Contrast Intensification (INT) operation in fuzzy\nlogic?",
    "options": {
      "A": "To increase the fuzziness of a set by pushing values towards 0.5.",
      "B": "To reduce the fuzziness of a set by pushing membership values towards 0 or 1.",
      "C": "To calculate the complement of a fuzzy set.",
      "D": "To combine two fuzzy sets using a T-norm operator."
    },
    "answer": "B",
    "source": "Lecture_W10L90_Lecture_46__Contrast_Intensification_of_Fuzzy_Sets",
    "difficulty": "Easy",
    "explanation": "To reduce the fuzziness of a set by pushing membership values towards 0 or 1. Contrast intensification reduces fuzziness by pushing values above 0.5 toward 1 and values below 0.5 toward 0, making the set more crisp-like.",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "7",
    "question": "In a Mamdani Fuzzy Model, if a rule has multiple antecedents connected by 'AND', how is\nthe overall firing strength typically calculated?",
    "options": {
      "A": "By taking the maximum of the individual antecedent firing strengths.",
      "B": "By taking the sum of the individual antecedent firing strengths.",
      "C": "By taking the minimum of the individual antecedent firing strengths.",
      "D": "By taking the average of the individual antecedent firing strengths."
    },
    "answer": "C",
    "source": "Lecture_W11L100_Lecture_53__Mamdani_Fuzzy_Model__Part_III_",
    "difficulty": "Medium",
    "explanation": "By taking the minimum of the individual antecedent firing strengths. The Mamdani model uses fuzzy sets as both antecedents and consequents. The output is obtained by truncating (clipping) the consequent fuzzy set at the firing strength, then aggregating and defuzzifying.",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "10",
    "question": "Which of the following is a key feature of the TSK (Takagi-Sugeno-Kang) Fuzzy Model?",
    "options": {
      "A": "Both the premise and consequent parts are fuzzy sets.",
      "B": "It exclusively accepts fuzzy values as inputs.",
      "C": "The consequent part is a crisp mathematical polynomial function of the input variables.",
      "D": "It requires a complex defuzzification step similar to the Mamdani model."
    },
    "answer": "C",
    "source": "Lecture_W12L110_Lecture_60__TSK_Fuzzy_Model",
    "difficulty": "Medium",
    "explanation": "The consequent part is a crisp mathematical polynomial function of the input variables. The TSK (Takagi-Sugeno-Kang) model uses a crisp polynomial function as the consequent, producing a crisp output directly without needing complex defuzzification.",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "11",
    "question": "Which membership function is best suited for modeling concepts with a core range of\nvalues that are all fully and equally true, with gradual fall-offs on either side?",
    "options": {
      "A": "Triangular Membership Function",
      "B": "Sigmoidal Membership Function",
      "C": "Pi-Shaped (π■) Function",
      "D": "Open Right Function"
    },
    "answer": "C",
    "source": "Lecture_W2L26_Lecture_6__Membership_Functions__Part_II_",
    "difficulty": "Medium",
    "explanation": "Pi-Shaped (π■) Function In fuzzy set theory, membership values range from 0 to 1, representing the degree to which an element belongs to a set — unlike classical sets where membership is strictly 0 or 1.",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "12",
    "question": "For a fuzzy set A, its 'Core' is defined as the set of all elements x for which µA(x) is:",
    "options": {
      "A": "Greater than 0",
      "B": "Equal to 0.5",
      "C": "Equal to 1",
      "D": "Less than 1"
    },
    "answer": "C",
    "source": "Lecture_W2L27_Lecture_7__Nomenclatures_used_in_Fuzzy_Set_Theory_",
    "difficulty": "Easy",
    "explanation": "Equal to 1 The core consists of all elements with full membership (µ = 1). It represents the 'definitely in' region of the fuzzy set.",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "13",
    "question": "What is the result of applying a Strong Alpha-Cut (Aα+) to a fuzzy set A at a threshold\nα?",
    "options": {
      "A": "A fuzzy set of all elements x where µA(x) ≥ α.",
      "B": "A crisp set of all elements x where µA(x) ≥ α.",
      "C": "A crisp set of all elements x where µA(x) > α.",
      "D": "A fuzzy set of all elements x where µA(x) > α."
    },
    "answer": "C",
    "source": "Lecture_W2L28_Lecture_8__Nomenclatures_used_in_Fuzzy_Set_Theory_",
    "difficulty": "Medium",
    "explanation": "A crisp set of all elements x where µA(x) > α. An α-cut is the crisp set of all elements with µ ≥ α. Strong α-cuts use µ > α.",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "14",
    "question": "A fuzzy set is considered a 'Fuzzy Number' if it satisfies which two conditions?",
    "options": {
      "A": "It is subnormal and convex.",
      "B": "It is normal and non-convex.",
      "C": "It is normal and convex.",
      "D": "It is subnormal and non-convex."
    },
    "answer": "C",
    "source": "Lecture_W2L29_Lecture_9__Nomenclatures_used_in_Fuzzy_Set_Theory_",
    "difficulty": "Easy",
    "explanation": "It is normal and convex. A fuzzy number must be normal (height = 1) and convex, ensuring it represents a meaningful approximate value.",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "15",
    "question": "Given fuzzy sets A and B, the fuzzy union (A ∪",
    "options": {
      "A": "`min(µA(x), µB(x))`",
      "B": "`max(µA(x), µB(x))`",
      "C": "`1 - µA(x)`",
      "D": "`µA(x) * µB(x)`"
    },
    "answer": "B",
    "source": "Lecture_W3L34_Lecture_11__Set_Theoretic_Operations_on_Fuzzy_Sets",
    "difficulty": "Easy",
    "explanation": "`max(µA(x), µB(x))` (Source: W3L34 11: Set Theoretic Operations on Fuzzy Sets)",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "16",
    "question": "Which classical law of set theory is VIOLATED by fuzzy sets?",
    "options": {
      "A": "Law of Involution",
      "B": "Law of Idempotency",
      "C": "Law of Contradiction",
      "D": "Law of Commutativity"
    },
    "answer": "C",
    "source": "Lecture_W3L35_Lecture_12__Properties_of_Fuzzy_Sets__Part_I_",
    "difficulty": "Medium",
    "explanation": "Law of Contradiction (Source: W3L35 12: Properties of Fuzzy Sets: Part I )",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "17",
    "question": "Which of the following properties holds true for fuzzy sets using standard `max` and\n`min` operators?",
    "options": {
      "A": "Absorption of Complement for Union: `A ∪ (A' ∩",
      "B": "∩ (A ∪",
      "C": "`",
      "D": "Law of Contradiction: `A ∩ A' = ∅`"
    },
    "answer": "C",
    "source": "Lecture_W3L37_Lecture_14__Properties_of_Fuzzy_Sets__Part_III_",
    "difficulty": "Hard",
    "explanation": "` (Source: W3L37 14: Properties of Fuzzy Sets: Part III )",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "18",
    "question": "The distance between two fuzzy sets A and B, `d(A,",
    "options": {
      "A": "A crisp number",
      "B": "A fuzzy set",
      "C": "An empty set",
      "D": "A probability distribution"
    },
    "answer": "B",
    "source": "Lecture_W4L43_Lecture_17__Distance_between_Fuzzy_Sets__Part_I_",
    "difficulty": "Easy",
    "explanation": "A fuzzy set Fuzzy distance measures (Hamming, Euclidean, Minkowski) quantify how different two fuzzy sets are based on membership value differences.",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "19",
    "question": "When performing fuzzy multiplication (C = A *",
    "options": {
      "A": "The resulting fuzzy set must be normal.",
      "B": "The resulting fuzzy set must be convex.",
      "C": "Each new generic variable `x_C` must fall within the predefined Universe of Discourse (Uo",
      "D": "The operation must be commutative."
    },
    "answer": "C",
    "source": "Lecture_W5L50_Lecture_21__Arithmetic_Operations_on_Fuzzy_Numbers",
    "difficulty": "Medium",
    "explanation": "Each new generic variable `x_C` must fall within the predefined Universe of Discourse (Uo Fuzzy arithmetic uses the Extension Principle. Fuzzy multiplication on a restricted universe of discourse may produce subnormal results.",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "20",
    "question": "Which of the following algebraic identities, true for crisp numbers, does NOT hold true\nfor fuzzy numbers?",
    "options": {
      "A": "`A + B = B + A`",
      "B": "² = A² + 2AB + B²`",
      "C": "`(A +",
      "D": "`A - B ≠ B - A`"
    },
    "answer": "C",
    "source": "Lecture_W5L51_Lecture_22__Arithmetic_Operations_on_Fuzzy_Numbers",
    "difficulty": "Hard",
    "explanation": "`(A + A fuzzy number must be normal (height = 1) and convex, ensuring it represents a meaningful approximate value.",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "21",
    "question": "What are the two fundamental axioms that any function `c` must satisfy to be\nconsidered a valid fuzzy complement operator?",
    "options": {
      "A": "Commutativity and Associativity.",
      "B": "Boundary Conditions (`c(0)=1, c(1)=0`) and Monotonicity.",
      "C": "Idempotency and Involution.",
      "D": "Distributivity and Absorption."
    },
    "answer": "B",
    "source": "Lecture_W5L52_Lecture_23__Complement_of_Fuzzy_Sets",
    "difficulty": "Medium",
    "explanation": "Boundary Conditions (`c(0)=1, c(1)=0`) and Monotonicity. (Source: W5L52 23: Complement of Fuzzy Sets)",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "22",
    "question": "Which T-norm operator is the most restrictive, yielding a non-zero result only when at\nleast one of the fuzzy sets has a full membership grade of 1?",
    "options": {
      "A": "Minimum (T_min)",
      "B": "Algebraic Product (T_ap)",
      "C": "Bounded Product (T_bp)",
      "D": "Drastic Product (T_dp)"
    },
    "answer": "D",
    "source": "Lecture_W5L53_Lecture_24__T_norm_Operators",
    "difficulty": "Medium",
    "explanation": "Drastic Product (T_dp) T-norm operators generalize fuzzy intersection (AND). Common T-norms include min (Zadeh), algebraic product, bounded difference, and drastic product.",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "23",
    "question": "In parameterized S-norms, what is the general effect of increasing the parameter `w`\n(for Yager's class) or `λ` (for Dombi's class)?",
    "options": {
      "A": "The resulting membership values of the union increase, making it more aggressive.",
      "B": "The resulting membership values of the union decrease, making it more restrictive.",
      "C": "The operator converges to the algebraic sum.",
      "D": "The operator converges to the drastic sum."
    },
    "answer": "B",
    "source": "Lecture_W6L59_Lecture_27__Parameterized_S_Norm_Operators",
    "difficulty": "Hard",
    "explanation": "The resulting membership values of the union decrease, making it more restrictive. S-norm (T-conorm) operators generalize fuzzy union (OR). They are the dual of T-norms. Common S-norms include max, algebraic sum, bounded sum, and drastic sum.",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "24",
    "question": "What is the standard computational rule for determining the degree of membership for\nan ordered pair `(x, y)` in a Fuzzy Cartesian Product `A × B`?",
    "options": {
      "A": "`max(µA(x), µB(y))`",
      "B": "`min(µA(x), µB(y))`",
      "C": "`µA(x) + µB(y)`",
      "D": "`µA(x) * µB(y)`"
    },
    "answer": "B",
    "source": "Lecture_W6L61_Lecture_29__Fuzzy_Relation__Part_II_",
    "difficulty": "Easy",
    "explanation": "`min(µA(x), µB(y))` The fuzzy Cartesian product gives µ(x,y) = min(µ_A(x), µ_B(y)) for each ordered pair (x,y).",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "25",
    "question": "When performing a Projection of a fuzzy relation `R(x, y)` onto `A` (eliminating `y`), how\nis the membership function `µ_RA(x)` calculated?",
    "options": {
      "A": "`min_y(µ_R(x, y))`",
      "B": "`sum_y(µ_R(x, y))`",
      "C": "`max_y(µ_R(x, y))`",
      "D": "`avg_y(µ_R(x, y))`"
    },
    "answer": "C",
    "source": "Lecture_W7L66_Lecture_31__Projection_of_Fuzzy_Relation_Set",
    "difficulty": "Medium",
    "explanation": "`max_y(µ_R(x, y))` Projection reduces dimensionality by taking the supremum (max) along the eliminated dimension.",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "26",
    "question": "Is the process of Projection followed by Cylindrical Extension a reversible operation in\nfuzzy logic?",
    "options": {
      "A": "Yes, it always perfectly reconstructs the original fuzzy relation.",
      "B": "No, because information is lost during the projection step.",
      "C": "Only if the original fuzzy relation was a crisp set.",
      "D": "Only if the fuzzy relation is one-dimensional."
    },
    "answer": "B",
    "source": "Lecture_W7L67_Lecture_32__Cylindrical_Extension_of_Fuzzy_Set",
    "difficulty": "Medium",
    "explanation": "No, because information is lost during the projection step. Cylindrical extension expands a fuzzy set into a higher-dimensional space. It preserves the original membership values regardless of the new dimension.",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "27",
    "question": "The Extension Principle resolves conflicts in many-to-one mappings by assigning\nwhich membership value to the target element?",
    "options": {
      "A": "The minimum of the membership values from all source elements.",
      "B": "The average of the membership values from all source elements.",
      "C": "The maximum of the membership values from all source elements.",
      "D": "The product of the membership values from all source elements."
    },
    "answer": "C",
    "source": "Lecture_W7L70_Lecture_35__Extension_Principle",
    "difficulty": "Medium",
    "explanation": "The maximum of the membership values from all source elements. The Extension Principle maps fuzzy sets through functions. When multiple inputs map to the same output, the maximum of their membership values is taken.",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "28",
    "question": "Which property of fuzzy relation composition states that `R o (S1 ∩ S2) ⊆ (R o S1) ∩ (R\no S2)`?",
    "options": {
      "A": "Associativity",
      "B": "Distributivity over Union",
      "C": "Weak Distributivity over Intersection",
      "D": "Monotonicity"
    },
    "answer": "C",
    "source": "Lecture_W8L75_Lecture_37__Properties_of_Composition_of_Fuzzy_Rel",
    "difficulty": "Hard",
    "explanation": "Weak Distributivity over Intersection Max-min composition of fuzzy relations is associative and distributes over union. It is the standard composition method in fuzzy inference.",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "29",
    "question": "A fuzzy relation `R` is classified as a Fuzzy Equivalence Relation if it satisfies which\nthree properties?",
    "options": {
      "A": "Reflexivity, Symmetry, and Anti-symmetry.",
      "B": "Reflexivity, Symmetry, and Transitivity.",
      "C": "Anti-reflexivity, Symmetry, and Transitivity.",
      "D": "Reflexivity, Anti-symmetry, and Transitivity."
    },
    "answer": "B",
    "source": "Lecture_W8L77_Lecture_39__Fuzzy_Tolerance_and_Equivalence_Relati",
    "difficulty": "Easy",
    "explanation": "Reflexivity, Symmetry, and Transitivity. A fuzzy tolerance relation requires reflexivity and symmetry. A fuzzy equivalence relation additionally requires max-min transitivity.",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "30",
    "question": "How is the linguistic hedge 'very' typically modeled mathematically in fuzzy logic?",
    "options": {
      "A": "By taking the square root of the membership function (`µ^0.5`).",
      "B": "By squaring the membership function (`µ^2`).",
      "C": "By taking the complement of the membership function (`1 - µ`).",
      "D": "By multiplying the membership function by a constant."
    },
    "answer": "B",
    "source": "Lecture_W9L82_Lecture_41__Linguistic_Hedges",
    "difficulty": "Easy",
    "explanation": "By squaring the membership function (`µ^2`). Linguistic hedges like 'very', 'more or less', and 'slightly' modify membership functions — 'very' concentrates (squares µ) while 'more or less' dilates (√µ).",
    "source_exam": "Mock Exam 4"
  },
  {
    "number": "2",
    "question": "In fuzzy set theory, what does a membership value of 1 for an element `x` in fuzzy set `A`\nsignify?",
    "options": {
      "A": "The element is not a member of the set.",
      "B": "The element is a full member of the set.",
      "C": "The element is a partial member of the set.",
      "D": "The element is at a crossover point."
    },
    "answer": "B",
    "source": "Lecture_W1L20_Lecture_3__Fuzzy_Sets_and_Fuzzy_Logic_Toolbox_in_M",
    "difficulty": "Easy",
    "explanation": "The element is a full member of the set. In fuzzy set theory, membership values range from 0 to 1, representing the degree to which an element belongs to a set — unlike classical sets where membership is strictly 0 or 1.",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "3",
    "question": "Which component of a Fuzzy Inference System (FIS) is responsible for converting a\ncrisp input into a fuzzy value?",
    "options": {
      "A": "Defuzzifier",
      "B": "Inference Engine",
      "C": "Fuzzifier",
      "D": "Fuzzy Rule Base"
    },
    "answer": "C",
    "source": "Lecture_W10L94_Lecture_50__Fuzzy_Inference_System",
    "difficulty": "Easy",
    "explanation": "Fuzzifier A Fuzzy Inference System consists of four main components: Fuzzifier (converts crisp inputs to fuzzy), Rule Base (stores IF-THEN rules), Inference Engine (applies rules), and Defuzzifier (converts fuzzy output to crisp).",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "4",
    "question": "What is the primary operation used for fuzzy set union (`A ∪ B`)?",
    "options": {
      "A": "`min(µA(x), µB(x))`",
      "B": "`max(µA(x), µB(x))`",
      "C": "`1 - µA(x)`",
      "D": "`µA(x) - µB(x)`"
    },
    "answer": "B",
    "source": "Lecture_W3L34_Lecture_11__Set_Theoretic_Operations_on_Fuzzy_Sets",
    "difficulty": "Easy",
    "explanation": "`max(µA(x), µB(x))` In standard fuzzy set operations, union uses the max operator (corresponding to OR), intersection uses min (corresponding to AND), and complement is 1 − µ (corresponding to NOT).",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "5",
    "question": "Which property of fuzzy sets states that `(A')' = A`?",
    "options": {
      "A": "Idempotency",
      "B": "Commutativity",
      "C": "Involution",
      "D": "Law of Excluded Middle"
    },
    "answer": "C",
    "source": "Lecture_W3L35_Lecture_12__Properties_of_Fuzzy_Sets__Part_I_",
    "difficulty": "Easy",
    "explanation": "Involution (Source: W3L35 12: Properties of Fuzzy Sets: Part I )",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "6",
    "question": "What is the default power `k` used for Normal Concentration of a fuzzy set?",
    "options": {
      "A": "0.5",
      "B": "1",
      "C": "2",
      "D": "8"
    },
    "answer": "C",
    "source": "Lecture_W9L84_Lecture_43__Concentration_and_Dilation___Composite",
    "difficulty": "Easy",
    "explanation": "2 (Source: W9L84 43: Concentration and Dilation:  Composite)",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "7",
    "question": "What is the standard operator used to determine the membership grade of an ordered\npair `(x, y)` in a fuzzy Cartesian product `A × B`?",
    "options": {
      "A": "`max(µA(x), µB(y))`",
      "B": "`min(µA(x), µB(y))`",
      "C": "`µA(x) + µB(y)`",
      "D": "`µA(x) * µB(y)`"
    },
    "answer": "B",
    "source": "Lecture_W6L61_Lecture_29__Fuzzy_Relation__Part_II_",
    "difficulty": "Easy",
    "explanation": "`min(µA(x), µB(y))` The fuzzy Cartesian product gives µ(x,y) = min(µ_A(x), µ_B(y)) for each ordered pair (x,y).",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "8",
    "question": "A fuzzy set is considered 'Normal' if its height is equal to what value?",
    "options": {
      "A": "0",
      "B": "0.5",
      "C": "1",
      "D": "Any value greater than 0"
    },
    "answer": "C",
    "source": "Lecture_W2L27_Lecture_7__Nomenclatures_used_in_Fuzzy_Set_Theory_",
    "difficulty": "Easy",
    "explanation": "1 The height of a fuzzy set is the supremum of its membership values. If height < 1, the set is subnormal.",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "9",
    "question": "In the Mamdani Fuzzy Model, what type of output is produced by each rule's implication\nstep?",
    "options": {
      "A": "A crisp numerical value",
      "B": "A fuzzy set",
      "C": "A Boolean value (True/False)",
      "D": "A probability distribution"
    },
    "answer": "B",
    "source": "Lecture_W11L98_Lecture_51__Mamdani_Fuzzy_Model__Part_I_",
    "difficulty": "Easy",
    "explanation": "A fuzzy set The Mamdani model uses fuzzy sets as both antecedents and consequents. The output is obtained by truncating (clipping) the consequent fuzzy set at the firing strength, then aggregating and defuzzifying.",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "10",
    "question": "Which of the following is a key characteristic of the TSK Fuzzy Model's consequent\npart?",
    "options": {
      "A": "It is always a triangular membership function.",
      "B": "It is a fuzzy set with monotonic membership.",
      "C": "It is a crisp mathematical polynomial function of the input variables.",
      "D": "It is always a constant value."
    },
    "answer": "C",
    "source": "Lecture_W12L110_Lecture_60__TSK_Fuzzy_Model",
    "difficulty": "Easy",
    "explanation": "It is a crisp mathematical polynomial function of the input variables. The TSK (Takagi-Sugeno-Kang) model uses a crisp polynomial function as the consequent, producing a crisp output directly without needing complex defuzzification.",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "11",
    "question": "According to the lecture, which of the following is NOT a scenario where fuzzy logic is\ngenerally recommended?",
    "options": {
      "A": "When the underlying physical laws are unknown (black box models).",
      "B": "When the system involves human reasoning, language, or perception.",
      "C": "When a precise and complete mathematical model of the system already exists (white box models).",
      "D": "For highly complex or non-linear systems."
    },
    "answer": "C",
    "source": "Lecture_W1L18_Lecture_1__Introduction___Fuzzy_Sets__Logic_and_Sy",
    "difficulty": "Medium",
    "explanation": "When a precise and complete mathematical model of the system already exists (white box models). (Source: W1L18 1: Introduction:  Fuzzy Sets: Logic and Sy)",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "12",
    "question": "Given a discrete fuzzy set `A = {0.2/10, 0.7/20, 1.0/30, 0.5/40}`, what is its Core?",
    "options": {
      "A": "`{10, 20, 30, 40}`",
      "B": "`{30}`",
      "C": "`{1.0/30}`",
      "D": "`{0.7/20, 1.0/30}`"
    },
    "answer": "B",
    "source": "Lecture_W2L27_Lecture_7__Nomenclatures_used_in_Fuzzy_Set_Theory_",
    "difficulty": "Medium",
    "explanation": "`{30}` The core consists of all elements with full membership (µ = 1). It represents the 'definitely in' region of the fuzzy set.",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "13",
    "question": "If fuzzy set `A = {0.6/x1, 0.9/x2}` and fuzzy set `B = {0.8/x1, 0.7/x2}`, what is `A ∩ B` using\nthe standard fuzzy intersection?",
    "options": {
      "A": "`{0.6/x1, 0.7/x2}`",
      "B": "`{0.8/x1, 0.9/x2}`",
      "C": "`{0.48/x1, 0.63/x2}`",
      "D": "`{1.4/x1, 1.6/x2}`"
    },
    "answer": "A",
    "source": "Lecture_W3L34_Lecture_11__Set_Theoretic_Operations_on_Fuzzy_Sets",
    "difficulty": "Medium",
    "explanation": "`{0.6/x1, 0.7/x2}` (Source: W3L34 11: Set Theoretic Operations on Fuzzy Sets)",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "14",
    "question": "Which two fundamental laws of classical set theory are VIOLATED by fuzzy sets?",
    "options": {
      "A": "Commutativity and Associativity",
      "B": "Idempotency and Involution",
      "C": "Law of Contradiction and Law of Excluded Middle",
      "D": "Distributivity and De Morgan's Laws"
    },
    "answer": "C",
    "source": "Lecture_W3L35_Lecture_12__Properties_of_Fuzzy_Sets__Part_I_",
    "difficulty": "Medium",
    "explanation": "Law of Contradiction and Law of Excluded Middle (Source: W3L35 12: Properties of Fuzzy Sets: Part I )",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "16",
    "question": "What is the purpose of the `max` operation in the formula for calculating the\nmembership grade of a fuzzy distance `µ_d(A,",
    "options": {
      "A": "To find the weakest link between elements.",
      "B": "To sum all possible distances.",
      "C": "To aggregate the strongest evidence from all contributing element pairs for a specific `δ`.",
      "D": "To ensure the distance is always a crisp number."
    },
    "answer": "C",
    "source": "Lecture_W4L44_Lecture_18__Distance_between_Fuzzy_Sets__Part_II_",
    "difficulty": "Medium",
    "explanation": "To aggregate the strongest evidence from all contributing element pairs for a specific `δ`. Fuzzy distance measures (Hamming, Euclidean, Minkowski) quantify how different two fuzzy sets are based on membership value differences.",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "17",
    "question": "Which of the following is a property that a function must satisfy to be considered a\nvalid T-norm operator?",
    "options": {
      "A": "It must be non-monotonic.",
      "B": "It must satisfy `T(a, 0) = a`.",
      "C": "It must be associative.",
      "D": "It must be non-commutative."
    },
    "answer": "C",
    "source": "Lecture_W5L53_Lecture_24__T_norm_Operators",
    "difficulty": "Medium",
    "explanation": "It must be associative. T-norm operators generalize fuzzy intersection (AND). Common T-norms include min (Zadeh), algebraic product, bounded difference, and drastic product.",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "18",
    "question": "When applying the Extension Principle, if multiple `x` values map to the same `y` value,\nhow is the membership of `y` in the new fuzzy set `B` determined?",
    "options": {
      "A": "By taking the average of the membership values from all contributing `x` values.",
      "B": "By taking the minimum of the membership values from all contributing `x` values.",
      "C": "By taking the maximum of the membership values from all contributing `x` values.",
      "D": "By discarding the `y` value as ambiguous."
    },
    "answer": "C",
    "source": "Lecture_W7L70_Lecture_35__Extension_Principle",
    "difficulty": "Medium",
    "explanation": "By taking the maximum of the membership values from all contributing `x` values. The Extension Principle maps fuzzy sets through functions. When multiple inputs map to the same output, the maximum of their membership values is taken.",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "19",
    "question": "What are the two properties a fuzzy relation must satisfy to be classified as a Fuzzy\nTolerance Relation?",
    "options": {
      "A": "Reflexivity and Transitivity",
      "B": "Symmetry and Transitivity",
      "C": "Reflexivity and Symmetry",
      "D": "Anti-reflexivity and Anti-symmetry"
    },
    "answer": "C",
    "source": "Lecture_W8L76_Lecture_38__Fuzzy_Tolerance_and_Equivalence_Relati",
    "difficulty": "Medium",
    "explanation": "Reflexivity and Symmetry A fuzzy tolerance relation requires reflexivity and symmetry. A fuzzy equivalence relation additionally requires max-min transitivity.",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "20",
    "question": "In the context of linguistic hedges, what mathematical operation corresponds to the\nhedge 'more or less'?",
    "options": {
      "A": "Squaring the membership function.",
      "B": "Taking the complement of the membership function.",
      "C": "Taking the square root of the membership function.",
      "D": "Multiplying the membership function by a constant greater than 1."
    },
    "answer": "C",
    "source": "Lecture_W9L83_Lecture_42__Linguistic_Hedges_and_Negation__Comple",
    "difficulty": "Medium",
    "explanation": "Taking the square root of the membership function. Linguistic hedges like 'very', 'more or less', and 'slightly' modify membership functions — 'very' concentrates (squares µ) while 'more or less' dilates (√µ).",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "21",
    "question": "A fuzzy set `A` is defined as `A = {0.3/1, 0.6/2, 0.9/3}`. If this set is normalized, what will\nbe the new membership value for the element `1`?",
    "options": {
      "A": "0.3",
      "B": "0.1",
      "C": "0.333",
      "D": "0.6"
    },
    "answer": "C",
    "source": "Lecture_W2L28_Lecture_8__Nomenclatures_used_in_Fuzzy_Set_Theory_",
    "difficulty": "Medium",
    "explanation": "0.333 S-norm (T-conorm) operators generalize fuzzy union (OR). They are the dual of T-norms. Common S-norms include max, algebraic sum, bounded sum, and drastic sum.",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "22",
    "question": "What is the primary method used in the Tsukamoto Fuzzy Model to aggregate the crisp\noutputs from all applicable rules?",
    "options": {
      "A": "Centroid of Area",
      "B": "Maximum of the outputs",
      "C": "Weighted average",
      "D": "Summation of outputs"
    },
    "answer": "C",
    "source": "Lecture_W12L109_Lecture_59__Tsukamoto_Fuzzy_Model",
    "difficulty": "Medium",
    "explanation": "Weighted average The Tsukamoto model requires monotonic consequent membership functions, allowing direct computation of a crisp output by finding the value where µ equals the firing strength.",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "23",
    "question": "Given fuzzy relations R1 (on X×Y) and R2 (on Y×Z), which of the following statements\nabout Max-Min Composition `R1 o R2` is TRUE?",
    "options": {
      "A": "The resulting relation `R'` will be on X×Z and its elements are calculated as `min_y [ max(µ_R1(x, y),\nµ_R2(y, z)) ]`.",
      "B": "The resulting relation `R'` will be on X×Z and its elements are calculated as `max_y [ min(µ_R1(x, y),\nµ_R2(y, z)) ]`.",
      "C": "The resulting relation `R'` will be on Y×Z and its elements are calculated as `max_y [ min(µ_R1(x, y),\nµ_R2(y, z)) ]`.",
      "D": "The composition is only possible if the number of rows in R1 equals the number of columns in R2."
    },
    "answer": "B",
    "source": "Lecture_W8L74_Lecture_36__Composition_of_Fuzzy_Relations",
    "difficulty": "Hard",
    "explanation": "The resulting relation `R'` will be on X×Z and its elements are calculated as `max_y [ min(µ_R1(x, y),\nµ_R2(y, z)) ]`. Max-min composition of fuzzy relations is associative and distributes over union. It is the standard composition method in fuzzy inference.",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "24",
    "question": "Consider the statement: `R o (S1 ∩ S2) = (R o S1) ∩ (R o S2)`. According to the lecture,\nhow does this property behave for fuzzy relations using max-min composition?",
    "options": {
      "A": "It holds true as an equality.",
      "B": "It holds true as an equality only if R is a crisp relation.",
      "C": "It is a 'weak' distributivity, where `R o (S1 ∩ S2) ⊆ (R o S1) ∩ (R o S2)`.",
      "D": "It is completely violated and no inclusion relationship exists."
    },
    "answer": "C",
    "source": "Lecture_W8L75_Lecture_37__Properties_of_Composition_of_Fuzzy_Rel",
    "difficulty": "Hard",
    "explanation": "It is a 'weak' distributivity, where `R o (S1 ∩ S2) ⊆ (R o S1) ∩ (R o S2)`. Max-min composition of fuzzy relations is associative and distributes over union. It is the standard composition method in fuzzy inference.",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "25",
    "question": "You are given a fuzzy relation `R` that is reflexive and symmetric but fails the\ntransitivity test. What is the method described in the lecture to convert `R` into a Fuzzy\nEquivalence Relation?",
    "options": {
      "A": "Applying the complement operation repeatedly until it becomes transitive.",
      "B": "Performing iterative self-composition (`R ■ R`, `R² ■ R`, etc.) using max-min composition.",
      "C": "Normalizing the fuzzy relation to ensure all membership values are 1.",
      "D": "Projecting the fuzzy relation onto a lower dimension."
    },
    "answer": "B",
    "source": "Lecture_W8L78_Lecture_40__Fuzzy_Tolerance_and_Equivalence_Relati",
    "difficulty": "Hard",
    "explanation": "Performing iterative self-composition (`R ■ R`, `R² ■ R`, etc.) using max-min composition. A fuzzy tolerance relation requires reflexivity and symmetry. A fuzzy equivalence relation additionally requires max-min transitivity.",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "26",
    "question": "In the context of fuzzy arithmetic, what is a key difference between fuzzy addition and\nfuzzy multiplication regarding the properties of the resulting fuzzy set?",
    "options": {
      "A": "Both operations always result in a fuzzy number.",
      "B": "Fuzzy addition is commutative, but fuzzy multiplication is not.",
      "C": "Fuzzy multiplication may not always result in a fuzzy number (e.g., it might not be normal), while\naddition typically does.",
      "D": "Both operations are non-commutative."
    },
    "answer": "C",
    "source": "Lecture_W5L51_Lecture_22__Arithmetic_Operations_on_Fuzzy_Numbers",
    "difficulty": "Hard",
    "explanation": "Fuzzy multiplication may not always result in a fuzzy number (e.g., it might not be normal), while\naddition typically does. Fuzzy arithmetic uses the Extension Principle. Fuzzy multiplication on a restricted universe of discourse may produce subnormal results.",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "27",
    "question": "A fuzzy set `A` is defined by `µA(x)`. If you apply Contrast Intensification (INT) to `A`,\nwhat happens to `µA(x)` values that are less than 0.5?",
    "options": {
      "A": "They are increased, pushing them closer to 1.",
      "B": "They are decreased, pushing them closer to 0.",
      "C": "They remain unchanged.",
      "D": "They are set to 0.5."
    },
    "answer": "B",
    "source": "Lecture_W10L90_Lecture_46__Contrast_Intensification_of_Fuzzy_Sets",
    "difficulty": "Hard",
    "explanation": "They are decreased, pushing them closer to 0. Contrast intensification reduces fuzziness by pushing values above 0.5 toward 1 and values below 0.5 toward 0, making the set more crisp-like.",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "28",
    "question": "Which of the following statements accurately describes the behavior of Yager's Class\nof S-Norm (`S_w(a, b)`) as the parameter `w` increases?",
    "options": {
      "A": "The resulting membership grade of the union increases, making it more aggressive.",
      "B": "The resulting membership grade of the union decreases, making it more restrictive.",
      "C": "The behavior is unpredictable and non-monotonic.",
      "D": "It converges to the algebraic product as `w` increases."
    },
    "answer": "B",
    "source": "Lecture_W6L59_Lecture_27__Parameterized_S_Norm_Operators",
    "difficulty": "Hard",
    "explanation": "The resulting membership grade of the union decreases, making it more restrictive. S-norm (T-conorm) operators generalize fuzzy union (OR). They are the dual of T-norms. Common S-norms include max, algebraic sum, bounded sum, and drastic sum.",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "29",
    "question": "What is the primary purpose of Cylindrical Extension in fuzzy logic?",
    "options": {
      "A": "To reduce the dimensionality of a fuzzy set.",
      "B": "To combine two fuzzy sets using the max-min composition.",
      "C": "To expand a fuzzy set into a higher-dimensional space, making its membership independent of the\nnew dimension(s).",
      "D": "To convert a fuzzy set into a crisp value."
    },
    "answer": "C",
    "source": "Lecture_W7L67_Lecture_32__Cylindrical_Extension_of_Fuzzy_Set",
    "difficulty": "Hard",
    "explanation": "To expand a fuzzy set into a higher-dimensional space, making its membership independent of the\nnew dimension(s). Cylindrical extension expands a fuzzy set into a higher-dimensional space. It preserves the original membership values regardless of the new dimension.",
    "source_exam": "Mock Exam 5"
  },
  {
    "number": "30",
    "question": "A fuzzy term set `{t1, t2, t3}` is defined over a universe `X`. If this term set is orthogonal,\nwhat must be true for any element `x ∈ X`?",
    "options": {
      "A": "The maximum membership grade of `x` across all fuzzy sets `t1, t2, t3` is 1.",
      "B": "The sum of its membership grades across all fuzzy sets `t1, t2, t3` is exactly 1.",
      "C": "The minimum membership grade of `x` across all fuzzy sets `t1, t2, t3` is 0.",
      "D": "All fuzzy sets `t1, t2, t3` must be subnormal."
    },
    "answer": "B",
    "source": "Lecture_W10L91_Lecture_47__Orthogonality_of_Fuzzy_Sets",
    "difficulty": "Hard",
    "explanation": "The sum of its membership grades across all fuzzy sets `t1, t2, t3` is exactly 1. An orthogonal term set forms a partition of unity — at every point in the universe of discourse, all membership values sum to exactly 1.",
    "source_exam": "Mock Exam 5"
  }
];
