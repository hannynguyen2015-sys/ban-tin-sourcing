# Hướng dẫn viết bài cho website Bản tin ngành Sourcing

Mỗi lần chạy, chỉ thêm **đúng 1 file** vào thư mục `_posts/`, rồi commit và push. Không sửa file nào khác.

## 1. Tên file

- Buổi sáng (7:30 giờ VN): `_posts/YYYY-MM-DD-sang.md`, ví dụ `_posts/2026-11-14-sang.md`
- Buổi chiều (16:30 giờ VN): `_posts/YYYY-MM-DD-chieu.md`, ví dụ `_posts/2026-11-14-chieu.md`
- Ngày trong tên file phải trùng ngày trong `date:`. Chữ thường, không dấu, không khoảng trắng.
- Nếu file cùng tên đã có thì không ghi đè; dừng lại và báo.

## 2. Mẫu 1 bài đầy đủ

```markdown
---
title: "Bản tin sáng 14/11/2026"
date: 2026-11-14 07:30:00 +0700
buoi: "Sáng"
chu_y: "Hạn đình công cảng LA/Long Beach bị lùi tới 20/11. Nên chốt lịch xuất hàng cho khách hàng Mỹ trước 20/11."
kpis:
  - label: "FBX Đông Á–Bờ Tây"
    value: "~8.200"
    change: "−1%"
    note: "USD/FEU"
  - label: "Hạn đình công LA/LB"
    value: "20/11"
    change: ""
    note: "ILWU Local 26 lùi hạn"
terms:
  - term: "FBX"
    full: "Freightos Baltic Index"
    desc: "Chỉ số cước container giao ngay toàn cầu."
  - term: "PFAS"
    full: ""
    desc: "Nhóm hóa chất \"vĩnh cửu\" thường dùng chống nước/bẩn trên vải."
ghi_chu: "Nguồn chưa quét được lần này: Sourcing Journal, VnEconomy."
---

## Tuân thủ & thuế quan

### Thu hồi CPSC: thảm vi phạm tiêu chuẩn cháy bắt buộc

Boshengya thu hồi thảm do nguy cơ cháy, vi phạm tiêu chuẩn bắt buộc của Mỹ (12/11).

> **Ảnh hưởng tới mình:** Với hàng trang trí/gia dụng, cần kiểm tra test báo cháy và giấy chứng nhận CPC từ nhà máy VN trước khi giao.

Nguồn: <https://www.cpsc.gov/Recalls/2027/Boshengya-Recalls-Rugs>

## Vận tải & cước

### Đình công LA/Long Beach lùi hạn tới 20/11

Công đoàn ILWU Local 26 lùi hạn đình công đến 20/11. FBX Đông Á–Bờ Tây ~8.200 USD/FEU (−1%).

> **Ảnh hưởng tới mình:** Rủi ro chậm hàng đi LA/LB cuối tháng 11; cân nhắc đẩy sớm lô hàng.

Nguồn: <https://www.freightos.com/freight-resources/la-lb-strike-deadline-extended/>

## Tin ngành

_Không có tin đủ liên quan trong lần này._

## Việt Nam

_Không có tin đủ liên quan trong lần này._
```

## 3. Mẫu bài "không có tin mới"

```markdown
---
title: "Bản tin chiều 14/11/2026"
date: 2026-11-14 16:30:00 +0700
buoi: "Chiều"
chu_y: "Không có tin mới đủ liên quan trong lần quét này."
khong_co_tin: true
kpis: []
terms: []
---
```

Không viết gì sau dòng `---` cuối. Trang tự hiện thông báo "không có tin mới".

## 4. Quy ước

**Front matter** (giữa hai dòng `---`, đầu file):

