# Complete BigRock Deployment Guide for Livzyinteriors

## 🎯 Quick Summary
Your website is ready! No images/media folder needed - images load from CDN.

---

## 📦 Method 1: Build on Your Local Computer (RECOMMENDED)

### Step 1: Clone from GitHub
```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
```

### Step 2: Navigate to Frontend
```bash
cd frontend
```

### Step 3: Install Dependencies (First Time Only)
```bash
yarn install
```
Or if you don't have yarn:
```bash
npm install
```

### Step 4: Build for Production
```bash
yarn build
```
Or:
```bash
npm run build
```

✅ **Success!** You'll now see a `build` folder in `frontend/build/`

### Step 5: Upload to BigRock

**What's in the build folder:**
```
build/
├── index.html
├── asset-manifest.json
└── static/
    ├── css/
    └── js/
```

---

## 🚀 BigRock Upload Instructions

### Access BigRock Control Panel

1. Login to your BigRock account
2. Navigate to **cPanel** or **File Manager**
3. Go to **public_html** folder (or www/htdocs)

### Upload Files

**IMPORTANT:** Upload the **CONTENTS** of the build folder, NOT the folder itself!

**Upload these:**
- ✅ index.html
- ✅ asset-manifest.json
- ✅ static/ (folder with css and js subfolders)

**Your public_html should look like:**
```
public_html/
├── index.html
├── asset-manifest.json
└── static/
    ├── css/
    │   ├── main.3b50049a.css
    │   └── main.3b50049a.css.map
    └── js/
        ├── main.b77e84dc.js
        ├── main.b77e84dc.js.LICENSE.txt
        └── main.b77e84dc.js.map
```

### Create .htaccess File

In BigRock File Manager, create a new file named `.htaccess` in `public_html`:

**Content:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

**Why needed:** Ensures React Router works properly on page refresh.

---

## ✅ Test Your Website

Visit: `http://yourdomain.com`

You should see:
- ✅ Logo in header
- ✅ "Transform Your Dream Home" banner with living room image
- ✅ 6 Services (Kitchen, Wardrobe, Living Room, Bedroom, Full Home, Office)
- ✅ 4 Material brands (Century Ply, Greenply, Action Tesa, Merino)
- ✅ Footer with contact info (phones: 9989428968 / 9059304493, email: livzyinteriors@gmail.com)

---

## 🖼️ About Images - No Media Folder Needed!

### Why no images/media folder?

**Your images are hosted on CDN (Content Delivery Network):**
- Logo: `https://customer-assets.emergentagent.com/.../logo1.png`
- Banner: `https://customer-assets.emergentagent.com/.../living%20room.jpg`

### Benefits:
✅ Faster page loads (CDN is optimized for speed)
✅ Less server storage needed
✅ Smaller upload size
✅ Images always available
✅ No broken image links

### This is BETTER than local images!
- CDNs have servers worldwide
- Images load from closest server to visitor
- Your BigRock hosting uses minimal space
- Professional websites use this approach

---

## 📱 Upload Methods

### Method A: BigRock File Manager (Easiest)
1. Login to BigRock cPanel
2. Click "File Manager"
3. Navigate to public_html
4. Click "Upload"
5. Upload files from your `frontend/build/` folder
6. Create .htaccess file

### Method B: FTP Client (FileZilla)
1. Download FileZilla (free)
2. Get FTP credentials from BigRock
3. Connect to your server
4. Navigate to public_html
5. Drag & drop files from `frontend/build/`
6. Create .htaccess file

### Method C: cPanel File Manager Upload + Extract
1. Zip your build folder contents on your computer
2. Upload zip to public_html via File Manager
3. Extract in BigRock File Manager
4. Create .htaccess file

---

## 🔧 Troubleshooting

### Problem: Blank page after upload
**Solution:** 
- Check if index.html is in public_html (not in a subfolder)
- Clear browser cache (Ctrl + Shift + R)

### Problem: CSS/JS not loading
**Solution:**
- Ensure `static` folder uploaded correctly
- Check that static/css/ and static/js/ folders exist
- Verify file permissions (644 for files, 755 for folders)

### Problem: 404 error on page refresh
**Solution:**
- Add the .htaccess file (see instructions above)
- Ensure mod_rewrite is enabled on your BigRock server

### Problem: Images not showing
**Solution:**
- This shouldn't happen as images are on CDN
- Check browser console (F12) for any errors
- Verify internet connection

### Problem: Logo looks different
**Solution:**
- Clear browser cache
- Check that latest code was built
- Verify logo URL in the code is correct

---

## 📊 Website Structure

**Pages:** 1 page (Homepage)

**Sections:**
1. Header (Logo + Phone + CTA button)
2. Hero Banner (Transform Your Dream Home + Living room image)
3. Services (6 service cards)
4. Material Brands (4 brand cards + trust section)
5. Footer (Logo + Quick Links + Contact Info + Social Media)

**Features:**
- ✅ Fully responsive (mobile + desktop)
- ✅ Smooth animations
- ✅ Hover effects
- ✅ Professional design
- ✅ Light color scheme (orange/amber)
- ✅ Fast loading

**Static Website:**
- ❌ No backend (no form submissions to database)
- ❌ No database
- ✅ Perfect for showcasing business
- ✅ Can add contact forms later using FormSpree, EmailJS, etc.

---

## 🔄 Making Updates

### To update your website:

1. Make changes in your code
2. Run `yarn build` in frontend folder
3. Upload new files from `build/` to BigRock
4. Overwrite existing files

**OR**

1. Push changes to GitHub
2. Pull on your local machine
3. Run `yarn build`
4. Upload to BigRock

---

## 📞 Need Help?

**BigRock Support:**
- Email: support@bigrock.in
- Phone: 1800-123-8880 (Toll Free India)
- Live Chat: Available on BigRock website

**Common BigRock cPanel Location:**
`https://yourdomain.com/cpanel` or `https://yourdomain.com:2083`

---

## 💡 Pro Tips

1. **Backup:** Always keep a backup of your files before uploading
2. **Testing:** Test on staging/subdomain before going live
3. **SSL Certificate:** Enable free SSL in BigRock (makes site https://)
4. **Cache:** Clear cache after updates to see changes
5. **Mobile:** Test on mobile devices too
6. **Speed:** Use PageSpeed Insights to check performance

---

## 🎉 You're Ready!

Your livzyinteriors website is professional, responsive, and ready for BigRock hosting. The small file size (only ~104 KB) means fast uploads and fast loading times for visitors!

**Total Files:** 7 files
**Total Size:** ~104 KB (Very lightweight!)
**Load Time:** Super fast!

Good luck with your launch! 🚀
