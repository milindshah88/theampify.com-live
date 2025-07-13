# Deploy TheAmpify React App to GoDaddy Deluxe Hosting

## Step 1: Access Your GoDaddy File Manager

1. Log into your GoDaddy account
2. Go to **My Products** → **Web Hosting**
3. Click **Manage** next to your hosting plan
4. Click **File Manager** (or use FTP if you prefer)

## Step 2: Prepare Your Files

The built React app is in the `dist` folder and contains:
- `index.html` (main page)
- `assets/` folder (CSS and JavaScript files)
- `robots.txt` (SEO file)

## Step 3: Upload Files

### Using File Manager:
1. Navigate to your domain's **public_html** folder
2. **Delete or backup** any existing files (like default GoDaddy pages)
3. **Upload all files** from the `dist` folder:
   - Upload `index.html`
   - Upload `robots.txt`
   - Create an `assets` folder and upload the CSS/JS files from `dist/assets/`

### Using FTP (Alternative):
1. Connect to your FTP using:
   - Host: Your domain name
   - Username: Your hosting username
   - Password: Your hosting password
2. Navigate to `public_html`
3. Upload all files from the `dist` folder

## Step 4: Update Domain Settings

1. Make sure your domain points to the **public_html** folder
2. If you have a subdomain, point it to the correct folder

## Step 5: Test Your Site

1. Visit your domain (e.g., `https://yourdomain.com`)
2. The TheAmpify site should load immediately
3. Test the contact form and navigation

## File Structure After Upload:
```
public_html/
├── index.html
├── robots.txt
└── assets/
    ├── index-Br7agx9_.css
    └── index-D3mXSL2a.js
```

## Troubleshooting:

**If the site doesn't load:**
- Clear your browser cache
- Wait 5-10 minutes for DNS propagation
- Check that files are in the correct `public_html` directory

**If styling is missing:**
- Ensure the `assets` folder uploaded correctly
- Check file permissions (should be 644 for files, 755 for folders)

**Contact form not working:**
- The current form is frontend-only
- You'll need to add a backend service or use a form service like Formspree

## Next Steps:

1. **Set up contact form backend** (optional)
2. **Add Google Analytics** tracking code
3. **Set up SSL certificate** (usually free with GoDaddy)
4. **Configure email forwarding** for your domain