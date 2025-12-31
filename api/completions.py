from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse
from openai import OpenAI
import httpx
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Workaround for httpx 0.28+ compatibility issue if needed
http_client = httpx.Client()

client = OpenAI(
    base_url="https://integrate.api.nvidia.com/v1",
    api_key=os.getenv("NVIDIA_API_KEY", "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"),
    http_client=http_client
)

@app.post("/api/completions")
async def chat_completions(request: Request):
    data = await request.json()
    
    def generate():
        completion = client.chat.completions.create(
            model=data.get("model", "deepseek-ai/deepseek-v3.2"),
            messages=data.get("messages"),
            temperature=data.get("temperature", 1),
            top_p=data.get("top_p", 0.95),
            max_tokens=data.get("max_tokens", 16384),
            stream=True,
            extra_body=data.get("extra_body", {"chat_template_kwargs": {"thinking":True}})
        )
        for chunk in completion:
            yield chunk.model_dump_json() + "\n"

    return StreamingResponse(generate(), media_type="application/x-ndjson")

@app.get("/api/health")
async def health_check():
    return {"status": "ok"}
