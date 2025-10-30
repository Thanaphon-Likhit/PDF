document.getElementById("letterForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "mm", format: "a4" });

  const name = document.getElementById("name").value;
  const faculty = document.getElementById("faculty").value;
  const period = document.getElementById("period").value;
  const company = document.getElementById("company").value;
  const issuedate = document.getElementById("issuedate").value;

  // ตราครุฑ (ใช้ emoji แทนใน PDF)
  doc.setFontSize(24);
  doc.text("🦅", 105, 25, { align: "center" });
  doc.setFontSize(18);
  doc.text("หนังสือราชการ", 105, 38, { align: "center" });
  doc.setFontSize(14);
  doc.text("(เอกสารสำคัญ)", 105, 46, { align: "center" });

  // ข้อมูลเอกสาร
  doc.setFontSize(16);
  let y = 65;
  const lines = [
    `วันที่ออกเอกสาร: ${new Date(issuedate).toLocaleDateString("th-TH")}`,
    "",
    "เรียน คณะอาจารย์ เพื่อโปรดทราบ",
    "เรื่อง ขอลงนามหนังสือฝึกงานใหม่",
    `\u00A0\u00A0\u00A0กระผม ${name} เป็นนักศึกษา ${faculty} ชั้นปีที่ 4`,
    `จะเข้ารับการฝึกงานในวันที่ ${period}`,
    `ทาง${company} แจ้งว่า ให้ทำหนังสือส่งตัวฝึกงานมาใหม่ เนื่องจากต้องส่งทางบริษัทพรุ่งนี้ก่อนเวลา 11:00 น.`,
    "โดยเป็นไฟล์ PDF มาก่อน ส่วนตัวจริงให้ส่ง 14:00 น.",
    "",
    "จึงเรียนมาเพื่อโปรดพิจารณา",
    "",
    "",
    "(ลงชื่อ) ........................................................",
    `(${name})`,
    "นักศึกษาผู้ยื่นคำขอ"
  ];

  doc.setFont("THSarabunNew", "normal");
  lines.forEach(line => {
    doc.text(line, 25, y);
    y += 10;
  });

  doc.save("เอกสารสำคัญ_ขอลงนามฝึกงาน.pdf");
});
