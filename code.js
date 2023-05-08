document.addEventListener("click", e => {
    const isLangDropdown = e.target.matches("[lang-dropdown-button]")
    if (!isLangDropdown && e.target.closest("[lang-dropdown]") != null) return
  
    let currentLangDropdown
    if (isLangDropdown) {
      currentLangDropdown = e.target.closest("[lang-dropdown]")
      currentLangDropdown.classList.toggle("active")
    }
  
    document.querySelectorAll("[lang-dropdown].active").forEach(language => {
      if (language === currentLangDropdown) return
      language.classList.remove("active")
    })
  })

  document.addEventListener("click", e => {
    const isNavDropdown = e.target.matches("[nav-dropdown-button")
    if (!isNavDropdown && e.target.closest("[nav-dropdown]") != null) return
  
    let currentNavDropdown
    if (isNavDropdown) {
      currentNavDropdown = e.target.closest("[nav-dropdown]")
      currentNavDropdown.classList.toggle("active")
    }
  
    document.querySelectorAll("[nav-dropdown].active").forEach(language => {
      if (nav-item === currentNavDropdown) return
      nav-item.classList.remove("active")
    })
  })
