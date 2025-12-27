# GoDaddy Deployment Guide for Livzyinteriors Website

## Step 1: Build Your Website

Run these commands in your terminal:

```bash
cd /app/frontend
yarn build
```

This will create a `build` folder with all your website files optimized for production.

## Step 2: Files to Upload to GoDaddy

After building, you'll have a `build` folder containing:
- `index.html` (your homepage)
- `static/` folder (CSS, JS, images)
- `asset-manifest.json`
- Other production files

## Step 3: Upload to GoDaddy

### Via cPanel File Manager:
1. Log in to your GoDaddy account
2. Go to **cPanel** → **File Manager**
3. Navigate to `public_html` folder (or `www` folder)
4. **Delete** any existing files in `public_html`
5. Upload **ALL contents** from the `build` folder
   - Upload the files INSIDE the build folder, not the folder itself
6. Your `index.html` should be directly in `public_html`

### Via FTP (Alternative):
1. Use an FTP client (FileZilla, etc.)
2. Connect to your GoDaddy hosting
3. Navigate to `public_html` or `www` folder
4. Upload all contents from the `build` folder

## Step 4: Configure .htaccess (Important for React Router)

Create a file named `.htaccess` in your `public_html` folder with this content:

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

This ensures React Router works properly on GoDaddy.

## Step 5: Test Your Website

Visit your domain: `http://yourdomain.com`

You should see your livzyinteriors homepage!

## What Works on This Static Version:

✅ All UI/Design (exactly as you see now)
✅ Mobile responsive design
✅ Smooth animations and hover effects
✅ All sections (Hero, Services, Brands, Footer)
✅ Logo and branding
✅ Contact information displayed

## What Doesn't Work (Static Limitation):

❌ Form submissions (no backend to process)
❌ Database integration
❌ Email notifications

## Adding Contact Form Functionality (Optional):

If you want working forms on GoDaddy, you can use:
- **Formspree** (free tier available) - formspree.io
- **Netlify Forms** (if you use Netlify instead)
- **Google Forms** embedded
- **EmailJS** for direct email sending

## Folder Structure After Upload:

```
public_html/
├── index.html
├── asset-manifest.json
├── favicon.ico
├── logo192.png
├── logo512.png
├── manifest.json
├── robots.txt
├── static/
│   ├── css/
│   ├── js/
│   └── media/
└── .htaccess
```

## Troubleshooting:

**Problem:** Blank page after upload
- **Solution:** Check if files are in `public_html` directly, not in a subfolder

**Problem:** CSS/JS not loading
- **Solution:** Ensure the `static` folder is uploaded correctly

**Problem:** 404 errors on page refresh
- **Solution:** Add the `.htaccess` file as shown above

**Problem:** Images not showing
- **Solution:** Check that image URLs in the code are correct

## Need Dynamic Features?

If you later need:
- Contact form submissions to database
- User registrations
- Dynamic content management
- Backend API integration

Consider using **Emergent's deployment** ($20/month) which includes:
- Full backend support
- MongoDB database
- Automatic SSL
- Custom domain support

---

## Questions?

Your website is now ready to be deployed to GoDaddy! The UI will look exactly the same as what you see in development.
