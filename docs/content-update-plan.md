# Portfolio Content Update Plan (Nov 2026)

Rule: **add or correct only. Remove nothing.** Old projects keep their existing YouTube links, images and order.

## 1. Text corrections

| File | Change |
|---|---|
| `frontend/src/components/Home/Type.js` | Roles: keep "Freelancer"; "AI/ML Engineer" → **"Senior AI Engineer"** |
| `frontend/src/components/Projects/Projects.js` (Golf card) | "achieving 95%+ precision" → **"achieving 83% higher accuracy than traditional OCR with just 30 samples"** |
| `frontend/src/components/Projects/Projects.js` (MCP card) | GitHub link wrongly points to LLM-with-RAG README → fix to the real MCP repo (or leave empty). Video link unchanged. |
| `frontend/src/Assets/cv.json` `basics.website` | `https://mrzaizai2k.github.io` → `https://mrzaizai2k.com` |
| `cv.json` FPT highlight #1 | "for Qualcomm" → **"for a global semiconductor client"** |
| `cv.json` M.S. Computer Science | `endDate`: "Present" → **"11/2026"** (completed 26 Nov 2026) |
| `frontend/public/Assets/CV_MAI_CHI_BAO.pdf` | Regenerate with the same changes |

## 2. New project cards (append; existing cards untouched)

| Title | GitHub | YouTube (Mrzaizai2k - AI) |
|---|---|---|
| Hybrid LLM-GNN for ADAPT-QAOA (quantum circuit optimization) — project | https://github.com/mrzaizai2k/Adapt-LLM | https://youtu.be/4bbEIj1MuAc |
| Voz Thread QA + Chrome Extension | https://github.com/mrzaizai2k/Voz_QA , https://github.com/mrzaizai2k/voz_qa_extension | https://youtu.be/WoYNp-cwFWw |
| MoveDuplicates — duplicate image organizer | https://github.com/mrzaizai2k/deduplicate_images | https://youtu.be/o6pMQoCuBs8 |
| Machine Learning with Arduino — Head Tilt | — | https://youtu.be/0VEDiWr_wdU |
| Content Studio — multi-agent content writer (LangChain Deep Agents, FastAPI SSE, React, Docker sandboxes) | https://github.com/mrzaizai2k/harness_learning | — |

## 3. Activities (`cv.json` → `activities`, add at top, newest first)

```json
{
  "organization": "AI Thực Chiến (AI20K) – Vingroup x VinUni",
  "position": "Mentor",
  "url": "https://tuoitre.vn/vingroup-dao-tao-20-000-nhan-tai-ai-thuc-chien-tro-cap-8-trieu-dong-thang-20260128111610322.htm",
  "startDate": "10/2026",
  "endDate": "Present",
  "highlights": [
    "Mentor for Cohorts 5 and 6 of AI20K, a Vingroup social program training 20,000 AI engineers for Viet Nam",
    "Mentored 8 teams (32 members) building AI products"
  ]
},
{
  "organization": "FPT Software x Yokogawa AI Bootcamp",
  "position": "Mentor & Final Showcase Judge",
  "startDate": "10/2026",
  "endDate": "",
  "highlights": [
    "Mentored participants in the AI bootcamp co-organized by FPT Software and Yokogawa",
    "Judge for the AI Bootcamp Final Showcase"
  ]
}
```

Dev.to activity: add highlight **"Top 7 weekly \"must-read\" post on Dev.to"** and refresh post/follower counts.
YouTube activity: refresh video/subscriber/view counts.

## 4. Skills (no FPT project card — confidential)

**About → Tech stack icons (add only):** LangChain/LangGraph, FastAPI, MongoDB, Kafka, ONNX, NVIDIA Jetson, AWS Bedrock, Hugging Face (real logo).

**`cv.json` → `skills`:**
- LLM & Agents: fine-tuning (LoRA, QLoRA, PEFT), RAG, LLM evaluation (hallucination, toxicity, bias), MCP, multi-agent systems, quantization, AWS Bedrock (Claude)
- Edge AI: on-device LLM inference (NVIDIA Jetson Xavier, LLaMA-8B), ONNX
- Computer Vision: OCR, Vision LLMs (Qwen2-VL), face recognition, anti-spoofing
- MLOps & Cloud: Docker, Kubernetes, CI/CD, Kafka, AWS, Azure (Blob, AI Search)
- Web: ReactJS, FastAPI, MongoDB

## 5. Outside this repo (optional)
- GitHub profile: company "Joblogic" → "FPT Software"; README headline → "Senior AI Engineer".
- LinkedIn says Joblogic title "LLM Engineer", CV says "Senior LLM Engineer" — align.
