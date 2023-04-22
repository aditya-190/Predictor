from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf

app = FastAPI()

# Allow CORS for localhost and localhost:3000
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Adding CLASS_NAMES as same as we added while preparing the model.
CLASS_NAMES = ['Early Blight', 'Healthy', 'Late Blight']

# Loading the model.
MODEL = tf.keras.models.load_model("../models")


# Creating a route for prediction.
@app.post("/get_prediction")
async def get_prediction(file: UploadFile = File(...)):
    bytes = await file.read()
    image = np.array(Image.open(BytesIO(bytes)))
    image_batch = np.expand_dims(image, 0)
    prediction = MODEL.predict(image_batch)
    predicted_class = CLASS_NAMES[np.argmax(prediction[0])]
    confidence = np.max(prediction[0])
    return {
        'class_name': predicted_class,
        'confidence': round(float(confidence * 100), 2)
    }


if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8080)
