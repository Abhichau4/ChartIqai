from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import httpx
import os
import json

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

NVIDIA_API_URL = "https://integrate.api.nvidia.com/v1"

@app.post("/api/nvidia/chat/completions")
async def nvidia_completions(request: Request):
    try:
        body = await request.json()
        # Try to get API key from header, fallback to environment variable
        auth_header = request.headers.get("Authorization")
        if not auth_header or "undefined" in auth_header:
            api_key = os.getenv("VITE_NVIDIA_API_KEY")
            if api_key:
                auth_header = f"Bearer {api_key.strip()}"
        
        headers = {
            "Authorization": auth_header,
            "Content-Type": "application/json",
        }
        
        async with httpx.AsyncClient() as client:
            try:
                response = await client.post(
                    f"{NVIDIA_API_URL}/chat/completions",
                    json=body,
                    headers=headers,
                    timeout=60.0
                )
                
                try:
                    data = response.json()
                except Exception:
                    data = {"detail": response.text}
                    
                return JSONResponse(status_code=response.status_code, content=data)
            except httpx.TimeoutException:
                return JSONResponse(status_code=504, content={"detail": "NVIDIA API request timed out"})
            except Exception as e:
                return JSONResponse(status_code=500, content={"detail": str(e)})
            
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# For Vercel serverless compatibility
@app.get("/api/health")
async def health():
    return {"status": "ok"}
