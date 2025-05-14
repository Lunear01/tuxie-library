---
title: Essentials
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

# Essentials

## [Flatseal](https://flathub.org/apps/com.github.tchx84.Flatseal)

GUI to modify Flatpak permissions

**Flatpak (System)**

```bash
flatpak install flathub com.github.tchx84.Flatseal
```

**Flatpak (User)**

```bash
flatpak install --user flathub com.github.tchx84.Flatseal
```

## [Timeshift](https://github.com/linuxmint/timeshift)

Create snapshots of your computer, especially if you use Arch.

**SELinux Compatibility**

If you want to use Timeshift with SELinux, you might want to set SELinux mode from “enforcing” to “permissive” to enable proper function among kernel versions.

**Go to the file `/etc/selinux/config`, scroll down and set SELinux to "permissive."**

```bash
# SELINUX=enforcing
SELINUX=permissive
```

**Debian/Ubuntu**

```bash
sudo apt-get timeshift
```

**Fedora**

```bash
sudo dnf install timeshift
```

**Arch**

```bash
sudo pacman -S timeshift
```
