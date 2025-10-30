document.getElementById("letterForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "mm", format: "a4" });

  const name = document.getElementById("name").value;
  const faculty = document.getElementById("faculty").value;
  const period = document.getElementById("period").value;
  const company = document.getElementById("company").value;

  const lines = [
    "เรียน คณะอาจารย์ เพื่อโปรดทราบ",
    "เรื่อง ขอลงนามหนังสือฝึกงานใหม่",
    `กระผม ${name} เป็นนักศึกษา ${faculty} ชั้นปีที่ 4`,
    `จะเข้ารับการฝึกงานในวันที่ ${period}`,
    `ทาง${company} แจ้งว่า ให้ทำหนังสือส่งตัวฝึกงานมาใหม่ เนื่องจากต้องส่งทางบริษัทพรุ่งนี้ก่อนเวลา 11:00 น.`,
    "โดยเป็นไฟล์ PDF มาก่อน ส่วนตัวจริงให้ส่ง 14:00 น.",
    "จึงเรียนมาเพื่อโปรดพิจารณา",
    "",
    `${name}`,
  ];

  let y = 30;
  doc.setFont("THSarabunNew", "normal");
  doc.setFontSize(16);
  lines.forEach(line => {
    doc.text(line, 25, y);
    y += 10;
  });

  doc.save("ขอลงนามหนังสือฝึกงานใหม่.pdf");
});
