function detectSoilType() {
    const pH = parseFloat(document.getElementById("pH").value);
    const moisture = parseFloat(document.getElementById("moisture").value);
    const Temperature = parseFloat(document.getElementById("Temperature").value);
    const Nitrogen = parseFloat(document.getElementById("Nitrogen").value);
    const Potassium = parseFloat(document.getElementById("Potassium").value);
    const Phosphorus = parseFloat(document.getElementById("Phosphorus").value);

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "";

    if ([pH, moisture, Temperature, Nitrogen, Potassium, Phosphorus].some(isNaN)) {
        resultElement.innerHTML = "⚠️ Please enter valid values for all fields.";
        return;
    }

    if (pH < 3.5 || pH > 9.5) {
        resultElement.innerHTML = "❌ Invalid pH value. Please enter a pH between 3.5 and 9.5.";
        return;
    }
    if (moisture < 5 || moisture > 80) {
        resultElement.innerHTML = "❌ Invalid moisture value. Please enter a moisture level between 5 and 80.";
        return;
    }
    if (Temperature < 10 || Temperature > 35) {
        resultElement.innerHTML = "❌ Invalid temperature. Please enter a temperature between 10°C and 35°C.";
        return;
    }
    if (Nitrogen < 10 || Nitrogen > 120) {
        resultElement.innerHTML = "❌ Invalid nitrogen value. Please enter a nitrogen level between 10 and 120.";
        return;
    }
    if (Potassium < 10 || Potassium > 150) {
        resultElement.innerHTML = "❌ Invalid potassium value. Please enter a potassium level between 10 and 150.";
        return;
    }
    if (Phosphorus < 5 || Phosphorus > 60) {
        resultElement.innerHTML = "❌ Invalid phosphorus value. Please enter a phosphorus level between 5 and 60.";
        return;
    }

    const soilData = {
        "Sandy Soil": {
            crops: "Carrots, Potatoes, Peanuts, Watermelon, Corn, Radish",
            fertilizers: "Organic compost, nitrogen-rich fertilizers",
            pesticides: "Neem oil, pyrethrin-based organic pesticides"
        },
        "Clay Soil": {
            crops: "Rice, Wheat, Broccoli, Cabbage, Lettuce, Beans",
            fertilizers: "Gypsum, potassium & phosphorus-based fertilizers",
            pesticides: "Bordeaux mixture, sulfur-based fungicides"
        },
        "Silt Soil": {
            crops: "Tomatoes, Onions, Sugarcane, Maize",
            fertilizers: "Balanced NPK, green manure",
            pesticides: "Copper-based fungicides, insecticidal soap"
        },
        "Loamy Soil": {
            crops: "Wheat, Barley, Cotton, Vegetables, Fruits",
            fertilizers: "Balanced NPK, organic mulch",
            pesticides: "Neem oil, Bacillus Thuringiensis (BT)"
        },
        "Peaty Soil": {
            crops: "Cranberries, Blueberries, Root vegetables",
            fertilizers: "Lime, phosphorus fertilizers, potassium sulfate",
            pesticides: "Organic fungicides, sulfur-based treatments"
        },
        "Saline Soil": {
            crops: "Barley, Sugar Beets, Cotton, Spinach",
            fertilizers: "Gypsum, sulfur amendments, compost",
            pesticides: "Insecticidal soaps, copper-based fungicides"
        },
        "Chalky Soil": {
            crops: "Cabbage, Beans, Lavender, Grapes",
            fertilizers: "Compost, iron & magnesium supplements",
            pesticides: "Iron chelate, sulfur-based fungicides"
        }
    };

    let soilType = "Unknown Soil Type";
    let details = { crops: "-", fertilizers: "-", pesticides: "-" };

    if (pH >= 4.5 && pH <= 6.5 && moisture >= 5 && moisture <= 20 && Temperature >= 25 && Temperature <= 35 && Nitrogen >= 10 && Nitrogen <= 30 && Potassium >= 10 && Potassium <= 40 && Phosphorus >= 5 && Phosphorus <= 15) {
        soilType = "Sandy Soil";
    } else if (pH >= 6.5 && pH <= 8.5 && moisture >= 40 && moisture <= 60 && Temperature >= 15 && Temperature <= 25 && Nitrogen >= 40 && Nitrogen <= 80 && Potassium >= 50 && Potassium <= 150 && Phosphorus >= 20 && Phosphorus <= 50) {
        soilType = "Clay Soil";
    } else if (pH >= 6.0 && pH <= 7.5 && moisture >= 30 && moisture <= 50 && Temperature >= 18 && Temperature <= 28 && Nitrogen >= 30 && Nitrogen <= 70 && Potassium >= 30 && Potassium <= 100 && Phosphorus >= 15 && Phosphorus <= 40) {
        soilType = "Silt Soil";
    } else if (pH >= 6.0 && pH <= 7.5 && moisture >= 25 && moisture <= 50 && Temperature >= 20 && Temperature <= 30 && Nitrogen >= 50 && Nitrogen <= 100 && Potassium >= 40 && Potassium <= 120 && Phosphorus >= 25 && Phosphorus <= 50) {
        soilType = "Loamy Soil";
    } else if (pH >= 3.5 && pH <= 5.5 && moisture >= 60 && moisture <= 80 && Temperature >= 10 && Temperature <= 20 && Nitrogen >= 50 && Nitrogen <= 120 && Potassium >= 40 && Potassium <= 100 && Phosphorus >= 30 && Phosphorus <= 60) {
        soilType = "Peaty Soil";
    } else if (pH >= 7.5 && pH <= 9.5 && moisture >= 10 && moisture <= 30 && Temperature >= 20 && Temperature <= 35 && Nitrogen >= 10 && Nitrogen <= 50 && Potassium >= 10 && Potassium <= 50 && Phosphorus >= 5 && Phosphorus <= 20) {
        soilType = "Saline Soil";
    } else if (pH >= 7.0 && pH <= 8.5 && moisture >= 10 && moisture <= 30 && Temperature >= 20 && Temperature <= 30 && Nitrogen >= 15 && Nitrogen <= 50 && Potassium >= 20 && Potassium <= 80 && Phosphorus >= 5 && Phosphorus <= 25) {
        soilType = "Chalky Soil";
    }

    if (soilData[soilType]) {
        details = soilData[soilType];
    }

    const fullText = `
🌱 Detected Soil Type: ${soilType}
🌾 Crops Grown: ${details.crops}
🌿 Recommended Fertilizers: ${details.fertilizers}
🛡️ Recommended Pesticides: ${details.pesticides}
`;

    let i = 0;
    resultElement.innerHTML = "";
    function typeWriter() {
        if (i < fullText.length) {
            resultElement.innerHTML += fullText.charAt(i);
            i++;
            setTimeout(typeWriter, 20);
        }
    }
    typeWriter();
}


