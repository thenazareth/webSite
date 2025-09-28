  function baixarPDF() {
    const link = document.createElement('a');
    link.href = "./downloads/curriculoPDF.pdf";
    link.download = "Vitoria_Nazareth_Curriculo.pdf";
    link.click();
  }

    function baixarDOCX() {
    const link = document.createElement('a');
    link.href = "./downloads/curriculoDOCX.docx";
    link.download = "Vitoria_Nazareth_Curriculo.docx";
    link.click();
  }