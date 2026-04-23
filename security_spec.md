# Security Spec - Rosana Oliveira Nutrição Landing Page

## 1. Data Invariants
- A lead must have a valid name, whatsapp, and email.
- The createdAt timestamp must match the server time.
- Leads are write-only for the public; only authenticated admins (if implemented later) or system should read.
- For now, since user said NO FIREBASE AUTH, we will allow anonymous creation but deny all reads.

## 2. The "Dirty Dozen" Payloads

1. **Spoofed Creation Date**: `{"createdAt": "2000-01-01", ...}` -> Should fail (must be request.time).
2. **Missing Required Fields**: `{"name": "test"}` -> Should fail (missing email, whatsapp).
3. **Invalid Email Format**: `{"email": "not-an-email", ...}` -> Should fail (regex validation).
4. **Invalid WhatsApp size**: `{"whatsapp": "1", ...}` -> Should fail (size validation).
5. **Too large field**: `{"name": "A" * 1000, ...}` -> Should fail (size validation).
6. **Shadow Field injection**: `{"isVerified": true, ...}` -> Should fail (keys().size() check).
7. **Junk ID**: Creating at `/leads/!@#$%^&*` -> Should fail (isValidId).
8. **Unauthorized Read**: Trying to `get` a lead -> Should fail (no read permission).
9. **Unauthorized List**: Trying to `list` leads -> Should fail (no read permission).
10. **Unauthorized Delete**: Trying to `delete` a lead -> Should fail.
11. **Unauthorized Update**: Trying to `update` a lead -> Should fail.
12. **Double entry attempt**: (Not applicable via rules easily without checking existence, but we allow creation).

## 3. The Test Runner (Snippet)
We would verify these in `firestore.rules.test.ts`.
