export type ProjectCategory = 'packaging' | 'social' | 'graphic' | 'editorial' | 'illustration'

export interface GalleryItem {
  src: string
  caption?: string
}

export interface GalleryGroup {
  title: string
  layout?: 'mockups' | 'cover' | 'months' | 'default'
  items: GalleryItem[]
}

export interface Project {
  id: string
  title: string
  subtitle: string
  category: ProjectCategory
  categoryLabel: string
  cover: string
  gallery: string[]
  /** Optional sectioned gallery (e.g. mockups + 12 months). Lightbox still uses `gallery`. */
  galleryGroups?: GalleryGroup[]
  year: string
  tools: string[]
  summary: string
  challenge: string
  process: string[]
  outcome: string
  highlights: { label: string; value: string }[]
}

/** Prefer WebP when available — paths without extension are resolved in UI via <picture>. */
const w = (path: string) => path.replace(/\.(jpg|jpeg|png)$/i, '.webp')

export const profile = {
  name: 'Nguyễn Thị Tài Linh',
  shortName: 'Tài Linh',
  title: 'UI/UX Designer',
  birth: '02/09/2005',
  phone: '0836981446',
  email: 'nguyenthitailinhwork@gmail.com',
  location: 'Hoà Quý, Ngũ Hành Sơn, Đà Nẵng',
  portrait: '/images/logo.jpg',
  portraitWebp: '/images/logo.webp',
  avatar: '/images/avatar.jpg',
  avatarWebp: '/images/avatar.webp',
  tagline: 'Thiết kế giao diện lấy người dùng làm trung tâm',
  intro:
    'UI/UX Designer với nền tảng Digital Art Design, từng thực tập Graphic Design tại Onset Marketing và Figma. Tôi kết hợp thẩm mỹ thị giác với tư duy trải nghiệm để tạo sản phẩm số rõ ràng, đẹp và dễ dùng.',
}

export const education = {
  school: 'Vietnam – Korea University of Information and Communication Technology',
  schoolShort: 'VKU',
  major: 'Digital Art Design',
  gpa: '3.7',
}

export const experiences = [
  {
    company: 'Onset Marketing Company',
    role: 'Graphic Design Intern',
    period: '6/2025 – 9/2025',
    bullets: [
      'Thiết kế tài liệu truyền thông online và offline: banner, poster, visual mạng xã hội.',
      'Phối hợp cùng team Marketing để giữ nhất quán nhận diện thương hiệu.',
      'Hoàn thành nhiều dự án đúng deadline theo quy trình doanh nghiệp thực tế.',
    ],
  },
  {
    company: 'Figma',
    role: 'Graphic / UI Design Intern',
    period: 'Thực tập',
    bullets: [
      'Làm việc với hệ thống design hiện đại, quy trình cộng tác và prototype trong Figma.',
      'Rèn luyện tư duy component, visual hierarchy và giao diện sản phẩm số.',
      'Áp dụng tiêu chuẩn thiết kế chuyên nghiệp vào wireframe và UI flows.',
    ],
  },
]

export const skills = {
  design: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Claude Design'],
  web: ['HTML', 'CSS', 'PHP cơ bản', 'Responsive Web Design', 'Google Docs', 'Excel'],
  soft: [
    'Giao tiếp',
    'Làm việc nhóm',
    'Quản lý thời gian',
    'Làm việc dưới áp lực',
    'Tiếng Anh: Basic',
  ],
}

export const goals = {
  short:
    'Tham gia môi trường năng động qua kỳ thực tập để nâng cao kinh nghiệm thực tế về UI/UX: user research, wireframing, prototyping và thiết kế giao diện website/ứng dụng.',
  long: 'Trở thành UI/UX Designer chuyên sâu, tạo trải nghiệm số trực quan, lấy người dùng làm trung tâm — kết hợp usability, chức năng và thẩm mỹ hiện đại.',
}

const kinhDoGallery = [
  '/images/work/kinh-do/kinh-do-09.jpg',
  '/images/work/kinh-do/kinh-do-10.jpg',
  '/images/work/kinh-do/kinh-do-15.jpg',
  '/images/work/kinh-do/kinh-do-11.jpg',
  '/images/work/kinh-do/kinh-do-05.jpg',
  '/images/work/kinh-do/kinh-do-01.jpg',
  '/images/work/kinh-do/kinh-do-02.jpg',
  '/images/work/kinh-do/kinh-do-06.jpg',
  '/images/work/kinh-do/kinh-do-07.jpg',
  '/images/work/kinh-do/kinh-do-08.jpg',
  '/images/work/kinh-do/kinh-do-13.jpg',
]

