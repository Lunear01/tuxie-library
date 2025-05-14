---
title: Editor's Choice
date: 2025/04/30
categories:
 - App Library
---
<!-- View Counter with Google Analytics as backend -->
<script setup>
import { ref, onMounted } from 'vue'

const views = ref(0)

onMounted(() => {
  // Initialize GA4
  if (typeof window.gtag === 'undefined') {
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-LCT48BR4CV'
    document.head.appendChild(script)
    
    window.dataLayer = window.dataLayer || []
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date())
    gtag('config', 'G-LCT48BR4CV')
  }

  // Client-side counter (fallback)
  const key = `views-${window.location.pathname}`
  views.value = parseInt(localStorage.getItem(key)) || 0
  views.value++
  localStorage.setItem(key, views.value)
})
</script>

<!-- <div class="view-counter" style="float:right; font-size:0.85em; color:#666;">
  👁️ {{ views.toLocaleString() }} views
</div> -->

# Editor's Choice

## [Nautilus (File Manager)](https://apps.gnome.org/Nautilus/)

The clean, functional, and blazing fast file manager by Gnome

**Debian/Ubuntu**

```bash
sudo apt install nautilus
```

**Fedora**

```bash
sudo dnf install nautilus
```

**Arch**

```bash
sudo pacman -S nautilus
```

## [Spotube](https://flathub.org/apps/com.github.KRTirtho.Spotube)

Spotify/Youtube Music client + downloader

**Flatpak (System)**

```bash
flatpak install flathub com.github.KRTirtho.Spotube
```

**Flatpak (User)**

```bash
flatpak install --user flathub dev.vencord.Vesktop
```

## [Vesktop](https://flathub.org/apps/dev.vencord.Vesktop)

Discord with screen sharing and audio support, as well as Vencord inbuilt

**Flatpak (System)**

```bash
flatpak install flathub dev.vencord.Vesktop
```

**Flatpak (User)**

```bash
flatpak install --user flathub dev.vencord.Vesktop
```

Note:
If you do not care about Discord Rich Presence (DRP), proceed with the Flatpak installation.

If you do want DRP, check out [Vesktop’s Github Releases](https://github.com/Vencord/Vesktop/releases) and download the package for your respective distribution

## [Waydroid](https://docs.waydro.id/usage/install-on-desktops)

Run Android on Linux!

Find out about installation details on the link above

**Debian/Ubuntu**

```bash
sudo apt install curl ca-certificates -y
curl https://repo.waydro.id | sudo bash
sudo apt install waydroid -y
```

**Fedora**

```bash
sudo dnf install waydroid
```

**Arch (AUR)**

```bash
sudo yay -S waydroid
```

## [Zen Browser](https://flathub.org/apps/app.zen_browser.zen)

From Zen: “Zen is the best way to browse the web. Beautifully designed, privacy-focused, and packed with features. We care about your experience, not your data.”

**Flatpak (System)**

```bash
flatpak install flathub app.zen_browser.zen
```

**Flatpak (User)**

```bash
flatpak install --user flathub app.zen_browser.zen
```

**Arch (AUR)**

```bash
yay -S zen-browser-bin
```