1. `title`: `"Bản tin sáng DD/MM/YYYY"` hoặc `"Bản tin chiều DD/MM/YYYY"`.
2. `date`: đúng dạng `YYYY-MM-DD 07:30:00 +0700` (sáng) hoặc `YYYY-MM-DD 16:30:00 +0700` (chiều). Không đặt trong ngoặc kép.
3. `buoi`: `"Sáng"` hoặc `"Chiều"`.
4. `chu_y`: một câu, điều cần chú ý nhất trong lần này.
5. `kpis`: 0 đến 4 ô số liệu, mỗi ô có đủ 4 khoá `label`, `value`, `change`, `note`. `change` là % thay đổi (ví dụ `"−2%"`, `"+3%"`), để `""` nếu không có. `note` là đơn vị hoặc ghi chú ngắn, để `""` nếu không có. Không có số liệu nào thì ghi `kpis: []`.
6. `terms`: thuật ngữ xuất hiện trong bài. Mỗi mục có `term`, `full` (tên đầy đủ tiếng Anh, `""` nếu không có), `desc` (giải thích tiếng Việt, một câu). Không có thì ghi `terms: []`. Viết cùng một thuật ngữ thì giữ đúng cách viết hoa như các bài trước (ví dụ luôn là `"FBX"`).
7. `khong_co_tin: true`: chỉ dùng khi cả 4 nhóm đều không có tin. Bài có tin thì bỏ hẳn dòng này.
8. `ghi_chu`: tuỳ chọn, một câu ghi nguồn chưa quét được. Không có thì bỏ dòng này.
9. Thụt lề bằng **2 dấu cách**, không dùng Tab. Mỗi mục list bắt đầu bằng `  - `.

**Cách viết giá trị trong YAML (bắt buộc):**

- Mọi giá trị chữ (`title`, `buoi`, `chu_y`, `label`, `value`, `change`, `note`, `term`, `full`, `desc`, `ghi_chu`) đều đặt trong **ngoặc kép** `"…"`. Nhờ vậy dấu hai chấm `:`, dấu `#`, dấu `%`, `&` bên trong câu đều an toàn: `chu_y: "Lưu ý: cước giảm 2%."`
- `value` luôn trong ngoặc kép, kể cả khi là số: `value: "7.416"`. Viết `value: 7.416` hay `value: 8.200` không có ngoặc sẽ bị đọc thành số và mất số 0 (thành `8.2`).
- Dấu ngoặc kép **bên trong** giá trị phải viết `\"`: `desc: "Nhóm hóa chất \"vĩnh cửu\"."`
- Dấu gạch chéo ngược bên trong giá trị viết `\\`. Dấu nháy đơn `'` viết bình thường.
- Không xuống dòng bên trong một giá trị.

**Thân bài** (sau dòng `---` thứ hai):

1. Luôn có đủ 4 nhóm, đúng thứ tự và đúng chữ:
   `## Tuân thủ & thuế quan`, `## Vận tải & cước`, `## Tin ngành`, `## Việt Nam`.
2. Mỗi tin gồm 4 phần, **cách nhau bằng một dòng trống**:
   - `### Tiêu đề tin` (một dòng, không đánh số; trang tự đánh số),
   - đoạn tóm tắt 1–3 câu,
   - `> **Ảnh hưởng tới mình:** …` (một dòng, dấu `:` nằm trong `**…**`),
   - `Nguồn: <https://…>` (link đầy đủ trong `< >`; nhiều nguồn thì `Nguồn: <https://a>, <https://b>`).
3. Thiếu dòng trống giữa dòng `>` và dòng `Nguồn:` thì dòng nguồn bị nuốt vào khung ảnh hưởng. Luôn để dòng trống.
4. Nhóm không có tin: dưới tiêu đề nhóm ghi đúng một dòng `_Không có tin đủ liên quan trong lần này._`
5. Không dùng `#` (h1), không dùng `####`, không chèn HTML, không chèn ảnh, không viết phần "thuật ngữ" trong thân bài (đã có `terms`).
6. Tiếng Việt có dấu đầy đủ.

**Nội dung công khai:**

- Trang mở công khai. Không ghi tên công ty mình hay tên khách hàng. Gọi khách là **"khách hàng Mỹ"**, gọi mình là **"mình"**.
- Mỗi tin phải có ít nhất một link nguồn thật.

## 5. Tự kiểm tra trước khi push

- Tên file đúng mẫu, ngày trong tên = ngày trong `date:`.
- File bắt đầu bằng `---` ở dòng 1 và có dòng `---` đóng front matter.
- Mọi giá trị chữ trong front matter nằm trong ngoặc kép; ngoặc kép bên trong đã viết `\"`.
- Đủ 4 dòng `## …` (trừ bài `khong_co_tin: true`).
- Mỗi `### …` có đủ tóm tắt, dòng `> **Ảnh hưởng tới mình:**` và dòng `Nguồn: <https://…>`, cách nhau bằng dòng trống.
- Commit message: `Bản tin sáng 14/11/2026` (hoặc chiều).