const calendarGalleryGroups: GalleryGroup[] = [
  {
    title: 'Mockup thành phẩm',
    layout: 'mockups',
    items: [
      { src: '/images/work/calendar/calendar-mock-1.jpg', caption: 'Góc chính · lịch để bàn' },
      { src: '/images/work/calendar/calendar-mock-2.jpg', caption: 'Chi tiết lò xo & trang tháng' },
      { src: '/images/work/calendar/calendar-mock-3.jpg', caption: 'Góc nghiêng trên bàn' },
      { src: '/images/work/calendar/calendar-mock-4.jpg', caption: 'Cận cảnh minh họa' },
    ],
  },
  {
    title: 'Bìa lịch',
    layout: 'cover',
    items: [
      {
        src: '/images/work/calendar/calendar-01.jpg',
        caption: 'Hương Sắc Việt Nam · Bính Ngọ 2026',
      },
    ],
  },
  {
    title: '12 tháng đầy đủ',
    layout: 'months',
    items: [
      { src: '/images/work/calendar/calendar-02.jpg', caption: 'Tháng 01 · Hà Nội' },
      { src: '/images/work/calendar/calendar-03.jpg', caption: 'Tháng 02 · Sa Pa' },
      { src: '/images/work/calendar/calendar-04.jpg', caption: 'Tháng 03 · Ninh Bình' },
      { src: '/images/work/calendar/calendar-05.jpg', caption: 'Tháng 04 · Nghệ An' },
      { src: '/images/work/calendar/calendar-06.jpg', caption: 'Tháng 05 · Huế' },
      { src: '/images/work/calendar/calendar-07.jpg', caption: 'Tháng 06 · Đà Nẵng' },
      { src: '/images/work/calendar/calendar-08.jpg', caption: 'Tháng 07 · Hội An' },
      { src: '/images/work/calendar/calendar-09.jpg', caption: 'Tháng 08 · Nha Trang' },
      { src: '/images/work/calendar/calendar-10.jpg', caption: 'Tháng 09 · Tây Nguyên' },
      { src: '/images/work/calendar/calendar-11.jpg', caption: 'Tháng 10 · Đà Lạt' },
      { src: '/images/work/calendar/calendar-12.jpg', caption: 'Tháng 11 · Cần Thơ' },
      { src: '/images/work/calendar/calendar-13.jpg', caption: 'Tháng 12 · TP. Hồ Chí Minh' },
    ],
  },
]

const calendarGallery = calendarGalleryGroups.flatMap((g) => g.items.map((i) => i.src))

const kiengLaGallery = [
  '/images/work/kieng-la/kieng-la-keyvisual.jpg',
  '/images/work/kieng-la/kieng-la-artboard-11.jpg',
  '/images/work/kieng-la/kieng-la-artboard-21.jpg',
  '/images/work/kieng-la/kieng-la-artboard-31.jpg',
  '/images/work/kieng-la/kieng-la-artboard-41.jpg',
  '/images/work/kieng-la/kieng-la-standee.jpg',
  '/images/work/kieng-la/kieng-la-bingsu.jpg',
  '/images/work/kieng-la/kieng-la-canhchua.jpg',
  '/images/work/kieng-la/kieng-la-gre.jpg',
  '/images/work/kieng-la/kieng-la-pkien.jpg',
]

const somogoldGallery = [
  '/images/work/somogold/somogold-poster.jpg',
  '/images/work/somogold/somogold-brochure-out.jpg',
  '/images/work/somogold/somogold-brochure-in.jpg',
]

const magazineGallery = [
  '/images/work/magazine/magazine-cover.jpg',
  '/images/work/magazine/magazine-mock-1.jpg',
  '/images/work/magazine/magazine-mock-2.jpg',
  '/images/work/magazine/magazine-mock-3.jpg',
  '/images/work/magazine/magazine-page-1.jpg',
  '/images/work/magazine/magazine-page-2.jpg',
  '/images/work/magazine/magazine-page-3.jpg',
  '/images/work/magazine/magazine-page-4.jpg',
  '/images/work/magazine/magazine-mock-4.jpg',
  '/images/work/magazine/magazine-mock-5.jpg',
]

