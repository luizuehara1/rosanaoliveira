import { jsPDF } from 'jspdf';

export function generateEbookPDF(): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Helper to add dark page background
  const setDarkBackground = (isCover = false) => {
    doc.setFillColor(10, 10, 12);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');

    // Subtle header/footer borders
    if (!isCover) {
      doc.setDrawColor(35, 40, 30);
      doc.setLineWidth(0.3);
      doc.line(15, 20, pageWidth - 15, 20);
      doc.line(15, pageHeight - 18, pageWidth - 15, pageHeight - 18);

      // Top mini branding
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(217, 255, 0); // Lime-key
      doc.text('ROSANA OLIVEIRA', 15, 14);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(150, 150, 150);
      doc.text('NUTRIÇÃO ESPORTIVA • PERFORMANCE & LONGEVIDADE', 60, 14);

      // Footer
      doc.setFontSize(7);
      doc.setTextColor(120, 120, 120);
      doc.text('E-BOOK GRATUITO: 7 HÁBITOS QUE SABOTAM O EMAGRECIMENTO', 15, pageHeight - 11);
    }
  };

  // --- PAGE 1: CAPA ---
  setDarkBackground(true);

  // Top header branding
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(217, 255, 0);
  doc.text('ROSANA OLIVEIRA', pageWidth / 2, 35, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(180, 180, 180);
  doc.text('NUTRIÇÃO ESPORTIVA • PERFORMANCE & LONGEVIDADE', pageWidth / 2, 42, { align: 'center' });

  // Big 7
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(90);
  doc.setTextColor(217, 255, 0);
  doc.text('7', pageWidth / 2, 95, { align: 'center' });

  // Title: HÁBITOS
  doc.setFontSize(36);
  doc.setTextColor(255, 255, 255);
  doc.text('HÁBITOS', pageWidth / 2, 115, { align: 'center' });

  // Highlight Box: QUE SABOTAM O
  doc.setFillColor(217, 255, 0);
  doc.rect(pageWidth / 2 - 50, 122, 100, 10, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(0, 0, 0);
  doc.text('QUE SABOTAM O', pageWidth / 2, 129, { align: 'center' });

  // EMAGRECIMENTO
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(28);
  doc.setTextColor(255, 255, 255);
  doc.text('EMAGRECIMENTO', pageWidth / 2, 146, { align: 'center' });

  // após os 35
  doc.setFont('times', 'italic');
  doc.setFontSize(22);
  doc.setTextColor(217, 255, 0);
  doc.text('após os 35', pageWidth / 2, 158, { align: 'center' });

  // Subtitle / Description
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(200, 200, 200);
  const coverDesc = 'Os erros invisíveis que travam seus resultados e o que fazer para destravar seu corpo, sua energia e sua autoestima.';
  doc.text(doc.splitTextToSize(coverDesc, 140), pageWidth / 2, 180, { align: 'center' });

  // Bottom pillars
  doc.setDrawColor(217, 255, 0);
  doc.setLineWidth(0.4);
  doc.line(30, 205, pageWidth - 30, 205);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(217, 255, 0);
  doc.text('ACELERE SEU METABOLISMO  |  ESCOLHAS INTELIGENTES  |  CONSTÂNCIA  |  LEVEZA', pageWidth / 2, 215, { align: 'center' });

  // Bottom Box
  doc.setFillColor(20, 25, 20);
  doc.roundedRect(25, 235, pageWidth - 50, 22, 4, 4, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(255, 255, 255);
  doc.text('UM GUIA PRÁTICO, DIRETO E BASEADO NA CIÊNCIA', pageWidth / 2, 244, { align: 'center' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(217, 255, 0);
  doc.text('PARA MULHERES REAIS E UMA ROTINA REAL.', pageWidth / 2, 251, { align: 'center' });

  // --- PAGE 2: QUEM É ROSANA OLIVEIRA? ---
  doc.addPage();
  setDarkBackground();

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(255, 255, 255);
  doc.text('QUEM É ', 20, 40);
  doc.setTextColor(217, 255, 0);
  doc.text('ROSANA OLIVEIRA?', 60, 40);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(220, 220, 220);
  const bio1 = 'Olá! Eu sou Rosana Oliveira, nutricionista esportiva com foco em ganho de massa muscular, emagrecimento feminino e comportamento alimentar.';
  doc.text(doc.splitTextToSize(bio1, 170), 20, 55);

  const bio2 = 'Ajudo principalmente mulheres 35+ que sentem que o corpo mudou e já não responde como antes.';
  doc.text(doc.splitTextToSize(bio2, 170), 20, 75);

  // Credentials Box
  doc.setFillColor(18, 22, 18);
  doc.roundedRect(20, 95, 170, 95, 4, 4, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(217, 255, 0);
  doc.text('MINHA ESPECIALIZAÇÃO:', 30, 110);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(240, 240, 240);
  const specs = [
    '• Graduada em Nutrição pela UNISO',
    '• Especialista em Nutrição Esportiva pela Uniguaçu do Paraná',
    '• Estudante de Educação Física pela Fundação Ubaldino do Amaral',
    '• Atuação com foco em emagrecimento feminino, ganho de massa muscular, comportamento alimentar e saúde da mulher 35+.'
  ];

  let specY = 125;
  specs.forEach(s => {
    const lines = doc.splitTextToSize(s, 150);
    doc.text(lines, 30, specY);
    specY += lines.length * 6 + 4;
  });

  // Highlight message
  doc.setFillColor(217, 255, 0);
  doc.roundedRect(20, 210, 170, 25, 4, 4, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text('ESTE GUIA FOI CRIADO PARA TE AJUDAR A', pageWidth / 2, 220, { align: 'center' });
  doc.text('RETOMAR O CONTROLE E TRANSFORMAR SUA VIDA.', pageWidth / 2, 228, { align: 'center' });

  // --- PAGE 3: POR QUE CRIEI ESTE MATERIAL? ---
  doc.addPage();
  setDarkBackground();

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(255, 255, 255);
  doc.text('POR QUE CRIEI ', 20, 40);
  doc.setTextColor(217, 255, 0);
  doc.text('ESTE MATERIAL?', 90, 40);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(180, 180, 180);
  doc.text('Porque todos os dias recebo mensagens como:', 20, 52);

  const quotes = [
    '"Não consigo emagrecer mesmo treinando e fazendo dieta..."',
    '"Como pouco e não perco peso..."',
    '"Me sinto cansada e com sono o dia todo..."',
    '"Começo uma dieta e não consigo continuar"',
    '"Não reconheço mais o meu corpo..."'
  ];

  let qY = 64;
  quotes.forEach(q => {
    doc.setFillColor(22, 22, 24);
    doc.roundedRect(20, qY, 170, 12, 2, 2, 'F');
    doc.setFont('times', 'italic');
    doc.setFontSize(10);
    doc.setTextColor(217, 255, 0);
    doc.text(q, 26, qY + 8);
    qY += 16;
  });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(255, 255, 255);
  doc.text('A verdade é que, após os 35 anos, o metabolismo feminino passa por mudanças importantes:', 20, 160);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(200, 200, 200);
  const p3text = 'Hormônios, sono, recuperação, estresse e composição corporal mudam. Por isso, a estratégia nutricional e o estilo de vida também precisam mudar.';
  doc.text(doc.splitTextToSize(p3text, 170), 20, 172);

  doc.setFillColor(18, 26, 18);
  doc.roundedRect(20, 200, 170, 40, 4, 4, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(217, 255, 0);
  doc.text('O OBJETIVO DESTE GUIA:', 30, 215);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(240, 240, 240);
  doc.text('Ajudar você a entender seu corpo com mais clareza, estratégia e consciência.', 30, 225);

  // --- PAGE 4: O PROBLEMA NÃO É O QUE VOCÊ PENSA ---
  doc.addPage();
  setDarkBackground();

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(255, 255, 255);
  doc.text('O PROBLEMA ', 20, 40);
  doc.setTextColor(217, 255, 0);
  doc.text('NÃO É O QUE VOCÊ PENSA.', 80, 40);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(200, 200, 200);
  doc.text('Neste ebook, você vai descobrir:', 20, 55);

  const discoveries = [
    { num: '1', text: 'Os 7 hábitos que estão sabotando seu emagrecimento diariamente' },
    { num: '2', text: 'Por que seu metabolismo mudou após os 35 anos' },
    { num: '3', text: 'Como sono, alimentação, treino, hidratação e comportamento se conectam' },
    { num: '4', text: 'Soluções práticas baseadas em ciência para cada um dos problemas' },
    { num: '5', text: 'Estratégias reais e sustentáveis para um corpo que mudou' }
  ];

  let dY = 70;
  discoveries.forEach(d => {
    doc.setFillColor(20, 25, 20);
    doc.roundedRect(20, dY, 170, 18, 3, 3, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(217, 255, 0);
    doc.text(`0${d.num}`, 28, dY + 12);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(255, 255, 255);
    doc.text(doc.splitTextToSize(d.text, 140), 44, dY + 11);
    dY += 24;
  });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(217, 255, 0);
  doc.text('Prepare-se para algumas quebras de crenças...', 20, 215);

  // --- PAGE 5: HÁBITO #1 ---
  doc.addPage();
  setDarkBackground();

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(217, 255, 0);
  doc.text('HÁBITO #1', 20, 36);

  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.text('PULAR O CAFÉ DA MANHÃ E COMER POUCO NO ALMOÇO', 20, 46);

  doc.setFillColor(24, 24, 28);
  doc.roundedRect(20, 58, 170, 20, 3, 3, 'F');
  doc.setFont('times', 'italic');
  doc.setFontSize(10);
  doc.setTextColor(217, 255, 0);
  doc.text('A DOR QUE VOCÊ SENTE:', 26, 67);
  doc.setTextColor(255, 255, 255);
  doc.text('"Se eu comer menos, vou emagrecer mais rápido?"', 26, 74);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(200, 200, 200);
  const h1Desc = 'Você acorda sem fome, pula o café ou faz refeições pobres em nutrientes. No início parece funcionar, mas no fim do dia o cansaço e a fome voltam com força total, gerando compulsão e escolhas ruins.';
  doc.text(doc.splitTextToSize(h1Desc, 170), 20, 92);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(217, 255, 0);
  doc.text('O QUE REALMENTE ACONTECE:', 20, 122);

  const h1Points = [
    '• A fome tende a aumentar exponencialmente ao longo do dia.',
    '• A energia física e mental oscila bruscamente.',
    '• Dificulta a preservação de massa muscular e favorece o acúmulo de gordura.',
    '• Diminui o gasto calórico basal em repouso.'
  ];
  let h1Y = 132;
  h1Points.forEach(p => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(230, 230, 230);
    doc.text(p, 25, h1Y);
    h1Y += 9;
  });

  // --- PAGE 6: HÁBITO #1 ESTRATÉGIA PRÁTICA ---
  doc.addPage();
  setDarkBackground();

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(217, 255, 0);
  doc.text('HÁBITO #1 • QUEBRA DE CRENÇA & ESTRATÉGIA', 20, 36);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(220, 220, 220);
  const p6text = 'Depois dos 35, seu corpo responde muito melhor à QUALIDADE e à REGULARIDADE do que à restrição extrema. Começar o dia com PROTEÍNAS + FIBRAS aumenta a saciedade e controla a glicemia.';
  doc.text(doc.splitTextToSize(p6text, 170), 20, 48);

  // Table
  doc.setFillColor(20, 25, 20);
  doc.roundedRect(20, 75, 80, 60, 3, 3, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(217, 255, 0);
  doc.text('FONTES DE PROTEÍNA:', 26, 87);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(255, 255, 255);
  const protList = ['• Ovos caipiras', '• Iogurte natural / grego', '• Queijo branco / cottage', '• Whey protein de qualidade', '• Frango desfiado / atum'];
  let protY = 97;
  protList.forEach(p => { doc.text(p, 26, protY); protY += 7; });

  doc.setFillColor(20, 25, 20);
  doc.roundedRect(110, 75, 80, 60, 3, 3, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(217, 255, 0);
  doc.text('FONTES DE FIBRAS:', 116, 87);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(255, 255, 255);
  const fiberList = ['• Mamão / Pera / Maçã', '• Frutas vermelhas', '• Aveia em flocos', '• Chia / Linhaça', '• Psyllium'];
  let fibY = 97;
  fiberList.forEach(f => { doc.text(f, 116, fibY); fibY += 7; });

  // Ação imediata box
  doc.setFillColor(217, 255, 0);
  doc.roundedRect(20, 155, 170, 30, 4, 4, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  doc.text('AÇÃO IMEDIATA:', 30, 167);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text('Amanhã, inclua uma fonte de proteína e uma fonte de fibra no seu café da manhã.', 30, 176);

  // --- PAGE 7: HÁBITO #2 ---
  doc.addPage();
  setDarkBackground();

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(217, 255, 0);
  doc.text('HÁBITO #2', 20, 36);

  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.text('CORTAR CARBOIDRATOS COMPLETAMENTE', 20, 46);

  doc.setFillColor(24, 24, 28);
  doc.roundedRect(20, 58, 170, 20, 3, 3, 'F');
  doc.setFont('times', 'italic');
  doc.setFontSize(10);
  doc.setTextColor(217, 255, 0);
  doc.text('A DOR QUE VOCÊ SENTE: "Carboidrato engorda, vou cortar tudo."', 26, 70);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(200, 200, 200);
  const h2Desc = 'Nas primeiras semanas há perda rápida de peso (água e glicogênio). Mas logo surge irritabilidade, queda de rendimento nos treinos, perda de massa magra e o temido efeito sanfona.';
  doc.text(doc.splitTextToSize(h2Desc, 170), 20, 90);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(217, 255, 0);
  doc.text('ESTRATÉGIA PRÁTICA:', 20, 120);

  const h2Points = [
    '• Inclua carboidratos complexos (arroz integral, batata doce, aveia, frutas).',
    '• Ajuste as porções conforme seu nível de atividade física.',
    '• Combine sempre com proteínas, fibras e gorduras boas para diminuir o índice glicêmico.'
  ];
  let h2Y = 132;
  h2Points.forEach(p => {
    const lines = doc.splitTextToSize(p, 160);
    doc.text(lines, 25, h2Y);
    h2Y += lines.length * 6 + 4;
  });

  // --- PAGE 8: HÁBITO #3 ---
  doc.addPage();
  setDarkBackground();

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(217, 255, 0);
  doc.text('HÁBITO #3', 20, 36);

  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.text('FAZER EXERCÍCIO EM JEJUM SEM PLANEJAMENTO', 20, 46);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(200, 200, 200);
  const h3Desc = 'Oxidar gordura durante o treino NÃO é o mesmo que eliminar gordura corporal. O emagrecimento depende do balanço calórico global e da preservação muscular.';
  doc.text(doc.splitTextToSize(h3Desc, 170), 20, 60);

  doc.setFillColor(20, 25, 20);
  doc.roundedRect(20, 85, 170, 45, 3, 3, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(217, 255, 0);
  doc.text('EXEMPLOS DE PRÉ-TREINO EFICIENTE:', 30, 98);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(255, 255, 255);
  doc.text('• Banana + aveia + whey protein', 30, 108);
  doc.text('• Pão integral + queijo branco / ovos', 30, 116);
  doc.text('• Iogurte natural + frutas + sementes', 30, 124);

  // --- PAGE 9: HÁBITO #4 ---
  doc.addPage();
  setDarkBackground();

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(217, 255, 0);
  doc.text('HÁBITO #4', 20, 36);

  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.text('DORMIR MENOS DE 7 HORAS POR NOITE', 20, 46);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(200, 200, 200);
  const h4Desc = 'A privação de sono desregula a grelina (hormônio da fome) e a leptina (saciedade), além de elevar o cortisol e reduzir a síntese proteica muscular.';
  doc.text(doc.splitTextToSize(h4Desc, 170), 20, 60);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(217, 255, 0);
  doc.text('HIGIENE DO SONO ESSENCIAL:', 20, 95);

  const h4Points = [
    '• Reduza o uso de telas e luz azul 1h antes de deitar.',
    '• Corte cafeína e estimulantes após as 14h / 15h.',
    '• Deixe o quarto 100% escuro, fresco e silencioso.'
  ];
  let h4Y = 107;
  h4Points.forEach(p => {
    doc.text(p, 25, h4Y);
    h4Y += 9;
  });

  // --- PAGE 10: HÁBITO #5 ---
  doc.addPage();
  setDarkBackground();

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(217, 255, 0);
  doc.text('HÁBITO #5', 20, 36);

  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.text('ACHAR QUE MAIS TREINOS SIGNIFICAM MAIS RESULTADOS', 20, 46);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(200, 200, 200);
  const h5Desc = 'O músculo cresce e a gordura é mobilizada durante a RECUPERAÇÃO e o DESCANSO. Treinar sem progressão de carga e sem descanso gera catabolismo e estagnação.';
  doc.text(doc.splitTextToSize(h5Desc, 170), 20, 60);

  doc.setFillColor(20, 25, 20);
  doc.roundedRect(20, 90, 170, 40, 3, 3, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(217, 255, 0);
  doc.text('PILARES DO TREINO ESTRATÉGICO:', 30, 103);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(255, 255, 255);
  doc.text('• Priorize boa execução técnica e amplitude.', 30, 112);
  doc.text('• Respeite 1 a 2 dias semanais de descanso completo.', 30, 120);

  // --- PAGE 11: HÁBITO #6 ---
  doc.addPage();
  setDarkBackground();

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(217, 255, 0);
  doc.text('HÁBITO #6', 20, 36);

  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.text('BEBER POUCA ÁGUA DURANTE O DIA', 20, 46);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(200, 200, 200);
  const h6Desc = 'A desidratação leve diminui o metabolismo, gera retenção hídrica, prejudica o intestino e faz o cérebro confundir sede com vontade de comer doces.';
  doc.text(doc.splitTextToSize(h6Desc, 170), 20, 60);

  doc.setFillColor(217, 255, 0);
  doc.roundedRect(20, 95, 170, 35, 4, 4, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  doc.text('CÁLCULO DE HIDRATAÇÃO DIÁRIA:', 30, 108);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text('Consuma entre 35 ml e 50 ml de água por kg de peso corporal ao dia.', 30, 118);

  // --- PAGE 12: HÁBITO #7 ---
  doc.addPage();
  setDarkBackground();

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(217, 255, 0);
  doc.text('HÁBITO #7', 20, 36);

  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.text('COMPARAR SEU CAPÍTULO 1 COM O CAPÍTULO 20 DE OUTRA PESSOA', 20, 46);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(200, 200, 200);
  const h7Desc = 'Cada mulher possui histórico metabólico, rotina, nível de estresse e genética próprios. Comparar seus bastidores com o palco alheio só gera ansiedade e abandono do processo.';
  doc.text(doc.splitTextToSize(h7Desc, 170), 20, 62);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(217, 255, 0);
  doc.text('METRIQUE SEU PRÓPRIO PROGRESSO:', 20, 95);

  const h7Points = [
    '• Fotos bimestrais nas mesmas condições de luz e horário.',
    '• Disposição ao acordar e melhora do sono.',
    '• Aumento de força nos treinos e caimento das roupas.'
  ];
  let h7Y = 107;
  h7Points.forEach(p => {
    doc.text(p, 25, h7Y);
    h7Y += 9;
  });

  // --- PAGE 13: SUA TRANSFORMAÇÃO COMEÇA AGORA ---
  doc.addPage();
  setDarkBackground();

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(255, 255, 255);
  doc.text('SUA TRANSFORMAÇÃO ', 20, 40);
  doc.setTextColor(217, 255, 0);
  doc.text('COMEÇA AGORA', 115, 40);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(200, 200, 200);
  doc.text('Quantos dos 7 hábitos você identificou na sua rotina atual?', 20, 52);

  doc.setFillColor(20, 25, 20);
  doc.roundedRect(20, 65, 170, 45, 3, 3, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(217, 255, 0);
  doc.text('• 0 a 2 hábitos:', 28, 77);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(255, 255, 255);
  doc.text('Você já está no caminho certo!', 65, 77);

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(217, 255, 0);
  doc.text('• 3 a 4 hábitos:', 28, 88);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(255, 255, 255);
  doc.text('Ajustes estratégicos vão destravar seus resultados.', 65, 88);

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(217, 255, 0);
  doc.text('• 5 ou mais hábitos:', 28, 99);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(255, 255, 255);
  doc.text('Foque em estratégia individualizada para seu corpo.', 75, 99);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(255, 255, 255);
  doc.text('COMO A CONSULTA NUTRICIONAL AJUDA:', 20, 130);

  const finalPoints = [
    '✓ Avaliar seus hábitos alimentares e estilo de vida em detalhes',
    '✓ Identificar os principais sabotadores do seu metabolismo',
    '✓ Analisar sua composição corporal e exames laboratoriais',
    '✓ Construir um plano alimentar adaptado à sua rotina real'
  ];
  let fY = 142;
  finalPoints.forEach(p => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(220, 220, 220);
    doc.text(p, 25, fY);
    fY += 8;
  });

  // Final Callout
  doc.setFillColor(217, 255, 0);
  doc.roundedRect(20, 190, 170, 30, 4, 4, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  doc.text('NUTRIÇÃO QUE TRANSFORMA. RESULTADOS QUE DURAM.', pageWidth / 2, 203, { align: 'center' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('Dra. Rosana Oliveira • Nutrição Esportiva & Performance', pageWidth / 2, 211, { align: 'center' });

  return doc;
}
