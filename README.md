# Portfolio — Nguyễn Thị Tài Linh

Portfolio UI/UX đa trang cho doanh nghiệp xem hồ sơ thiết kế của **Nguyễn Thị Tài Linh**.

## Chạy local

```bash
npm install
npm run dev
```

Mở `http://127.0.0.1:5173`

## Trang

- `/` — Home (hero, stats, dự án nổi bật, principles, CTA)
- `/work` — Gallery lọc theo UI/UX · Graphic · Packaging
- `/work/:id` — Case study chi tiết
- `/about` — Tiểu sử, học vấn, thực tập Onset & Figma, kỹ năng
- `/contact` — Form liên hệ + thông tin đầy đủ

## Chỉnh nội dung

Sửa file `src/data/content.ts` (thông tin cá nhân, dự án, skills).

Thay ảnh cover dự án thật vào `public/images/` rồi cập nhật đường dẫn trong data.
