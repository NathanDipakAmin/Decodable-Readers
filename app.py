from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
# from flask_cors import CORS #comment this on deployment
from api.HelloApiHandler import HelloApiHandler

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
# CORS(app) #comment this on deployment
api = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

@app.route('/chat_api', methods=['POST'])
def chat_api():
    # Read from body of post request
    request_json = request.get_json()
    level = request_json['level']
    topic = request_json['topic']

    Grapheme = GenGraphemes(level)

    graphemeList = Grapheme.run()


    messages = [
        {"role": "system", "content": "You are an author tasked with writing decodable stories for children at their specific phonics reading levels. The user will input a phonics level and a topic. Write a 5 sentence story given that information."+ "Write a children's story at a phonics level of "+level+" about "+ topic + " The only nouns, verbs, adjectives and adverbs you can use are from the following list:"+ str(graphemeList)},
    ]

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages
    )

    story = response['choices'][0]['message']['content']

    imageResponse = openai.Image.create(
        prompt="a scene that does not contain text for the following story : "+ str(story[:500]),
        n=1,
        size="512x512"
        )

    image_url = imageResponse['data'][0]['url']


    return [story, image_url]

api.add_resource(HelloApiHandler, '/flask/hello')