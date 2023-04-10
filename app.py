from flask import Flask, render_template, session, send_from_directory, request
from flask_restful import Api, Resource, reqparse
# from flask_cors import CORS #comment this on deployment
from api.HelloApiHandler import HelloApiHandler

import openai
import json
import os
import re

DEBUG = os.environ.get('DEBUG', False)

openai.organization = "org-GhDfDedBY2tVsrfpCOUUxeVI"
openai.api_key = os.getenv("OPENAI_API_KEY")

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



    messages = [
        {"role": "system", "content": "You are an author tasked with writing decodable stories for children at their specific phonics reading levels. The user will input a phonics level and a topic. Write a 5 sentence story given that information."+ "Write a children's story at a phonics level of "+level+" about "+ topic},
    ]

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages
    )

    story = response['choices'][0]['message']['content']

    imageResponse = openai.Image.create(
        prompt="a scene (without any text) for the following story : "+ str(story),
        n=1,
        size="512x512"
        )

    image_url = imageResponse['data'][0]['url']


    return [story, image_url]

api.add_resource(HelloApiHandler, '/flask/hello')