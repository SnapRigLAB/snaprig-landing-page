# 🚀 COMPLETE STEP-BY-STEP GUIDE: Make Your Snaprig GymBag M1 Shop Work

Follow these steps EXACTLY and you'll have a working shop in about 1 hour!

---

## PHASE 1: CREATE YOUR SHOPIFY PRODUCT (15 minutes)

### Step 1: Log into Shopify
1. Go to https://shopify.com
2. Log into your Shopify account
3. You should see your admin dashboard

### Step 2: Create the Product
1. Click **"Products"** in the left sidebar
2. Click **"Add Product"** button (top right)

### Step 3: Fill in Product Details
Copy and paste these EXACT details:

**Product Title:**
```
Snaprig GymBag M1
```

**Description:**
```
Transform your gym experience with the Snaprig GymBag M1 - the ultimate crossbody gym bag designed for the modern athlete.

KEY FEATURES:
✓ Hands-free gym bag with secure water bottle holder
✓ Transparent phone pocket for easy access during workouts  
✓ Multiple compartments for keys, cards, and essentials
✓ Premium water-resistant nylon material
✓ Adjustable crossbody strap for comfortable wear
✓ Perfect for gym, running, hiking, cycling, or travel

SPECIFICATIONS:
- Material: Water-resistant nylon
- Color: Black
- Adjustable strap: 28" - 48"
- Lightweight: Only 8.5oz
- Fits water bottles up to 32oz
- Fits all smartphones up to 7"

30-DAY MONEY-BACK GUARANTEE
We stand behind our products. If you're not 100% satisfied, return it within 30 days for a full refund.
```

**Media (Images):**
- Click **"Add media"**
- Upload the 3 product images from your computer
- (Download them from your AliExpress link if you haven't already)

**Pricing:**
- **Price:** `29.99`
- **Compare at price:** `59.99`

**Inventory:**
- **SKU:** `SNAPRIG-M1-BLACK`
- **Track quantity:** Check this box
- **Quantity:** `100` (or however many you want to show in stock)

**Shipping:**
- **Weight:** `0.25` kg (or 8.5 oz)
- Check **"This is a physical product"**

**Variants:**
- You only have Black, so NO need to add variants
- Just leave it as default

**Product Status:**
- Set to **"Active"**

### Step 4: SAVE THE PRODUCT
1. Click **"Save"** button (top right)
2. Wait for Shopify to save

### Step 5: GET YOUR PRODUCT INFORMATION
After saving, you'll see your product page. You need to copy 2 things:

**A) Product URL:**
Look at the browser address bar, it will look like:
```
https://your-store-name.myshopify.com/products/snaprig-gymbag-m1
```
📝 **WRITE THIS DOWN:** _______________________________

**B) Variant ID (IMPORTANT!):**
1. In your product page, scroll down to **"Variants"** section
2. You'll see "Default Title" or "Black" - click on it
3. Look at the URL in your browser, it will be something like:
```
https://admin.shopify.com/store/your-store/products/12345678/variants/98765432100
```
The last long number (`98765432100`) is your VARIANT ID

📝 **WRITE THIS DOWN:** _______________________________

---

## PHASE 2: DEPLOY YOUR LANDING PAGE TO VERCEL (20 minutes)

### Step 1: Prepare Your Code
We need to export your landing page files. I'll create a downloadable package for you.

**On your current system, run:**
```bash
cd /app/frontend
yarn build
```

This creates a production-ready version of your site.

### Step 2: Sign Up for Vercel (FREE)
1. Go to https://vercel.com
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (easiest option)
4. Create a GitHub account if you don't have one (it's free)
5. Authorize Vercel to access your GitHub

### Step 3: Deploy Your Landing Page

**METHOD A: Using GitHub (Recommended)**

1. **Create GitHub Repository:**
   - Go to https://github.com/new
   - Repository name: `snaprig-landing-page`
   - Set to **Public**
   - Click **"Create repository"**

2. **Push Your Code to GitHub:**
   ```bash
   cd /app/frontend
   git init
   git add .
   git commit -m "Snaprig GymBag M1 landing page"
   git remote add origin https://github.com/YOUR-USERNAME/snaprig-landing-page.git
   git push -u origin main
   ```
   (Replace YOUR-USERNAME with your actual GitHub username)

3. **Deploy on Vercel:**
   - Go to https://vercel.com/new
   - Click **"Import Git Repository"**
   - Select your `snaprig-landing-page` repository
   - Vercel will auto-detect it's a React app
   - Click **"Deploy"**
   - Wait 2-3 minutes ⏳
   - **DONE!** You'll get a URL like: `snaprig-landing-page.vercel.app`

**METHOD B: Direct Upload (If GitHub is too complicated)**

1. **Zip Your Build Folder:**
   ```bash
   cd /app/frontend
   zip -r build.zip build/
   ```

2. **Upload to Vercel:**
   - Go to https://vercel.com
   - Click **"Add New" → "Project"**
   - Choose **"Upload folder"**
   - Upload your `build` folder
   - Click **"Deploy"**
   - Wait 2 minutes
   - **DONE!** You get a Vercel URL

