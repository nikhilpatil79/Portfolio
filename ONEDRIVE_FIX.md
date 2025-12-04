# Exclude .next and node_modules from OneDrive sync

To fix the EPERM errors, you need to exclude the `.next` and `node_modules` folders from OneDrive sync:

## Option 1: Move Project Outside OneDrive (Recommended)

The best solution is to move your project to a non-OneDrive location:

```powershell
# Move project to C:\Projects
mkdir C:\Projects -ErrorAction SilentlyContinue
Move-Item "C:\Users\patil\OneDrive\Desktop\Portfolio" "C:\Projects\Portfolio"
cd C:\Projects\Portfolio
npm run dev
```

## Option 2: Exclude Folders from OneDrive Sync

If you must keep it in OneDrive, exclude these folders:

1. Right-click the `.next` folder → **Free up space** (this removes it from local sync)
2. Right-click the `node_modules` folder → **Free up space**
3. Or use PowerShell:

```powershell
# Mark folders as excluded from OneDrive
Set-ItemProperty -Path ".next" -Name Attributes -Value ([System.IO.FileAttributes]::NotContentIndexed)
Set-ItemProperty -Path "node_modules" -Name Attributes -Value ([System.IO.FileAttributes]::NotContentIndexed)
```

## Quick Fix (Temporary)

For now, let's try running with admin privileges:

```powershell
# Run as administrator
Start-Process powershell -Verb RunAs -ArgumentList "cd 'C:\Users\patil\OneDrive\Desktop\Portfolio'; npm run dev"
```

## After Fixing

Once you've moved the project or excluded the folders, run:

```bash
npm run dev
```

Your portfolio should then work perfectly at http://localhost:3000
