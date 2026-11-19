## 🛟 Fallback to GitHub Pages When the Server Is Down

`mrzaizai2k.com` is served from my own machine through a Cloudflare Tunnel. When the machine, the tunnel or the Docker containers go down, visitors would normally see a Cloudflare error page (502, 530 or 1033).

To avoid that, a **Cloudflare Worker** sits in front of the site. It passes every request to my server as usual. If the server returns an error (500 or higher) or can't be reached, it redirects the visitor to the same page on the mirror at **https://mrzaizai2k.github.io**.

> The GitHub Pages repo (`mrzaizai2k.github.io`) must **not** have a custom domain (CNAME) set to `mrzaizai2k.com`, or the redirect would loop.

---

### 🧩 Step 1: Create the Worker

1. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com/).
2. In the left sidebar, go to **Compute (Workers)** → **Workers & Pages**.
3. Click **Create** → **Create Worker** (template: **Start with Hello World**).
4. Name it `portfolio-fallback` and click **Deploy**.

---

### 📝 Step 2: Add the Code

On the Worker's page, click **Edit code**, replace everything with the code below, then click **Deploy**.

```js
export default {
  async fetch(request) {
    try {
      const res = await fetch(request);
      if (res.status >= 500) return fallback(request);
      return res;
    } catch {
      return fallback(request);
    }
  },
};

function fallback(request) {
  const url = new URL(request.url);
  return Response.redirect(
    `https://mrzaizai2k.github.io${url.pathname}${url.search}`,
    302
  );
}
```

- It keeps the path and query, so `mrzaizai2k.com/resume` goes to `mrzaizai2k.github.io/resume`.
- It uses a **302 (temporary)** redirect, so browsers don't remember it after the server is back.

---

### 🌐 Step 3: Attach the Worker to the Domain

1. On the Worker's page, open **Settings** → **Domains & Routes**.
2. Click **Add** → **Route** (not "Custom domain", which would replace the site instead of sitting in front of it).
3. Fill in:
   - **Zone:** `mrzaizai2k.com`
   - **Route:** `mrzaizai2k.com/*`
   - **Failure mode:** **Fail open** (if the Worker hits its limit, requests still go straight to the server)
4. Click **Add route**.
5. Repeat for `www.mrzaizai2k.com/*`.

Do **not** add a route for `tools.mrzaizai2k.com`; that subdomain is served directly.

---

### ✅ Step 4: Test

1. On the server, stop the site:

   ```bash
   docker compose stop
   ```

2. Open `https://mrzaizai2k.com/resume` in a private window. It should redirect to `https://mrzaizai2k.github.io/resume`.
3. Start the site again:

   ```bash
   docker compose start
   ```

4. Reload `https://mrzaizai2k.com`. It should load from the server again.

---

### 📌 Notes

- Cost: the Workers free plan allows 100,000 requests per day, which is plenty for a portfolio.
- Keep the content of this repo and `mrzaizai2k.github.io` in sync, so the fallback shows the same information.
