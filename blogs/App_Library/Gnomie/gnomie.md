---
title: Gnomie
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

<div class="view-counter" style="float:right; font-size:0.85em; color:#666;">
  👁️ {{ views.toLocaleString() }} views
</div>

# Gnomie

## [Dconf Editor](https://flathub.org/apps/ca.desrt.dconf-editor)

GUI to edit GSettings/Dconf database (advanced Gnome system settings).

**Flatpak (System)**

```bash
flatpak install flathub ca.desrt.dconf-editor
```

**Flatpak (User)**

```bash
flatpak install --user flathub ca.desrt.dconf-editor
```

**Disclaimer: If you think that some settings are missing in Dconf, install your distro’s package instead of the Flatpak**

**Debian/Ubuntu**

```bash
sudo apt install dconf-editor
```

**Fedora**

```bash
sudo dnf install dconf-editor
```

**Arch**

```bash
sudo pacman -S dconf-editor
```

## [Extension Manager](https://flathub.org/apps/com.mattjakeman.ExtensionManager)

GUI to modify Gnome Extensions.

**Flatpak (System)**

```bash
flatpak install flathub com.mattjakeman.ExtensionManager
```

**Flatpak (User)**

```bash
flatpak install --user flathub com.mattjakeman.ExtensionManager
```

## [Gnome Tweaks](https://github.com/GNOME/gnome-tweaks)

Change fonts, manage shell themes (requires `User Theme` extension), add hide and maximize buttons, and more!

**Debian/Ubuntu**

```bash
sudo apt install gnome-tweaks
```

**Fedora**

```bash
sudo dnf install gnome-tweaks
```

## [SaveDesktop](https://flathub.org/apps/io.github.vikdevelop.SaveDesktop)

Save your desktop configurations

**Flatpak (System)**

```bash
flatpak install flathub io.github.vikdevelop.SaveDesktop
```

**Flatpak (User)**

```bash
flatpak install flathub io.github.vikdevelop.SaveDesktop
```
