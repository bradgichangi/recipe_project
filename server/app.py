from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug import exceptions
import json
from models import Recipe


app = Flask(__name__)
CORS(app)

f = open('server\db\data.json', encoding="utf8")
data = json.load(f)

@app.route('/')
def default():
    return 'Recipes API is running!'

@app.route('/recipe', methods=['GET', 'POST'])
def show_recipes():
    if request.method == 'POST':
        return 'Recipe POST request'
    else:
        return 'Recipe'

@app.route('/ingredient', methods=['GET', 'POST'])
def show_ingredients():
    if request.method == 'POST':
        return 'Ingredient POST request'
    else:
        return 'Ingredient'

@app.route('/recipes')
def all_recipes():
    return data['recipes']

@app.route('/allingredients')
def all_ingredients():
    return data['ingredients']

@app.route('/recipe/<int:id>')
def predict(id):
    return f'Recipe {id}'


if __name__ == '__main__':
    app.run(debug=True)
