from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
from joblib import load

app = FastAPI()

# Configure CORS to allow frontend connections
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins (for development)
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Load the trained model
model = load(r"C:\Users\shard\OneDrive\Desktop\TOPS\ML\Supervised\Student_Prediction\Vishakha_linear_study_hours_score.joblib")

@app.get("/")
def test():
    return {"myapi": "Student Score API IS RUNNING"}

@app.post("/predict")
def score(Study_hour: float):
    inputx = np.array([[Study_hour]])
    predict = model.predict(inputx)
    
    return {
        "study_hours": Study_hour,
        "predicted_score": float(predict[0])  # Fixed typo from "predicated_score" to "predicted_score"
    }