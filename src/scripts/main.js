// スクロールアニメーション
const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "translate-x-0");
        entry.target.classList.remove("opacity-0", "-translate-x-20");
      }
    });
  }, observerOptions);

  // 全てのservice-cardを監視
  document.querySelectorAll(".service-card").forEach((card) => {
    observer.observe(card);
  });
};

// DOMが読み込まれたら実行
document.addEventListener("DOMContentLoaded", initScrollAnimations);
