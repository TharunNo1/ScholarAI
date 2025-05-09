import subprocess
import requests

OLLAMA_URL = "http://host.docker.internal:11434/api/generate"


def run_llm(context: str, question: str) -> str:
    prompt = f"""You are a helpful assistant. Answer the following question based on the context provided.

Context:
{context}

Question:
{question}

Answer:"""
    request_json = {
        "model": "mistral",  
        "prompt": prompt,
        "stream": False
    }

    response = requests.post(OLLAMA_URL, json=request_json, timeout=600)

    if response.status_code == 200:
        data = response.json()
        return data.get("response", "No answer generated.")
    else:
        return f"Error from LLM: {response.text}"


def generate_summary(text: str) -> str:
    command = f"ollama run mistral --text '{text}'"
    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    return result.stdout.strip()

