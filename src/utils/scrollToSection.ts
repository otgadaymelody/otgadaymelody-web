export function scrollToSection (hash: string): void {
    window.scrollTo({
    top: document.getElementById(hash.replace('#', ''))?.offsetTop,
    behavior: 'smooth'
  })
}

