# API Contract

## GET /leaderboard

Response:
[
    {
        "user": string,
        "score": number
    }
]

---

## POST /scores
Creates a new score entry.

Request:
{
    "userId": number,
    "score": number
}

Response (201):
{
    "id": number,
    "userId": number,
    "score": number,
    "createdAt": string
}

Errors:
- 400 if score < 0