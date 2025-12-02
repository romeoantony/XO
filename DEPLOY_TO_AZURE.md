# ☁️ Deploy to Azure Guide

This guide covers two ways to deploy your React application to Microsoft Azure:

1. **Azure Static Web Apps** (Recommended for modern SPAs, Free tier available)
2. **Azure App Service** (Traditional hosting, Windows/Linux)

---

## Option 1: Azure Static Web Apps (Recommended)

This is the easiest and most cost-effective way to host a React app on Azure.

### Prerequisites

- GitHub account with your code pushed to a repository.
- Azure account (Free tier is sufficient).

### Steps via Azure Portal

1. **Create Resource**:

   - Log in to [Azure Portal](https://portal.azure.com).
   - Search for **"Static Web Apps"** and click **Create**.

2. **Configure**:

   - **Subscription**: Select your subscription.
   - **Resource Group**: Create new (e.g., `rg-xo-game`).
   - **Name**: `xo-game-static` (or similar).
   - **Plan Type**: `Free` (for personal projects) or `Standard`.
   - **Deployment details**: Select **GitHub**.
   - **Authorize**: Click to authorize Azure to access your GitHub account.
   - **Organization/Repository/Branch**: Select `romeoantony`, `XO`, and `main`.

3. **Build Details**:

   - **Build Presets**: Select `React`.
   - **App location**: `/` (root).
   - **Api location**: (Leave empty).
   - **Output location**: `dist`.

4. **Review + Create**:

   - Click **Review + create**, then **Create**.

5. **Wait & Verify**:
   - Azure will automatically create a GitHub Actions workflow in your repo (e.g., `.github/workflows/azure-static-web-apps-...yml`).
   - Wait for the deployment to finish (check the "Actions" tab in GitHub).
   - Click the **URL** in the Azure resource overview to see your live site!

---

## Option 2: Azure App Service (Windows/IIS)

Use this if you need a full server environment or are already using App Service Plans.

### Prerequisites

- [Azure Tools Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack) for VS Code (optional but recommended).
- Or use the Azure Portal.

### Steps via VS Code (Azure Extension)

1. **Build the App**:
   Run the build command locally to generate the `dist` folder.

   ```bash
   npm run build
   ```

2. **Deploy**:

   - Open the **Azure** extension tab in VS Code.
   - Under **App Service**, right-click your subscription and select **Create New Web App... (Advanced)**.
   - **Name**: Unique name (e.g., `xo-game-romeo`).
   - **Runtime Stack**: `Node 18 LTS` (or newer).
   - **OS**: `Windows` (Important: We added `web.config` for Windows IIS routing).
   - **Resource Group**: Create new.
   - **App Service Plan**: Create new (Select `F1` Free tier if available, or `B1`).

3. **Deploy Code**:
   - Once created, right-click the new Web App in the list and select **Deploy to Web App...**.
   - Select the **`dist`** folder (inside your project).
   - Click **Yes** to update your workspace configuration if asked.
   - Watch the output window. Once finished, click **Browse Website**.

### Important Note for App Service

We have added a `web.config` file to the `public` folder. This file is automatically copied to `dist` during build and ensures that refreshing a page (like `/game`) doesn't give a 404 error on Windows App Service.

---

## Troubleshooting

### "Page Not Found" on Refresh

- **Static Web Apps**: Ensure `staticwebapp.config.json` is in the root of your deployed site (it should be in `dist`).
- **App Service**: Ensure `web.config` is present in the `dist` folder and you are running on Windows. For Linux App Service, you need a startup command (e.g., `pm2 serve /home/site/wwwroot/dist --no-daemon --spa`).

### Build Fails

- Check your `vite.config.js`. It should have `base: '/'` (which we have configured).
- Check GitHub Actions logs for specific error messages.
