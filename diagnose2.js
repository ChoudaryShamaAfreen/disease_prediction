// const diseaseData = [
//   { symptoms: ["fever", "cough", "fatigue"], disease: "Flu" },
//   { symptoms: ["fever", "cough", "shortness of breath"], disease: "COVID-19" },
//   { symptoms: ["headache", "nausea"], disease: "Migraine" },
//   { symptoms: ["nausea", "vomiting", "diarrhea"], disease: "Food Poisoning" },
//   { symptoms: ["sore throat", "runny nose", "cough"], disease: "Common Cold" },
//   { symptoms: ["chest pain", "shortness of breath"], disease: "Possible Heart Issue" },
//   { symptoms: ["rash", "fever"], disease: "Allergic Reaction" },
//   { symptoms: ["body ache", "fever", "chills"], disease: "Dengue" },
//   { symptoms: ['fever', 'cough', 'fatigue'], disease: "Flu (Influenza)" },
//       { symptoms: ["fever", "joint pain", "rash"], disease: "Chikungunya" },
//       { symptoms: ['headache', 'sensitivity to light', 'nausea'], disease: "Migraine" },
//       { symptoms: ['chest pain', 'shortness of breath', 'dizziness'], disease: "Heart Issue" },
//       { symptoms: ['sore throat', 'runny nose', 'sneezing'], disease: "Common Cold" },
//       { symptoms: ['diarrhea', 'vomiting', 'abdominal pain'], disease: "Food Poisoning" },
//       { symptoms: ['itching', 'rash', 'redness'], disease: "Allergic Reaction" },
//       { symptoms: ['frequent urination', 'increased thirst', 'blurred vision'], disease: "Diabetes" },
//       { symptoms: ['joint pain', 'morning stiffness', 'swollen joints'], disease: "Arthritis" },
//       { symptoms: ['persistent cough', 'blood in sputum', 'weight loss'], disease: "Tuberculosis" },
//       { symptoms: ['yellow skin', 'yellow eyes', 'dark urine'], disease: "Jaundice" },
//       { symptoms: ['sudden confusion', 'slurred speech', 'numbness on one side'], disease: "Stroke" },
//       { symptoms: ['weight loss', 'night sweats', 'enlarged lymph nodes'], disease: "Lymphoma" },
//       { symptoms: ['snoring', 'daytime sleepiness', 'difficulty concentrating'], disease: "Sleep Apnea" },
//       { symptoms: ['persistent sadness', 'loss of interest', 'fatigue'], disease: "Depression" },
//       { symptoms: ['anxiety', 'restlessness', 'rapid heartbeat'], disease: "Anxiety Disorder" },
//       { symptoms: ['coughing', 'wheezing', 'shortness of breath'], disease: "Asthma" },
//       { symptoms: ['back pain', 'numbness in legs', 'muscle weakness'], disease: "Herniated Disc" },
//       { symptoms: ['weight gain', 'dry skin', 'cold intolerance'], disease: "Hypothyroidism" },
//       { symptoms: ['tremor', 'slow movement', 'balance issues'], disease: "Parkinson's Disease" },
//       { symptoms: ['fatigue', 'sore muscles', 'difficulty sleeping'], disease: "Chronic Fatigue Syndrome" },
//       { symptoms: ['fever', 'chills', 'chest pain'], disease: "Pneumonia" },
//       { symptoms: ['abdominal pain', 'nausea', 'loss of appetite'], disease: "Appendicitis" },
//       { symptoms: ['cough', 'mucus production', 'fatigue'], disease: "Bronchitis" },
//       { symptoms: ['fever', 'dry cough', 'loss of taste or smell'], disease: "COVID-19" },
//       { symptoms: ['ear pain', 'fever', 'difficulty hearing'], disease: "Otitis Media" },
//       { symptoms: ['facial pain', 'nasal congestion', 'headache'], disease: "Sinusitis" },
//       { symptoms: ['red eyes', 'itching', 'watery eyes'], disease: "Conjunctivitis" },
//       { symptoms: ['rash', 'fever', 'itching'], disease: "Chickenpox" },
//       { symptoms: ['fever', 'chills', 'sweating'], disease: "Malaria" },
//       { symptoms: ['high fever', 'abdominal pain', 'weakness'], disease: "Typhoid" },
//       { symptoms: ['high fever', 'headache', 'joint pain'], disease: "Dengue" },
//       { symptoms: ['rash', 'fever', 'cough'], disease: "Measles" },
//       { symptoms: ['sore throat', 'fever', 'swollen tonsils'], disease: "Tonsillitis" },
//       { symptoms: ['abdominal pain', 'nausea', 'vomiting'], disease: "Gallstones" },
//       { symptoms: ['severe pain', 'blood in urine', 'nausea'], disease: "Kidney Stones" },
//       { symptoms: ['burning urination', 'pelvic pain', 'frequent urination'], disease: "Urinary Tract Infection" },
//       { symptoms: ['red patches', 'itching', 'dry skin'], disease: "Psoriasis" },
//       { symptoms: ['itchy skin', 'red rash', 'dry patches'], disease: "Eczema" },
//       { symptoms: ['fatigue', 'pale skin', 'shortness of breath'], disease: "Anemia" },
//       { symptoms: ['diarrhea', 'vomiting', 'cramps'], disease: "Gastroenteritis" },
//       { symptoms: ['heartburn', 'chest discomfort', 'regurgitation'], disease: "GERD" },
//       { symptoms: ['sour taste', 'chest burning', 'difficulty swallowing'], disease: "Acid Reflux" },
//       { symptoms: ['weight loss', 'rapid heartbeat', 'nervousness'], disease: "Hyperthyroidism" },
//       { symptoms: ['abdominal pain', 'nausea', 'vomiting'], disease: "Pancreatitis" },
//       { symptoms: ['seizures', 'confusion', 'unconsciousness'], disease: "Epilepsy" },
//       { symptoms: ['numbness', 'vision problems', 'fatigue'], disease: "Multiple Sclerosis" },
//       { symptoms: ['jaundice', 'fatigue', 'swelling'], disease: "Liver Cirrhosis" },
//       { symptoms: ['bloating', 'diarrhea', 'fatigue'], disease: "Celiac Disease" },
//       { symptoms: ['social difficulties', 'repetitive behaviors', 'speech delays'], disease: "Autism Spectrum Disorder" },
//       { symptoms: ['repetitive behaviors', 'anxiety', 'intrusive thoughts'], disease: "Obsessive Compulsive Disorder" },
//       { symptoms: ['bloating', 'gas', 'diarrhea'], disease: "Lactose Intolerance" },
//       { symptoms: ['cramping', 'abdominal pain', 'bloating'], disease: "Irritable Bowel Syndrome" },
//       { symptoms: ['diarrhea', 'weight loss', 'abdominal pain'], disease: "Crohn's Disease" },
//       { symptoms: ['bloody stools', 'diarrhea', 'abdominal cramps'], disease: "Ulcerative Colitis" },
//       { symptoms: ['irregular periods', 'acne', 'weight gain'], disease: "Polycystic Ovary Syndrome" },
//       { symptoms: ['pelvic pain', 'heavy periods', 'infertility'], disease: "Endometriosis" },
//       { symptoms: ['widespread pain', 'fatigue', 'sleep disturbances'], disease: "Fibromyalgia" },
//       { symptoms: ['joint pain', 'swelling', 'redness'], disease: "Gout" },
//       { symptoms: ['eye pain', 'blurred vision', 'headache'], disease: "Glaucoma" },
//       { symptoms: ['cloudy vision', 'light sensitivity', 'fading colors'], disease: "Cataract" },
//       { symptoms: ['blurry central vision', 'dark spots', 'distortion'], disease: "Macular Degeneration" },
//       { symptoms: ['ringing in ears', 'hearing loss', 'ear pressure'], disease: "Tinnitus" },
//       { symptoms: ['spinning sensation', 'dizziness', 'balance issues'], disease: "Vertigo" },
//       { symptoms: ['mood swings', 'mania', 'depression'], disease: "Bipolar Disorder" },
//       { symptoms: ['hallucinations', 'delusions', 'disorganized thinking'], disease: "Schizophrenia" },
//       { symptoms: ['inattention', 'hyperactivity', 'impulsivity'], disease: "ADHD" },
//       { symptoms: ['panic attacks', 'sweating', 'palpitations'], disease: "Panic Disorder" },
//       { symptoms: ['fear of social situations', 'blushing', 'trembling'], disease: "Social Anxiety" },
//       { symptoms: ['flashbacks', 'nightmares', 'severe anxiety'], disease: "Post-Traumatic Stress Disorder" },
//       { symptoms: ['difficulty sleeping', 'waking up early', 'daytime fatigue'], disease: "Insomnia" },
//       { symptoms: ['depression', 'oversleeping', 'low energy'], disease: "Seasonal Affective Disorder" },
//       { symptoms: ['high body temperature', 'confusion', 'hot dry skin'], disease: "Heat Stroke" },
//       { symptoms: ['shivering', 'slow breathing', 'confusion'], disease: "Hypothermia" },
//       { symptoms: ['dry mouth', 'thirst', 'dark urine'], disease: "Dehydration" },
//       { symptoms: ['nausea', 'sweating', 'dizziness'], disease: "Motion Sickness" },
//       { symptoms: ['headache', 'nausea', 'shortness of breath'], disease: "Altitude Sickness" },
//       { symptoms: ['stiff neck', 'fever', 'confusion'], disease: "Meningitis" },
//       { symptoms: ['headache', 'fever', 'seizures'], disease: "Encephalitis" },
//       { symptoms: ['fever', 'rash', 'joint pain'], disease: "Zika Virus" },
//       { symptoms: ['fever', 'rash', 'joint swelling'], disease: "Chikungunya" },
//       { symptoms: ['fever', 'bleeding', 'vomiting'], disease: "Ebola" },
//       { symptoms: ['jaundice', 'fatigue', 'abdominal pain'], disease: "Hepatitis A" },
//       { symptoms: ['dark urine', 'joint pain', 'loss of appetite'], disease: "Hepatitis B" },
//       { symptoms: ['fatigue', 'nausea', 'jaundice'], disease: "Hepatitis C" },
//       { symptoms: ['severe cough', 'vomiting', 'fatigue'], disease: "Whooping Cough" },
//       { symptoms: ['red rash', 'sore throat', 'fever'], disease: "Scarlet Fever" },
//       { symptoms: ['swollen cheeks', 'fever', 'muscle aches'], disease: "Mumps" },
//       { symptoms: ['rash', 'low fever', 'swollen lymph nodes'], disease: "Rubella" },
//       { symptoms: ['muscle stiffness', 'difficulty swallowing', 'jaw cramping'], disease: "Tetanus" },
//       { symptoms: ['fever', 'fear of water', 'confusion'], disease: "Rabies" },
//       { symptoms: ['bullseye rash', 'fever', 'fatigue'], disease: "Lyme Disease" },
//       { symptoms: ['skin lesions', 'numbness', 'muscle weakness'], disease: "Hansen's Disease (Leprosy)" },
//       { symptoms: ['muscle paralysis', 'drooping eyelids', 'difficulty breathing'], disease: "Botulism" },
//       { symptoms: ['ulcers', 'fever', 'chest discomfort'], disease: "Anthrax" },
//       { symptoms: ['swollen lymph nodes', 'fever', 'chills'], disease: "Plague" },
//       { symptoms: ['sores', 'rash', 'fatigue'], disease: "Syphilis" },
//       { symptoms: ['painful urination', 'discharge', 'swollen testicles'], disease: "Gonorrhea" },
//       { symptoms: ['burning urination', 'pelvic pain', 'discharge'], disease: "Chlamydia" },
//       { symptoms: ['painful blisters', 'itching', 'flu-like symptoms'], disease: "Genital Herpes" },
//       { symptoms: ['pelvic pain', 'fever', 'abnormal discharge'], disease: "Pelvic Inflammatory Disease" },
//       { symptoms: ['heartburn', 'chest pain', 'difficulty swallowing'], disease: "Barrett's Esophagus" },
//       { symptoms: ['painful bumps', 'abscesses', 'pus leakage'], disease: "Hidradenitis Suppurativa" },
//       { symptoms: ['muscle weakness', 'drooping eyelids', 'difficulty speaking'], disease: "Myasthenia Gravis" },
//       { symptoms: ['facial pain', 'electric-shock pain', 'spasms'], disease: "Trigeminal Neuralgia" },
//       { symptoms: ['urge to move legs', 'tingling', 'sleep disruption'], disease: "Restless Legs Syndrome" },
//       { symptoms: ['cold fingers', 'color change in skin', 'numbness'], disease: "Raynaud's Disease" },
//       { symptoms: ['jaw pain', 'clicking sound', 'headache'], disease: "Temporomandibular Joint Disorder" },
//       { symptoms: ['skin rash', 'itching', 'red patches'], disease: "Pityriasis Rosea" },
//       { symptoms: ['difficulty swallowing', 'regurgitation', 'chest pain'], disease: "Achalasia" },
//       { symptoms: ['enlarged hands', 'coarse facial features', 'joint pain'], disease: "Acromegaly" },
//       { symptoms: ['weight gain', 'round face', 'stretch marks'], disease: "Cushing's Syndrome" },
//       { symptoms: ['fatigue', 'darkened skin', 'low blood pressure'], disease: "Addison's Disease" },
//       { symptoms: ['tall stature', 'long limbs', 'heart murmurs'], disease: "Marfan Syndrome" },
//       { symptoms: ['joint hypermobility', 'skin that stretches', 'easy bruising'], disease: "Ehlers-Danlos Syndrome" },
//       { symptoms: ['fever', 'rash', 'red eyes'], disease: "Kawasaki Disease" },
//       { symptoms: ['muscle weakness', 'vision loss', 'developmental delay'], disease: "Tay-Sachs Disease" },
//       { symptoms: ['musty odor', 'seizures', 'developmental delay'], disease: "Phenylketonuria" },
//       { symptoms: ['easy bruising', 'joint bleeding', 'prolonged bleeding'], disease: "Hemophilia" },
//       { symptoms: ['pain episodes', 'swelling', 'fatigue'], disease: "Sickle Cell Anemia" },
//       { symptoms: ['fatigue', 'pale skin', 'enlarged spleen'], disease: "Thalassemia" },
//       { symptoms: ['liver damage', 'tremors', 'Kayser-Fleischer rings'], disease: "Wilson’s Disease" },
//       { symptoms: ['fever', 'joint pain', 'rash'], disease: "Rheumatic Fever" },
//       { symptoms: ['sudden fever', 'rash', 'low blood pressure'], disease: "Toxic Shock Syndrome" },
//       { symptoms: ['weakness', 'numbness', 'paralysis'], disease: "Guillain-Barre Syndrome" },
//       { symptoms: ['facial droop', 'drooling', 'inability to close eye'], disease: "Bell’s Palsy" },
//       { symptoms: ['vertigo', 'hearing loss', 'nausea'], disease: "Labyrinthitis" },
//       { symptoms: ['vertigo', 'ear ringing', 'hearing loss'], disease: "Meniere’s Disease" },
//       { symptoms: ['leg pain', 'cramping', 'relieved by rest'], disease: "Intermittent Claudication" },
//       { symptoms: ['cold feet', 'numbness', 'leg sores'], disease: "Peripheral Artery Disease" },
//       { symptoms: ['chest pain', 'shortness of breath', 'fainting'], disease: "Hypertrophic Cardiomyopathy" },
//       { symptoms: ['sharp chest pain', 'fatigue', 'shortness of breath'], disease: "Pericarditis" },
//       { symptoms: ['severe chest pain', 'back pain', 'fainting'], disease: "Aortic Dissection" },
//       { symptoms: ['palpitations', 'fatigue', 'chest discomfort'], disease: "Mitral Valve Prolapse" },
//       { symptoms: ['leg pain', 'swelling', 'bulging veins'], disease: "Varicose Veins" },
//       { symptoms: ['swelling', 'redness', 'leg pain'], disease: "Deep Vein Thrombosis" },
//       { symptoms: ['high blood pressure', 'protein in urine', 'swelling'], disease: "Preeclampsia" },
//       { symptoms: ['increased thirst', 'fatigue', 'frequent urination'], disease: "Gestational Diabetes" },
//       { symptoms: ['painless bleeding', 'preterm labor', 'uterine tenderness'], disease: "Placenta Previa" },
//       { symptoms: ['abdominal pain', 'vaginal bleeding', 'shoulder pain'], disease: "Ectopic Pregnancy" },
//       { symptoms: ['delayed growth', 'bowed legs', 'muscle weakness'], disease: "Rickets" },
//       { symptoms: ['bleeding gums', 'fatigue', 'bruising'], disease: "Scurvy" },
//       { symptoms: ['numbness', 'leg swelling', 'confusion'], disease: "Beriberi" },
//       { symptoms: ['difficulty seeing in dark', 'dry eyes', 'blurry vision'], disease: "Night Blindness" },
//       { symptoms: ['neck swelling', 'difficulty breathing', 'hoarseness'], disease: "Goiter" },
//       { symptoms: ['diarrhea', 'dermatitis', 'dementia'], disease: "Pellagra" },
//       { symptoms: ['enlarged head', 'vomiting', 'irritability'], disease: "Hydrocephalus" },
//       { symptoms: ['spinal bulge', 'weakness', 'bowel problems'], disease: "Spina Bifida" },
//       { symptoms: ['tics', 'blinking', 'grunting'], disease: "Tourette Syndrome" },
//       { symptoms: ['muscle twitching', 'slurred speech', 'paralysis'], disease: "ALS (Lou Gehrig’s Disease)" },
//       { symptoms: ['fever', 'sweating', 'joint pain'], disease: "Brucellosis" },
//       { symptoms: ['red patches', 'scaly skin', 'itching'], disease: "Psoriasis" },
//       { symptoms: ['white patches', 'skin discoloration', 'loss of pigment'], disease: "Vitiligo" },
//       { symptoms: ['facial redness', 'visible blood vessels', 'swollen bumps'], disease: "Rosacea" },
//       { symptoms: ['ear pain', 'trouble hearing', 'fever'], disease: "Otitis Media" },
//       { symptoms: ['ear canal pain', 'itching', 'discharge'], disease: "Otitis Externa" },
//       { symptoms: ['red eyes', 'itching', 'watery discharge'], disease: "Conjunctivitis" },
//       { symptoms: ['eyelid swelling', 'painful bump', 'redness'], disease: "Stye" },
//       { symptoms: ['eyelid inflammation', 'crusty eyelashes', 'itchy eyes'], disease: "Blepharitis" },
//       { symptoms: ['thick nails', 'discolored nails', 'brittle nails'], disease: "Onychomycosis" },
//       { symptoms: ['intense itching', 'rash', 'thin burrow tracks'], disease: "Scabies" },
//       { symptoms: ['joint pain', 'fatigue', 'butterfly rash'], disease: "Lupus" },
//       { symptoms: ['dry cough', 'shortness of breath', 'fatigue'], disease: "Sarcoidosis" },
//       { symptoms: ['mouth sores', 'genital sores', 'eye inflammation'], disease: "Behçet's Disease" },
//       { symptoms: ['fever', 'weight loss', 'nerve problems'], disease: "Vasculitis" },
//       { symptoms: ['back pain', 'stiffness', 'fatigue'], disease: "Ankylosing Spondylitis" },
//       { symptoms: ['bone pain', 'deformities', 'hearing loss'], disease: "Paget's Disease" },
//       { symptoms: ['fragile bones', 'frequent fractures', 'short stature'], disease: "Osteogenesis Imperfecta" },
//       { symptoms: ['weight loss', 'rapid heartbeat', 'nervousness'], disease: "Hyperthyroidism" },
//       { symptoms: ['fatigue', 'weight gain', 'cold intolerance'], disease: "Hypothyroidism" },
//       { symptoms: ['neck lump', 'trouble swallowing', 'hoarseness'], disease: "Thyroid Nodules" },
//       { symptoms: ['muscle stiffness', 'poor coordination', 'delayed milestones'], disease: "Cerebral Palsy" },
//       { symptoms: ['social challenges', 'repetitive behavior', 'speech delay'], disease: "Autism Spectrum Disorder" },
//       { symptoms: ['distinct facial features', 'developmental delay', 'poor muscle tone'], disease: "Down Syndrome" },
//       { symptoms: ['short stature', 'infertility', 'heart defects'], disease: "Turner Syndrome" },
//       { symptoms: ['tall stature', 'small testes', 'low testosterone'], disease: "Klinefelter Syndrome" },
//       { symptoms: ['musty odor', 'seizures', 'developmental issues'], disease: "Phenylketonuria (PKU)" },
//       { symptoms: ['pale skin', 'light eyes', 'vision problems'], disease: "Albinism" },
//       { symptoms: ['difficulty distinguishing colors', 'inability to see red/green', 'poor color perception'], disease: "Color Blindness" },
//       { symptoms: ['blood in urine', 'swelling', 'high blood pressure'], disease: "Glomerulonephritis" },
//       { symptoms: ['proteinuria', 'swollen ankles', 'foamy urine'], disease: "Nephrotic Syndrome" },
//       { symptoms: ['bladder pressure', 'pelvic pain', 'frequent urination'], disease: "Interstitial Cystitis" },
//       { symptoms: ['high blood pressure', 'side pain', 'enlarged kidneys'], disease: "Polycystic Kidney Disease" },
//       { symptoms: ['burning urination', 'frequent urination', 'cloudy urine'], disease: "Urinary Tract Infection" },
//       { symptoms: ['flank pain', 'fever', 'nausea'], disease: "Pyelonephritis" },
//       { symptoms: ['severe side pain', 'blood in urine', 'vomiting'], disease: "Renal Calculi" },
//       { symptoms: ['swollen kidney', 'urinary problems', 'nausea'], disease: "Hidronephrosis" },
//       { symptoms: ['blood in urine', 'painful urination', 'frequent urination'], disease: "Bladder Cancer" },
//       { symptoms: ['weak urine stream', 'dribbling', 'frequent urination'], disease: "Prostate Enlargement" },
//       { symptoms: ['difficulty maintaining erection', 'low libido', 'performance anxiety'], disease: "Erectile Dysfunction" },
//       { symptoms: ['difficulty conceiving', 'irregular periods', 'low sperm count'], disease: "Infertility" },
//       { symptoms: ['abnormal bleeding', 'pelvic pain', 'discharge'], disease: "Cervical Cancer" },
//       { symptoms: ['pelvic pain', 'bloating', 'irregular periods'], disease: "Ovarian Cyst" },
//       { symptoms: ['lump in breast', 'nipple discharge', 'skin changes'], disease: "Breast Cancer" },
//       { symptoms: ['lump in testicle', 'heaviness', 'dull ache'], disease: "Testicular Cancer" },
//       { symptoms: ['upper abdominal pain', 'nausea', 'fever'], disease: "Pancreatitis" },
//       { symptoms: ['right upper pain', 'nausea', 'vomiting'], disease: "Gallstones" },
//       { symptoms: ['rectal bleeding', 'itching', 'pain during bowel movements'], disease: "Hemorrhoids" },
//       { symptoms: ['sharp anal pain', 'bleeding', 'spasms during defecation'], disease: "Anal Fissure" },
//       { symptoms: ["sneezing", "runny nose", "cough"], disease: "Allergic Rhinitis (Hay Fever)" },
//       { symptoms: ["runny nose", "mild cough", "fever"], disease: "RSV (Respiratory Syncytial Virus)" },
//       { symptoms: ["sneezing", "watery eyes", "itchy throat"], disease: "Seasonal Allergies" },
//       { symptoms: ["fever", "dry cough", "difficulty breathing"], disease: "Swine Flu (H1N1)" },
//       { symptoms: ["blurred vision", "eye pain", "redness"], disease: "Uveitis" },
//       { symptoms: ["persistent dry mouth", "joint pain", "dry eyes"], disease: "Sjögren's Syndrome" },
//       { symptoms: ["muscle weakness", "drooping eyelids", "double vision"], disease: "Myasthenia Gravis" },
//       { symptoms: ["confusion", "loss of coordination", "slurred speech"], disease: "Wernicke’s Encephalopathy" },
//       { symptoms: ["numbness", "tingling", "muscle cramps"], disease: "Electrolyte Imbalance" },
//       { symptoms: ["frequent urination", "extreme thirst", "fatigue"], disease: "Diabetes Insipidus" },
//       { symptoms: ["diarrhea", "gas", "bloating"], disease: "Lactose Intolerance" },
//       { symptoms: ["muscle pain", "dark urine", "weakness"], disease: "Rhabdomyolysis" },
//       { symptoms: ["leg swelling", "pain when walking", "cold feet"], disease: "Peripheral Artery Disease" },
//       { symptoms: ["hoarseness", "persistent cough", "trouble swallowing"], disease: "Laryngeal Cancer" },
//       { symptoms: ["difficulty concentrating", "memory problems", "fatigue"], disease: "Chronic Fatigue Syndrome" },
//       { symptoms: ["burning urination", "pelvic pain", "frequent urination"], disease: "Interstitial Cystitis" },
//       { symptoms: ["dizziness", "vision changes", "nausea"], disease: "Benign Paroxysmal Positional Vertigo (BPPV)" },
//       { symptoms: ["abdominal bloating", "pelvic pain", "irregular periods"], disease: "Endometriosis" },
//       { symptoms: ["excessive sweating", "irritability", "heat intolerance"], disease: "Graves’ Disease" },
//       { symptoms: ["weight gain", "dry skin", "cold intolerance"], disease: "Hashimoto’s Thyroiditis" },
//       { symptoms: ["flaky skin", "red patches", "itching"], disease: "Seborrheic Dermatitis" },
//       { symptoms: ["lower back pain", "stiffness", "trouble bending"], disease: "Sacroiliitis" },
//       { symptoms: ["sensitivity to sound", "facial pain", "jaw discomfort"], disease: "Temporomandibular Joint Disorder (TMJ)" },
//       { symptoms: ["facial drooping", "slurred speech", "numbness"], disease: "Bell’s Palsy" },
//       { symptoms: ["lower abdominal pain", "bloating", "constipation"], disease: "Diverticulitis" },
//       { symptoms: ["fever", "bloody diarrhea", "cramps"], disease: "Shigellosis" },
//       { symptoms: ["stomach pain", "weight loss", "bloating"], disease: "Whipple’s Disease" },
//       { symptoms: ["headache", "scalp tenderness", "vision loss"], disease: "Temporal Arteritis" },
//       { symptoms: ["burning pain", "sensitivity", "rash"], disease: "Postherpetic Neuralgia" },
//       { symptoms: ["muscle stiffness", "jaw locking", "fever"], disease: "Tetanus" },
//       { symptoms: ["muscle wasting", "trouble walking", "weak limbs"], disease: "Spinal Muscular Atrophy (SMA)" },
//       { symptoms: ["increased thirst", "urination", "blurred vision"], disease: "Prediabetes" },
//       { symptoms: ["abnormal heart rhythm", "palpitations", "fatigue"], disease: "Atrial Fibrillation" },
//       { symptoms: ["yellow skin", "itching", "fatigue"], disease: "Primary Biliary Cholangitis" },
//       { symptoms: ["low back pain", "frequent urination", "blood in urine"], disease: "Kidney Infection" },
//       { symptoms: ["throat pain", "white patches", "trouble swallowing"], disease: "Oral Thrush" },
//       { symptoms: ["burning chest pain", "acid taste", "regurgitation"], disease: "GERD (Acid Reflux)" },
//       { symptoms: ["wheezing", "shortness of breath", "tight chest"], disease: "Reactive Airway Disease" },
//       { symptoms: ["muscle spasms", "hallucinations", "confusion"], disease: "Delirium Tremens" },
//       { symptoms: ["rash", "muscle aches", "joint swelling"], disease: "Zika Virus" },
//       { symptoms: ["rash", "joint pain", "eye redness"], disease: "Chikungunya" },
//       { symptoms: ["fever", "swollen lymph nodes", "skin ulcers"], disease: "Tularemia" },
//       { symptoms: ["leg pain", "ulcers", "numbness"], disease: "Diabetic Neuropathy" },
//       { symptoms: ["neck stiffness", "sensitivity to light", "headache"], disease: "Viral Meningitis" },
//       { symptoms: ["unsteady gait", "confusion", "tremor"], disease: "Wilson’s Disease" },
//       { symptoms: ["sore scalp", "hair loss", "itchy skin"], disease: "Alopecia Areata" },
//       { symptoms: ["rash", "mouth ulcers", "fatigue"], disease: "Celiac Disease" },
//       { symptoms: ["loss of balance", "dizziness", "double vision"], disease: "Multiple System Atrophy" }
// ];

