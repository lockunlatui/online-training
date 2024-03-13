export const MOCK_DANH_MUC = [
  {
    name: 'Lập trình android nâng cao',
    path: 'lap-trinh-android-nang-cao',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/440px-Android_robot.svg.png',
    course: [
      {
        question: 'Chọn phương án đúng về FragmentStatePagerAdapter:',
        answers: [
          {
            name: 'Dùng để quản lý các fragment trong một ViewPager, lưu trữ trạng thái của tất cả các fragment.',
            isCorrect: true,
          },
          {
            name: 'Không lưu trữ trạng thái của các fragment, chỉ tải lại fragment khi cần thiết.',
            isCorrect: false,
          },
          {
            name: 'Chỉ hoạt động với các fragment có cùng layout.',
            isCorrect: false,
          },
          {
            name: 'Cần được khởi tạo trong Activity chứ không phải trong Fragment.',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'RxJava được sử dụng để:',
        answers: [
          {
            name: 'Viết mã lập trình đồng bộ.',
            isCorrect: false,
          },
          {
            name: 'Xử lý các tác vụ bất đồng bộ một cách hiệu quả.',
            isCorrect: true,
          },
          {
            name: 'Tạo giao diện người dùng đẹp mắt.',
            isCorrect: false,
          },
          {
            name: 'Truy cập cơ sở dữ liệu SQLite.',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Dagger Hilt là:',
        answers: [
          {
            name: 'Một thư viện dependency injection giúp đơn giản hóa việc tiêm phụ thuộc trong ứng dụng Android.',
            isCorrect: true,
          },
          {
            name: 'Một framework để xây dựng các ứng dụng Android theo mô hình MVP.',
            isCorrect: false,
          },
          {
            name: 'Một thư viện để xử lý hình ảnh hiệu quả.',
            isCorrect: false,
          },
          {
            name: 'Một công cụ để tối ưu hóa hiệu suất ứng dụng Android.',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Jetpack Compose là:',
        answers: [
          {
            name: 'Một framework UI mới cho Android, giúp xây dựng giao diện người dùng một cách trực quan và hiệu quả.',
            isCorrect: true,
          },
          {
            name: 'Một thư viện để tạo các animation đẹp mắt trong ứng dụng Android.',
            isCorrect: false,
          },
          {
            name: 'Một công cụ để kiểm tra lỗi trong ứng dụng Android.',
            isCorrect: false,
          },
          {
            name: 'Một framework để xây dựng các ứng dụng Android theo mô hình MVVM.',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Room Persistence Library là:',
        answers: [
          {
            name: 'Một thư viện giúp truy cập cơ sở dữ liệu SQLite một cách dễ dàng trong ứng dụng Android.',
            isCorrect: true,
          },
          {
            name: 'Một framework để xây dựng các ứng dụng Android theo mô hình MVC.',
            isCorrect: false,
          },
          {
            name: 'Một thư viện để xử lý dữ liệu JSON.',
            isCorrect: false,
          },
          {
            name: 'Một công cụ để debug ứng dụng Android trên thiết bị thực tế.',
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    name: 'Xây dựng trang web',
    path: 'xay-dung-trang-web',
    imgUrl:
      'https://vietwebgroup.vn/admin/uploads/world-wide-web-la-gi-tim-hieu-ve-world-wide-web-la-gi.png',
    course: [
      {
        question:
          'Ngôn ngữ lập trình nào thường được sử dụng để xây dựng trang web?',
        answers: [
          {
            name: 'HTML',
            isCorrect: true,
          },
          {
            name: 'Python',
            isCorrect: false,
          },
          {
            name: 'Java',
            isCorrect: false,
          },
          {
            name: 'C++',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Công cụ nào thường được sử dụng để viết mã JavaScript?',
        answers: [
          {
            name: 'Notepad',
            isCorrect: false,
          },
          {
            name: 'Visual Studio Code',
            isCorrect: true,
          },
          {
            name: 'Microsoft Word',
            isCorrect: false,
          },
          {
            name: 'Adobe Photoshop',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Thẻ HTML nào được sử dụng để tạo tiêu đề trang web?',
        answers: [
          {
            name: '<h1>',
            isCorrect: true,
          },
          {
            name: '<div>',
            isCorrect: false,
          },
          {
            name: '<p>',
            isCorrect: false,
          },
          {
            name: '<img>',
            isCorrect: false,
          },
        ],
      },
      {
        question:
          'Thuộc tính nào được sử dụng để đặt liên kết cho một thẻ HTML?',
        answers: [
          {
            name: 'href',
            isCorrect: true,
          },
          {
            name: 'src',
            isCorrect: false,
          },
          {
            name: 'alt',
            isCorrect: false,
          },
          {
            name: 'width',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Cách nào để thêm style cho trang web?',
        answers: [
          {
            name: 'Sử dụng thẻ <style>',
            isCorrect: false,
          },
          {
            name: 'Sử dụng thẻ <link>',
            isCorrect: false,
          },
          {
            name: 'Sử dụng thuộc tính style',
            isCorrect: false,
          },
          {
            name: 'Tất cả các cách trên',
            isCorrect: true,
          },
        ],
      },
    ],
  },
  {
    name: 'Cơ sở dữ liệu',
    path: 'co-so-du-lieu',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Applications-database.svg/440px-Applications-database.svg.png',
  },
];
