## 🌀 Connecting Your Domain to Cloudflare

After logging into my Cloudflare account from the [dashboard](https://dash.cloudflare.com/), I clicked the **“Onboard the domain”** button.
Then, I entered my domain name (for example: `example-app.com`) and hit **Continue**.

---

### 🧾 Step 1: Select a Plan

After saving, Cloudflare asked me to select a plan.
I chose the **Free Plan** and pressed **Continue**.

---

### 🌐 Step 2: Scan Existing DNS Records

Cloudflare then scanned the existing DNS records from where I bought the domain.

For example, it automatically pulled in all the DNS records from my **GoDaddy** account.
Once the scan completed, I pressed **Continue**.

---

### 🔁 Step 3: Update Nameservers

Cloudflare then instructed me to log in to my **GoDaddy** account and change the `nameservers` to Cloudflare’s nameservers.

#### Illustration:

![Change Nameservers](docs/change_nameserver.png)

By doing so, I effectively gave Cloudflare full control to manage my domain’s DNS records.
I completed the change — it took a short while to propagate.

---

### ✅ Step 4: Verify Nameserver Activation

After updating the nameservers, I went back to Cloudflare and clicked the **“Done, Check Nameservers”** button.

Once Cloudflare’s nameservers became active, I expected my web application (previously hosted on another server) to become temporarily inaccessible — since no DNS records existed yet in Cloudflare.

So, while waiting for the activation to complete, I proceeded to the next configuration steps.

