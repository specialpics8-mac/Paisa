# Paisa — Setup Guide

## Step 1: Google Apps Script (do this once, 5 mins)

1. Go to: https://sheets.google.com → Create a new blank spreadsheet → name it "Paisa"
2. In the spreadsheet, go to: Extensions → Apps Script
3. Delete everything in the editor
4. Open the file `Code.gs` from this folder → copy ALL of it → paste into Apps Script
5. Click Save (Ctrl+S)
6. Click Deploy → New Deployment
7. Type: Select type → Web App
8. Settings:
   - Description: Paisa Backend
   - Execute as: Me
   - Who has access: Anyone
9. Click Deploy → Authorize → Allow
10. Copy the Web App URL (looks like: https://script.google.com/macros/s/ABC.../exec)

## Step 2: GitHub Pages (do this once, 5 mins)

1. Go to github.com → Sign in → New repository
2. Name: paisa → Public → Create repository
3. Upload ALL files from this folder (index.html, manifest.json, sw.js, Code.gs, icons/)
4. Go to Settings → Pages → Source: Deploy from branch → main → / (root) → Save
5. Wait 2 minutes → your app is live at: https://yourusername.github.io/paisa

## Step 3: Install on your phone

### iPhone (Safari):
1. Open https://yourusername.github.io/paisa in Safari
2. Tap Share button → Add to Home Screen → Add
3. App appears on your home screen — opens fullscreen like a real app

### Android (Chrome):
1. Open the URL in Chrome
2. Chrome auto-prompts "Add to Home Screen" → tap Install
   OR tap ⋮ menu → Add to Home Screen

## Step 4: Connect Google Sheets

1. Open the app on your phone
2. You'll see a yellow banner "Connect to Google Sheets"
3. Paste your Web App URL from Step 1
4. Tap Connect → done, all expenses now sync to your Sheet

## How data survives a phone change

- All expenses live in your Google Sheet
- On your new phone: open the same GitHub Pages URL → install → paste the same Script URL
- App pulls all your data from the Sheet automatically
- Nothing is lost

## Offline behaviour

- Logging expenses: works offline (saved locally, syncs when back online)
- Viewing feed, buckets, money, insights: fully offline
- The app queues any expenses logged offline and syncs them automatically when internet returns
