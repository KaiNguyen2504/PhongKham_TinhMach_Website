import doctor_1 from "../assets/doctor/doctor_1.png";
import doctor_2 from "../assets/doctor/doctor_2.jpg";
import doctor_3 from "../assets/doctor/doctor_3.jpg";
import doctor_4 from "../assets/doctor/doctor_4.jpg";
import manager_1 from "../assets/doctor/manager_1.jpg";
import nurse_1 from "../assets/doctor/nurse_1.jpg";
import nurse_2 from "../assets/doctor/nurse_2.jpg";

const doctorData = [
  {
    id: 1,
    name: "TS BS.TRẦN THANH VỸ",
    image: `${doctor_1}`,
    description: [
      "Nỗ lực đóng góp cho ngành y tế Việt Nam của TS BS Trần Thanh Vỹ luôn là niềm tự hào của tập thể y bác sĩ tại Phòng khám Tĩnh Mạch Sài Gòn, nơi bác sĩ đảm trách chức vụ cố vấn chuyên môn. Gần 20 năm công tác tại các bệnh viện lớn ở TP.HCM, bác sĩ Trần Thanh Vỹ đã thực hiện hơn 3000 ca phẫu thuật như: dị dạng mạch máu, tạo hình phế quản phổi, dị tật lõm ngực…",
      "Bác sĩ Trần Thanh Vỹ cũng là người tích cực áp dụng công nghệ mới từ các nước có nền y khoa tiên tiến vào việc điều trị bệnh ở Việt Nam như điều trị giãn tĩnh mạch bằng laser, điều trị bướu giáp nhân bằng sóng cao tần…",
      "Từng đi tu nghiệp ở nhiều nước trên thế giới, là Trưởng khoa Lồng ngực-Mạch máu tại Bệnh viện Đại học Y Dược, giảng viên Trường Đại học Y Dược TP.HCM, TS BS Trần Thanh Vỹ dù ở cương vị nào, vẫn luôn là người làm việc có trách nhiệm và tận tâm. Đó là tấm lòng của bác sĩ đối với bệnh nhân, là nhiệt huyết của người thầy đối với các thế hệ sinh viên y khoa, là người cố vấn chuyên môn giàu kinh nghiệm luôn đồng hành cùng các bác sĩ trong việc khám, tư vấn và điều trị bệnh cho mọi người.",
    ],
  },
  {
    id: 2,
    name: "Th.S BS PHẠM ĐÌNH DUY",
    image: `${doctor_2}`,
    description: [
      "Với mong muốn được chữa bệnh cho những người thân trong gia đình, Th.S BS Phạm Đình Duy đã theo học y khoa tại Trường Đại học Y Khoa Phạm Ngọc Thạch. Từ một sinh viên y khoa rồi trở thành bác sĩ với hơn mười năm gắn bó với công việc khám và điều trị bệnh, Th.S BS Phạm Đình Duy luôn thể hiện tinh thần làm việc nghiêm túc và quan tâm đến bệnh nhân.",
      "Theo bác sĩ Phạm Đình Duy, ngoài việc trau dồi kiến thức và tay nghề về chuyên môn, thầy thuốc phải là người xem nỗi đau của bệnh nhân như nỗi đau của người thân mình. Bác sĩ là người khiến cho bệnh nhân có cảm giác gần gũi, được lắng nghe, được gợi mở, để họ có thể trình bày cặn kẽ những băn khoăn, thắc mắc về bệnh tình.",
      "Hiện nay, ngoài việc là bác sĩ chuyên khoa Lồng Ngực – Mạch máu, Th.S BS Phạm Đình Duy còn là giảng viên của Trường Đại học Y Dược thành phố Hồ Chí Minh.",
    ],
  },
  {
    id: 3,
    name: "TS BS TRẦN THỊ MAI THÙY",
    image: `${doctor_3}`,
    description: [
      "Bác sĩ Trần Thị Mai Thùy được đào tạo về chuyên ngành chẩn đoán hình ảnh và có nhiều năm kinh nghiệm trong công tác chẩn đoán chuyên sâu. Là người nắm vững kiến thức chuyên môn về dịch tễ học, bệnh học, triệu chứng học nên bác sĩ Mai Thùy có thể áp dụng vào việc phân tích, tổng hợp thông tin để đưa ra những chẩn đoán chính xác, góp phần làm tăng hiệu quả điều trị cho bệnh nhân.",
      "Ít ai biết rằng, một nữ bác sĩ thân thiện và điềm đạm, luôn nhẹ nhàng và kiên nhẫn đối với bệnh nhân cũng chính là người giảng viên nghiêm túc của Bộ môn Chẩn đoán hình ảnh tại Trường Đại học Y Dược TP.HCM. Dù bận rộn với công việc chuyên môn, bác sĩ Mai Thùy vẫn dành cho đứa con gái nhỏ những giờ phút cùng con đọc sách, dạy con học tiếng Anh hoặc lắng nghe con kể về những ước mơ xa xôi, về những trò chơi ngộ nghĩnh tuổi học trò.",
    ],
  },
  {
    id: 4,
    name: "TH.S BS NGUYỄN LÂM VƯƠNG",
    image: `${doctor_4}`,
    description: [
      "Cảm nhận được bản thân có tâm huyết và niềm đam mê trong việc khám chữa bệnh cho mọi người, hơn 10 năm trước, Th.S BS Nguyễn Lâm Vương đã chọn nghề y và theo học tại trường Đại học Y Dược Tp.HCM.",
      "Là Th.S BS nội trú, chuyên ngành ngoại Lồng ngực-Mạch máu, bác sĩ Vương luôn thể hiện sự cẩn trọng và nghiêm túc trong công việc. Chính vì điều đó mà nhiều bệnh nhân cho biết rằng họ cảm thấy yên tâm khi được bác sĩ tư vấn và điều trị.",
      "Hiện nay, ngoài việc là bác sĩ chuyên khoa Lồng ngực-Mạch máu, Th.S BS Nguyễn Lâm Vương còn là giảng viên của Trường Đại học Y Dược thành phố Hồ Chí Minh.",
    ],
  },
  {
    id: 5,
    name: "Y tá QUỲNH",
    image: `${nurse_1}`,
    description: [
      "Y tá Lê Thị Quỳnh là người trợ giúp đắc lực cho các bác sĩ tại Phòng khám Tĩnh mạch Sài Gòn trong việc chẩn đoán và điều trị bệnh giãn tĩnh mạch. Cô tốt nghiệp Khoa Điều dưỡng hệ cử nhân, Trường Đại học Điều Dưỡng Nam Định.",
      "Y tá Lê Thị Quỳnh được các bác sĩ đánh giá cao về sự chuyên nghiệp, nhanh nhẹn và cầu tiến. Nhờ có cô, quy trình khám, điều trị tại Phòng khám Tĩnh mạch Sài Gòn diễn ra nhanh chóng hơn, hiệu quả hơn.",
    ],
  },
  {
    id: 6,
    name: "Y tá DƯƠNG",
    image: `${nurse_2}`,
    description: [
      "Y tá Nguyễn Vũ Thùy Dương được các bác sĩ và bệnh nhân tại Phòng khám Tĩnh mạch Sài Gòn yêu mến bởi tính cách vui vẻ, nụ cười luôn nở trên môi. Với kinh nghiệm làm việc tại các bệnh viện, phòng khám lớn nhỏ cùng sự nhanh nhẹn, hoạt bát và cầu tiến, y tá Thùy Dương góp phần không nhỏ vào sự thành công của các ca điều trị giãn tĩnh mạch tại Phòng khám.",
      "Sự vui vẻ, thân thiện của Y tá Nguyễn Vũ Thùy Dương giúp các bệnh nhân cảm thấy thoải mái và vững tin hơn khi đến khám, chữa bệnh tại Phòng khám Tĩnh mạch Sài Gòn.",
    ],
  },
  {
    id: 7,
    name: "GD NGUYỄN THỊ THU THẢO",
    image: `${manager_1}`,
    description: [
      "Tốt nghiệp Đại học Kinh tế TP.HCM, Bà Nguyễn Thị Thu Thảo từng đảm nhiệm nhiều vị trí khác nhau trong lĩnh vực kinh doanh, kế toán, quản lý và điều hành doanh nghiệp. Với kiến thức, kỹ năng và kinh nghiệm điều hành qua hơn hai mươi năm, cùng mong muốn xây dựng mô hình phòng khám tư nhân hiện đại, bà Nguyễn Thị Thu Thảo đã hợp tác cùng các bác sĩ chuyên khoa giàu kinh nghiệm tại TP.Hồ Chí Minh thành lập nên Phòng khám Tĩnh mạch Sài Gòn.",
      "Nhìn nhận được sự quá tải của bệnh viện, sự mệt mỏi của bệnh nhân đến từ những tỉnh thành xa xôi phải chờ đợi khám, chờ đợi kết quả xét nghiệm hoặc siêu âm; mong muốn được chia sẻ khó khăn của bệnh nhân và sự quá tải của bệnh viện, bà Nguyễn Thị Thu Thảo cùng đội ngũ y bác sĩ tại Phòng khám Tĩnh mạch Sài Gòn luôn làm việc với mục tiêu xây dựng một môi trường khám chữa bệnh chuyên nghiệp, hiện đại và thân thiện để phục vụ cho bệnh nhân.",
    ],
  },
];

export default doctorData;
