import method_1 from "../assets/method/method_1.jpg";
import method_2 from "../assets/method/method_2.jpg";
import method_3 from "../assets/method/method_3.jpg";

const methodData = [
  {
    image: `${method_1}`,
    name: "Laser Nội mạch",
    advantage: [
      "An toàn và tiêu chuẩn",
      "Thời gian điều trị ngắn",
      "Tiện lợi và nhanh chóng",
      "Giảm thiểu các biến chứng ngoại lệ",
    ],
  },
  {
    image: `${method_2}`,
    name: "Keo Venaseal",
    advantage: [
      "Quy trình điều trị nhanh chóng",
      "Tránh bị bỏng da, không để lại sẹo",
      "Có thể hoạt động lại bình thường ngay sau khi điều trị",
      "Không phải sử dụng thuốc và không phải tái khám nhiều lần",
    ],
  },
  {
    image: `${method_3}`,
    name: "Tiêm xơ tĩnh mạch",
    advantage: [
      "Không cần phẫu thuật",
      "Ít đau, không để lại sẹo",
      "Không cần nghỉ dưỡng lâu dài",
      "Phù hợp với những tĩnh mạch nhỏ",
    ],
  },
];

export default methodData;