const cayTreGallery = [
  '/images/work/cay-tre/cay-tre-cover.jpg',
  '/images/work/cay-tre/cay-tre-1-2.jpg',
  '/images/work/cay-tre/cay-tre-3-4.jpg',
  '/images/work/cay-tre/cay-tre-11-12.jpg',
  '/images/work/cay-tre/cay-tre-13-14.jpg',
  '/images/work/cay-tre/cay-tre-15-16.jpg',
  '/images/work/cay-tre/cay-tre-17-18.jpg',
  '/images/work/cay-tre/cay-tre-19-20.jpg',
  '/images/work/cay-tre/cay-tre-21-22.jpg',
  '/images/work/cay-tre/cay-tre-23-24.jpg',
  '/images/work/cay-tre/cay-tre-25-26.jpg',
  '/images/work/cay-tre/cay-tre-27-28.jpg',
]

const tatDenGallery = [
  '/images/work/tat-den/tat-den-mockup.jpg',
  '/images/work/tat-den/tat-den-cover.jpg',
]

const studyAppGallery = [
  '/images/work/study-app/study-app-01.png',
  '/images/work/study-app/study-app-02.png',
  '/images/work/study-app/study-app-03.png',
  '/images/work/study-app/study-app-04.png',
  '/images/work/study-app/study-app-05.png',
  '/images/work/study-app/study-app-06.png',
]

