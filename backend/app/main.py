# backend/app/main.py
from fastapi import FastAPI
from fastapi.responses import HTMLResponse, FileResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles
import pathlib

BASE_DIR = pathlib.Path(__file__).resolve().parent.parent  # backend/
STATIC_DIR = BASE_DIR / "static"  # backend/static

app = FastAPI(title="Vinay Portfolio Backend")

# Mount static folder at /static (so files are reachable at /static/...)
if STATIC_DIR.exists():
    app.mount("/static", StaticFiles(directory=str(STATIC_DIR)), name="static")

@app.get("/", response_class=HTMLResponse)
async def root():
    # simple HTML landing page linking to docs
    return """
    <html>
      <head><meta charset="utf-8"><title>Portfolio API</title></head>
      <body style="font-family:system-ui,Segoe UI,Roboto,Arial">
        <h1>Portfolio Backend</h1>
        <p>API is up. See <a href="/docs">/docs</a> (Swagger UI) or <a href="/redoc">/redoc</a>.</p>
      </body>
    </html>
    """

# serve favicon from backend/static/favicon.ico if present
@app.get("/favicon.ico")
async def favicon():
    favicon_path = STATIC_DIR / "favicon.ico"
    if favicon_path.exists():
        return FileResponse(favicon_path)
    # fallback to a small transparent png if you want, or 404
    return FileResponse(favicon_path)  # will return 404 if missing
