# 🚀 Deployment Guide for XO Game

This guide provides step-by-step instructions for deploying your XO Game to GitHub Pages.

## 📋 Prerequisites

Before you begin, make sure you have:
- A GitHub account
- Git installed on your computer
- The XO Game project on your local machine

## 🎯 Recommended Method: GitHub Actions (Automatic Deployment)

This is the **easiest and most recommended** method. Your app will automatically deploy whenever you push changes to GitHub.

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Name your repository **"XO"** (or any name you prefer)
5. Make it **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **"Create repository"**

### Step 2: Update Configuration

1. Open `package.json` in your project
2. Update the `homepage` field with your GitHub username:
   ```json
   "homepage": "https://YOUR_GITHUB_USERNAME.github.io/XO"
   ```

3. Open `vite.config.js`
4. Make sure the `base` matches your repository name:
   ```javascript
   base: '/XO/'
   ```

### Step 3: Initialize Git and Push to GitHub

Open your terminal in the project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit: XO Game ready for deployment"

# Rename branch to main
git branch -M main

# Add your GitHub repository as remote (replace YOUR_USERNAME and YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/XO.git

# Push to GitHub
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top menu)
3. Scroll down and click on **Pages** (left sidebar)
4. Under **Source**, select **"GitHub Actions"**
5. The workflow will automatically start deploying your app!

### Step 5: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see the deployment workflow running
3. Wait for it to complete (usually takes 1-2 minutes)
4. Once complete, your app will be live!

### Step 6: Access Your App

Your app will be available at:
```
https://YOUR_GITHUB_USERNAME.github.io/XO
```

## 🔄 Making Updates

After the initial deployment, any time you want to update your app:

```bash
# Make your changes to the code

# Stage the changes
git add .

# Commit the changes
git commit -m "Description of your changes"

# Push to GitHub
git push

# GitHub Actions will automatically deploy the updates!
```

## 🛠️ Alternative Method 1: Using gh-pages Package

If you prefer manual deployment:

### Step 1: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json

Make sure your `package.json` has:
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/XO",
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

### Step 3: Deploy

```bash
npm run deploy
```

### Step 4: Configure GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select **"Deploy from a branch"**
3. Select the **gh-pages** branch
4. Click **Save**

## 🌐 Alternative Method 2: Other Hosting Platforms

### Netlify

1. Go to [Netlify](https://www.netlify.com/)
2. Sign up/Login with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Select your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **"Deploy site"**

### Vercel

1. Go to [Vercel](https://vercel.com/)
2. Sign up/Login with GitHub
3. Click **"Add New"** → **"Project"**
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click **"Deploy"**

### Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Sign up/Login
3. Click **"Create a project"**
4. Connect your GitHub account
5. Select your repository
6. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
7. Click **"Save and Deploy"**

## 🔍 Troubleshooting

### Issue: 404 Error on Deployed Site

**Solution:** Make sure the `base` in `vite.config.js` matches your repository name:
```javascript
base: '/XO/'  // Must match your repo name with slashes
```

### Issue: Blank Page After Deployment

**Solution:** Check the browser console for errors. Usually this is a path issue. Verify:
1. `homepage` in `package.json` is correct
2. `base` in `vite.config.js` is correct
3. Both should match your repository name

### Issue: GitHub Actions Workflow Failing

**Solution:**
1. Check the Actions tab for error details
2. Make sure you've enabled GitHub Pages with "GitHub Actions" as source
3. Verify your workflow file is in `.github/workflows/deploy.yml`

### Issue: Changes Not Showing After Push

**Solution:**
1. Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Wait a few minutes for GitHub Pages to update
3. Check the Actions tab to ensure deployment completed

## 📞 Need Help?

If you encounter any issues:
1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review the [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)
3. Open an issue in the repository

## ✅ Deployment Checklist

Before deploying, make sure:
- [ ] Updated `homepage` in `package.json` with your GitHub username
- [ ] Updated `base` in `vite.config.js` to match repository name
- [ ] Committed all changes
- [ ] Created GitHub repository
- [ ] Pushed code to GitHub
- [ ] Enabled GitHub Pages in repository settings
- [ ] Waited for GitHub Actions to complete

---

**Happy Deploying! 🎉**
