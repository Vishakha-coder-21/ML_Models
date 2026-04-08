import pandas as pd
from sklearn.linear_model import LogisticRegression
import pickle


df = pd.DataFrame(r"C:\Users\shard\OneDrive\Desktop\TOPS\ML\Logistic\students_multiclass_100.csv")

X = df[["houstudy_hoursrs"]]
y = df["grade"]

model = LogisticRegression()
model.fit(X,y)


# save model
pickle.dump(model, open("model.pkl","wb"))

print("Model trained")