window.onload = function () {
    const soilData = {
        "Sandy Soil": ["Carrots", "Potatoes", "Peanuts", "Watermelon", "Corn", "Radish"],
        "Clay Soil": ["Rice", "Wheat", "Broccoli", "Cabbage", "Lettuce", "Beans"],
        "Silt Soil": ["Tomatoes", "Onions", "Sugarcane", "Maize"],
        "Loamy Soil": ["Wheat", "Barley", "Cotton", "Vegetables", "Fruits"],
        "Peaty Soil": ["Cranberries", "Blueberries", "Root vegetables"],
        "Saline Soil": ["Barley", "Sugar Beets", "Cotton", "Spinach"],
        "Chalky Soil": ["Cabbage", "Beans", "Lavender", "Grapes"]
    };

    const chatBox = document.getElementById("chatBox");
    let selectedSoil = null;

    function addBotMessage(text) {
        const msg = document.createElement("div");
        msg.className = "bot-message";
        msg.innerText = text;
        chatBox.appendChild(msg);
    }

    function addOptionButtons(options, callback) {
        const optionsWrapper = document.createElement("div");
        optionsWrapper.className = "options";

        options.forEach(opt => {
            const btn = document.createElement("button");
            btn.className = "option-btn";
            btn.innerText = opt;
            btn.onclick = () => {
                optionsWrapper.remove();
                callback(opt);
            };
            optionsWrapper.appendChild(btn);
        });

        chatBox.appendChild(optionsWrapper);
    }

    function askSoilType() {
        addBotMessage("🌱 Want to know about crops of soil types in detail?");
        const soilTypes = Object.keys(soilData);
        addOptionButtons(soilTypes, handleSoilSelection);
    }

    function handleSoilSelection(soilType) {
        selectedSoil = soilType;
        addBotMessage(`✅ You selected: ${soilType}`);
        addBotMessage(`🌾 Select the crop in which you want to know in detail:`);
        addOptionButtons(soilData[soilType], handleCropSelection);
    }

    function handleCropSelection(crop) {
        const key = `${selectedSoil}-${crop}`.toLowerCase();

        const detailedInfo = {
            "sandy soil-carrots": `
            Here is the in detail explanation of carrots in sandy soil
    📍 1. Land Requirement  
    Minimum Land: 1 acre (~4047 m²) is ideal for moderate yield and ease of management.  
    Spacing:  
    • Row spacing: 30 cm  
    • Plant spacing: 7.5–10 cm  
    • Estimated Plants/Acre: 400,000 to 500,000  
    
    🧪 2. Soil Preparation  
    • Sandy soil is excellent due to its loose structure.  
    • pH requirement: 6.0–6.8  
    • Add well-rotted farmyard manure (FYM): 20–25 tons per acre  
    • Use a rotavator or tiller to break clods and mix the FYM evenly  
    
    🌱 3. Sowing Seeds  
    • Time: Best sowing months are October to November  
    • Seed rate: 4–6 kg/acre  
    • Depth: 1.5 cm deep  
    • Method: Line sowing or seed drill  
    • Germination time: 7–14 days  
    
    🌿 4. Fertilizer Application (Per acre)  
    • Urea: 40 kg (Nitrogen)  
    • SSP: 100 kg (Phosphorus)  
    • MOP: 50 kg (Potassium)  
    Split:  
    • Nitrogen: 25% before sowing, 75% in 2 splits (Day 30 & 50)  
    • Phosphorus & Potash: 100% basal  
    
    🐛 5. Pesticide & Disease Management  
    • Aphids/Leaf Miners: Imidacloprid 17.8% SL @ 0.3 ml/L  
    • Root-knot nematodes: Carbofuran 3G @ 10–12 kg/acre at sowing  
    • Fungal wilting: Copper oxychloride @ 2.5 g/L  
    • Carrot fly: Neem oil @ 3% or traps  
    • Spray Cycle: Day 30, 45, 60  
    
    💧 6. Watering Schedule  
    • Germination (0–14 days): Every 2–3 days  
    • Vegetative: Every 4–5 days  
    • Root bulking (Day 40–70): Every 3–4 days  
    • Maturity: Every 6–7 days  
    
    📆 7. Monitoring Timeline  
    • Day 0: Soil prep & sowing  
    • Day 7–14: Germination check  
    • Day 15–20: First weeding  
    • Day 30: First fertilizer + pest check  
    • Day 40: Root dev begins  
    • Day 45: Second fertilizer + pest spray  
    • Day 50–60: Monitor growth, mulch  
    • Day 75–90: Harvest check  
    
    🔍 8. Harvesting  
    • Ready in 90–100 days  
    • Gently loosen soil, pull roots  
    • Wash & grade carrots  
    
    📊 Yield  
    • Avg yield: 15–20 tons/acre  
    • High yield: Up to 25 tons/acre`,

            "sandy soil-potatoes": `
    Here is the in detail explanation of potatoes in sandy soil
📍 1. Land Requirement
Minimum Land: 1 acre (~4047 m²) is ideal for moderate yield and ease of management.

Spacing:
• Row spacing: 75 cm
• Plant spacing: 25–30 cm
• Estimated plants/acre: 18,000 to 22,000

🧪 2. Soil Preparation
Soil Type: Sandy soil with good drainage and loose structure is ideal.

pH Requirement: 5.5–6.5

Soil Treatment:
• Add well-rotted FYM: 20–25 tons/acre
• Incorporate organic matter to improve water retention and nutrient availability
• Use a rotavator or tiller to break clods and mix FYM evenly

🌱 3. Planting Potatoes
Best Time: March to April (cool season)

Seed Rate: 2,500–3,000 kg/acre (based on tuber size)

Planting Depth: 8–10 cm

Method:
• Seed spacing: 30–35 cm apart
• Row spacing: 75 cm
• Eyes should face upward

Germination Time: 7–14 days

Note: Use certified disease-free seed potatoes

🌿 4. Fertilizer Application (Per Acre)
Base Fertilizer:
• Urea (Nitrogen): 60 kg
• SSP (Phosphorus): 100 kg
• MOP (Potassium): 50 kg

Nitrogen Split:
• 25% before planting
• Remaining 75% in two splits (Day 30 & 60)

🐛 5. Pest & Disease Management
Common Pests/Diseases:
• Colorado Potato Beetle: Carbaryl or Pyrethroids
• Late Blight: Copper oxychloride or Mancozeb
• Aphids: Imidacloprid or Neem oil

Spray Schedule:
• First spray: On first infestation
• Second spray: 30–45 days after planting
• Third spray: Around Day 60 or as needed

💧 6. Watering Schedule
Sandy soil needs frequent watering:
• Germination: Every 3–4 days
• Vegetative stage: Every 5–7 days
• Tuber formation (30–60 days): Every 3–4 days
• Maturity (70–100 days): Every 7–10 days (reduce before harvest)

📆 7. Monitoring Timeline
Day 0: Soil prep & planting
Day 7–14: Germination check
Day 15–30: First weeding & pest control
Day 30: First fertilizer split & pest check
Day 60: Second fertilizer split & pest check
Day 70–85: Monitor tuber growth, apply mulch if needed
Day 90–100: Check for harvest readiness

🔍 8. Harvesting
When to Harvest: 90–100 days post-planting (leaves yellow and die back)

How to Harvest:
• Gently loosen soil with fork or plow
• Remove tubers carefully
• Wash and grade by size and quality

📊 Yield Expectations
Average Yield: 20–30 tons/acre
High Yield (with good care): Up to 35 tons/acre `,

"sandy soil-peanuts":`
Here is the in detail explanation of peanuts in sandy soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²) is ideal for moderate yield and ease of management.
• Spacing:
Row spacing: 60–75 cm
Plant spacing: 15–20 cm
• Estimated Plants/Acre: 50,000 to 60,000 plants

🧪 2. Soil Preparation
• Soil Type: Sandy soil is perfect due to its well-drained structure, which is essential for peanuts.
• pH requirement: 5.5–7.0
• Soil Treatment:

Add well-rotted farmyard manure (FYM): 15–20 tons per acre
Incorporate organic matter to improve soil fertility and water retention
Use a rotavator or tiller to break clods and mix the FYM evenly.

🌱 3. Planting Peanuts
• Time: Best planting months are April to May (after the last frost in cooler climates).
• Seed Rate: 80–100 kg/acre (depending on seed size)
• Planting Depth: 5–7 cm deep
• Method: Plant seeds 15–20 cm apart, with rows spaced 60–75 cm apart.
• Germination Time: 7–14 days
• Note: Use high-quality, disease-free peanut seeds to avoid soil-borne diseases.

🌿 4. Fertilizer Application
• Base Fertilization (Before Planting) – per acre:
Urea: 30–40 kg (Nitrogen)
Single Super Phosphate (SSP): 50–60 kg (Phosphorus)
Muriate of Potash (MOP): 20–30 kg (Potassium)
• Nitrogen Split:
Apply 25% nitrogen before planting, and split the remaining nitrogen in two applications: one at 30 days and another at 60 days after planting.
🐛 5. Pest & Disease Management
• Common Issues:
Leaf Spot: Use fungicides like Mancozeb or Copper oxychloride.
White Grub (Root Pest): Apply Carbofuran or Thiamethoxam at sowing.
Peanut Weevil: Use Malathion for control if infestations occur.
• Pesticide Guidelines: Follow spray cycles based on pest monitoring:
First spray: When pests are first detected.
Second spray: At 30–45 days after planting, if necessary.
Third spray: At 60 days or as needed.

💧 6. Watering Schedule
• Watering Frequency: Sandy soil drains quickly, so ensure regular watering:
Germination Stage (0–14 days): Water every 3–4 days to keep the soil moist.
Vegetative Stage (15–45 days): Water every 5–7 days to avoid drought stress.
Flowering to Pod Formation (45–75 days): Water every 4–5 days. This is the critical period for pod development.
Maturation Stage (75–120 days): Water every 7–10 days. Reduce water near harvest to avoid rot and ensure proper drying.
📆 7. Monitoring Timeline (in days)
• Day 0: Soil prep & planting
• Day 7–14: Germination check
• Day 15–30: First weeding & pest check
• Day 30: First fertilizer split & pest check
• Day 45: Second fertilizer split & flower check
• Day 60: Continue monitoring for pest and disease
• Day 75–90: Monitor pod development and adjust watering accordingly
• Day 100–120: Harvest readiness check

🔍 8. Harvesting
• Time: Harvest when the plants start to yellow and the pods have matured, typically 120–140 days after planting.
• Method: Loosen the soil with a plow or fork, carefully pulling out the plants. Shake off excess soil and allow them to dry.
• Sorting: Remove the peanuts from the pods, wash, and sort them by size and quality.

📊 Yield Expectations
• Average yield: 1.5–2 tons per acre
• With good management, yield can reach 2.5–3 tons/acre`,

"sandy soil-watermelon":`
Here is the in detail explanation of watermelon in sandy soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²) is ideal for moderate yield and ease of management.
• Spacing:
Row spacing: 2–2.5 meters
Plant spacing: 60–90 cm
• Estimated Plants/Acre: 1,700 to 2,200 plants

🧪 2. Soil Preparation
• Soil Type: Sandy soil is ideal due to its excellent drainage and warm temperatures, both essential for watermelon growth.
• pH requirement: 6.0–6.8
• Soil Treatment:
Add well-rotted farmyard manure (FYM): 20–25 tons per acre
Incorporate organic matter to improve fertility and moisture retention
Use a rotavator or tiller to mix the FYM into the soil for better aeration.

🌱 3. Planting Watermelon
• Time: Best planting months are April to May (in warmer climates).
• Seed Rate: 2–3 kg/acre (depending on seed variety)
• Planting Depth: 2–3 cm deep
• Method: Direct sowing or transplanting seedlings, ensuring the seed holes are at least 60–90 cm apart with row spacing of 2–2.5 meters.
• Germination Time: 7–10 days
• Note: Use high-quality, disease-free watermelon seeds or seedlings for better growth.

🌿 4. Fertilizer Application
• Base Fertilization (Before Planting) – per acre:
Urea: 50 kg (Nitrogen)
Single Super Phosphate (SSP): 100 kg (Phosphorus)
Muriate of Potash (MOP): 40–50 kg (Potassium)
• Fertilizer Split:
Apply 25% nitrogen before planting (as part of basal application), and the remaining nitrogen should be applied in two splits: one at 30 days and another at 60 days after planting.

🐛 5. Pest & Disease Management
• Common Issues:
Aphids: Use Imidacloprid or Neem oil to manage aphid infestations.
Powdery Mildew: Use Sulfur-based fungicides or Copper oxychloride.

Cucumber Beetles: Apply Carbaryl or Pyrethroids to control beetles.
• Pesticide Guidelines: Follow spray cycles based on pest monitoring:
First spray: As soon as pests are detected, usually early in the growing season.
Second spray: At 30 days after planting, especially if mildew or other pests appear.
Third spray: At 60 days or as necessary.

💧 6. Watering Schedule
• Watering Frequency: Sandy soil drains quickly, so frequent watering is necessary:
Germination (0–14 days): Water every 3–4 days to keep the soil moist.
Vegetative Stage (15–45 days): Water every 5–7 days. Ensure the plants get enough moisture, especially during flowering.
Flowering and Fruit Set (45–75 days): Water every 4–5 days. This is a critical stage for fruit development.
Maturation Stage (75–90 days): Water every 6–8 days. Reduce watering as the fruits mature to avoid cracking and rot.

📆 7. Monitoring Timeline (in days)
• Day 0: Soil prep & sowing
• Day 7–10: Germination check
• Day 15–30: First weeding & pest check
• Day 30: First fertilizer split & pest check
• Day 45: Flowering & fruit set stage, monitor water needs
• Day 60: Second fertilizer split & pest check
• Day 70–80: Continue monitoring fruit growth and adjust watering schedule
• Day 85–90: Harvest readiness check

🔍 8. Harvesting
• Time: Harvest when the watermelon reaches its full size and the rind turns a deep green color. The fruit should make a hollow sound when tapped.
• Method: Cut the fruit from the vine carefully, leaving a short stem. Handle the fruit gently to avoid bruising.
• Sorting: Clean and sort watermelons based on size and quality.

📊 Yield Expectations
• Average yield: 20–25 tons per acre
• With proper management, yield can reach 30 tons/acre or more`,

"sandy soil-corn":`
Here is the in detail explanation of corn in sandy soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²) is ideal for moderate yield and ease of management.
• Spacing:
Row spacing: 75–90 cm
Plant spacing: 20–30 cm
• Estimated Plants/Acre: 25,000 to 30,000 plants

🧪 2. Soil Preparation
• Soil Type: Sandy soil is suitable for corn due to its good drainage, but it requires proper nutrient management due to its low organic matter.
• pH requirement: 5.8–7.0
• Soil Treatment:
Add well-rotted farmyard manure (FYM): 15–20 tons per acre
Incorporate organic matter to improve fertility and moisture retention
Use a rotavator or tiller to mix the FYM evenly into the soil.

🌱 3. Planting Corn
• Time: Best planting months are April to May (after the last frost).
• Seed Rate: 10–15 kg/acre (depending on seed size and variety)
• Planting Depth: 3–4 cm deep
• Method: Direct sowing or using a seed drill. Ensure seeds are planted 20–30 cm apart with rows spaced 75–90 cm apart.
• Germination Time: 5–10 days
• Note: Use high-quality, disease-free corn seeds for better yield.

🌿 4. Fertilizer Application
• Base Fertilization (Before Planting) – per acre:
Urea: 60–80 kg (Nitrogen)
Single Super Phosphate (SSP): 100 kg (Phosphorus)
Muriate of Potash (MOP): 50–60 kg (Potassium)
• Fertilizer Split:
Apply 25% nitrogen before planting, and split the remaining nitrogen in two applications: one at 30 days and another at 60 days after planting.

🐛 5. Pest & Disease Management
• Common Issues:
Corn Borer: Use Carbaryl or Pyrethroids.
Fall Armyworm: Apply Spinosad or Bacillus thuringiensis (Bt).
Rust Diseases: Use Copper oxychloride or Chlorothalonil.
• Pesticide Guidelines: Follow spray cycles based on pest monitoring:
First spray: When pests are first detected, typically early in the growing season.
Second spray: At 30–45 days after planting, if necessary.
Third spray: At 60–70 days after planting or as needed.

💧 6. Watering Schedule
• Watering Frequency: Sandy soil drains quickly, so more frequent watering is needed:
Germination Stage (0–14 days): Water every 3–4 days to keep the soil moist.
Vegetative Stage (15–45 days): Water every 5–7 days to ensure good plant growth.
Tasseling & Pollination Stage (45–70 days): Water every 4–6 days. This is critical for pollination and kernel formation.
Maturation Stage (70–100 days): Water every 7–10 days. Reduce watering as the kernels mature to avoid rot.

📆 7. Monitoring Timeline (in days)
• Day 0: Soil prep & sowing
• Day 7–10: Germination check
• Day 15–30: First weeding & pest check
• Day 30: First fertilizer split & pest check
• Day 45: Monitor for tasseling & pollination, adjust water needs
• Day 60: Second fertilizer split & pest check
• Day 70–80: Monitor kernel formation and water usage
• Day 90–100: Harvest readiness check

🔍 8. Harvesting
• Time: Harvest when the kernels are fully formed, and the husks turn brown, usually 90–100 days after planting.
• Method: Hand-pick or use a combine harvester. Ensure the husks are dry, and kernels are firm.
• Sorting: Clean and grade corn cobs based on size and quality.

📊 Yield Expectations
• Average yield: 120–160 bushels per acre (8–10 tons/acre)
• With proper management, yield can reach 200–220 bushels per acre (12–14 tons/acre).`,

"sandy soil-radish":`
Here is the in detail explanation of radish in sandy soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²) is ideal for moderate yield and ease of management.
• Spacing:
Row spacing: 30–45 cm
Plant spacing: 2.5–5 cm
• Estimated Plants/Acre: 200,000 to 400,000 plants

🧪 2. Soil Preparation
• Soil Type: Sandy soil is ideal for radishes as it provides good drainage and allows the roots to grow freely.
• pH requirement: 6.0–7.0
• Soil Treatment:

Add well-rotted farmyard manure (FYM): 10–15 tons per acre
Incorporate organic matter to improve soil structure and fertility
Use a rotavator or tiller to break clods and mix the FYM evenly into the soil.

🌱 3. Sowing Seeds
• Time: Best sowing months are March to May (cooler months).
• Seed Rate: 3–5 kg/acre (depending on radish variety and spacing)
• Planting Depth: 1–2 cm deep
• Method: Direct sowing in rows, ensuring that seeds are spaced 2.5–5 cm apart, with rows spaced 30–45 cm apart.
• Germination Time: 3–7 days
• Note: Use high-quality, disease-free seeds for optimal germination.

🌿 4. Fertilizer Application
• Base Fertilization (Before Sowing) – per acre:
Urea: 30–40 kg (Nitrogen)
Single Super Phosphate (SSP): 50–60 kg (Phosphorus)
Muriate of Potash (MOP): 20–30 kg (Potassium)
• Fertilizer Split:
Apply 50% of nitrogen before planting, and split the remaining nitrogen in two applications: one after 30 days and another after 50 days.

🐛 5. Pest & Disease Management
• Common Issues:
Root Maggot: Apply Carbofuran or Thiamethoxam at sowing to control root maggot.
Aphids: Use Imidacloprid or Neem oil for aphid control.
Fungal Diseases: Use Copper oxychloride or Mancozeb to control fungal diseases like downy mildew.
• Pesticide Guidelines: Follow spray cycles based on pest monitoring:
First spray: When pests are first observed, generally around 15–20 days after sowing.
Second spray: After 30 days or as needed.
Third spray: If necessary, after 50–60 days, particularly for fungal issues.

💧 6. Watering Schedule
• Watering Frequency: Sandy soil drains quickly, so consistent watering is essential:
Germination Stage (0–7 days): Water every 2–3 days to keep the soil moist.
Vegetative Stage (7–30 days): Water every 4–5 days to keep the soil consistently moist but not waterlogged.
Root Bulking Stage (30–60 days): Water every 3–4 days. Radishes require consistent moisture for proper root growth.
Maturity Stage (60–90 days): Water every 5–6 days. Reduce watering near harvest to prevent cracking.

📆 7. Monitoring Timeline (in days)
• Day 0: Soil prep & sowing
• Day 3–7: Germination check
• Day 10–20: First weeding & pest check
• Day 30: First fertilizer split & pest check
• Day 40–50: Root growth check & second fertilizer split
• Day 60: Monitor root growth, apply mulch if necessary
• Day 70–80: Harvest readiness check
• Day 90: Harvest check

🔍 8. Harvesting
• Time: Harvest when the roots reach full size, generally 30–60 days depending on the variety.
• Method: Gently loosen the soil and pull out the radishes. Handle them carefully to avoid bruising.
• Sorting: Clean and grade radishes by size and quality.

📊 Yield Expectations
• Average yield: 10–12 tons per acre
• With good practices, yield can reach 15 tons/acre.`,

"clay soil-rice":`
Here is the in detail explanation of rice in clay soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²) is ideal for moderate yield and ease of management.
• Spacing:
Row spacing: 20–25 cm
Plant spacing: 10–15 cm
• Estimated Plants/Acre: 120,000 to 160,000 plants

🧪 2. Soil Preparation
• Soil Type: Clay soil is ideal for rice cultivation as it retains water well and is heavy, which is beneficial for paddy rice.
• pH requirement: 5.5–7.0
• Soil Treatment:
Add well-rotted farmyard manure (FYM): 15–20 tons per acre
Plough the soil thoroughly to ensure proper aeration. Incorporate organic matter to improve soil structure.
Create bunds (small embankments) around the field to retain water.

🌱 3. Sowing Rice
• Time: Best sowing months are June to July (monsoon season).
• Seed Rate: 60–80 kg/acre (depending on seed variety and spacing)
• Planting Depth: 2–3 cm deep (for direct sowing) or transplant 3–4-week-old seedlings.
• Method:
Direct sowing: Spread seeds uniformly on flooded land.
Transplanting: Transplant seedlings in puddled soil at 10–15 cm spacing.
• Germination Time: 5–7 days for direct sowing.
• Note: Use certified, disease-free seeds to avoid seedling issues.

🌿 4. Fertilizer Application
• Base Fertilization (Before Sowing) – per acre:
Urea: 40–60 kg (Nitrogen)
Single Super Phosphate (SSP): 80–100 kg (Phosphorus)
Muriate of Potash (MOP): 40–60 kg (Potassium)
• Fertilizer Split:
Apply 25% of nitrogen before sowing, 25% at the tillering stage, and 50% at panicle initiation or flowering stage.

🐛 5. Pest & Disease Management
• Common Issues:
Rice Blast: Use Tricyclazole or Pyrazophos fungicides.
Brown Plant Hopper: Apply Imidacloprid or Thiamethoxam.
Rice Stem Borer: Use Carbofuran or Chlorpyrifos to control stem borers.
• Pesticide Guidelines: Follow spray cycles based on pest monitoring:
First spray: At tillering or early vegetative stage, based on pest observation.
Second spray: At flowering or panicle initiation, if required.
Third spray: At the milky stage, if necessary, for late pest issues.

💧 6. Watering Schedule
• Watering Frequency: Clay soil retains water well, so flooding the field (puddling) is essential for rice cultivation:
Germination (0–7 days): Keep the soil continuously flooded with 5–10 cm of water.
Vegetative Stage (7–45 days): Maintain water level at around 5–7 cm. Flooding is necessary to suppress weeds.
Panicle Initiation (45–70 days): Increase water depth to 10–15 cm to support panicle development.
Maturation Stage (70–120 days): Reduce water depth near maturity to allow the field to dry slightly for harvesting.

📆 7. Monitoring Timeline (in days)
• Day 0: Soil prep & sowing/transplanting
• Day 7–10: Germination check and ensure proper flooding
• Day 15–30: Weed control, first fertilizer application & pest check
• Day 45: First nitrogen split and tillering stage check
• Day 60–70: Flowering & panicle initiation check
• Day 90–100: Second fertilizer split & check for disease and pest
• Day 120: Harvest readiness check

🔍 8. Harvesting
• Time: Harvest when the grains are firm, and the husks turn golden, typically around 120–150 days after sowing.
• Method: Drain excess water from the field for a few days before harvesting to avoid waterlogging. Use a sickle or combine harvester to cut the rice plants.
• Sorting: Dry the rice thoroughly before storage and remove broken or damaged grains.

📊 Yield Expectations
• Average yield: 4–6 tons per acre
• With proper management, yield can reach 7–8 tons/acre.`,

"clay soil-wheat":`
Here is the in detail explanation of wheat in clay soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²) is ideal for moderate yield.
• Spacing:
Row spacing: 20–25 cm
Plant spacing: 5–10 cm
• Estimated Plants/Acre: 100,000 to 150,000 plants

🧪 2. Soil Preparation
• Soil Type: Clay soil is ideal for wheat as it provides moisture retention, but it can become compacted. Proper drainage is key.
• pH requirement: 6.0–7.5
• Soil Treatment:
Add well-rotted farmyard manure (FYM): 15–20 tons per acre
Ensure proper tillage to break soil compactness and improve aeration.
Consider adding lime to adjust pH if necessary.

🌱 3. Sowing Seeds
• Time: Best sowing months are October to November (during cooler temperatures).
• Seed Rate: 60–100 kg/acre (depending on seed variety and row spacing)
• Planting Depth: 3–4 cm deep
• Method: Use a seed drill or broadcast method for even distribution.
• Germination Time: 7–10 days
• Note: Use high-quality, disease-free seeds for optimal germination.

🌿 4. Fertilizer Application
• Base Fertilization (Before Sowing) – per acre:
Urea: 50–60 kg (Nitrogen)
Single Super Phosphate (SSP): 80 kg (Phosphorus)
Muriate of Potash (MOP): 40 kg (Potassium)
• Fertilizer Split:
Apply 25% of nitrogen before sowing, 25% at the tillering stage, and 50% at panicle initiation or flowering stage.

🐛 5. Pest & Disease Management
• Common Issues: Use Carbendazim for fungal diseases like rust and Imidacloprid for aphids.

💧 6. Watering Schedule
• Flooded fields are not required for wheat, but ensure regular watering during the vegetative phase and when kernels are forming. Clay soil’s water retention usually helps keep adequate moisture.

📆 Monitoring Timeline (in days)
• Day 0: Soil prep & sowing
• Day 7–10: Germination check
• Day 15–30: Weed control, first fertilizer application & pest check
• Day 45: First nitrogen split and tillering stage check
• Day 60–70: Flowering & panicle initiation check
• Day 90–100: Second fertilizer split & check for disease and pest
• Day 120: Harvest readiness check

🔍 Harvesting
• Time: Harvest when the grains are firm, and the husks turn golden, typically around 120–150 days after sowing.
• Method: Drain excess water from the field for a few days before harvesting to avoid waterlogging. Use a sickle or combine harvester to cut the wheat plants.
• Sorting: Dry the wheat thoroughly before storage and remove broken or damaged grains.

📊 Yield Expectations
• Average yield: 4–6 tons per acre
• With proper management, yield can reach 7–8 tons/acre.`,

"clay soil-broccoli":`
Here is the in detail explanation of broccoli in clay soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²) for moderate yield.
• Spacing:
Row spacing: 45–60 cm
Plant spacing: 30–45 cm
• Estimated Plants/Acre: 10,000 to 15,000 plants

🧪 2. Soil Preparation
• Soil Type: Clay soil is suitable for broccoli, but drainage should be monitored to avoid waterlogging.
• pH requirement: 6.0–7.5
• Soil Treatment:
Add organic compost or well-rotted manure: 10–15 tons per acre.
Ensure proper tilling to break the soil’s compaction and improve aeration.

🌱 3. Sowing Seeds
• Time: Best sowing months are February to March or August to September (cooler seasons).
• Seed Rate: 100–150 g/acre
• Planting Depth: 1–2 cm deep
• Method: Transplant seedlings after 4–6 weeks of growth.
• Germination Time: 7–10 days

🌿 4. Fertilizer Application
• Base Fertilization (Before Planting) – per acre:
Urea: 60–70 kg (Nitrogen)
Single Super Phosphate (SSP): 100 kg (Phosphorus)
Muriate of Potash (MOP): 50–60 kg (Potassium)

🐛 5. Pest & Disease Management
• Common Issues: Use Pyrethrin for aphids and Copper oxychloride for fungal diseases like downy mildew.

💧 6. Watering Schedule
• Frequency: Clay soil holds moisture well, so keep the soil consistently moist but not waterlogged. Water every 4–5 days during the growing season.

📆 Monitoring Timeline (in days)
• Day 0: Soil prep & sowing/transplanting
• Day 7–10: Germination check
• Day 15–30: First weeding & pest check
• Day 30: First fertilizer split & pest check
• Day 45: Monitor head formation and adjust watering
• Day 60: Continue monitoring growth and disease control
• Day 75: Harvest check

🔍 Harvesting
• Time: Harvest when the heads are firm and compact, typically 60–90 days after sowing.
• Method: Cut heads with a sharp knife, leaving 10 cm of stem.
• Sorting: Clean and sort based on size and quality.

📊 Yield Expectations
• Average yield: 4–6 tons per acre
• With good care, yields can reach 7 tons/acre.`,

"clay soil-cabbage":`
Here is the in detail explanation of cabbage in clay soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²) for moderate yield.
• Spacing:
Row spacing: 60–75 cm
Plant spacing: 45–60 cm
• Estimated Plants/Acre: 6,000 to 8,000 plants

🧪 2. Soil Preparation
• Soil Type: Clay soil retains moisture, which is beneficial for cabbage, but ensure proper drainage to avoid root rot.
• pH requirement: 6.0–7.5
• Soil Treatment:
Add 15–20 tons of organic compost per acre to improve aeration and fertility.
Use a rotavator or tiller to loosen the soil and improve root penetration.

🌱 3. Sowing Seeds
• Time: Best sowing months are February to March or August to September (depending on local climate).
• Seed Rate: 0.5–1 kg/acre
• Planting Depth: 1–2 cm
• Method: Transplant seedlings after 4–6 weeks of growth.
• Germination Time: 7–14 days

🌿 4. Fertilizer Application
• Base Fertilization – per acre:
Urea: 60–70 kg (Nitrogen)
Single Super Phosphate (SSP): 100 kg (Phosphorus)
Muriate of Potash (MOP): 50–60 kg (Potassium)

🐛 5. Pest & Disease Management
• Common Issues: Use Pyrethrin or Neem oil for aphids and caterpillars. Copper-based fungicides can help manage fungal diseases.

💧 6. Watering Schedule
• Keep the soil consistently moist but not waterlogged. Water every 4–5 days, ensuring the soil doesn't dry out.

📆 Monitoring Timeline (in days)
• Day 0: Soil prep & sowing/transplanting
• Day 7–14: Germination check
• Day 15–30: First weeding & pest check
• Day 30: First fertilizer split & pest check
• Day 45: Monitor head formation and adjust watering
• Day 60: Continue monitoring growth and disease control
• Day 75–90: Harvest check

🔍 Harvesting
• Time: Harvest when heads are firm and compact, typically 90–120 days after planting.
• Method: Cut the cabbage head carefully with a sharp knife, leaving a small portion of the stem.
• Sorting: Sort by size and quality, discarding damaged leaves.

📊 Yield Expectations
• Average yield: 12–15 tons per acre
• With proper care, yields can reach 18 tons/acre.`,

"clay soil-lettuce":`
Here is the in detail explanation of lettuce in clay soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²)
• Spacing:
Row spacing: 30–40 cm
Plant spacing: 20–30 cm
• Estimated Plants/Acre: 30,000 to 35,000 plants

🧪 2. Soil Preparation
• Soil Type: Clay soil retains moisture well, but good drainage is needed for lettuce.
• pH requirement: 6.0–7.0
• Soil Treatment:
Add organic matter or compost: 10 tons per acre.
Ensure proper tillage to improve soil texture and drainage.

🌱 3. Sowing Seeds
• Time: Best sowing months are February to March or August to September.
• Seed Rate: 0.5–1 kg/acre
• Planting Depth: 1–2 cm
• Method: Direct sowing or transplanting seedlings.
• Germination Time: 5–7 days

🌿 4. Fertilizer Application
• Base Fertilization – per acre:
Urea: 40–50 kg (Nitrogen)
Single Super Phosphate (SSP): 80 kg (Phosphorus)
Muriate of Potash (MOP): 30–40 kg (Potassium)

🐛 5. Pest & Disease Management
• Common Issues: Use Pyrethrin for aphids and Fungicides like Mancozeb for fungal infections.

💧 6. Watering Schedule
• Water frequently, keeping the soil consistently moist. Water every 3–4 days to avoid wilting.

📆 Monitoring Timeline (in days)
• Day 0: Soil prep & sowing/transplanting
• Day 7–10: Germination check
• Day 15–30: First weeding & pest check
• Day 30: First fertilizer split & pest check
• Day 45: Monitor growth, check for bolting
• Day 60: Harvest readiness check

🔍 Harvesting
• Time: Harvest when leaves are tender and firm, typically 30–45 days after sowing.
• Method: Harvest by cutting leaves or the entire head, depending on the variety.
• Sorting: Clean and sort by quality.

📊 Yield Expectations
• Average yield: 15–20 tons per acre
• With good practices, yields can reach 25 tons/acre.`,

"clay soil-beans":`
Here is the in detail explanation of beans in clay soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²)
• Spacing:
Row spacing: 45–60 cm
Plant spacing: 10–15 cm
• Estimated Plants/Acre: 30,000 to 40,000 plants

🧪 2. Soil Preparation
• Soil Type: Clay soil holds moisture well, but drainage is crucial to avoid root rot.
• pH requirement: 6.0–7.5
• Soil Treatment:
Add well-rotted manure or compost: 10–15 tons per acre.
Use a tiller to break up the soil and ensure proper aeration.

🌱 3. Sowing Seeds
• Time: Best sowing months are March to May (after the last frost).
• Seed Rate: 20–30 kg/acre
• Planting Depth: 2–3 cm deep
• Method: Direct sowing in rows or beds.
• Germination Time: 7–10 days

🌿 4. Fertilizer Application
• Base Fertilization – per acre:
Urea: 40–50 kg (Nitrogen)
Single Super Phosphate (SSP): 80 kg (Phosphorus)
Muriate of Potash (MOP): 40 kg (Potassium)

🐛 5. Pest & Disease Management
• Common Issues:

Use Carbaryl for aphids and Fungicides for rust and blight.

💧 6. Watering Schedule
• Keep the soil moist during germination and flowering. Water every 4–5 days.

📆 Monitoring Timeline (in days)
• Day 0: Soil prep & sowing
• Day 7–10: Germination check
• Day 15–30: First weeding & pest check
• Day 45: First fertilizer split & pest check
• Day 60: Monitor pod development
• Day 90: Harvest check

🔍 Harvesting
• Time: Harvest when pods are firm and beans are fully formed, typically 90–120 days after sowing.
• Method: Cut the plants and dry them before threshing.
• Sorting: Clean and sort by size and quality.

📊 Yield Expectations
• Average yield: 1.5–2 tons per acre
• With good practices, yields can reach 3 tons/acre.`,

"slit soil-tomatoes":`
Here is the in detail explanation of tomatoes in slit soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²) for moderate yield.
• Spacing:
Row spacing: 60–75 cm
Plant spacing: 30–45 cm
• Estimated Plants/Acre: 30,000 to 35,000 plants

🧪 2. Soil Preparation
• Soil Type: Silt soil is ideal for tomatoes as it holds moisture well and retains nutrients effectively.
• pH requirement: 6.0–6.8
• Soil Treatment:
Add well-rotted farmyard manure (FYM): 20–25 tons per acre.
Use a rotavator or tiller to break the clods and mix organic matter evenly.
Consider light tilling to improve soil texture and prevent compactness.

🌱 3. Sowing Seeds
• Time: Best sowing months are February to March (cooler weather).
• Seed Rate: 0.5–1 kg/acre (for direct sowing) or 3,000–4,000 seedlings/acre (for transplanting).
• Planting Depth: 1–2 cm deep (for seeds); transplant 4–6-week-old seedlings.
• Germination Time: 7–14 days
• Note: Use disease-resistant tomato varieties to avoid common diseases like blight.

🌿 4. Fertilizer Application
• Base Fertilization (Before Sowing) – per acre:
Urea: 60–80 kg (Nitrogen)
Single Super Phosphate (SSP): 100 kg (Phosphorus)
Muriate of Potash (MOP): 40–50 kg (Potassium)
• Fertilizer Split:
Apply 25% of nitrogen before planting, and split the remaining nitrogen into two applications: one after 30 days and another after 60 days.

🐛 5. Pest & Disease Management
• Common Issues:

Use Imidacloprid for aphids, Carbendazim for fungal issues, and Pyrethrin for tomato hornworms.

💧 6. Watering Schedule
• Keep soil consistently moist but not waterlogged. Water every 4–6 days to prevent wilting.
• Avoid over-watering, which can cause root rot in silt soil.

📆 Monitoring Timeline (in days)
• Day 0: Soil prep & sowing/transplanting
• Day 7–14: Germination check
• Day 30: First fertilizer split & pest check
• Day 45: Flowering and fruit set check
• Day 60: Continue pest management & watering
• Day 80–90: Harvest readiness check

🔍 Harvesting
• Time: Harvest when fruits are firm and fully colored, typically 75–90 days after sowing.
• Method: Pick the fruits by hand, leaving a small portion of the stem attached.
• Sorting: Sort tomatoes by size and quality. Handle them gently to avoid bruising.

📊 Yield Expectations
• Average yield: 20–25 tons per acre
• With good care, yields can reach 30 tons/acre.`,

"slit soil-onions":`
Here is the in detail explanation of onions in slit soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²)
• Spacing:
Row spacing: 30–45 cm
Plant spacing: 10–15 cm
• Estimated Plants/Acre: 150,000 to 200,000 plants

🧪 2. Soil Preparation
• Soil Type: Silt soil holds moisture well and is rich in nutrients, which is ideal for onion growth.
• pH requirement: 6.0–6.8
• Soil Treatment:
Add well-rotted farmyard manure (FYM): 15–20 tons per acre.
Use a rotavator or tiller to incorporate the organic matter thoroughly into the soil.

🌱 3. Sowing Seeds
• Time: Best sowing months are January to February (cool season).
• Seed Rate: 2–3 kg/acre (for direct sowing) or 200,000–250,000 seedlings/acre (for transplanting).
• Planting Depth: 1–2 cm deep
• Method: Direct sowing or transplanting 4–6-week-old seedlings.
• Germination Time: 7–10 days

🌿 4. Fertilizer Application
• Base Fertilization (Before Sowing) – per acre:
Urea: 60–80 kg (Nitrogen)
Single Super Phosphate (SSP): 80 kg (Phosphorus)
Muriate of Potash (MOP): 50 kg (Potassium)
• Fertilizer Split:
Apply 25% of nitrogen before planting, then split the remaining nitrogen in two applications: one at 30 days and another at 60 days.

🐛 5. Pest & Disease Management
• Common Issues:

Use Imidacloprid for aphids, Thiamethoxam for root maggots, and Copper oxychloride for fungal diseases like downy mildew.

💧 6. Watering Schedule
• Keep the soil moist but not waterlogged. Water every 4–5 days, especially during dry periods.
• Ensure the onions are watered deeply during bulb development.

📆 Monitoring Timeline (in days)
• Day 0: Soil prep & sowing/transplanting
• Day 7–14: Germination check
• Day 30: First fertilizer split & pest check
• Day 60: Continue pest management and monitor bulb formation
• Day 90: Harvest readiness check

🔍 Harvesting
• Time: Harvest when the tops begin to fall over, usually 90–120 days after planting.
• Method: Pull the onions gently from the soil and allow them to dry.
• Sorting: Sort by size and quality before storage.

📊 Yield Expectations
• Average yield: 12–15 tons per acre
• With proper management, yields can reach 18 tons/acre.`,

"slit soil-sugarcane":`
Here is the in detail explanation of sugarcane in slit soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²)
• Spacing:
Row spacing: 1.5–2 meters
Plant spacing: 30–45 cm
• Estimated Plants/Acre: 5,000 to 6,000 plants

🧪 2. Soil Preparation
• Soil Type: Silt soil is highly suitable for sugarcane because it retains moisture and provides a good base for root development.
• pH requirement: 6.0–7.5
• Soil Treatment:
Add well-rotted farmyard manure (FYM): 25–30 tons per acre.
Incorporate the organic matter to increase nutrient levels.

🌱 3. Sowing Seeds
• Time: Best planting months are February to March or June to July (depending on the local climate).
• Seed Rate: 5,000–6,000 seedlings per acre
• Method: Plant sugarcane setts (cuttings) horizontally or vertically in prepared furrows.
• Germination Time: 15–30 days

🌿 4. Fertilizer Application
• Base Fertilization (Before Planting) – per acre:
Urea: 100 kg (Nitrogen)
Single Super Phosphate (SSP): 150 kg (Phosphorus)
Muriate of Potash (MOP): 80 kg (Potassium)
• Fertilizer Split:
Apply 25% of nitrogen before planting, then apply the remaining nitrogen in 2 splits after 30 and 60 days.

🐛 5. Pest & Disease Management
• Common Issues:
Use Chlorpyrifos or Fipronil for white grubs and Mancozeb for fungal diseases like rust.

💧 6. Watering Schedule
• Silt soil retains moisture well. Ensure adequate irrigation during dry spells, but avoid waterlogging.
• Water every 5–7 days, especially during early growth stages.

📆 Monitoring Timeline (in days)
• Day 0: Soil prep & planting
• Day 15–30: Germination check
• Day 60: First fertilizer split & pest check
• Day 90: Continue pest management and monitor plant growth
• Day 180–240: Harvest check

🔍 Harvesting
• Time: Harvest when the sugarcane stalks are mature, typically 10–12 months after planting.
• Method: Cut the sugarcane stalks at the base with a machete or harvester.
• Sorting: Clean the sugarcane stalks and sort them by quality.

📊 Yield Expectations
• Average yield: 50–60 tons per acre
• With proper care, yields can reach 70 tons/acre.`,

"slit soil-maize":`
Here is the in detail explanation of maize in slit soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²)
• Spacing:
Row spacing: 75–90 cm
Plant spacing: 20–30 cm
• Estimated Plants/Acre: 25,000 to 30,000 plants

🧪 2. Soil Preparation
• Soil Type: Silt soil is rich in nutrients and retains moisture well, making it suitable for maize.
• pH requirement: 5.8–7.0
• Soil Treatment:
Add well-rotted farmyard manure (FYM): 15–20 tons per acre.
Incorporate organic matter to improve soil structure and fertility.

🌱 3. Sowing Seeds
• Time: Best sowing months are March to April (after the last frost).
• Seed Rate: 25–30 kg/acre
• Planting Depth: 4–5 cm deep
• Method: Direct sowing using a seed drill or broadcasting.
• Germination Time: 7–10 days

🌿 4. Fertilizer Application
• Base Fertilization (Before Sowing) – per acre:
Urea: 50–60 kg (Nitrogen)
Single Super Phosphate (SSP): 100 kg (Phosphorus)
Muriate of Potash (MOP): 60 kg (Potassium)
• Fertilizer Split:
Apply 25% of nitrogen before sowing and 25% after 30 days. The remaining nitrogen should be applied during tasseling.

🐛 5. Pest & Disease Management
• Common Issues:
Use Imidacloprid for aphids and Carbofuran for root pests.

💧 6. Watering Schedule
• Water consistently to maintain moist soil, especially during flowering and kernel formation. Water every 4–5 days.

📆 Monitoring Timeline (in days)
• Day 0: Soil prep & sowing
• Day 7–10: Germination check
• Day 30: First fertilizer split & pest check
• Day 60: Second fertilizer split & tasseling check
• Day 90: Harvest readiness check

🔍 Harvesting
• Time: Harvest when the kernels are firm and the husks dry, typically 90–120 days after sowing.
• Method: Use a combine harvester or manual harvesting methods.
• Sorting: Clean and sort maize based on size and quality.

📊 Yield Expectations
• Average yield: 120–150 bushels per acre (8–10 tons/acre)
• With good care, yields can reach 180–200 bushels per acre (12–14 tons/acre).`,

"loamy soil-wheat":`
Here is the in detail explanation of wheat in loamy soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²) is ideal for moderate yield.
• Spacing:
Row spacing: 20–25 cm
Plant spacing: 5–10 cm
• Estimated Plants/Acre: 100,000 to 150,000 plants

🧪 2. Soil Preparation
• Soil Type: Loamy soil is ideal for wheat due to its balanced texture, good drainage, and fertility.
• pH requirement: 6.0–7.5
• Soil Treatment:
Add well-rotted farmyard manure (FYM): 15–20 tons per acre.
Use a tiller or plough to loosen the soil and ensure proper aeration and drainage.

🌱 3. Sowing Seeds
• Time: Best sowing months are October to November (cooler weather).
• Seed Rate: 60–100 kg/acre (depending on seed variety and row spacing)
• Planting Depth: 3–4 cm deep
• Method: Use a seed drill or broadcast method for even distribution.
• Germination Time: 7–10 days
• Note: Use high-quality, disease-free seeds for optimal germination.

🌿 4. Fertilizer Application
• Base Fertilization (Before Sowing) – per acre:
Urea: 50–60 kg (Nitrogen)
Single Super Phosphate (SSP): 80 kg (Phosphorus)
Muriate of Potash (MOP): 40 kg (Potassium)
• Fertilizer Split:

Apply 25% of nitrogen before sowing, 25% at the tillering stage, and 50% at panicle initiation or flowering stage.

🐛 5. Pest & Disease Management
• Common Issues: Use Carbendazim for fungal diseases like rust and Imidacloprid for aphids.

💧 6. Watering Schedule
• Flooded fields are not required for wheat, but ensure regular watering during the vegetative phase and when kernels are forming. Loamy soil’s water retention usually helps maintain adequate moisture.

📆 Monitoring Timeline (in days)
• Day 0: Soil prep & sowing
• Day 7–10: Germination check
• Day 15–30: Weed control, first fertilizer application & pest check
• Day 45: First nitrogen split and tillering stage check
• Day 60–70: Flowering & panicle initiation check
• Day 90–100: Second fertilizer split & check for disease and pest
• Day 120: Harvest readiness check

🔍 Harvesting
• Time: Harvest when the grains are firm, and the husks turn golden, typically around 120–150 days after sowing.
• Method: Drain excess water from the field for a few days before harvesting to avoid waterlogging. Use a sickle or combine harvester to cut the wheat plants.
• Sorting: Dry the wheat thoroughly before storage and remove broken or damaged grains.

📊 Yield Expectations
• Average yield: 4–6 tons per acre
• With proper management, yield can reach 7–8 tons/acre.`,

"loamy soil-barley":`
Here is the in detail explanation of barley in loamy soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²)
• Spacing:
Row spacing: 20–25 cm
Plant spacing: 5–10 cm
• Estimated Plants/Acre: 100,000 to 150,000 plants

🧪 2. Soil Preparation
• Soil Type: Loamy soil is well-drained, rich in nutrients, and ideal for barley.
• pH requirement: 6.0–7.0
• Soil Treatment:
Add well-rotted farmyard manure (FYM): 15–20 tons per acre.
Use a rotavator or tiller to break clods and mix the organic matter into the soil.

🌱 3. Sowing Seeds
• Time: Best sowing months are October to November (for cooler climates).
• Seed Rate: 50–80 kg/acre
• Planting Depth: 3–5 cm deep
• Method: Direct sowing or using a seed drill.
• Germination Time: 7–10 days
• Note: Use certified, disease-free barley seeds for optimal growth.

🌿 4. Fertilizer Application
• Base Fertilization (Before Sowing) – per acre:

Urea: 40–60 kg (Nitrogen)
Single Super Phosphate (SSP): 80 kg (Phosphorus)
Muriate of Potash (MOP): 40–50 kg (Potassium)
• Fertilizer Split:
Apply 50% of nitrogen before sowing, and 50% during the tillering stage.

🐛 5. Pest & Disease Management
• Common Issues: Use Imidacloprid for aphids and Carbendazim for fungal diseases like powdery mildew.

💧 6. Watering Schedule
• Water regularly, particularly during dry spells. Ensure the soil remains moist but not waterlogged.

📆 Monitoring Timeline (in days)
• Day 0: Soil prep & sowing
• Day 7–10: Germination check
• Day 30: First fertilizer split & pest check
• Day 45: Continue pest management and monitor for disease
• Day 60–75: Harvest readiness check

🔍 Harvesting
• Time: Harvest when the kernels are firm and the husks turn golden, typically 80–110 days after sowing.
• Method: Use a combine harvester or manual harvesting.
• Sorting: Clean and dry the barley grains properly before storage.

📊 Yield Expectations
• Average yield: 3–4 tons per acre
• With good care, yields can reach 5 tons/acre.`,

"loamy soil-cotton":`
Here is the in detail explanation of cotton in loamy soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²)
• Spacing:
Row spacing: 90–120 cm
Plant spacing: 15–30 cm
• Estimated Plants/Acre: 5,000 to 6,000 plants

🧪 2. Soil Preparation
• Soil Type: Loamy soil is ideal for cotton as it retains moisture and is rich in nutrients for healthy plant growth.
• pH requirement: 6.0–7.5
• Soil Treatment:
Add well-rotted farmyard manure (FYM): 20–25 tons per acre.
Ensure the soil is properly tilled for good root development and aeration.

🌱 3. Sowing Seeds
• Time: Best sowing months are April to May (after the last frost).
• Seed Rate: 5–7 kg/acre
• Planting Depth: 2–3 cm deep
• Method: Use a seed drill for even spacing, or direct sowing.
• Germination Time: 7–14 days

🌿 4. Fertilizer Application
• Base Fertilization (Before Sowing) – per acre:
Urea: 80–100 kg (Nitrogen)
Single Super Phosphate (SSP): 100 kg (Phosphorus)
Muriate of Potash (MOP): 60–70 kg (Potassium)
• Fertilizer Split:

Apply 25% of nitrogen before sowing, and the remaining nitrogen in 2 splits after 30 and 60 days.

🐛 5. Pest & Disease Management
• Common Issues:

Use Imidacloprid for bollworms, Carbendazim for fungal diseases like leaf spot, and Pyrethrins for aphids.

💧 6. Watering Schedule
• Keep the soil moist, especially during flowering and boll development. Water every 5–7 days.

📆 Monitoring Timeline (in days)
• Day 0: Soil prep & sowing
• Day 7–14: Germination check
• Day 30: First fertilizer split & pest check
• Day 60: Monitor flowering and boll development
• Day 90–100: Harvest readiness check

🔍 Harvesting
• Time: Harvest when cotton bolls open and fibers are dry, typically 120–150 days after planting.
• Method: Use mechanical or hand harvesting methods.
• Sorting: Clean the cotton fibers and remove debris before storing.

📊 Yield Expectations
• Average yield: 1–2 tons per acre
• With good practices, yields can reach 2.5 tons/acre.`,

"loamy soil-vegetables":`
Here is the in detail explanation of vegetables in loamy soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²)
• Spacing: Varies by crop type.
Example for tomatoes: 60–75 cm between rows, 30–45 cm between plants.
Example for cabbage: 60–75 cm between rows, 45–60 cm between plants.
Example for carrots: 20–30 cm between rows, 5–10 cm between plants.

🧪 2. Soil Preparation
• Soil Type: Loamy soil is excellent for most vegetables due to its rich nutrient content and good water retention.
• pH requirement: 6.0–7.0 (general for most vegetables)
• Soil Treatment:
Add organic compost: 15–20 tons per acre.
Use a tiller to break up clods and prepare the soil for planting.

🌱 3. Sowing Seeds
• Time: Varies by vegetable type:
Cool season vegetables (e.g., cabbage, lettuce): Best sowing months are February to March.
Warm season vegetables (e.g., tomatoes, peppers): Best sowing months are April to May.

🌿 4. Fertilizer Application
• Base Fertilization (Before Sowing) – per acre:
Urea: 40–50 kg (Nitrogen)
Single Super Phosphate (SSP): 80–100 kg (Phosphorus)
Muriate of Potash (MOP): 30–40 kg (Potassium)

🐛 5. Pest & Disease Management
• Use organic methods like Neem oil for pest control and Copper oxychloride for fungal issues.

💧 6. Watering Schedule
• Water vegetables consistently to maintain soil moisture. Typically, water every 3–4 days, depending on rainfall and vegetable type.

📆 Monitoring Timeline (in days)
• Day 0: Soil prep & sowing
• Day 15–30: Germination check & first weeding
• Day 30: First fertilizer split & pest check
• Day 60: Continue pest management and growth monitoring
• Day 90: Harvest readiness check

🔍 Harvesting
• Time: Varies by vegetable:
Tomatoes: 75–90 days
Cabbage: 90–120 days
Carrots: 60–80 days

📊 Yield Expectations
• Average yield: Varies by vegetable, but typically 10–25 tons per acre depending on the variety and care.`,

"loamy soil-fruits":`
Here is the in detail explanation of fruits in loamy soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²)
• Spacing: Depends on fruit type.
Apple trees: 3–4 meters apart.
Citrus trees: 4–5 meters apart.
Berry bushes: 30–45 cm between rows, 15–20 cm between plants.

🧪 2. Soil Preparation
• Soil Type: Loamy soil is excellent for fruit trees and bushes due to its good drainage and rich fertility.
• pH requirement: 6.0–7.0
• Soil Treatment:
Add compost or well-rotted manure: 15–20 tons per acre.
Use a tiller to prepare the soil for planting fruit trees.

🌱 3. Sowing Seeds
• Time: Best planting months are March to April for most fruit trees.
• Method: Transplant seedlings or young trees into prepared holes.

🌿 4. Fertilizer Application
• Base Fertilization (Before Planting) – per acre:
Urea: 80–100 kg (Nitrogen)
Single Super Phosphate (SSP): 100–120 kg (Phosphorus)
Muriate of Potash (MOP): 60–80 kg (Potassium)

🐛 5. Pest & Disease Management
• Common Issues: Use Pyrethrin for insects and Copper-based fungicides for fungal diseases.

💧 6. Watering Schedule
• Ensure regular watering, especially during dry periods. Water every 7–10 days for young fruit trees.

📆 Monitoring Timeline (in days)
• Day 0: Soil prep & planting
• Day 30–60: Check for pests and nutrient levels
• Day 90–180: Monitor fruit growth and size
• Day 365+: Harvest readiness check for mature trees

🔍 Harvesting
• Time: Varies by fruit type, typically 1–3 years after planting for full fruit production.
• Method: Harvest fruit when ripe by hand or using proper harvesting tools.

📊 Yield Expectations
• Average yield: 5–10 tons per acre, depending on the fruit type and care provided.`,

"peaty soil-cranberries":`
Here is the in detail explanation of carnberries in peaty soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²) is ideal for moderate yield.
• Spacing:
Row spacing: 1.2–1.5 meters
Plant spacing: 30–45 cm
• Estimated Plants/Acre: 5,000 to 6,000 plants

🧪 2. Soil Preparation
• Soil Type: Peaty soil is perfect for cranberries because of its acidic pH and moisture-retaining properties.
• pH requirement: 4.5–5.5 (very acidic)
• Soil Treatment:
Add well-rotted organic matter: 10–15 tons per acre.
Ensure good drainage by creating raised beds to avoid waterlogging, even though peaty soil retains moisture.
Use a soil tester to monitor pH levels and adjust with elemental sulfur if needed.

🌱 3. Planting Cranberries
• Time: Best planting months are March to April.
• Seed Rate: 1,000–1,500 plants per acre (from cuttings or bare root plants).
• Planting Depth: 5–10 cm deep
• Method: Plant cranberry vines on raised beds or mounded rows to ensure good drainage.
• Germination Time: Cranberries are typically propagated by cuttings, so direct seed sowing is uncommon.

🌿 4. Fertilizer Application
• Base Fertilization (Before Planting) – per acre:
Urea: 50–60 kg (Nitrogen)
Single Super Phosphate (SSP): 50 kg (Phosphorus)
Muriate of Potash (MOP): 40–50 kg (Potassium)
• Fertilizer Split:

Apply 25% of nitrogen before planting, and split the remaining nitrogen into two applications during the growing season.

🐛 5. Pest & Disease Management
• Common Issues:
Use Imidacloprid for aphids and Copper-based fungicides for fungal diseases such as root rot.
Regularly check for Cranberry fruitworm and Cranberry weevil, which can be managed by applying organic pest control options like Pyrethrin.

💧 6. Watering Schedule
• Peaty soil retains moisture, but consistent watering is essential, especially during dry periods:
During growing season: Ensure the soil stays consistently moist (not waterlogged) by watering every 4–5 days.
During winter or dormancy, ensure the plants are protected from freezing by maintaining a layer of mulch.

📆 Monitoring Timeline (in days)
• Day 0: Soil prep & planting
• Day 7–14: Germination or cutting rooting check
• Day 30: First fertilizer split & pest check
• Day 60: Continue pest management and monitor vine growth
• Day 120–150: Harvest readiness check

🔍 Harvesting
• Time: Harvest when the berries are fully ripe and show a deep red color, typically 3–5 years after planting for mature vines.
• Method: Cranberries are typically harvested in late fall. They can be hand-harvested or machine-harvested (wet or dry method).
• Sorting: Sort cranberries by size and remove any damaged berries.

📊 Yield Expectations
• Average yield: 2–3 tons per acre
• With good management, yields can reach 4–5 tons/acre.`,

"peaty soil-blueberries":`
Here is the in detail explanation of blueberries in peaty soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²) is ideal for moderate yield.
• Spacing:
Row spacing: 1.5–2 meters
Plant spacing: 0.9–1.2 meters
• Estimated Plants/Acre: 1,500 to 2,000 plants

🧪 2. Soil Preparation
• Soil Type: Peaty soil is ideal for blueberries due to its high organic matter content and acidic pH.
• pH requirement: 4.5–5.5
• Soil Treatment:
Add well-rotted organic compost or peat moss: 10–15 tons per acre to enhance soil acidity.
Regularly monitor pH levels to ensure the soil remains acidic; adjust with elemental sulfur as needed.
Ensure good drainage by planting on raised beds if the soil tends to retain excess water.

🌱 3. Planting Blueberries
• Time: Best planting months are March to April.
• Seed Rate: 1,500–2,000 plants per acre
• Planting Depth: 5–7 cm deep
• Method: Transplant bare root plants or young seedlings.
• Germination Time: Blueberries are typically propagated by transplanting; seeds are less commonly used.

🌿 4. Fertilizer Application
• Base Fertilization (Before Planting) – per acre:
Urea: 50–60 kg (Nitrogen)
Single Super Phosphate (SSP): 80–100 kg (Phosphorus)
Muriate of Potash (MOP): 40–50 kg (Potassium)
• Fertilizer Split:

Apply 25% of nitrogen before planting, and split the remaining nitrogen in two applications (after the first bloom and after fruit set).

🐛 5. Pest & Disease Management
• Common Issues:
Use Imidacloprid for aphids, Spinosad for thrips, and Copper oxychloride for fungal diseases like botrytis blight.
Monitor for Blueberry maggot and Caterpillars, which can be controlled with organic pesticides.

💧 6. Watering Schedule
• Peaty soil retains moisture well, but make sure the soil is consistently moist, particularly during fruit development.
• Water every 4–5 days during the growing season to maintain moisture levels.
• Avoid waterlogging, which can promote root rot.

📆 Monitoring Timeline (in days)
• Day 0: Soil prep & planting
• Day 7–14: Transplant check and root establishment monitoring
• Day 30: First fertilizer split & pest check
• Day 60: Bloom check and adjust watering
• Day 90–120: Harvest readiness check

🔍 Harvesting
• Time: Harvest when berries are fully ripe, typically 2–3 years after planting for full production.
• Method: Blueberries are hand-harvested to avoid damaging the delicate berries.
• Sorting: Sort berries by size and quality, discarding overripe or damaged ones.

📊 Yield Expectations
• Average yield: 2–4 tons per acre
• With good management, yields can reach 5 tons/acre.`,

"peaty soil-root vegetables":`
Here is the in detail explanation of root vegetables in peaty soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²) for moderate yield.
• Spacing:
Row spacing: 30–45 cm
Plant spacing: 5–10 cm (varies by vegetable)
• Estimated Plants/Acre: Varies by vegetable type

🧪 2. Soil Preparation
• Soil Type: Peaty soil is well-suited for root vegetables like carrots, beets, and turnips due to its loose, moisture-retaining properties.
• pH requirement: 5.5–6.5
• Soil Treatment:
Add organic compost or peat moss: 10–15 tons per acre.
Ensure the soil is loose and well-drained to allow for proper root growth.

🌱 3. Sowing Seeds
• Time: Best sowing months are March to April (cool season).
• Seed Rate: 1–2 kg/acre (depending on vegetable type and spacing)
• Planting Depth: 1–2 cm deep
• Method: Direct sowing for root vegetables (such as carrots and beets).
• Germination Time: 7–14 days depending on the vegetable.

🌿 4. Fertilizer Application
• Base Fertilization (Before Sowing) – per acre:
Urea: 40–50 kg (Nitrogen)
Single Super Phosphate (SSP): 80 kg (Phosphorus)
Muriate of Potash (MOP): 40 kg (Potassium)
• Fertilizer Split:
Apply 50% of nitrogen before planting, and split the remaining nitrogen into two applications during the growing season.

🐛 5. Pest & Disease Management
• Common Issues:
Use Carbaryl for root maggots, Pyrethrin for aphids, and Copper-based fungicides for fungal diseases like damping-off.
Weeding: Root vegetables require frequent weeding to prevent competition for nutrients.

💧 6. Watering Schedule
• Keep soil consistently moist but avoid overwatering, which could lead to root rot. Water every 3–5 days during the growing season.

📆 Monitoring Timeline (in days)
• Day 0: Soil prep & sowing
• Day 7–14: Germination check
• Day 30: First weeding & pest check
• Day 60: First fertilizer split & pest check
• Day 80–100: Harvest readiness check

🔍 Harvesting
• Time: Harvest when roots are mature, typically 60–90 days after sowing for most root vegetables.
• Method: Gently loosen the soil with a fork or plow to avoid damaging the roots.
• Sorting: Clean and sort by size and quality before storage.

📊 Yield Expectations
• Average yield: 10–15 tons per acre (varies by vegetable type)
• With proper care, yields can reach 20 tons/acre for root vegetables like carrots, beets, and turnips.`,

"saline soil-barley":`
Here is the in detail explanation of barley in saline soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²) is ideal for moderate yield.
• Spacing:
Row spacing: 20–30 cm
Plant spacing: 5–10 cm
• Estimated Plants/Acre: 100,000 to 150,000 plants

🧪 2. Soil Preparation
• Soil Type: Saline soil is challenging but can support barley as it is more salt-tolerant than most crops. Pre-irrigation can help reduce soil salinity before planting.
• pH requirement: 6.0–7.5
• Soil Treatment:
Apply gypsum or sulfur to reduce soil salinity and improve soil structure.
Ensure proper drainage to prevent waterlogging and salt accumulation in the root zone.
Incorporate organic matter to improve the soil structure and increase its capacity to retain moisture.

🌱 3. Sowing Seeds
• Time: Best sowing months are October to November (cooler seasons).
• Seed Rate: 50–80 kg/acre
• Planting Depth: 3–5 cm deep
• Method: Use a seed drill or broadcast method for even distribution.
• Germination Time: 7–10 days
• Note: Use salt-tolerant barley varieties if the salinity levels are high.

🌿 4. Fertilizer Application
• Base Fertilization (Before Sowing) – per acre:
Urea: 40–60 kg (Nitrogen)
Single Super Phosphate (SSP): 80 kg (Phosphorus)
Muriate of Potash (MOP): 40–50 kg (Potassium)
• Fertilizer Split:
Apply 25% of nitrogen before sowing, and split the remaining nitrogen in two applications: one after 30 days and another at 60 days.

🐛 5. Pest & Disease Management
• Common Issues:

Use Imidacloprid for aphids and Carbendazim for fungal diseases like powdery mildew.
• Note: Regularly monitor for salt stress symptoms, such as leaf tip burn, which can weaken the plant’s resistance to pests.

💧 6. Watering Schedule
• Saline soil requires proper irrigation management. Excessive irrigation can worsen salinity, so frequent but controlled watering is essential:
Water every 5–7 days, ensuring good drainage to leach out salts from the root zone.

📆 Monitoring Timeline (in days)
• Day 0: Soil prep & sowing
• Day 7–10: Germination check
• Day 30: First fertilizer split & pest check
• Day 45: Continue pest management and monitor plant growth
• Day 90–100: Harvest readiness check

🔍 Harvesting
• Time: Harvest when the barley grains are fully formed, typically 100–120 days after sowing.
• Method: Use a combine harvester or manual harvesting.
• Sorting: Clean and sort barley grains based on size and quality.

📊 Yield Expectations
• Average yield: 3–4 tons per acre
• With proper management, yields can reach 5 tons/acre.`,

"saline soil-sugar beets":`
Here is the in detail explanation of sugar beets in saline soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²)
• Spacing:
Row spacing: 45–50 cm
Plant spacing: 15–20 cm
• Estimated Plants/Acre: 25,000 to 30,000 plants

🧪 2. Soil Preparation
• Soil Type: Sugar beets are moderately tolerant of saline soils. Salinity should be managed to prevent it from affecting root development.
• pH requirement: 6.0–7.5
• Soil Treatment:
Apply gypsum to reduce soil salinity and improve the soil’s physical properties.
Properly irrigate to help leach salts away from the root zone.
Add organic matter to improve soil texture and nutrient content.

🌱 3. Sowing Seeds
• Time: Best sowing months are March to April.
• Seed Rate: 5–7 kg/acre
• Planting Depth: 1–2 cm deep
• Method: Use a seed drill or broadcast method for even seed distribution.
• Germination Time: 7–10 days
• Note: Choose salt-tolerant sugar beet varieties to ensure successful growth in saline conditions.

🌿 4. Fertilizer Application
• Base Fertilization (Before Sowing) – per acre:
Urea: 80–100 kg (Nitrogen)
Single Super Phosphate (SSP): 120 kg (Phosphorus)
Muriate of Potash (MOP): 60–80 kg (Potassium)
• Fertilizer Split:

Apply 25% of nitrogen before sowing, and split the remaining nitrogen in two applications during the growing season.

🐛 5. Pest & Disease Management
• Common Issues:
Use Carbaryl for pests like aphids and Mancozeb for fungal diseases like Cercospora leaf spot.
• Note: Salt stress can make plants more susceptible to diseases, so regular monitoring is important.

💧 6. Watering Schedule
• Ensure proper irrigation to manage the saline levels in the soil. Water every 5–7 days, making sure to avoid waterlogging. Drip irrigation can be helpful to provide consistent moisture while managing salinity.

📆 Monitoring Timeline (in days)
• Day 0: Soil prep & sowing
• Day 7–10: Germination check
• Day 30: First fertilizer split & pest check
• Day 60: Continue pest management and monitor root development
• Day 90–120: Harvest readiness check

🔍 Harvesting
• Time: Harvest when the roots are mature, typically 150–180 days after sowing.
• Method: Use a tractor and root harvester to pull the sugar beets from the soil.
• Sorting: Clean and sort beets by size and quality before processing.

📊 Yield Expectations
• Average yield: 15–20 tons per acre
• With good practices, yields can reach 25 tons/acre.`,

"saline soil-cotton":`
Here is the in detail explanation of cotton in saline soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²)
• Spacing:
Row spacing: 90–120 cm
Plant spacing: 15–30 cm
• Estimated Plants/Acre: 5,000 to 6,000 plants

🧪 2. Soil Preparation
• Soil Type: Cotton is moderately tolerant to saline soils, but salinity must be carefully managed to avoid stress.
• pH requirement: 6.0–7.5
• Soil Treatment:
Use gypsum or sulfur to reduce salinity and improve soil structure.
Incorporate organic matter to improve soil fertility and moisture retention.
Ensure proper drainage to avoid salt build-up around the roots.

🌱 3. Sowing Seeds
• Time: Best sowing months are April to May.
• Seed Rate: 5–7 kg/acre
• Planting Depth: 2–3 cm deep
• Method: Direct sowing or using a seed drill.
• Germination Time: 7–14 days
• Note: Choose salt-tolerant cotton varieties for better resistance to salinity.

🌿 4. Fertilizer Application
• Base Fertilization (Before Sowing) – per acre:
Urea: 80–100 kg (Nitrogen)
Single Super Phosphate (SSP): 100 kg (Phosphorus)
Muriate of Potash (MOP): 60–80 kg (Potassium)
• Fertilizer Split:

Apply 25% of nitrogen before sowing, then split the remaining nitrogen in two applications during the growing season (at flowering and boll development).

🐛 5. Pest & Disease Management
• Common Issues:
Use Imidacloprid for bollworms, Carbendazim for fungal diseases like leaf spot, and Pyrethrins for aphids.

💧 6. Watering Schedule
• Maintain consistent soil moisture but avoid over-watering, which can exacerbate salinity issues. Water every 5–7 days, ensuring the soil drains well.

📆 Monitoring Timeline (in days)
• Day 0: Soil prep & sowing
• Day 7–14: Germination check
• Day 30: First fertilizer split & pest check
• Day 60: Flowering and boll development check
• Day 90–120: Harvest readiness check

🔍 Harvesting
• Time: Harvest when cotton bolls open and fibers are dry, typically 150–180 days after sowing.
• Method: Mechanical or manual harvesting.
• Sorting: Clean and sort cotton fibers by quality before storage.

📊 Yield Expectations
• Average yield: 1–2 tons per acre
• With good care, yields can reach 2.5 tons/acre.`,

"saline soil-spinach":`
Here is the in detail explanation of spinach in saline soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²)
• Spacing:
Row spacing: 30–45 cm
Plant spacing: 5–10 cm
• Estimated Plants/Acre: 200,000 to 300,000 plants

🧪 2. Soil Preparation
• Soil Type: Spinach can tolerate mild salinity but is sensitive to excessive salt. Proper irrigation and soil management are key.
• pH requirement: 6.0–7.0
• Soil Treatment:
Add organic matter or compost to improve fertility and reduce salinity.
Use leaching to flush out excess salts from the soil.
Test soil regularly for salinity levels and adjust watering practices accordingly.

🌱 3. Sowing Seeds
• Time: Best sowing months are March to April.
• Seed Rate: 5–10 kg/acre
• Planting Depth: 1–2 cm deep
• Method: Direct sowing or transplanting seedlings.
• Germination Time: 7–10 days
• Note: Choose salt-tolerant spinach varieties for better growth in saline conditions.

🌿 4. Fertilizer Application
• Base Fertilization (Before Sowing) – per acre:
Urea: 40–50 kg (Nitrogen)
Single Super Phosphate (SSP): 80 kg (Phosphorus)
Muriate of Potash (MOP): 30–40 kg (Potassium)
• Fertilizer Split:
Apply 50% of nitrogen before sowing, and the remaining nitrogen during the growing season.

🐛 5. Pest & Disease Management
• Common Issues:
Use Neem oil for aphids and Copper-based fungicides for fungal issues like downy mildew.

💧 6. Watering Schedule
• Saline soil requires proper watering management to avoid salt stress:
Water every 3–5 days, ensuring good drainage to flush out excess salts.

📆 Monitoring Timeline (in days)
• Day 0: Soil prep & sowing
• Day 7–10: Germination check
• Day 30: First weeding & pest check
• Day 45: Continue pest management and monitor growth
• Day 60–75: Harvest readiness check

🔍 Harvesting
• Time: Harvest when leaves are tender, typically 30–45 days after sowing.
• Method: Harvest spinach by cutting the leaves at the base.
• Sorting: Clean and sort by size and quality.

📊 Yield Expectations
• Average yield: 8–10 tons per acre
• With good care, yields can reach 12 tons/acre.`,

"chalky soil-cabbage":`
Here is the in detail explanation of cabbage in chalky soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²) for moderate yield.
• Spacing:
Row spacing: 60–75 cm
Plant spacing: 45–60 cm
• Estimated Plants/Acre: 6,000 to 8,000 plants

🧪 2. Soil Preparation
• Soil Type: Chalky soil is alkaline and well-drained, which can be ideal for cabbage but requires some amendments to reduce its pH if necessary.
• pH requirement: 6.0–7.5 (slightly acidic to neutral)
• Soil Treatment:
If pH is too high (alkaline), add organic matter such as well-rotted manure to reduce pH.
Incorporate compost to increase soil fertility and improve texture.
Till the soil to ensure proper aeration and root penetration.

🌱 3. Sowing Seeds
• Time: Best sowing months are February to March or August to September (depending on climate).
• Seed Rate: 0.5–1 kg/acre
• Planting Depth: 1–2 cm deep
• Method: Transplant seedlings after 4–6 weeks of growth.
• Germination Time: 7–14 days

🌿 4. Fertilizer Application
• Base Fertilization (Before Sowing) – per acre:
Urea: 60–80 kg (Nitrogen)
Single Super Phosphate (SSP): 100 kg (Phosphorus)
Muriate of Potash (MOP): 50–60 kg (Potassium)
• Fertilizer Split:
Apply 25% of nitrogen before planting, then split the remaining nitrogen into two applications: one at the tillering stage and another during the head formation stage.

🐛 5. Pest & Disease Management
• Common Issues:
Use Pyrethrin for aphids and caterpillars.
Copper-based fungicides can help manage fungal diseases such as downy mildew and black rot.

💧 6. Watering Schedule
• Chalky soil has good drainage, but it can dry out quickly, so regular watering is necessary:
Water every 4–5 days to maintain consistent moisture, especially during dry spells.
Avoid over-watering, as this can lead to root rot.

📆 Monitoring Timeline (in days)
• Day 0: Soil prep & sowing/transplanting
• Day 7–14: Germination check
• Day 15–30: First weeding & pest check
• Day 30: First fertilizer split & pest check
• Day 45: Monitor head formation
• Day 60–75: Harvest readiness check

🔍 Harvesting
• Time: Harvest when the cabbage heads are firm and fully formed, typically 90–120 days after planting.
• Method: Use a sharp knife to cut the cabbage at the base.
• Sorting: Sort by size and quality, discarding damaged leaves.

📊 Yield Expectations
• Average yield: 12–15 tons per acre
• With good care, yields can reach 18 tons/acre.`,

"chalky soil-beans":`
Here is the in detail explanation of beans in chalky soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²) for moderate yield.
• Spacing:
Row spacing: 45–60 cm
Plant spacing: 5–10 cm
• Estimated Plants/Acre: 30,000 to 40,000 plants

🧪 2. Soil Preparation
• Soil Type: Chalky soil is generally well-drained but can be slightly alkaline, so it’s important to monitor the pH and add amendments as needed.
• pH requirement: 6.0–7.5 (neutral to slightly acidic)
• Soil Treatment:
Incorporate organic compost or well-rotted manure to improve soil fertility and structure.
If soil is very alkaline, add sulfur or peat moss to lower the pH slightly.
Till the soil to ensure proper aeration for root growth.

🌱 3. Sowing Seeds
• Time: Best sowing months are April to May (after the last frost).
• Seed Rate: 10–12 kg/acre
• Planting Depth: 2–3 cm deep
• Method: Direct sowing using a seed drill or broadcasting.
• Germination Time: 7–10 days

🌿 4. Fertilizer Application
• Base Fertilization (Before Sowing) – per acre:
Urea: 40–60 kg (Nitrogen)
Single Super Phosphate (SSP): 80–100 kg (Phosphorus)
Muriate of Potash (MOP): 30–40 kg (Potassium)
• Fertilizer Split:
Apply 25% nitrogen before sowing, then split the remaining nitrogen into two applications during the growing season.

🐛 5. Pest & Disease Management
• Common Issues:
Use Carbaryl for aphids, Thiamethoxam for root maggots, and Copper oxychloride for fungal diseases like rust.

💧 6. Watering Schedule
• Beans require consistent moisture, especially during flowering and pod formation:
Water every 5–7 days to maintain consistent moisture but avoid over-watering, which can lead to waterlogging in chalky soils.

📆 Monitoring Timeline (in days)
• Day 0: Soil prep & sowing
• Day 7–10: Germination check
• Day 15–30: First weeding & pest check
• Day 30: First fertilizer split & pest check
• Day 45: Flower and pod formation check
• Day 60–75: Harvest readiness check

🔍 Harvesting
• Time: Harvest when the pods are fully formed and the beans are mature, typically 60–90 days after sowing.
• Method: Pull the plants carefully or use a combine harvester.
• Sorting: Sort by size and quality before storage.

📊 Yield Expectations
• Average yield: 1.5–2 tons per acre
• With good care, yields can reach 3 tons/acre.`,

"chalky soil-lavender":`
Here is the in detail explanation of lavender in chalky soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²) is ideal for larger yields.
• Spacing:
Row spacing: 60–90 cm
Plant spacing: 30–45 cm
• Estimated Plants/Acre: 5,000 to 6,000 plants

🧪 2. Soil Preparation
• Soil Type: Lavender thrives in well-drained, alkaline soils, making chalky soil an ideal choice.
• pH requirement: 6.5–7.5 (neutral to slightly alkaline)
• Soil Treatment
Add organic compost or well-rotted manure to improve soil fertility, but ensure the soil remains well-drained.
Till the soil to improve aeration and root penetration.

🌱 3. Planting Lavender
• Time: Best planting months are April to May.
• Seed Rate: 1,000–1,500 plants per acre
• Planting Depth: 5–7 cm deep (for seedlings)
• Method: Transplant young lavender plants, or propagate from cuttings.
• Germination Time: 14–21 days (if growing from seed, although it’s less common).

🌿 4. Fertilizer Application
• Base Fertilization (Before Planting) – per acre:
Urea: 50–60 kg (Nitrogen)
Single Super Phosphate (SSP): 100 kg (Phosphorus)
Muriate of Potash (MOP): 40–50 kg (Potassium)
• Fertilizer Split:
Apply 25% nitrogen before planting, and split the remaining nitrogen into two applications during the growing season.

🐛 5. Pest & Disease Management
• Common Issues: Lavender is generally pest-resistant but may be susceptible to Aphids, Spider mites, and Root rot in wet conditions.
• Use Neem oil for aphids and Pyrethrin for general pest control.

💧 6. Watering Schedule
• Lavender does not require frequent watering but benefits from occasional deep watering:
Water once a week during dry periods, but ensure the soil is well-drained to avoid root rot.

📆 Monitoring Timeline (in days)
• Day 0: Soil prep & planting
• Day 7–14: Establishment check
• Day 30: First weeding & pest check
• Day 60: Continue monitoring growth and adjust watering
• Day 120–150: Harvest readiness check

🔍 Harvesting
• Time: Harvest when flowers are in full bloom, typically 90–120 days after planting.
• Method: Cut the lavender stems when flowers are fully open. Harvest in the morning for the best scent.
• Sorting: Bundle the stems and air-dry them for storage.

📊 Yield Expectations
• Average yield: 500–800 pounds per acre
• With proper care, yields can reach 1,000 pounds/acre.`,

"chalky soil-grapes":`
Here is the in detail explanation of grapes in chalky soil
📍 1. Land Requirement
• Minimum Land: 1 acre (~4047 m²) for optimal vine development.
• Spacing:
Row spacing: 2.5–3 meters
Plant spacing: 1.5–2 meters
• Estimated Plants/Acre: 600 to 700 vines

🧪 2. Soil Preparation
• Soil Type: Chalky soil is well-suited for grapevines as it provides excellent drainage and maintains a slightly alkaline pH that grapes prefer.
• pH requirement: 6.5–7.5 (slightly alkaline)
• Soil Treatment:
Improve fertility by incorporating organic matter, but ensure that soil drainage is excellent to prevent waterlogging.
Till the soil and incorporate well-rotted manure or compost to ensure adequate nutrients for the vines.

🌱 3. Planting Grapes
• Time: Best planting months are March to April.
• Seed Rate: 600 to 700 vines per acre (depending on vine type and spacing).
• Planting Depth: Plant the roots of the vine 6–8 cm deep.
• Method: Plant bare-root vines or young plants.
• Germination Time: Vines take 1–2 years to mature fully, but they begin bearing fruit in 2–3 years.

🌿 4. Fertilizer Application
• Base Fertilization (Before Planting) – per acre:
Urea: 100–120 kg (Nitrogen)
Single Super Phosphate (SSP): 120 kg (Phosphorus)
Muriate of Potash (MOP): 60–80 kg (Potassium)
• Fertilizer Split:
Apply 25% nitrogen before planting and split the remaining nitrogen into two applications during the growing season (after the first growth flush and at flowering).

🐛 5. Pest & Disease Management
• Common Issues:
Use Imidacloprid for aphids, Bordeaux mixture for fungal diseases, and Neem oil for general pests.

💧 6. Watering Schedule
• Grapevines are drought-tolerant but benefit from consistent watering:
Water every 7–10 days, especially during fruit development.
Ensure good drainage, as over-watering can cause root rot in chalky soils.

📆 Monitoring Timeline (in days)
• Day 0: Soil prep & planting
• Day 30: First vine training & pest check
• Day 60–90: Monitor growth and pest issues
• Day 120: Continue monitoring vine health and nutrient levels

🔍 Harvesting
• Time: Grapes are typically harvested 2–3 years after planting, depending on the variety.
• Method: Hand-pick or use mechanical harvesters for larger vineyards.
• Sorting: Sort grapes based on size and ripeness before storing.

📊 Yield Expectations
• Average yield: 4–6 tons per acre
• With good care, yields can reach 8–10 tons/acre.`

        };

        const chatBox = document.getElementById("chatBox");
        const message = document.createElement("div");
        message.className = "bot-message";
        message.style.whiteSpace = "pre-line"; 
        chatBox.appendChild(message);

        const text = detailedInfo[key] || `📝 Currently, we don't have detailed info for ${selectedSoil} and ${crop}. Please check back later!`;

        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                message.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 20);
            }
        }

        typeWriter();
    }



    askSoilType();
};

const newMessage = document.createElement("p");
newMessage.className = "description"; 
newMessage.textContent = "Here's a tailored insight based on your selection...";
document.getElementById("chatBox").appendChild(newMessage);

