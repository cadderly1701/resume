import{t as e}from"./index-DdBajiya.js";var t=e();function n(e){let n={a:`a`,code:`code`,em:`em`,hr:`hr`,p:`p`,pre:`pre`,strong:`strong`,...e.components},{Expand:r,Hero:a,LineDrawing:o,Pull:s,Section:c,TwoLevels:l}=n;return r||i(`Expand`,!0),a||i(`Hero`,!0),o||i(`LineDrawing`,!0),s||i(`Pull`,!0),c||i(`Section`,!0),l||i(`TwoLevels`,!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{eyebrow:`Personal tooling · published in full`,title:`How do you keep a whole practice on current documentation?`,subtitle:`A bulk export of a published implementation library, so a whole practice holds the official collateral in full, ready to verify personalized versions against the current release.`,side:`left`,children:(0,t.jsx)(o,{name:`mynow-harvest`,alt:`A figure holding a box, with a wide fan of loose pages pouring into it.`})}),`
`,(0,t.jsxs)(n.p,{children:[`A standalone tool, published in full below. Part of `,(0,t.jsx)(n.a,{href:`/`,children:`selected work`}),`.`]}),`
`,(0,t.jsx)(l,{shortMinutes:3,detailMinutes:9}),`
`,(0,t.jsxs)(c,{id:`problem`,title:`The problem`,children:[(0,t.jsx)(n.p,{children:`ServiceNow publishes a large library of implementation assets and wants partners and customers using them. They aid adoption, push implementations toward best practice, and ultimately sell more platform. Nothing about pulling them runs against the grain of why they were published.`}),(0,t.jsx)(n.p,{children:`The friction is that "current" moves every release. In a partner practice that means billable consultants re-pulling the same documents by hand, individually, several times a year. The wasted hours are the visible cost.`}),(0,t.jsx)(s,{children:`The quieter and more expensive one is the consultant who skips the refresh and delivers against a scoping guide two releases stale, which surfaces later as rework, or as a design decision nobody can defend.`})]}),`
`,(0,t.jsxs)(c,{id:`built`,title:`What I built`,children:[(0,t.jsx)(n.p,{children:`A resumable export tool that pulls the whole library once, for a whole practice, on a schedule. Three stages, each independently re-runnable: fetch the catalogue, fetch per-record detail, download the files. It skips what it already has, so a re-run costs almost nothing, and an interrupted run is resumed by repeating the command.`}),(0,t.jsx)(n.p,{children:`The thing that makes it cheap is a single observation. The browse interface is a Next Experience application, so it isn't rendered on the server, it's fed by a REST endpoint. Once that's clear, what looks like a thousand-page crawl collapses into one request that returns the entire catalogue, over a thousand records across two dozen asset types, plus the filter taxonomy behind it. No pagination loop, no slug guessing, no HTML parsing.`}),(0,t.jsxs)(r,{title:`The four ways this fails silently`,summary:`The interesting engineering isn't the download loop, it's the failures that finish cleanly while delivering nothing useful`,minutes:3,children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`The preview trap.`}),` Each asset page renders a generated PDF preview, and that preview is what the page's own network traffic fetches. The real deliverable is the document behind the asset's file list, served by the download link underneath. A human clicking through gets the right file. An implementation built by mirroring what the browser loads quietly collects previews instead, and reports success. Build on the asset record, not on the page's traffic.`]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`An auth value that's a string containing an object.`}),` The token endpoint returns its payload as a JSON string rather than an object, so the bearer is one parse deeper than it appears. Passing the outer value through yields a bare 401 with no explanation.`]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`Inconsistently nested envelopes.`}),` Asset detail and success packs nest at different depths. Fixed-depth indexing against the wrong one returns an empty dictionary rather than an error, so a run completes with every record present and zero files found. The fix is a walker that searches for the key instead of assuming where it lives.`]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`An identifier that exists only inside another field.`}),` One record type carries no attachment id of its own. The id survives only inside a query parameter of a link field, and has to be parsed back out.`]}),(0,t.jsx)(n.p,{children:`So the tool counts. Each stage compares what came back against the total the service itself declares, and warns loudly on a shortfall. A truncated harvest that reports success is worse than one that fails outright, because nobody investigates a success.`})]})]}),`
`,(0,t.jsxs)(c,{id:`why`,title:`Why it was the right call`,children:[(0,t.jsx)(n.p,{children:`The economics are the obvious argument: one scheduled run replaces an unbounded number of manual pulls, and it removes the failure where somebody quietly works from a stale document. But that's the weaker half of the case. Pulling a few documents ahead of a project isn't hard, and any consultant can do it.`}),(0,t.jsx)(n.p,{children:`The harder thing to get is the whole library, current, on disk, in a form another program can read. That's what changes the work. A practice's own collateral ages against an official library that keeps moving, and with the corpus sitting locally, a comparison pass can surface where a version has fallen materially out of step: a plain diff settles everything identical for almost nothing, and only what differs is worth the cost of a model reading both sides. None of that comparison layer is built yet; the harvest is the precondition, and it's the part that had to exist first.`}),(0,t.jsx)(n.p,{children:`The tool is small because the insight did the work, not because the problem was small.`}),(0,t.jsx)(n.p,{children:`It's also deliberately well-behaved: concurrency far below the service's published rate ceiling, exponential backoff on throttling and server errors, and a skip rule so it isn't re-fetching what it already holds. It runs against my own authenticated account and retrieves only what that account can already download through the interface. It changes where those assets sit, not who may use them, and they remain ServiceNow's material.`}),(0,t.jsxs)(r,{title:`The reasoning in full`,summary:`The counting step, and why authentication made this a module rather than a curl loop`,minutes:2,children:[(0,t.jsx)(n.p,{children:`That counting step is the part I'd defend hardest, and it's the same principle as the unmatched-data sentinel and the integration round-trip validation in the vendor management work: the job isn't to avoid failure, it's to make failure impossible to miss. Every one of the four traps above is silent by nature. Left alone, they don't produce errors, they produce confident, wrong output. That's the expensive kind.`}),(0,t.jsx)(n.p,{children:`The authentication design is the other reason this is a module rather than a curl loop. Two mechanisms are in play at once, on two different hosts, one of them with a bearer that expires every half hour and has to be refreshed mid-run from the same session. Nothing sensitive is hardcoded; credentials live in an ignored file beside the script.`}),(0,t.jsx)(n.p,{children:`Licensed Apache-2.0, with the scope and authorized use stated at the top of the file rather than left implied.`})]})]}),`
`,(0,t.jsxs)(c,{id:`wrong`,title:`When this would be the wrong call`,children:[(0,t.jsx)(n.p,{children:`If the library is small, or you need it once, open the pages and click. The tool pays for itself across a practice and a release cadence, not across one person and one afternoon.`}),(0,t.jsx)(n.p,{children:`It's also built against an interface that its owner is free to change. The single catalogue request that makes this cheap is an implementation detail of a browse UI, not a published contract, and a redesign could turn it back into a crawl. The counting step is what makes that survivable, since a shape change surfaces as a loud shortfall rather than as a quietly shrinking export, but anyone running this should expect to revisit it.`}),(0,t.jsx)(n.p,{children:`And it should stay pointed at content the running account is genuinely entitled to. The line this tool stays on the right side of is that it changes where assets sit, not who may use them. A version that shared what it pulled would be a different tool with a different answer.`})]}),`
`,(0,t.jsx)(c,{id:`script`,title:`The script in full`,children:(0,t.jsx)(r,{title:`mynow_harvest.py`,summary:`Published as-is, including the header that states scope and authorized use`,minutes:4,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-python`,children:`#!/usr/bin/env python3\r
# Copyright 2026 CJ Jeffrey\r
#\r
# Licensed under the Apache License, Version 2.0 (the "License");\r
# you may not use this file except in compliance with the License.\r
# You may obtain a copy of the License at\r
#\r
#     http://www.apache.org/licenses/LICENSE-2.0\r
#\r
# Unless required by applicable law or agreed to in writing, software\r
# distributed under the License is distributed on an "AS IS" BASIS,\r
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r
# See the License for the specific language governing permissions and\r
# limitations under the License.\r
"""Bulk-export the ServiceNow MyNow Best Practices library for offline use.\r
\r
SCOPE AND AUTHORIZED USE\r
------------------------\r
This is a personal data-export tool. It runs against *your own* authenticated\r
ServiceNow account and retrieves only implementation assets that account is already\r
entitled to open and download through the web UI — scoping guides, workshop decks,\r
starter stories, and so on. It reads a session you established yourself by logging in\r
normally; it does not defeat authentication, escalate privileges, or reach anything the\r
UI would not hand you on a click. The assets it retrieves remain ServiceNow's\r
proprietary material and are not redistributable; this tool changes where they sit, not\r
who may use them.\r
\r
It is deliberately polite to the service: 8 concurrent workers against an advertised\r
2,500 requests/minute ceiling, exponential backoff on 429/5xx, and a skip-existing rule\r
so re-runs cost near-nothing.\r
\r
WHY IT EXISTS\r
-------------\r
ServiceNow publishes this library and wants partners and customers using it. The assets\r
aid adoption, push implementations toward best practice, and ultimately sell more\r
platform. Nothing about pulling them runs against the grain of why they were published.\r
\r
The friction is that "current" moves every release. In a partner practice that means\r
billable consultants re-pulling the same documents by hand, individually, several times a\r
year. The wasted hours are the visible cost. The quieter and more expensive one is a\r
consultant who skips the refresh and delivers against a scoping guide two releases stale,\r
which surfaces later as rework, or as a design decision nobody can defend. Pulling the\r
whole library once, for the whole practice, on a schedule, removes both problems at a cost\r
that rounds to zero.\r
\r
The technical reason it is cheap to do is the interesting part.\r
\r
The Best Practices centre is a Next Experience application over the Now Platform, so its\r
browse UI is fed by a REST endpoint rather than rendered server-side. That single fact\r
collapses what looks like a thousand-page crawl into one request: \`\`allresources\`\` with a\r
large \`\`limit\`\` returns the entire catalogue — 1,074 records across 24 asset types at time\r
of writing — along with the full filter taxonomy (products, delivery stages, roles,\r
releases). No crawling, no slug guessing, no pagination loop.\r
\r
One trap is worth naming because it cost time here. An asset page *renders* a generated\r
PDF preview, and that preview is what the page's own network traffic fetches; the real\r
deliverable is the .docx/.pptx behind \`\`assetFiles[]\`\` (served in the UI by the download\r
link beneath the preview). So a human clicking through gets the right file, but an\r
implementation built by mirroring what the page loads quietly collects previews instead.\r
Build on \`\`assetFiles[]\`\`, not on the page's traffic.\r
\r
THREE FAILURES THAT ARE SILENT RATHER THAN LOUD\r
-----------------------------------------------\r
Most of this module's value is in knowing these, because none of them raise:\r
\r
1. \`\`getAuthToken\`\` returns \`\`auth_token\`\` as a JSON *string*, not an object. The bearer\r
   is one \`\`json.loads\`\` deeper, at \`\`.access_token\`\`. Passing the outer value through\r
   yields a bare 401 with no hint as to why.\r
2. Response envelopes nest inconsistently — asset detail is \`\`result.result.asset\`\` but\r
   success packs are \`\`result.successPack\`\`. Fixed-depth indexing against the wrong one\r
   returns an empty dict, not an error, so a run completes "successfully" with every\r
   record present and zero files found. Hence \`\`unwrap()\`\`, which walks instead of assuming.\r
3. \`\`latestReleaseVersion\`\` carries no \`\`attachment_sys_id\`\`. The id survives only inside\r
   the \`\`sys_id=\`\` query parameter of \`\`attachment_link\`\` and has to be parsed back out.\r
\r
In the same spirit, \`\`stage_catalog\`\` compares what each type group returned against the\r
count the API declares and warns loudly on a shortfall — a truncated harvest that reports\r
success is worse than one that fails.\r
\r
AUTHENTICATION\r
--------------\r
Two mechanisms, which is the main reason this is a module and not a curl loop:\r
\r
* The catalogue and detail endpoints are same-origin and want the session cookie plus an\r
  \`\`X-UserToken\`\` header.\r
* The attachment service is on a different host and wants an OAuth bearer plus an APIM\r
  subscription key. The bearer is minted from the *same* cookie and refreshed\r
  automatically (they last ~30 minutes).\r
\r
The cookies are HttpOnly, so \`\`document.cookie\`\` cannot reach them; capture them once\r
from a logged-in browser. Open DevTools ▸ Network, click any request to\r
\`\`/api/x_snc_bpl_user_exp/\`\`, and copy from its Request Headers into \`\`session.json\`\`\r
beside this script::\r
\r
    {\r
      "cookie": "JSESSIONID=...; glide_user_activity=...; glide_session_store=...",\r
      "user_token": "<the x-usertoken header>",\r
      "apim_key": "<ocp-apim-subscription-key, from any api.servicenow.com request>"\r
    }\r
\r
\`\`session.json\`\` holds live credentials — keep it out of version control. Nothing\r
sensitive is hardcoded in this file.\r
\r
USAGE\r
-----\r
Requires Python 3.10+ and \`\`requests\`\`::\r
\r
    pip install requests\r
\r
    python mynow_harvest.py catalog     # one request; writes the full index\r
    python mynow_harvest.py manifest    # one request per record; resumable\r
    python mynow_harvest.py download    # fetches bytes; skips what exists\r
    python mynow_harvest.py all         # all three in order\r
\r
    python mynow_harvest.py all --root ./out --all-releases\r
\r
Every stage is resumable, so an interrupted run is re-entered by repeating the command.\r
"""\r
from __future__ import annotations\r
\r
import argparse\r
import json\r
import re\r
import sys\r
import threading\r
import time\r
from concurrent.futures import ThreadPoolExecutor\r
from pathlib import Path\r
\r
import requests\r
\r
BASE = "https://mynow.servicenow.com"\r
API = BASE + "/api/x_snc_bpl_user_exp/best_practices/cached"\r
TOKEN_URL = BASE + "/api/x_snc_onecx/auth/getAuthToken"\r
ATTACHMENT_URL = "https://api.servicenow.com/bpl/v1/attachment/"\r
\r
DEFAULT_ROOT = Path("./mynow-harvest")\r
\r
# \`\`allresources\`\` paginates over *type groups*, not records, so a single page at a\r
# generous limit covers the library. 250 clears the largest group with room to spare;\r
# stage_catalog warns if that ever stops being true.\r
CATALOG_LIMIT = 250\r
\r
# The service advertises 2,500 requests/minute. 8 workers stays far below it.\r
WORKERS = 8\r
RETRIES = 4\r
\r
USER_AGENT = "mynow-harvest/1.0 (personal export tool; +python-requests)"\r
\r
_WINDOWS_UNSAFE = re.compile(r'[<>:"/\\\\|?*\\x00-\\x1f]')\r
_SYS_ID_RE = re.compile(r"sys_id=([0-9a-f]{32})", re.I)\r
\r
\r
class HarvestError(RuntimeError):\r
    """Anything that should stop the run with a readable message rather than a traceback."""\r
\r
\r
# --------------------------------------------------------------------------- session\r
\r
\r
class Session:\r
    """Holds the MyNow cookie session and mints/refreshes the attachment bearer."""\r
\r
    def __init__(self, cookie: str, user_token: str, apim_key: str) -> None:\r
        self.apim_key = apim_key\r
        self.http = requests.Session()\r
        self.http.headers.update({\r
            "Accept": "application/json",\r
            "Cookie": cookie,\r
            "X-UserToken": user_token,\r
            "User-Agent": USER_AGENT,\r
        })\r
        self._lock = threading.Lock()\r
        self._bearer: str | None = None\r
        self._expires_at = 0.0\r
\r
    @classmethod\r
    def load(cls, path: Path) -> "Session":\r
        if not path.exists():\r
            raise HarvestError(\r
                f"no session file at {path}\\n"\r
                "See the AUTHENTICATION section of this module's docstring for the "\r
                "one-time capture steps."\r
            )\r
        try:\r
            raw = json.loads(path.read_text(encoding="utf-8"))\r
        except json.JSONDecodeError as exc:\r
            raise HarvestError(f"{path} is not valid JSON: {exc}") from exc\r
        missing = [k for k in ("cookie", "user_token", "apim_key") if not raw.get(k)]\r
        if missing:\r
            raise HarvestError(f"{path} is missing required field(s): {', '.join(missing)}")\r
        return cls(raw["cookie"], raw["user_token"], raw["apim_key"])\r
\r
    def bearer(self) -> str:\r
        """Return a live bearer, minting or refreshing it as needed."""\r
        with self._lock:\r
            if self._bearer and time.time() < self._expires_at:\r
                return self._bearer\r
            resp = self.http.get(TOKEN_URL, timeout=30)\r
            resp.raise_for_status()\r
            # Double-encoded: result.auth_token is itself a JSON document (see docstring).\r
            envelope = json.loads(resp.json()["result"]["auth_token"])\r
            self._bearer = envelope["access_token"]\r
            # refresh_in is seconds-from-now, always well inside the hard expiry.\r
            self._expires_at = time.time() + int(envelope.get("refresh_in", 900)) * 0.9\r
            return self._bearer\r
\r
    def _invalidate_bearer(self) -> None:\r
        with self._lock:\r
            self._expires_at = 0.0\r
\r
    def get_json(self, url: str, **params) -> dict:\r
        for attempt in range(RETRIES):\r
            resp = self.http.get(url, params=params or None, timeout=60)\r
            if resp.status_code == 401:\r
                raise HarvestError(\r
                    "401 from MyNow — the captured session has expired. "\r
                    "Re-capture session.json from a logged-in browser."\r
                )\r
            if resp.status_code in (429, 500, 502, 503, 504) and attempt < RETRIES - 1:\r
                time.sleep(2 ** attempt)\r
                continue\r
            resp.raise_for_status()\r
            return resp.json()\r
        raise HarvestError(f"exhausted retries for {url}")\r
\r
    def get_attachment(self, sys_id: str) -> tuple[bytes, str]:\r
        """Return \`\`(bytes, content_type)\`\` for an attachment sys_id."""\r
        for attempt in range(RETRIES):\r
            resp = requests.get(\r
                ATTACHMENT_URL + sys_id,\r
                headers={\r
                    "Authorization": "Bearer " + self.bearer(),\r
                    "ocp-apim-subscription-key": self.apim_key,\r
                    "x-client-sourcesystem": "OneCX",\r
                    "Origin": BASE,\r
                    "User-Agent": USER_AGENT,\r
                },\r
                timeout=180,\r
            )\r
            if resp.status_code == 401 and attempt < RETRIES - 1:\r
                self._invalidate_bearer()  # expired mid-run; re-mint and retry\r
                continue\r
            if resp.status_code in (429, 500, 502, 503, 504) and attempt < RETRIES - 1:\r
                time.sleep(2 ** attempt)\r
                continue\r
            resp.raise_for_status()\r
            return resp.content, resp.headers.get("content-type", "")\r
        raise HarvestError(f"exhausted retries for attachment {sys_id}")\r
\r
\r
# --------------------------------------------------------------------------- helpers\r
\r
\r
def unwrap(payload: dict, key: str) -> dict:\r
    """Descend through the API's inconsistent \`\`result\`\` envelopes to reach \`\`key\`\`.\r
\r
    Asset detail nests twice (\`\`result.result.asset\`\`) while success packs nest once\r
    (\`\`result.successPack\`\`), so depth cannot be assumed — walk until the key appears.\r
    Returning \`\`{}\`\` rather than raising is deliberate: callers record the empty result\r
    as a per-record anomaly instead of aborting a 1,000-record run.\r
    """\r
    node = payload\r
    for _ in range(4):\r
        if not isinstance(node, dict):\r
            return {}\r
        if key in node:\r
            return node[key] or {}\r
        if "result" in node:\r
            node = node["result"]\r
            continue\r
        return {}\r
    return {}\r
\r
\r
def sys_id_from_link(link: str) -> str | None:\r
    """\`\`latestReleaseVersion\`\` omits attachment_sys_id; it survives only in the link."""\r
    match = _SYS_ID_RE.search(link or "")\r
    return match.group(1) if match else None\r
\r
\r
def safe_name(name: str) -> str:\r
    """Filesystem-safe filename, preserving the human-meaningful original where possible."""\r
    cleaned = _WINDOWS_UNSAFE.sub("_", name).strip(" .")\r
    return (cleaned or "untitled")[:180]\r
\r
\r
def read_jsonl(path: Path) -> list[dict]:\r
    if not path.exists():\r
        return []\r
    return [json.loads(line) for line in path.read_text(encoding="utf-8").splitlines() if line.strip()]\r
\r
\r
# --------------------------------------------------------------------------- stages\r
\r
\r
def stage_catalog(session: Session, root: Path) -> list[dict]:\r
    """One request for the whole library. Writes the raw payload and a flattened index."""\r
    payload = session.get_json(\r
        f"{API}/allresources",\r
        limit=CATALOG_LIMIT, offset=0, sort="total_views", order="desc",\r
    )\r
    inner = payload["result"]["result"]\r
    root.mkdir(parents=True, exist_ok=True)\r
    (root / "catalog.json").write_text(json.dumps(inner, indent=2), encoding="utf-8")\r
\r
    records, shortfalls = [], []\r
    for group in inner["data"]:\r
        got = group.get("recordList") or []\r
        want = int(group["count"])\r
        if len(got) < want:\r
            shortfalls.append(f"{group['title']}: {len(got)}/{want}")\r
        for rec in got:\r
            records.append({\r
                "slug": rec["humanReadableIdentifier"],\r
                "title": rec["title"],\r
                "group": group["title"],\r
                "type": rec.get("type") or group["type"],\r
                "description": rec.get("description", ""),\r
                "last_updated": rec.get("lastUpdated", ""),\r
            })\r
    (root / "catalog-index.json").write_text(json.dumps(records, indent=2), encoding="utf-8")\r
\r
    print(f"catalog: {len(records)} records across {len(inner['data'])} types -> {root}")\r
    if shortfalls:\r
        # Loud, because a silent shortfall would masquerade as a complete harvest.\r
        print("  WARNING incomplete groups (raise CATALOG_LIMIT): " + "; ".join(shortfalls))\r
    return records\r
\r
\r
def _detail_url(record: dict) -> str | None:\r
    kind = record["type"]\r
    if kind == "Asset":\r
        return f"{API}/assets/{record['slug']}"\r
    if kind == "Success Pack":\r
        return f"{API}/successpacks/{record['slug']}"\r
    return None  # Collections expose no detail route; they are catalogued only.\r
\r
\r
def _files_from_asset(asset: dict, latest_only: bool) -> list[dict]:\r
    """Flatten an asset's attachments, tagging which release each came from."""\r
    latest = asset.get("latestReleaseVersion") or {}\r
    latest_id = latest.get("attachment_sys_id") or sys_id_from_link(latest.get("attachment_link", ""))\r
    out, seen = [], set()\r
\r
    for entry in asset.get("assetFiles") or []:\r
        sys_id = entry.get("attachment_sys_id") or sys_id_from_link(entry.get("attachment_link", ""))\r
        if not sys_id or sys_id in seen:\r
            continue\r
        is_latest = (sys_id == latest_id) if latest_id else False\r
        if latest_only and latest_id and not is_latest:\r
            continue\r
        seen.add(sys_id)\r
        releases = [r.get("name", "") for r in entry.get("servicenow_releases") or []]\r
        # The release-tagged name on latestReleaseVersion is the friendlier of the two.\r
        filename = (latest.get("attachment_name") if is_latest else None) \\\r
            or entry.get("attachment_name") or entry.get("file_name") or sys_id\r
        out.append({\r
            "attachment_sys_id": sys_id,\r
            "filename": filename,\r
            "size": entry.get("formatted_file_size") or latest.get("formatted_file_size", ""),\r
            "releases": releases,\r
            "is_latest": is_latest,\r
        })\r
\r
    # Fall back to the latest-release block if assetFiles was empty or unlabelled.\r
    if not out and latest_id:\r
        out.append({\r
            "attachment_sys_id": latest_id,\r
            "filename": latest.get("attachment_name") or latest_id,\r
            "size": latest.get("formatted_file_size", ""),\r
            "releases": [latest.get("release_name", "")],\r
            "is_latest": True,\r
        })\r
    return out\r
\r
\r
def stage_manifest(session: Session, root: Path, latest_only: bool) -> None:\r
    """One detail request per record; appends to manifest.jsonl so runs resume."""\r
    index_path = root / "catalog-index.json"\r
    if not index_path.exists():\r
        raise HarvestError("no catalog-index.json — run the \`catalog\` stage first")\r
    records = json.loads(index_path.read_text(encoding="utf-8"))\r
\r
    manifest_path = root / "manifest.jsonl"\r
    done = {row["slug"] for row in read_jsonl(manifest_path)}\r
    todo = [r for r in records if r["slug"] not in done]\r
    print(f"manifest: {len(todo)} to fetch ({len(done)} already done)")\r
\r
    packs_dir = root / "successpacks"\r
    write_lock = threading.Lock()\r
\r
    def fetch(record: dict) -> dict:\r
        url = _detail_url(record)\r
        if url is None:\r
            return {**record, "files": [], "note": "collection — container, no detail route"}\r
        try:\r
            payload = session.get_json(url)\r
        except Exception as exc:  # noqa: BLE001 — one bad record must not kill the run\r
            return {**record, "files": [], "error": str(exc)[:200]}\r
\r
        if record["type"] == "Success Pack":\r
            pack = unwrap(payload, "successPack")\r
            packs_dir.mkdir(parents=True, exist_ok=True)\r
            (packs_dir / f"{safe_name(record['slug'])}.json").write_text(\r
                json.dumps(pack, indent=2), encoding="utf-8")\r
            return {**record, "files": [], "note": "success pack — raw JSON kept for membership mining"}\r
\r
        asset = unwrap(payload, "asset")\r
        return {\r
            **record,\r
            "file_format": asset.get("fileFormat", ""),\r
            "download_count": asset.get("downloadCount", ""),\r
            "files": _files_from_asset(asset, latest_only),\r
        }\r
\r
    with manifest_path.open("a", encoding="utf-8") as handle:\r
        with ThreadPoolExecutor(max_workers=WORKERS) as pool:\r
            for n, row in enumerate(pool.map(fetch, todo), 1):\r
                with write_lock:\r
                    handle.write(json.dumps(row) + "\\n")\r
                    handle.flush()\r
                if n % 100 == 0:\r
                    print(f"  ...{n}/{len(todo)}")\r
\r
    rows = read_jsonl(manifest_path)\r
    files = sum(len(r.get("files") or []) for r in rows)\r
    errors = [r for r in rows if r.get("error")]\r
    print(f"manifest: {len(rows)} records, {files} downloadable files, {len(errors)} errors")\r
\r
\r
def stage_download(session: Session, root: Path) -> None:\r
    """Fetch attachment bytes, skipping anything already on disk."""\r
    rows = read_jsonl(root / "manifest.jsonl")\r
    if not rows:\r
        raise HarvestError("no manifest.jsonl — run the \`manifest\` stage first")\r
\r
    jobs = []\r
    for row in rows:\r
        for entry in row.get("files") or []:\r
            target = root / "files" / safe_name(row["group"]) / safe_name(entry["filename"])\r
            if not target.exists():\r
                jobs.append((entry["attachment_sys_id"], target, row["slug"]))\r
\r
    print(f"download: {len(jobs)} files to fetch")\r
    failures: list[str] = []\r
    counter = {"n": 0}\r
    lock = threading.Lock()\r
\r
    def pull(job: tuple[str, Path, str]) -> None:\r
        sys_id, target, slug = job\r
        try:\r
            blob, _ = session.get_attachment(sys_id)\r
            target.parent.mkdir(parents=True, exist_ok=True)\r
            target.write_bytes(blob)\r
        except Exception as exc:  # noqa: BLE001 — collect and report, never abort the batch\r
            with lock:\r
                failures.append(f"{slug} / {sys_id}: {str(exc)[:160]}")\r
            return\r
        with lock:\r
            counter["n"] += 1\r
            if counter["n"] % 50 == 0:\r
                print(f"  ...{counter['n']}/{len(jobs)}")\r
\r
    with ThreadPoolExecutor(max_workers=WORKERS) as pool:\r
        list(pool.map(pull, jobs))\r
\r
    print(f"download: {counter['n']} fetched, {len(failures)} failed")\r
    if failures:\r
        (root / "download-failures.txt").write_text("\\n".join(failures), encoding="utf-8")\r
        print(f"  failures listed in {root / 'download-failures.txt'}")\r
\r
\r
# --------------------------------------------------------------------------- cli\r
\r
\r
def main(argv: list[str] | None = None) -> int:\r
    parser = argparse.ArgumentParser(\r
        description="Bulk-export the ServiceNow MyNow Best Practices library for offline use.",\r
    )\r
    parser.add_argument("stage", choices=("catalog", "manifest", "download", "all"))\r
    parser.add_argument("--root", type=Path, default=DEFAULT_ROOT,\r
                        help=f"output directory (default: {DEFAULT_ROOT})")\r
    parser.add_argument("--session", type=Path, default=None,\r
                        help="session JSON (default: <root>/session.json)")\r
    parser.add_argument("--all-releases", action="store_true",\r
                        help="keep superseded release versions too (default: latest only)")\r
    args = parser.parse_args(argv)\r
\r
    try:\r
        session = Session.load(args.session or args.root / "session.json")\r
        latest_only = not args.all_releases\r
\r
        if args.stage in ("catalog", "all"):\r
            stage_catalog(session, args.root)\r
        if args.stage in ("manifest", "all"):\r
            stage_manifest(session, args.root, latest_only)\r
        if args.stage in ("download", "all"):\r
            stage_download(session, args.root)\r
    except HarvestError as exc:\r
        print(f"error: {exc}", file=sys.stderr)\r
        return 1\r
    except KeyboardInterrupt:\r
        print("\\ninterrupted — re-run the same command to resume", file=sys.stderr)\r
        return 130\r
    return 0\r
\r
\r
if __name__ == "__main__":\r
    raise SystemExit(main())\r

`})})})}),`
`,(0,t.jsx)(n.hr,{}),`
`,(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:`Written and published by me, under Apache-2.0. The assets it retrieves remain ServiceNow's material; this changes where they sit, not who may use them.`})})]})}function r(e={}){let{wrapper:r}=e.components||{};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}function i(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{r as default};