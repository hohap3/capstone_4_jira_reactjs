# Cấu trúc thư mục của reactjs

- **API:** Nơi chứa đựng các API làm việc với server
- **assets:** Nơi chứa các mục ảnh, âm thanh, videos....
- **components:** Nơi chứa các components tái sử dụng trong dự án
- **config:** Nơi chứa các file config như **_configureStore,rootSaga_**
- **constants:** Nơi chứa các type, constant
- **hooks:** Nơi chứa các hook, custom hook
- **layouts:** Nơi chứa layout khác
- **pages:** Nơi chứa các của pages, ví dụ: Home, Contact,...
- **routes:** Nơi chứa các routes của dự án
- **redux:** Nơi chứa các mục redux của dự án - Slice là mục chứa các tệp liên quan đến redux toolkit - Saga là mục chứa các tệp liên quan đến Redux Saga
- **utils:** Nơi chứa các hàm xử lý logic chung
- **schemas:** Nơi chứa schema dùng để xử lý validation
- **thunks:** Nơi lưu trữ thunk
- **HOCS:** Nơi lưu trữ Higher Order Component (Tái sử dụng lại logic component)
- **styles:** Noi lưu trữ file scss chung

# Hướng dẫn khởi chạy dự án

### Khởi chạy dự án reactjs:

1. Mở terminal
2. yarn dev

# Hướng dẫn khởi tạo dự án vitejs

Vitejs là 1 công cụ build web cực kỳ nhanh và cập nhật nhanh chóng các thay đổi trong mã nguồn của bạn, mà không cần phải tải lại trang web hoặc khởi động lại ứng dụng. Giảm thiểu thời gian tải trang của ứng dụng, và pre-rendering, cho phép bạn tạo ra các trang web tĩnh với thời gian phản hồi nhanh và tối ưu hóa SEO.

```
  yarn create vite
```

### Lưu ý khi cài đặt

- **Project name:** Tên của dự án
- **Package name:** Tên gói dự án (để mặc định)
- **Select a framework:** Nếu là dự án react thì chọn react
- **Select a variant**: Tại đây chọn JavaScript
  **_=> Chạy tiếp dòng lệnh mà vitejs hiện ra. Now run: ...._**

# Cài đặt các thư viện cần thiết

## Sass (dùng để viết scss)

```
  yarn add node-sass
```

## axios (thư viện hỗ trợ API)

```
  yarn add axios
```

## tailwind css dùng vitejs (thư viện giúp viết CSS dễ hơn)

```
  yarn add tailwindcss postcss autoprefixer
  npx tailwindcss init -p
```

## config tailwind css

```
  content: ["./src/**/*.{html,js}"],
```

## config tailwind css vitejs

```
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

### import tailwind css

```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```

## yup (thư viện giúp validation form)

```
  yarn add yup
```

## react-hook-form (quản lý form)

```
  yarn add react-hook-form
```

## yup hook-form (validation với yup dành cho react-hook-form)

```
  yarn add @hookform/resolvers
```

## material UI (thư viện UI)

```
  yarn add  @mui/material @emotion/react @emotion/styled
```

## Ant Design (thư viện UI)

```
  yarn add antd
```

## loading skeleton

```
  yarn add react-loading-skeleton
```

## momentJS (Format lại date)

```
  yarn add moment
```

## clsx (thư viện nối chuỗi)

```
  yarn add clsx
```

## react-toastify (thư viện hiển thị alert dạng toast)

```
  yarn add react-toastify
```

## @mui/icons-material (thư viện icon của MUI)

```
  yarn add @mui/icons-material
```

## @reduxjs/toolkit (thư viện quản lý redux)

```
  yarn add @reduxjs/toolkit
```

## react-redux (sử dụng redux trong react)

```
  yarn add react-redux
```

## react-router-dom (thư viện điều hướng)

```
  yarn add react-router-dom
```

## sweetalert2

```
  yarn add sweetalert2
```

## animate.css

```
  yarn add animate.css
```
