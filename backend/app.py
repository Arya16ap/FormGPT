from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET", "POST"])
def receive_document():

    if request.method == "POST":
        files = request.files.getlist("files")

    filenames = [file.filename for file in files]

    print("Received:", filenames)

    return {"files": filenames}

if __name__ == "__main__":
    app.run(debug=True)