// document.getElementById("diagnoseForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const selectedOptions = Array.from(document.getElementById("symptomSelect").selectedOptions);
//   const userSymptoms = selectedOptions.map(opt => opt.value.toLowerCase());

//   const matches = diseaseData.filter(entry =>
//     entry.symptoms.every(symptom => userSymptoms.includes(symptom))
//   );

//   const resultDiv = document.getElementById("exactMatchesOutput");
//   const resultBox = document.getElementById("result");
//   resultBox.classList.remove("d-none");

//   if (matches.length > 0) {
//     resultDiv.innerHTML = `
//       <ul>
//         ${matches.map(match => `<li><strong>${match.disease}</strong></li>`).join("")}
//       </ul>
//     `;
//   } else {
//     resultDiv.innerHTML = `<p>No matching disease found. Please consult a doctor.</p>`;
//   }
// });

document.getElementById("diagnoseForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const selectedSymptoms = Array.from(document.getElementById("symptomSelect").selectedOptions).map(option => option.value);

  const diseases = {
  "Common Cold": ["cough", "sore throat", "runny nose", "fever"],
  "Flu": ["fever", "cough", "body ache", "chills", "fatigue"],
  "COVID-19": ["fever", "cough", "fatigue", "loss of taste", "shortness of breath"],
  "Migraine": ["headache", "nausea", "vomiting", "sensitivity to light"],
  "Food Poisoning": ["nausea", "vomiting", "diarrhea", "fever", "stomach cramps"],
  "Dengue": ["fever", "rash", "body ache", "headache", "nausea", "low platelet count"],
  "Pneumonia": ["fever", "cough", "shortness of breath", "chest pain"],
  "Malaria": ["fever", "chills", "headache", "nausea", "vomiting", "sweating"],
  "Allergy": ["sore throat", "runny nose", "rash", "sneezing"],
  "Typhoid": ["fever", "headache", "fatigue", "diarrhea", "abdominal pain"],
  "Tuberculosis": ["chronic cough", "weight loss", "night sweats", "fever", "fatigue"],
  "Asthma": ["shortness of breath", "cough", "wheezing", "chest tightness"],
  "Chickenpox": ["fever", "rash", "itching", "fatigue", "loss of appetite"],
  "Bronchitis": ["cough", "chest discomfort", "fatigue", "shortness of breath", "mucus"],
  "Sinusitis": ["headache", "facial pain", "runny nose", "congestion", "fever"],
  "Gastritis": ["abdominal pain", "nausea", "vomiting", "bloating", "loss of appetite"],
  "Urinary Tract Infection": ["burning urination", "frequent urination", "pelvic pain", "cloudy urine", "fever"],
  "Appendicitis": ["abdominal pain", "nausea", "vomiting", "fever", "loss of appetite"],
  "Tonsillitis": ["sore throat", "fever", "difficulty swallowing", "swollen glands"],
  "Measles": ["rash", "fever", "cough", "runny nose", "red eyes"],
  "Jaundice": ["yellow skin", "yellow eyes", "fatigue", "abdominal pain", "dark urine"],
  "Anemia": ["fatigue", "pale skin", "shortness of breath", "dizziness", "cold hands and feet"],
  "Hypertension": ["headache", "dizziness", "blurred vision", "nosebleeds", "chest pain"],
  "Diabetes": ["frequent urination", "increased thirst", "weight loss", "blurred vision", "fatigue"]
  };

  const exactMatches = [];
  const partialMatches = [];

  for (const [disease, symptoms] of Object.entries(diseases)) {
    const matchedCount = selectedSymptoms.filter(symptom => symptoms.includes(symptom)).length;

    if (matchedCount === symptoms.length && symptoms.length === selectedSymptoms.length) {
      exactMatches.push(disease);
    } else if (matchedCount > 0) {
      const percentage = Math.round((matchedCount / symptoms.length) * 100);
      partialMatches.push({ disease, percentage });
    }
  }

  const resultContainer = document.getElementById("result");
  const output = document.getElementById("exactMatchesOutput");

  resultContainer.classList.remove("d-none");

  let html = "";

  if (exactMatches.length > 0) {
    html += `<p><strong>Exact Match Found:</strong></p><ul>`;
    exactMatches.forEach(disease => {
      html += `<li>${disease}</li>`;
    });
    html += `</ul>`;
  } else {
    html += `<p><strong>No exact match found.</strong></p>`;
  }

  if (partialMatches.length > 0) {
    html += `<p><strong>Closest Possible Matches:</strong></p><ul>`;
    partialMatches
      .sort((a, b) => b.percentage - a.percentage)
      .forEach(match => {
        html += `<li>${match.disease} - ${match.percentage}% match</li>`;
      });
    html += `</ul>`;
  } else {
    html += `<p><strong>No related diseases found for selected symptoms.</strong></p>`;
  }

  output.innerHTML = html;
});

