Node.js Chat API with Ollama (Locally)

This is a simple Node.js server that connects to Ollama running locally on your MacBook. It exposes a POST API endpoint that takes a prompt and returns a response from the locally hosted LLM (like LLaMA 3).

How It Works

- You start Ollama locally (ollama serve)

- The server accepts a prompt via POST request to /ask-ollama

- It sends that prompt to your local Ollama instance

- The AI model generates a reply and sends it back

How to Use

1. Make sure Ollama is running

In your terminal:

ollama serve

Also make sure you've pulled a model like llama3:

ollama run llama3

The first time, it may take a few minutes to download.

2. Start the Node.js server

npm install
node index.js

You should see:

server is running on http://localhost:3000

3. Send a request to the API

Using Thunder Client, Postman, or curl:

POST http://localhost:3000/ask-ollama

Headers: Content-Type: application/json

Body:

{
  "prompt": "What is Node.js?"
}

4. Example response

{
  "reply": "Node.js is a JavaScript runtime built on Chrome's V8 engine..."
}

Notes

Make sure Ollama is listening on http://localhost:11434 (default)

This server only works locally unless you expose the Ollama port remotely

You can change the model used by modifying the "model" value in the code

Tech Stack

Node.js + Express

Axios for API calls

Ollama for local AI