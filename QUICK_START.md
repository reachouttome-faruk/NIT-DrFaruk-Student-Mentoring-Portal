# 🚀 Quick Start - Deploy to GitHub Pages

## One-Time Setup (5 minutes)

### 1️⃣ Download from Replit
- Click ⋮ menu → Download as zip
- Extract to your computer

### 2️⃣ Prepare Files
```bash
cd your-extracted-folder
mv package.github.json package.json
rm package-lock.json
npm install
```

### 3️⃣ Edit Repository Name
Open `vite.config.github.ts` and change:
```typescript
const REPO_NAME = 'your-actual-repo-name'; // ← Change this!
```

### 4️⃣ Create GitHub Repo
- Go to github.com/new
- Name: `nit-mentoring-portal` (or your choice)
- **Must be PUBLIC**
- Don't initialize with anything

### 5️⃣ Push Code
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### 6️⃣ Enable Deployment
GitHub → Settings → Actions → General:
- ✅ Read and write permissions → Save

GitHub → Settings → Pages:
- Source: **GitHub Actions** → Save

### 7️⃣ Done! 🎉
Wait 2-3 minutes, then visit:
```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

---

## Future Updates
```bash
# Make changes
git add .
git commit -m "Update message"
git push
```

Auto-deploys in ~2 minutes!

---

**Need detailed help?** See [GITHUB_DEPLOYMENT_GUIDE.md](./GITHUB_DEPLOYMENT_GUIDE.md)
