import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { figmaConfig } from './figma.config.js'; // Note the `.js` extension if using ES modules

const { token, fileKey, nodes, outputDir } = figmaConfig;

for (const [name, nodeId] of Object.entries(nodes)) {
  const apiUrl = `https://api.figma.com/v1/images/${fileKey}?ids=${encodeURIComponent(nodeId)}&format=png&scale=1`;

  fetch(apiUrl, {
    headers: { 'X-Figma-Token': token }
  })
    .then(res => res.json())
    .then(async (json) => {
      const imageUrl = json.images[nodeId];
      if (!imageUrl) throw new Error(`Image URL not found for node ${nodeId}`);

      const imageRes = await fetch(imageUrl);
      const buffer = await imageRes.buffer();

      const dir = path.resolve(outputDir, 'paystation');
      fs.mkdirSync(dir, { recursive: true });

      let filename = '';
      switch (name) {
        case 'paystationLaptop':
          filename = 'paystationLaptopFigma.png';
          break;
        case 'paystationTablet':
          filename = 'paystationTabletFigma.png';
          break;
        case 'paystationMobile':
          filename = 'paystationMobileFigma.png';
          break;
        default:
          filename = 'paystationDesktopFigma.png';
      }

      fs.writeFileSync(path.join(dir, filename), buffer);
      console.log(`✅ Saved baseline: ${filename}`);
    })
    .catch(console.error);
}
