import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { MENU } from "@/feature/model/data/menuData";
import { robotoRegular } from "./pdfFonts";

export function generateMenuPdf() {
  const doc = new jsPDF();

  doc.addFileToVFS("Roboto-Regular.ttf", robotoRegular);
  doc.addFont("Roboto-Regular.ttf", "Roboto", "normal");
  doc.setFont("Roboto", "normal");

  const pageWidth = 210; // A4 ширина
  const margin = 14;     
  const tableWidth = pageWidth - margin * 2;

  let y = 15;

  // Заголовок
  doc.setFontSize(18);
  doc.text("М кейтеринг. Меню с ценами", margin, y);
  y += 10;

  MENU.forEach((section, index) => {
    // Раздел
    doc.setFontSize(14);
    doc.text(section.title, margin, y);
    y += 4;

    autoTable(doc, {
      startY: y,
      head: [["Блюдо", "Описание", "Вес", "Цена"]],
      body: section.dishes.map((dish) => [
        `${dish.name}${dish.vegetarian ? " 🌿" : ""}${dish.spicy ? " 🌶" : ""}`,
        dish.description,
        `${dish.weight} г`,
        dish.price,
      ]),
      styles: {
        font: "Roboto",
        fontSize: 10,
        cellPadding: 2,
        textColor: [0, 0, 0],
      },
      headStyles: {
        fillColor: [255, 255, 255],
        textColor: [255, 255, 255],
      },
      theme: "grid",
      columnStyles: {
        0: { cellWidth: tableWidth * 0.2, overflow: "linebreak" }, 
        1: { cellWidth: tableWidth * 0.6, overflow: "linebreak" },
        2: { cellWidth: tableWidth * 0.1, overflow: "hidden" },
        3: { cellWidth: tableWidth * 0.1, overflow: "hidden" },
      },
      margin: { left: margin, right: margin },
    });

    // @ts-expect-error
    y = doc.lastAutoTable.finalY + 5;


    if (index < MENU.length - 1) {
      doc.setLineWidth(0.2);
      doc.setDrawColor(0, 0, 0);
      doc.line(margin, y, pageWidth - margin, y);
      y += 5;
    }
  });


  doc.save("menu.pdf");
}