### Step 4: Test Your Deployed Site
1. Click on the Vercel URL you received
2. Your landing page should load with:
   - Snaprig GymBag M1 title ✓
   - Your 3 product images ✓
   - Only Black color option ✓
   - Price $29.99 ✓

📝 **WRITE DOWN YOUR VERCEL URL:** _______________________________

---

## PHASE 3: CONNECT YOUR CUSTOM DOMAIN (Optional - 30 min + 24-48hrs wait)

### Step 1: Add Domain in Vercel
1. In Vercel dashboard → Your Project
2. Go to **"Settings" → "Domains"**
3. Type your domain name (e.g., `snapriglab.com`)
4. Click **"Add"**

### Step 2: Vercel Shows DNS Records
Vercel will show you something like:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

### Step 3: Update DNS at Your Domain Registrar
**Where you bought your .com domain (GoDaddy, Namecheap, etc.):**

1. Log into your domain registrar
2. Find **"DNS Management"** or **"DNS Settings"**
3. Add the records Vercel showed you:
   - Add the **A record**: @ → 76.76.21.21
   - Add the **CNAME record**: www → cname.vercel-dns.com
4. Save changes

### Step 4: Wait for DNS Propagation
- Takes 24-48 hours
- Check status at: https://www.whatsmydns.net
- Once propagated, your domain will show your landing page!

---

## PHASE 4: CONNECT LANDING PAGE TO SHOPIFY CHECKOUT (10 minutes)

Now I need to update your BUY NOW button to redirect to Shopify checkout.

### What I Need From You:
1. **Your Shopify Store URL:** _______________________________
2. **Your Product Variant ID:** _______________________________

### What I'll Do:
Once you give me those 2 things, I'll:
1. Update the BUY NOW button to redirect to:
   ```
   https://your-store.myshopify.com/cart/VARIANT_ID:1?checkout=true
   ```
2. Update the Add to Cart button similarly
3. You redeploy to Vercel (takes 2 minutes)

---

## PHASE 5: TEST THE COMPLETE FLOW (5 minutes)

### Test These Steps:
1. Go to your landing page URL
2. Click **BUY NOW** button
3. Should redirect to Shopify checkout ✓
4. Should show **Snaprig GymBag M1** in cart ✓
5. Should show correct price **$29.99** ✓
6. Should show quantity you selected ✓

### If Everything Works:
🎉 **CONGRATULATIONS! YOUR SHOP IS LIVE!**

---

## PHASE 6: START SELLING (Marketing)

### Your Sales Funnel:
```
TikTok/IG Ad → Your Landing Page → Shopify Checkout → Customer Pays → You Fulfill
```

### Next Steps:
1. **Run Ads:**
   - TikTok Ads
   - Instagram/Facebook Ads
   - Google Ads

2. **Set Up Pixels:**
   - Facebook Pixel (for retargeting)
   - TikTok Pixel (for retargeting)
   - Google Analytics (for tracking)

3. **Order Fulfillment:**
   - When order comes in Shopify
   - Order from AliExpress
   - Use customer's address
   - Mark as fulfilled in Shopify

---

## 🆘 TROUBLESHOOTING

### "BUY NOW button doesn't redirect"
- **Fix:** Give me your Shopify URL + Variant ID so I can update the code

### "Domain not working after 48 hours"
- **Fix:** Check DNS records are correct at your registrar
- Use https://www.whatsmydns.net to verify propagation

### "Shopify checkout shows wrong product"
- **Fix:** Double-check the Variant ID is correct

### "Images not loading on deployed site"
- **Fix:** Images might be blocked. I'll need to host them properly.

---

## 📋 QUICK CHECKLIST

Before launching, make sure:
- [ ] Product created in Shopify
- [ ] Shopify product set to "Active"
- [ ] Landing page deployed on Vercel
- [ ] Landing page loads correctly
- [ ] BUY NOW button redirects to Shopify
- [ ] Test purchase completed successfully
- [ ] Domain connected (optional)
- [ ] Fulfillment process ready

---

## 🎯 WHAT TO DO RIGHT NOW

### STEP 1: Create Shopify Product
Go to Shopify and create your product using the details above.

### STEP 2: Get Variant ID
Find and write down your Variant ID.

### STEP 3: Deploy to Vercel
Sign up and deploy your landing page.

### STEP 4: Tell Me Your Details
Reply with:
```
Shopify Store URL: _______________
Variant ID: _______________
Vercel URL: _______________
```

### STEP 5: I'll Connect Everything
I'll update the BUY NOW button code in 5 minutes.

### STEP 6: Redeploy
Push the updated code to Vercel.

### STEP 7: TEST & LAUNCH! 🚀

---

## 💬 QUESTIONS?

Just ask me:
- "How do I find my Variant ID?"
- "How do I deploy to Vercel?"
- "How do I add DNS records?"
- "The BUY NOW button isn't working"

I'm here to help you every step of the way! 🚀

**Let's get your shop LIVE today!**
