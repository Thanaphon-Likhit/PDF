document.getElementById("letterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "mm", format: "a4" });

  const issuedate = document.getElementById("issuedate").value;
  const formattedDate = new Date(issuedate).toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  // หัวเอกสาร
  doc.setFontSize(24);
  doc.text("🦅", 105, 25, { align: "center" });
  doc.setFontSize(18);
  doc.text("หนังสือราชการ (เอกสารสำคัญ)", 105, 38, { align: "center" });

  doc.setFontSize(14);
  doc.text(`วันที่ ${formattedDate}`, 170, 55, { align: "right" });

  // เนื้อหาเอกสาร
  const content = [
    "เรียน คณะอาจารย์ เพื่อโปรดทราบ",
    "เรื่อง ขอลงนามหนังสือฝึกงานใหม่",
    "",
    "กระผม นาย ธนพนธ์ ลิขิตปัญญาวัฒน์ เป็นนักศึกษา คณะ สาธารณสุขศาสตร์ สาขา อาชีวอนามัยและความปลอดภัย ชั้นปีที่ 4",
    "จะเข้ารับการฝึกงาน ในวันที่ 10 พฤศจิกายน 2568 ถึง 27 กุมภาพันธ์ 2569",
    "ทางบริษัท ปูนซีเมนต์ (ท่าหลวง) จำกัด แจ้งว่า ให้ทำหนังสือส่งตัวฝึกงานมาใหม่",
    "เนื่องจากต้องส่งทางบริษัทพรุ่งนี้ ก่อนเวลา 11:00 น. โดยเป็นไฟล์ PDF มาก่อน ส่วนตัวจริงให้ส่ง 14:00 น.",
    "",
    "จึงเรียนมาเพื่อโปรดพิจารณา",
    "",
    "",
    "ลงชื่อ ....................................................",
    "(นาย ธนพนธ์ ลิขิตปัญญาวัฒน์)",
  ];

  doc.setFont("THSarabunNew", "normal");
  doc.setFontSize(16);

  let y = 70;
  content.forEach(line => {
    doc.text(line, 25, y);
    y += 10;
  });

  // ลายเซ็นล่างหน้า
  doc.setFontSize(12);
  doc.text("หมายเหตุ: เอกสารนี้เป็นเอกสารสำคัญ ใช้เพื่อการขอลงนามส่งตัวฝึกงานเท่านั้น", 105, 280, { align: "center" });

  // ดาวน์โหลด PDF
  doc.save("เอกสารสำคัญ_ขอลงนามหนังสือฝึกงาน.pdf");
});
