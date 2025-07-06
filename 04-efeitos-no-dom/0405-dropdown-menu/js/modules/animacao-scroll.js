export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((item) => {
        const sectionTop = item.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) item.classList.add('ativo');
        else item.classList.remove('ativo');
      });
    }

    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
