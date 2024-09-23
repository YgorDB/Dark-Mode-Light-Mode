let darkmode = localStorage.getItem('darkmode')
    const ThemeMode = document.getElementById('dark-mode')

    const AtivarDarkMode = () => {
        document.body.classList.add('darkmode')
        localStorage.setItem('darkmode', 'active')
        ThemeMode.classList.replace('bi-moon-fill', 'bi-brightness-high')
    }

    const DesativarDarkMode = () => {
        document.body.classList.remove('darkmode')
        localStorage.setItem('darkmode', null)
        ThemeMode.classList.replace('bi-brightness-high', 'bi-moon-fill')
    }

    if(darkmode === "active") AtivarDarkMode()

    ThemeMode.addEventListener("click", () => {
        darkmode = localStorage.getItem('darkmode')
        darkmode !== "active" ? AtivarDarkMode() : DesativarDarkMode()
    })