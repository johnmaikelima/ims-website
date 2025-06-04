const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(inputPath) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  // Converter nome do arquivo para kebab-case
  const newFilename = filename.toLowerCase().replace(/ /g, '-');
  const outputPath = path.join(outputDir, `${newFilename}.webp`);
  
  try {
    await sharp(inputPath)
      .resize(800, 600) // Redimensionar para 800x600
      .webp({ quality: 80 }) // Converter para WebP com 80% de qualidade
      .toFile(outputPath);
    
    console.log(`Otimizado: ${newFilename}.webp`);
  } catch (error) {
    console.error(`Erro ao otimizar ${filename}:`, error);
  }
}

async function processImages() {
  const files = fs.readdirSync(inputDir);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      await optimizeImage(path.join(inputDir, file));
    }
  }
}

processImages();
