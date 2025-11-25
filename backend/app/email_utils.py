import os
import aiohttp
import asyncio

SENDGRID_API_KEY = os.getenv('SENDGRID_API_KEY')
SENDGRID_FROM = os.getenv('SENDGRID_FROM')
ZAPIER_WEBHOOK = os.getenv('ZAPIER_WEBHOOK')  # fallback

async def send_email_sendgrid(subject: str, to_email: str, plain: str):
    if not SENDGRID_API_KEY:
        return False
    url = "https://api.sendgrid.com/v3/mail/send"
    headers = {
        "Authorization": f"Bearer {SENDGRID_API_KEY}",
        "Content-Type": "application/json"
    }
    payload = {
        "personalizations": [{"to": [{"email": to_email}], "subject": subject}],
        "from": {"email": SENDGRID_FROM},
        "content": [{"type": "text/plain", "value": plain}]
    }
    async with aiohttp.ClientSession() as session:
        async with session.post(url, headers=headers, json=payload) as resp:
            return resp.status in (200, 202)

async def send_to_zapier(payload: dict):
    if not ZAPIER_WEBHOOK:
        return False
    async with aiohttp.ClientSession() as session:
        async with session.post(ZAPIER_WEBHOOK, json=payload) as resp:
            return resp.status == 200
