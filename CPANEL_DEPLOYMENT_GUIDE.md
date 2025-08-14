# cPanel Deployment Guide for TCS React App

## 🚀 **Step-by-Step cPanel Deployment**

### **1. Build Your Project**
```bash
npm run build
```

### **2. Access cPanel**
- Login to your cPanel account
- Navigate to **File Manager**

### **3. Navigate to public_html**
- Open **File Manager**
- Go to **public_html** directory (this is your website's root)

### **4. Upload Files**
- **Delete all existing files** in public_html (backup first if needed)
- Upload the **entire contents** of your `dist` folder to public_html
- Ensure these files are in the root of public_html:
  - `index.html`
  - `.htaccess` ⭐ **CRITICAL**
  - `cpanel.conf`
  - `404.html`
  - `assets/` folder
  - All other files

### **5. Verify .htaccess is Active**
- In cPanel, go to **File Manager**
- Right-click on `.htaccess`
- Select **Edit**
- Ensure the content is correct
- **Save** the file

### **6. Check Apache Configuration**
- In cPanel, go to **MultiPHP Manager**
- Ensure **mod_rewrite** is enabled
- If not, contact your hosting provider

### **7. Test Your Routes**
- Visit your main domain: `https://yoursite.com`
- Navigate to a route: `https://yoursite.com/study-guide/uk`
- **Reload the page** - should work without 404 error
- Test bookmarking and direct URL access

## 🔧 **Troubleshooting cPanel Issues**

### **If .htaccess Doesn't Work:**

#### **Option 1: Force .htaccess Recognition**
- In cPanel, go to **File Manager**
- Rename `.htaccess` to `.htaccess.txt`
- Then rename it back to `.htaccess`
- This forces cPanel to recognize the file

#### **Option 2: Use cPanel.conf**
- If `.htaccess` still doesn't work, use `cpanel.conf`
- Some cPanel setups prefer this file

#### **Option 3: Contact Hosting Provider**
- Ask them to enable **mod_rewrite**
- Request **AllowOverride All** for your directory

### **Common cPanel Issues:**

1. **mod_rewrite disabled** - Contact hosting provider
2. **AllowOverride None** - Hosting provider must change this
3. **File permissions** - Ensure .htaccess is readable (644)
4. **Apache version** - Some older versions don't support certain rules

## 📁 **File Structure After Upload**

Your public_html should look like this:
```
public_html/
├── index.html
├── .htaccess          ⭐ CRITICAL
├── cpanel.conf        ⭐ BACKUP
├── 404.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── images/
└── [other files]
```

## ✅ **Verification Checklist**

- [ ] All files uploaded to public_html root
- [ ] .htaccess file is present and correct
- [ ] mod_rewrite is enabled
- [ ] Routes work when navigating
- [ ] Page reload works without 404
- [ ] Direct URL access works
- [ ] Bookmarking works

## 🆘 **Still Having Issues?**

1. **Check cPanel error logs** in **Error Logs** section
2. **Test with a simple .htaccess** first:
   ```apache
   RewriteEngine On
   RewriteRule ^test$ /index.html [L]
   ```
3. **Contact your hosting provider** - they may need to enable specific modules
4. **Try a different hosting provider** if they can't help

## 🌐 **Alternative Solutions for cPanel**

### **If .htaccess Still Doesn't Work:**

#### **Option 1: Use ErrorDocument**
Add this to your `.htaccess`:
```apache
ErrorDocument 404 /index.html
```

#### **Option 2: Use DirectoryIndex**
```apache
DirectoryIndex index.html
```

#### **Option 3: Use FallbackResource**
```apache
FallbackResource /index.html
```

## 📞 **Hosting Provider Support**

When contacting your hosting provider, ask them to:

1. **Enable mod_rewrite module**
2. **Set AllowOverride All** for your domain
3. **Verify .htaccess files are processed**
4. **Check Apache configuration** for your account

---

**Remember:** The `.htaccess` file is the key to fixing the 404 errors on cPanel. Make sure it's properly uploaded and recognized by your hosting environment.