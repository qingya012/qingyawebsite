// 获取元素
const menuIcon = document.getElementById("menu-icon");
const sidebar = document.getElementById("sidebar");

// 点击图标切换目录状态
menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("open"); // 添加/移除 'open' 类
});

// 点击目录外关闭目录（可选）
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && e.target !== menuIcon) {
    sidebar.classList.remove("open");
  }
});