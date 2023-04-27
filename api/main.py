from io import BytesIO

import numpy as np
import tensorflow as tf
import uvicorn
from PIL import Image
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse

app = FastAPI()

# Allow CORS for all origins.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
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
    image = Image.open(BytesIO(bytes))
    image = image.convert('RGB')
    image = image.resize((256, 256))
    image = np.array(image)
    image_batch = np.expand_dims(image, 0)
    prediction = MODEL.predict(image_batch)
    predicted_class = CLASS_NAMES[np.argmax(prediction[0])]
    confidence = np.max(prediction[0])
    return {
        'class_name': predicted_class,
        'confidence': round(float(confidence * 100), 2)
    }


# Creating route to test if the service is running or not.
@app.get("/", response_class=HTMLResponse)
async def home():
    return """
    <html>
    <head>
        <title>Leaf Prediction Service</title>
        <style>
            h1 {
                text-align: center;
                font-size: 48px;
            }
            div {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
        </style>
    </head>
    <body>
        <div>
            <h1>✨ The leaf prediction service is up and running! ✨</h1>
        </div>
    </body>
    </html>
    """


if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8080)
