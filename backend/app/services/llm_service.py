# app/services/llm_service.py
import subprocess

def generate_summary(text: str) -> str:
    command = f"ollama run mistral --text '{text}'"
    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    return result.stdout.strip()
