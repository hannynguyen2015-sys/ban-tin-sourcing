# Bản tin ngành Sourcing (website)

Site Jekyll chạy trên GitHub Pages bằng bản build có sẵn của GitHub (không plugin ngoài, không Actions).

- Bài mới: thêm 1 file vào `_posts/` theo `HUONG-DAN-VIET-BAI.md`.
- Bật Pages: Settings → Pages → Deploy from a branch → `main` / `(root)`.
- Repo tên `ban-tin-sourcing` (trang dự án): sửa `baseurl: "/ban-tin-sourcing"` trong `_config.yml`.
- Không cho máy tìm kiếm: mọi trang có `<meta name="robots" content="noindex">`; `robots.txt` chỉ có tác dụng khi site nằm ở gốc tên miền.

| File | Vai trò |
|---|---|
| `_layouts/default.html` | Khung trang, đầu và chân trang |
| `_layouts/post.html` | Trang mỗi bài, link bản trước / bản sau |
| `_includes/ban-tin.html` | Dựng một bản tin: khung chú ý, ô số liệu, cắt `##`/`###` thành nhóm và thẻ tin |
| `_includes/bang-thuat-ngu.html`, `_includes/ngay.html` | Bảng thuật ngữ, dòng ngày |
| `index.html` | Bản tin mới nhất + lưu trữ theo tháng + ô tìm |
| `thuat-ngu.html` | Gom thuật ngữ mọi bài, bỏ trùng, A–Z |
| `search.json`, `assets/js/search.js` | Dữ liệu và mã tìm kiếm phía trình duyệt |
| `assets/css/site.css` | Toàn bộ giao diện, token màu sáng/tối ở đầu file |
