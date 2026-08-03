import urllib.request
import json

# 1. Login to get token
login_data = json.dumps({"phone":"+919999999999","otp":"123456"}).encode('utf-8')
req = urllib.request.Request('http://localhost:3001/api/v1/auth/login', data=login_data, headers={'Content-Type': 'application/json'})

try:
    with urllib.request.urlopen(req) as response:
        token = json.loads(response.read())['access_token']
        print("Logged in")
except urllib.error.HTTPError as e:
    print("Login failed:", e.read().decode())
    exit(1)

# 2. Create listing
listing_data = json.dumps({
    "title": "AI Classes for beginners",
    "description": "If you are confused about where to start your AI journey",
    "categoryId": "00000000-0000-0000-0000-000000000000",
    "slug": "ai-classes-123456"
}).encode('utf-8')

req2 = urllib.request.Request('http://localhost:3001/api/v1/listings', data=listing_data, headers={
    'Content-Type': 'application/json',
    'Authorization': f'Bearer {token}'
})

try:
    with urllib.request.urlopen(req2) as response:
        print("Created:", response.read().decode())
except urllib.error.HTTPError as e:
    print("Listing failed:", e.code, e.read().decode())