export const projects: Project[] = [
  {
    id: 'study-app',
    title: 'Study App',
    subtitle: 'UI/UX ứng dụng học tập — flow onboarding, home & profile',
    category: 'graphic',
    categoryLabel: 'Graphic Design',
    cover: '/images/work/study-app/study-app-01.png',
    gallery: studyAppGallery,
    year: '2026',
    tools: ['Figma', 'UI/UX', 'Prototyping'],
    summary:
      'Thiết kế giao diện ứng dụng học tập di động: flow onboarding, trang chủ, danh sách khoá học và hồ sơ người dùng — toàn bộ 6 màn hình chính trong Figma.',
    challenge:
      'Xây dựng hệ thống navigation rõ ràng, component nhất quán và hierarchy thông tin giúp người mới dùng hiểu được luồng học trong vài giây đầu tiên.',
    process: [
      'Sketch wireframe và xác định user flow: onboarding → home → khoá học → profile.',
      'Thiết kế 6 màn hình chính trong Figma với system màu, typography và icon đồng bộ.',
      'Prototype tương tác để kiểm tra cảm giác điều hướng và chỉnh iterate theo nhận xét.',
    ],
    outcome: 'Bộ UI 6 màn hình hoàn chỉnh, sẵn sàng trình bày cho đây là case study UI/UX trong portfolio.',
    highlights: [
      { label: 'Type', value: 'Mobile App' },
      { label: 'Screens', value: `${studyAppGallery.length}` },
      { label: 'Focus', value: 'UI/UX' },
    ],
  },
  {
    id: 'kinh-do-nguyet-vien',
    title: 'Kinh Đô — Tết Nguyệt Viên',
    subtitle: 'Packaging bánh trung thu & hệ nhận diện mùa lễ',
    category: 'packaging',
    categoryLabel: 'Packaging',
    cover: '/images/work/kinh-do/kinh-do-09.jpg',
    gallery: kinhDoGallery,
    year: '2025 – 2026',
    tools: ['Illustrator', 'Photoshop'],
    summary:
      'Bộ bao bì, poster, túi giấy và collateral cho BST bánh trung thu Kinh Đô “Tết Nguyệt Viên” — họa tiết lân, hạc, thỏ và ánh trăng đoàn viên.',
    challenge:
      'Giữ tinh thần thương hiệu Kinh Đô vừa sang trọng mùa lễ hội, vừa rõ hierarchy thông tin trên nhiều bề mặt (hộp, túi, poster, brochure).',
    process: [
      'Nghiên cứu motif Trung thu Việt và hệ màu xanh – hồng – vàng.',
      'Thiết kế nắp hộp, hộp trong, nhãn và mockup 3D.',
      'Mở rộng sang poster, brochure, túi giấy và voucher đồng bộ.',
    ],
    outcome:
      'Hệ packaging hoàn chỉnh với mockup thật, đủ asset để trình bày thương mại và portfolio.',
    highlights: [
      { label: 'Brand', value: 'Kinh Đô' },
      { label: 'Assets', value: `${kinhDoGallery.length}+` },
      { label: 'Type', value: 'Packaging' },
    ],
  },
  {
    id: 'huong-sac-viet-nam',
    title: 'Hương Sắc Việt Nam 2026',
    subtitle: 'Lịch để bàn minh họa địa danh & ẩm thực Việt',
    category: 'editorial',
    categoryLabel: 'Editorial',
    cover: '/images/work/calendar/calendar-mock-1.jpg',
    gallery: calendarGallery,
    galleryGroups: calendarGalleryGroups,
    year: '2026',
    tools: ['Illustrator', 'Photoshop'],
    summary:
      'Bộ lịch để bàn chủ đề “Hương Sắc Việt Nam” (Bính Ngọ 2026): bìa + đủ 12 tháng theo địa danh & ẩm thực Việt, kèm 4 mockup thành phẩm in.',
    challenge:
      'Mỗi tháng cần một nhịp thị giác riêng nhưng vẫn thuộc cùng một ngôn ngữ minh họa và typography.',
    process: [
      'Xây dựng key visual bìa và hệ mây trang trí.',
      'Minh họa đủ 12 tháng theo hành trình Bắc → Nam.',
      'Mockup lịch lò xo để kiểm tra cảm giác thành phẩm.',
    ],
    outcome: 'Full set 12 tháng + bìa + mockup sẵn sàng trình bày in ấn / NXB.',
    highlights: [
      { label: 'Format', value: 'Desk calendar' },
      { label: 'Months', value: '12/12' },
      { label: 'Assets', value: `${calendarGallery.length}` },
    ],
  },
  {
    id: 'kieng-la-hotpot',
    title: 'Kiêng Là Hot Pot',
    subtitle: 'Key visual & social F&B — campaign Quốc Khánh',
    category: 'social',
    categoryLabel: 'Social',
    cover: '/images/work/kieng-la/kieng-la-keyvisual.jpg',
    gallery: kiengLaGallery,
    year: '2025',
    tools: ['Photoshop', 'Illustrator', 'Canva'],
    summary:
      'Hệ visual mạng xã hội và standee cho nhà hàng lẩu: key visual lễ 2/9, món ăn, artboard đa format.',
    challenge:
      'Layout F&B đông thông tin nhưng vẫn nổi CTA khuyến mãi và giữ nhận diện đỏ – vàng mạnh.',
    process: [
      'Cắt ghép food photography, dựng depth và badge ưu đãi.',
      'Adapt đa kích thước: feed, standee, artboard.',
      'Đồng bộ logo, hotline và địa chỉ Đà Nẵng.',
    ],
    outcome: 'Bộ social sẵn đăng + vật phẩm POSM cho cửa hàng.',
    highlights: [
      { label: 'Industry', value: 'F&B' },
      { label: 'Formats', value: 'Multi' },
      { label: 'Pieces', value: `${kiengLaGallery.length}` },
    ],
  },
  {
    id: 'somogold-cuu-long',
    title: 'SOMOGOLD — Cửu Long Mỹ Tửu',
    subtitle: 'Poster & brochure rượu truyền thống cao cấp',
    category: 'graphic',
    categoryLabel: 'Graphic Design',
    cover: '/images/work/somogold/somogold-poster.jpg',
    gallery: somogoldGallery,
    year: '2025',
    tools: ['Photoshop', 'Illustrator'],
    summary:
      'Poster sản phẩm và brochure (mặt ngoài / mặt trong) cho dòng rượu Cửu Long Mỹ Tửu — thẩm mỹ đỏ – đen – vàng.',
    challenge:
      'Truyền tải cảm giác thượng hạng, văn hóa Việt mà vẫn rõ thông tin sản phẩm và liên hệ thương hiệu.',
    process: [
      'Dựng bố cục poster với product shot và họa tiết rồng.',
      'Thiết kế brochure 2 mặt đồng bộ nhận diện SOMOGOLD.',
    ],
    outcome: 'Bộ print collateral hoàn chỉnh cho ra mắt / quà tặng doanh nghiệp.',
    highlights: [
      { label: 'Brand', value: 'SOMOGOLD' },
      { label: 'Deliverables', value: 'Poster + Brochure' },
      { label: 'Tone', value: 'Premium' },
    ],
  },
  {
    id: 'lang-nghe-magazine',
    title: 'Tạp chí Làng Nghề',
    subtitle: 'Bìa & dàn trang số đặc biệt gốm Bát Tràng',
    category: 'editorial',
    categoryLabel: 'Editorial',
    cover: '/images/work/magazine/magazine-cover.jpg',
    gallery: magazineGallery,
    year: '2025',
    tools: ['InDesign / Illustrator', 'Photoshop'],
    summary:
      'Thiết kế bìa (front–spine–back), mockup và trang ruột tạp chí Làng Nghề số 200 về gốm sứ Bát Tràng.',
    challenge:
      'Cân bằng ảnh thủ công, typography serif cổ điển và lưới tạp chí chuyên nghiệp.',
    process: [
      'Thiết kế spread bìa đầy đủ mã vạch / thông tin xuất bản.',
      'Dàn trang artboard và mockup cầm tay / góc nghiêng.',
    ],
    outcome: 'Bộ editorial hoàn chỉnh thể hiện tư duy layout và storytelling văn hóa.',
    highlights: [
      { label: 'Issue', value: 'No. 200' },
      { label: 'Focus', value: 'Bát Tràng' },
      { label: 'Pages', value: `${magazineGallery.length}+` },
    ],
  },
  {
    id: 'cay-tre-tram-dot',
    title: 'Cây Tre Trăm Đốt',
    subtitle: 'Bìa sách & minh họa trang ruột ngoại truyện',
    category: 'illustration',
    categoryLabel: 'Illustration',
    cover: '/images/work/cay-tre/cay-tre-cover.jpg',
    gallery: cayTreGallery,
    year: '2025',
    tools: ['Photoshop', 'Illustrator', 'Procreate / Digital paint'],
    summary:
      'Full cover (trước–gáy–sau) và chuỗi trang minh họa cho ngoại truyện “Cây Tre Trăm Đốt”.',
    challenge:
      'Giữ không khí cổ tích Việt hiện đại: nhân vật, tre xanh và nhịp đọc trên từng spread.',
    process: [
      'Thiết kế bìa với nhân vật trung tâm và blurb mặt sau.',
      'Minh họa liên tiếp các trang đôi để dẫn narrativ.',
    ],
    outcome: 'Bộ sách minh họa đủ bìa + trang ruột để showcase kỹ năng kể chuyện bằng hình.',
    highlights: [
      { label: 'Format', value: 'Book' },
      { label: 'Spreads', value: `${cayTreGallery.length}+` },
      { label: 'Genre', value: 'Folktale' },
    ],
  },
  {
    id: 'tat-den-cover',
    title: 'Tắt Đèn — Book Cover',
    subtitle: 'Thiết kế bìa truyện & mockup thành phẩm',
    category: 'illustration',
    categoryLabel: 'Illustration',
    cover: '/images/work/tat-den/tat-den-mockup.jpg',
    gallery: tatDenGallery,
    year: '2025',
    tools: ['Photoshop', 'Illustrator'],
    summary: 'Bìa truyện “Tắt Đèn” cùng mockup 3D thể hiện cảm xúc và không khí tác phẩm.',
    challenge: 'Tạo bìa đủ mạnh về cảm xúc văn học mà vẫn đọc được tên sách từ xa.',
    process: [
      'Khám phá mood tối – tương phản ánh sáng.',
      'Hoàn thiện file bìa và mockup trình bày.',
    ],
    outcome: 'Cover + mockup sạch, phù hợp mục editorial / illustration trong portfolio.',
    highlights: [
      { label: 'Type', value: 'Cover' },
      { label: 'Mockup', value: 'Yes' },
      { label: 'Mood', value: 'Literary' },
    ],
  },
]

export const categories: { id: ProjectCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'Tất cả' },
  { id: 'packaging', label: 'Packaging' },
  { id: 'social', label: 'Social' },
  { id: 'graphic', label: 'Graphic Design' },
  { id: 'editorial', label: 'Editorial' },
  { id: 'illustration', label: 'Illustration' },
]

export const principles = [
  {
    title: 'Người dùng trước pixel',
    text: 'Mỗi quyết định thiết kế bắt đầu từ nhu cầu và hành vi người dùng, không chỉ từ xu hướng thị giác.',
  },
  {
    title: 'Rõ ràng hơn phức tạp',
    text: 'Hierarchy, khoảng trắng và typography tốt giúp giao diện dễ hiểu ngay từ ánh nhìn đầu tiên.',
  },
  {
    title: 'Nhất quán tạo tin cậy',
    text: 'Hệ màu, component và nhịp điệu lặp lại giúp sản phẩm cảm giác chuyên nghiệp và dễ dùng.',
  },
  {
    title: 'Đẹp phải đi cùng mục tiêu',
    text: 'Thẩm mỹ phục vụ hành động: click, đọc, chuyển đổi — không chỉ để trang trí.',
  },
]

export function toWebp(src: string) {
  return w(src)
}
